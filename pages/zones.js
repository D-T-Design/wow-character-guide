import React, { useState } from "react";
import { motion } from "framer-motion";

import useZoneData from "../utils/useZoneData";
import useDungeonData from "../utils/useDungeonData";
import useRaidData from "../utils/useRaidData";
import { zonesByCategory } from "../utils/filterZones";
import zoneImgPath from "../utils/zoneImgPath";

import { ZoneListing } from "../components/ZoneListing";

const Zones = ({ appState }) => {
	const [currentZoneType, changeZoneType] = useState("Zone");
	const updateZoneType = (type) => {
		changeZoneType(type);
	};
	const selectedCharacter = appState.savedCharacters.find(
		(character) => character.id === appState.character
	);
	const { faction, level } = selectedCharacter ? selectedCharacter : { faction: "Horde", level: 1 };
	const { zoneData, error, isPending } = useZoneData();
	const { dungeonData } = useDungeonData();
	const { raidData } = useRaidData();
	const sortedZones = zonesByCategory(zoneData, dungeonData, raidData, level, faction);
	const zoneTypes = {
		Zone: "World Zones",
		Dungeon: "Dungeons",
		Raid: "Raids",
		Battleground: "Battlegrounds",
		City: "Cities",
	};
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
	const zoneProps = {
		title: zoneTypes[currentZoneType],
		zones: sortedZones[currentZoneType],
		level,
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
				<aside>
					<div className="zones-container">
						{error && <p>Error loading zone data. Please refresh the page.</p>}
						{isPending && <p>Loading zone data...</p>}
						{!error && !isPending && (
							<ul>
								{Object.keys(sortedZones).map((zoneType, index) => {
									const title = zoneTypes[zoneType];
									return (
										<li
											className={`${title.toLowerCase().replace(/\s/g, "")}${
												currentZoneType === zoneType ? " active" : ""
											}`}
											onClick={() => updateZoneType(zoneType)}
											key={index}
										>
											<img
												src={`/static/img/zone/${zoneImgPath(title)}.png`}
												alt={zoneImgPath(title)}
												title={zoneImgPath(title)}
											/>
											<h3>{title}</h3>
											<img
												src="/static/img/plus.svg"
												style={
													currentZoneType === zoneType
														? { transform: "rotate(45deg)" }
														: { transform: "rotate(0deg)" }
												}
											/>
										</li>
									);
								})}
							</ul>
						)}
					</div>
				</aside>
				{!error && !isPending && (
					<section className={`${currentZoneType}`}>
						<ZoneListing {...zoneProps} />
					</section>
				)}
			</div>
		</motion.section>
	);
};

export default Zones;
