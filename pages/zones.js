import React from "react";

import useZoneData from "../utils/useZoneData";
import useDungeonData from "../utils/useDungeonData";
import useRaidData from "../utils/useRaidData";
import { zonesByCategory } from "../utils/filterZones";

import { ZoneListing } from "../components/ZoneListing";

const Zones = ({ appState }) => {
	const selectedCharacter = appState.savedCharacters.find(
		(character) => character.ts === appState.character
	);
	const { faction, level } = selectedCharacter;
	const { zoneData, error, isPending } = useZoneData();
	const { dungeonData } = useDungeonData();
	const { raidData } = useRaidData();
	const sortedZones = zonesByCategory(zoneData, dungeonData, raidData, level, faction);
	const categoryTitles = {
		Zone: "World Zones",
		City: "Cities",
		Dungeon: "Dungeons",
		Raid: "Raids",
		Battleground: "Battlegrounds",
	};
	return (
		<section className="content">
			<div className="container">
				<h1>Suggested zones based on your level, faction, race, and class!</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget rutrum elit,
					vitae vulputate neque. Nullam maximus, sapien et elementum faucibus, enim sem tempus
					felis, et aliquam metus libero sed sapien.
				</p>

				<div className="zones-container">
					{error ? (
						<p>Error loading zone data. See console. {console.log(error)}</p>
					) : isPending ? (
						<p>Loading zone data...</p>
					) : (
						Object.keys(sortedZones).map((categoryName, index) => {
							const zones = sortedZones[categoryName];
							const title = categoryTitles[categoryName];
							const zoneProps = { title, zones, level, key: index };
							return <ZoneListing {...zoneProps} />;
						})
					)}
				</div>
			</div>
		</section>
	);
};

export default Zones;
