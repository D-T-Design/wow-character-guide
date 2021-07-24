import React, { useState } from "react";
import { motion } from "framer-motion";

import { graphQLClient, queryAllZones, queryAllDungeons, queryAllRaids } from "../utils/fauna_gql";

import { zonesByCategory } from "../utils/filterZones";
import parseZoneData from "../utils/parseZoneData";
import parseDungeonData from "../utils/parseDungeonData";
import parseRaidData from "../utils/parseRaidData";

import { ZoneListing } from "../components/ZoneListing";

const fetcher = (query) => graphQLClient.request(query);

export async function getStaticProps() {
	const { getAllZones: zoneData } = await fetcher(queryAllZones);
	const { getAllDungeons: dungeonData } = await fetcher(queryAllDungeons);
	const { getAllRaids: raidData } = await fetcher(queryAllRaids);
	return {
		props: { zoneData: zoneData.data, dungeonData: dungeonData.data, raidData: raidData.data },
	};
}

const Zones = (props) => {
	const { appState } = props;
	const selectedCharacter = appState.savedCharacters.find(
		(character) => character.id === appState.character
	);
	const { faction, level } = selectedCharacter ? selectedCharacter : { faction: "Horde", level: 1 };
	const { zoneData, dungeonData, raidData } = props;
	const sortedZones = zonesByCategory(
		parseZoneData(zoneData),
		parseDungeonData(dungeonData),
		parseRaidData(raidData),
		level,
		faction
	);
	const [currentZoneType, changeZoneType] = useState("Zone");
	const updateZoneType = (type) => {
		changeZoneType(type);
	};
	const zoneTypes = {
		Zone: "World Zones",
		Dungeon: "Dungeons",
		Raid: "Raids",
		Battleground: "Battlegrounds",
		City: "Cities",
	};
	const zoneProps = {
		title: zoneTypes[currentZoneType],
		zones: sortedZones[currentZoneType],
		level,
		zoneTypes,
		sortedZones,
		currentZoneType,
		updateZoneType,
	};

	/* Motion Variants */
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

	return (
		<motion.section
			className="content zones"
			initial="initial"
			animate="enter"
			exit="exit"
			variants={pageVariants}
		>
			<div className="container">
				<div className="header">
					<h2>Suggested Zones</h2>
					<p>
						Here are the zones in the game that match your character, choose which type of zones you
						want to see! Clicking on a zone will take you to Wowhead for more info.
					</p>
				</div>

				<section className={`${currentZoneType}`}>
					<ZoneListing {...zoneProps} />
				</section>
			</div>
		</motion.section>
	);
};

export default Zones;
