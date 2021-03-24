import React, { useState } from "react";

const zoneURL = "https://classic.wowhead.com/zone=";
const factionURL = "/static/img/faction/";
const zoneURLString = "/static/img/zone/";

export const ZoneListing = ({ title, zones, level }) => {
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
									{faction !== "Contested" && faction !== "PvP" && (
										<div className="faction-icon" data-faction={faction}>
											<img src={`${factionURL}${faction.toLowerCase()}.png`} alt={faction} />
										</div>
									)}
								</div>
							</a>
						</div>
					);
				})}
			</div>
		</div>
	);
};
