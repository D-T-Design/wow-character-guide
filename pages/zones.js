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
						Object.keys(zonesByCategory(zoneData, dungeonData, raidData, level, faction)).map(
							(categoryName, index) => {
								const zones = zonesByCategory(zoneData, dungeonData, raidData, level, faction)[
									categoryName
								];
								const title =
									categoryName === "Zone"
										? "World Zones"
										: categoryName === "City"
										? "Cities"
										: categoryName === "Dungeon"
										? "Dungeons"
										: categoryName === "Raid"
										? "Raids"
										: "Battlegrounds";
								return <ZoneListing title={title} zones={zones} level={level} key={index} />;
							}
						)
					)}
				</div>
			</div>
		</section>
	);
};

export default Zones;
