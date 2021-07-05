import React, { useState } from "react";
import { motion } from "framer-motion";
import Welcome from "../components/Welcome";
import Character from "../components/Character";

import useSWR from "swr";
import { graphQLClient, queryAllFactions } from "../utils/fauna_gql";
import parseClassData from "../utils/parseClassData";
// import fetch from "unfetch";
import fetch from "isomorphic-unfetch";
import { getBlizzItemData, parseBlizzItemData } from "../utils/parseBlizzData";
import BlizzContext from "../utils/blizzContext";

const fetcher = (query) => graphQLClient.request(query);
const blizzFetcher = (url) => fetch(url).then((res) => res.json());

export async function getStaticProps() {
	const classData = await fetcher(queryAllFactions);
	const blizzardID = process.env.NEXT_PUBLIC_BLIZZ_ID;
	const blizzardSecret = process.env.NEXT_PUBLIC_BLIZZ_SECRET;
	const auth = Buffer.from(`${blizzardID}:${blizzardSecret}`).toString("base64");
	const tokenResponse = await fetch("https://us.battle.net/oauth/token", {
		body: "grant_type=client_credentials",
		headers: {
			Authorization: `Basic ${auth}`,
			"Content-Type": "application/x-www-form-urlencoded",
		},
		method: "POST",
	});
	const accessBlizz = await tokenResponse.json();
	return {
		props: { classData, accessBlizz },
	};
}

async function getItemData(item, token) {
	const { data } = useSWR(`/api/blizz/${item}&${token}`, blizzFetcher);
	return await data;
}

const Home = (props) => {
	const { data, error } = useSWR(queryAllFactions, fetcher, { initialData: props.classData });
	const gameData = data ? parseClassData(data) : data;
	const noCharacters = props.appState.savedCharacters.length === 0;
	let character = {};
	if (!noCharacters) {
		character = props.appState.savedCharacters.find((char) => char.id === props.appState.character);
	}
	props = { ...props, gameData };

	const transition = {
		duration: 0.3,
		ease: "easeInOut",
	};

	const pageVariants = {
		exit: { opacity: 0, transition },
		enter: {
			opacity: 1,
			transition,
		},
		initial: {
			opacity: 0,
			transition,
		},
	};

	// const [blizzAuthState, setBlizzAuth] = useState({});
	// const accessBlizz = () => {
	// 	setBlizzAuth(() => {
	// 		const { data: blizzAuth } = useSWR("/api/blizzauth", blizzFetcher);
	// 		return blizzAuth;
	// 	});
	// };
	// console.log(blizzAuthState, accessBlizz());

	return (
		<motion.section
			key={"home"}
			className="content home"
			initial="initial"
			animate="enter"
			exit="exit"
			variants={pageVariants}
		>
			<div className="container">
				{error ? (
					<p>Error loading game data.</p>
				) : !data ? (
					<p>Loading game data...</p>
				) : noCharacters ? (
					<section className="new">
						<aside className="blurb">
							<h2>
								<small>Welcome to</small> WoW Classic Character Guide!
							</h2>
							<h3>Build Your Character</h3>
							<caption>
								<p>
									Enter your character details and you'll get a{" "}
									<strong>quick reference guide</strong> for your World of Warcraft Character.
								</p>
								<p>
									The quick reference guide includes a class guide, gear options, and zones… all
									tailored to your current level, class, and race!
								</p>
							</caption>
						</aside>
						<main className="character-new">
							<Welcome props={props} />
						</main>
					</section>
				) : (
					<section className="character">
						<aside className="blurb">
							<h2>Choose Your Character</h2>
							<p>Edit your character, or add new characters to get another personalized guide!</p>
						</aside>
						<main className="character-list">
							<Character props={props} />
						</main>
					</section>
				)}
			</div>
		</motion.section>
	);
};

export default Home;
