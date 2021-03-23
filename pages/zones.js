import React, { useState } from "react";
import useZoneData from "../utils/useZoneData";
import useDungeonData from "../utils/useDungeonData";
import useRaidData from "../utils/useRaidData";

const zoneURL = "https://classic.wowhead.com/zone=";
const factionURL = "/static/img/faction/";
const zoneURLString = "/static/img/zone/";

const Zones = ({ appState }) => {
	const { faction, level } = appState;
	const { zoneData, error, isPending } = useZoneData();
	const { dungeonData, dungeonError, dungeonIsPending } = useDungeonData();
	const { raidData, raidError, raidIsPending } = useRaidData();
	if (error)
		return (
			<section className="content">
				<div className="container">
					<h2>Leveling Zones</h2>
					<p>Error loading zone data. See console. {console.log(error)}</p>
				</div>
			</section>
		);
	if (isPending)
		return (
			<section className="content">
				<div className="container">
					<h2>Leveling Zones</h2>
					<p>Loading zone data...</p>
				</div>
			</section>
		);

	const filteredZoneData = (zoneData) => {
		return zoneData.filter((zone) => {
			const oppositeFaction = appState.faction === "Horde" ? "Alliance" : "Horde";
			const { range, faction } = zone;
			if (range[0] > level) return false;
			if (range[1] < level) return false;
			if (faction === oppositeFaction) return false;
			return true;
		});
	};

	const filteredDungeonData = (dungeonData) => {
		return dungeonData.filter((dungeon) => {
			const range = dungeon.level;
			if (range[0] > level) return false;
			if (range[1] < level) return false;
			return true;
		});
	};

	const zonesByCategory = () => {
		const zones = filteredZoneData(zoneData);
		const dungeons = filteredDungeonData(dungeonData);
		const raids = filteredDungeonData(raidData);
		const zonesByCategory = {
			Zone: [],
			Dungeon: [],
			Raid: [],
			City: [],
			Battleground: [],
		};
		zones.map((zone) => {
			const { type } = zone;
			zonesByCategory[type].push(zone);
		});
		dungeons.map((dungeon) => {
			zonesByCategory["Dungeon"].push(dungeon);
		});
		raids.map((raid) => {
			zonesByCategory["Raid"].push(raid);
		});
		return zonesByCategory;
	};

	const ZoneListing = ({ title, zones }) => {
		const [open, setOpen] = useState(false);
		const containsZones = zones.length > 0;
		const numZones = zones.length;
		const toggleOpen = () => {
			setOpen(!open);
		};
		if (title === "Raids" && level < 60) return null;
		if (zones.length === 0)
			return (
				<div>
					<h3>{title}</h3>
					<small>No {title} found for your level.</small>
				</div>
			);
		return (
			<div>
				<h3 onClick={toggleOpen} style={{ cursor: "pointer" }}>
					{title}
					<span>{open ? "X" : "+"}</span>
				</h3>
				<div
					className={`${open ? "open" : "closed"} zones-list`}
					style={
						open && containsZones
							? { height: `calc(102px * ${numZones} + 20px)` }
							: open && !containsZones
							? { height: `56px` }
							: { height: "0" }
					}
				>
					{zones.map((zone, index) => {
						const { name, id, type, faction } = zone;
						const zoneLevel = zone.level || zone.range;
						return (
							<div className="quests-zone" key={index}>
								<a href={`${zoneURL}${id}`} target="_blank" rel="noopener noreferrer">
									<h3>{name}</h3>
									<div className="quests-range">
										<small>
											<em>{`(Lvl: ${zoneLevel[0]}${
												zoneLevel.length > 1 ? `-${zoneLevel[1]}` : ""
											})`}</em>
										</small>
										{zone.tier && <small>Tier: {zone.tier}</small>}
									</div>
									<div className="icons">
										{/* Display zone icons for faction specific, cities, and instances  */}
										{type !== "Zone" ? (
											<div className="faction-icon" data-faction={type}>
												<img src={`${zoneURLString}${type}.png`} alt={type} />
											</div>
										) : type === "City" && faction === faction ? (
											<div className="faction-icon" data-faction={name}>
												<img src={`${zoneURLString}${name.toLowerCase()}.png`} alt={type} />
											</div>
										) : null}
										{faction !== "Contested" &&
											(faction !== "PvP" ? (
												<div className="faction-icon" data-faction={faction}>
													<img src={`${factionURL}${faction.toLowerCase()}.png`} alt={faction} />
												</div>
											) : null)}
									</div>
								</a>
							</div>
						);
					})}
				</div>
			</div>
		);
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
					{Object.keys(zonesByCategory()).map((categoryName) => {
						const zones = zonesByCategory()[categoryName];
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
						return <ZoneListing title={title} zones={zones} />;
					})}
				</div>
			</div>
		</section>
	);
};

export default Zones;
