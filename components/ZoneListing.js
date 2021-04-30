import React, { useState } from "react";

import Zone from "./Zone";
import zoneImgPath from "../utils/zoneImgPath";

export const ZoneListing = ({ title, zones, level }) => {
	const containsZones = zones ? zones.length > 0 : false;
	let raids = [];
	if (containsZones && title === "Raids") {
		raids = zones.sort((a, b) => a.phase - b.phase);
	}
	console.log(title, zones, level);
	if (containsZones && (zones.length === 0 || (title === "Raids" && level < 60)))
		return (
			<div className={`${title.toLowerCase().replace(/\s/g, "")}`}>
				<h3>{title}</h3>
				<small>No {title} found for your level.</small>
			</div>
		);
	return (
		<div className={`${title.toLowerCase().replace(/\s/g, "")}`}>
			<div className="zones-list">
				<h3>
					{title}
					<small>
						<em>{`Found ${containsZones ? `${zones.length} zones` : "0 zones"}`}</em>
						{`Level `}
						<strong>{level}</strong>
					</small>
				</h3>
				{title === "Raids" && containsZones
					? raids.map((raid, index) => <Zone zone={raid} key={index} />)
					: zones.map((zone, index) => <Zone zone={zone} key={index} />)}
			</div>
		</div>
	);
};
