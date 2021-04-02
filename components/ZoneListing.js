import React, { useState } from "react";

import Zone from "./Zone";
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
						? { height: `calc(86px * ${numZones} + 20px)` }
						: open && !containsZones
						? { height: `56px` }
						: { height: "0" }
				}
			>
				{zones.map((zone, index) => (
					<Zone zone={zone} key={index} />
				))}
			</div>
		</div>
	);
};
