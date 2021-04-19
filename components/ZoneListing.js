import React, { useState } from "react";

import Zone from "./Zone";

export const ZoneListing = ({ title, zones, level }) => {
	const [open, setOpen] = useState(false);
	const containsZones = zones.length > 0;
	const numZones = zones.length;
	const toggleOpen = () => {
		setOpen(!open);
	};
	let raids = [];
	if (containsZones) {
		title === "Raids" && console.log(zones);
		raids = zones.sort((a, b) => a.phase - b.phase);
	}
	if (title === "Raids" && level < 60) return null;
	if (zones.length === 0)
		return (
			<div>
				<h3>{title}</h3>
				<small>No {title} found for your level.</small>
			</div>
		);
	return (
		<div className={title.toLowerCase().replace(/\s/g, "")}>
			<h3 onClick={toggleOpen} style={{ cursor: "pointer" }}>
				{title}
				<span>{open ? "X" : "+"}</span>
			</h3>
			<div className={`${open ? "open" : "closed"} zones-list`}>
				{title === "Raids"
					? raids.map((raid, index) => <Zone zone={raid} key={index} />)
					: zones.map((zone, index) => <Zone zone={zone} key={index} />)}
			</div>
		</div>
	);
};
