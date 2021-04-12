import React from "react";
import Welcome from "../components/Welcome";
import Character from "../components/Character";

import { oldItems, newItems, ids, fullIDs } from "../utils/wowhead_idmatching";

import { newIDs, originalIDs } from "../utils/wowhead_weapons-shaman_tbc-heal_add.js";
import * as fullOriginalItems from "../utils/wowhead_weapons-shaman_tbc-heal.json";
import * as fullNewItems from "../utils/wowhead_weapons-shaman_tbc-heal_add.json";

const Home = (props) => {
	const noCharacters = props.appState.savedCharacters.length === 0;
	const findMatches = (oldIDs, newIDs) => {
		const matchingIDs = oldIDs.filter((id) => newIDs.find((newID) => id === newID));
		const nonMatchingIDs = newIDs.filter((id) => !matchingIDs.find((oldID) => id === oldID));
		console.log(nonMatchingIDs);
		const matchingItems = matchingIDs.map((id) => {
			const originalItem = oldItems.find((item) => item.id === id);
			const newItem = newItems.find((item) => item.id === id);
			id === 11787 && console.log(originalItem, newItem);
			return { originalItem, newItem };
		});
		const newItemlist = nonMatchingIDs.map((id) => {
			const newItem = newItems.find((item) => item.id === id);
			return newItem;
		});
		return { matchingItems, newItemlist };
	};

	const filteredIDs = (oldIDs, newItems) => newItems.filter((i) => !oldIDs.includes(i));
	const filteredItems = (matchedIDs) => {
		return fullNewItems.default.filter((item) => matchedIDs.includes(item.id));
	};
	return (
		<section className="content">
			<div className="container">
				{noCharacters ? (
					<>
						<aside className="blurb">
							<h2>Welcome to WoW Classic Character Guide!</h2>
							<h2>Build Your Character</h2>
							<p>
								Enter your character details and you'll get a quick reference guide for your World
								of Warcraft Character.
							</p>
							<p>
								The quick reference guide includes a class guide, gear options, and zones… all
								tailored to your current level, class, and race!
							</p>
						</aside>
						<Welcome props={props} />
					</>
				) : (
					<>
						<aside className="blurb">
							<h2>Your Saved Characters</h2>
							<p>Select, edit, and delete characters from here!</p>
						</aside>
						<Character props={props} />
					</>
				)}
			</div>
		</section>
	);
};

export default Home;
