import React, { useState } from "react";
import useClassData from "../utils/useClassData";

import PlayerCard from "../components/PlayerCard";
import EditCharacter from "../components/EditCharacter";
import Footer from "../components/Footer";

import "../styles/globals.scss";
const logoURL = "/static/img/wow-min-max_logo.png";

const MyApp = ({ Component, pageProps }) => {
	const { classData, error, isPending } = useClassData();
	let classGear = {};
	const [appState, setState] = useState({
		faction: "",
		level: 1,
		name: "",
		playerClass: "",
		race: "",
		gear: {},
	});
	const updateLevel = (e) => {
		const newLevel = e.target.value;
		const level = newLevel === "" ? "" : newLevel < 1 ? 1 : newLevel > 60 ? 60 : newLevel;
		setState({ ...appState, level });
	};
	const updateName = (e) => {
		setState({ ...appState, name: e.target.value });
	};
	const updateFaction = (faction) => {
		setState({ ...appState, faction, race: "", playerClass: "" });
	};
	const updateRace = (race) => {
		setState({ ...appState, race, playerClass: "" });
	};
	const updateClass = (playerClass) => {
		setState({ ...appState, playerClass });
	};

	const updateState = { updateLevel, updateName, updateFaction, updateRace, updateClass };

	pageProps = {
		...pageProps,
		updateState,
		appState,
		classData,
		classGear,
	};
	return (
		<div>
			<div className="container nav">
				<h1>
					<img className="logo" src={logoURL} alt="World of Warcraft Classic - Min/Max" />
				</h1>
				<PlayerCard
					level={appState.level}
					faction={appState.faction}
					race={appState.race}
					classPicked={appState.playerClass}
				/>
				<aside className="site-info">
					<h2>We do the searching for you!</h2>
					<p>
						The goal of this website is to make it easy for World of Warcraft players to find out
						what to do <em>right now</em>. That means, at any given time or level, you can enter
						your basic level and class info, and you'll get back recommended zones, quests, items,
						and guides tailored to you!
					</p>
				</aside>
			</div>
			<EditCharacter {...pageProps} />
			<Component {...pageProps} />
			<Footer />
		</div>
	);
};

export default MyApp;
