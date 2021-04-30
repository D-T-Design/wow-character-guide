import React, { useState } from "react";

import useZoneData from "../utils/useZoneData";
import useDungeonData from "../utils/useDungeonData";
import useRaidData from "../utils/useRaidData";
import { zonesByCategory } from "../utils/filterZones";
import zoneImgPath from "../utils/zoneImgPath";

import { ZoneListing } from "../components/ZoneListing";
import { isObjectType } from "graphql";

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
	const header = () => (
		<div className="header">
			<h2>Suggested Zones</h2>
			<p>
				Here are the zones in the game that match your character, choose which type of zones you
				want to see! Clicking on a zone will take you to Wowhead for more info.
			</p>
		</div>
	);
	if (error) {
		return (
			<section className="content zones">
				<div className="container">
					{header()}
					<div className="zones-container">
						<p>Error loading zone data. Please refresh the page.</p>
					</div>
				</div>
			</section>
		);
	} else if (isPending) {
		return (
			<section className="content zones">
				<div className="container">
					{header()}
					<div className="zones-container">
						<p>Loading zone data...</p>
					</div>
				</div>
			</section>
		);
	} else {
		const zoneProps = {
			title: zoneTypes[currentZoneType],
			zones: sortedZones[currentZoneType],
			level,
		};
		return (
			<section className="content zones">
				<div className="container">
					{header()}
					<aside>
						<div className="zones-container">
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
						</div>
					</aside>
					<section className={`${currentZoneType}`}>
						<ZoneListing {...zoneProps} />
					</section>
				</div>
			</section>
		);
	}
};

export default Zones;

// const WorldZones = () => {
// 	const zones = sortedZones["Zone"];
// 	const title = "World Zones";
// 	const zoneProps = { title, zones, level };
// 	return (
// 		<div className="zone-type">
// 			<ZoneListing {...zoneProps} />
// 		</div>
// 	);
// };
// const DungeonRaids = () => {
// 	const dungeonZones = sortedZones["Dungeon"];
// 	const dungeonTitle = "Dungeons";
// 	const dungeonProps = { title: dungeonTitle, zones: dungeonZones, level };
// 	const raidZones = sortedZones["Raid"];
// 	const raidTitle = "Raids";
// 	const raidProps = { title: raidTitle, zones: raidZones, level };
// 	return (
// 		<div className="zone-type">
// 			<ZoneListing {...dungeonProps} />
// 			<ZoneListing {...raidProps} />
// 		</div>
// 	);
// };
// const BGsCities = () => {
// 	const bgZones = sortedZones["Battleground"];
// 	const bgTitle = "Battlegrounds";
// 	const bgProps = { title: bgTitle, zones: bgZones, level };
// 	const cityZones = sortedZones["City"];
// 	const cityTitle = "Cities";
// 	const cityProps = { title: cityTitle, zones: cityZones, level };
// 	return (
// 		<div className="zone-type">
// 			<ZoneListing {...bgProps} />
// 			<ZoneListing {...cityProps} />
// 		</div>
// 	);
// };
