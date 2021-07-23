import React from "react";
import { AnimatePresence } from "framer-motion";

import { Zone, MotionZone } from "./Zone";

export const ZoneListing = ({ title, zones, level }) => {
	const containsZones = zones ? zones.length > 0 : false;
	let raids = [];
	if (containsZones && title === "Raids") {
		raids = zones.sort((a, b) => a.phase - b.phase);
	}
	if (containsZones && (zones.length === 0 || (title === "Raids" && level < 60)))
		return (
			<div className={`${title.toLowerCase().replace(/\s/g, "")}`}>
				<h3>{title}</h3>
				<small>No {title} found for your level.</small>
			</div>
		);
	return (
		<div className={`${title.toLowerCase().replace(/\s/g, "")}`}>
			{containsZones && (zones.length === 0 || (title === "Raids" && level < 60)) ? (
				<div className={`${title.toLowerCase().replace(/\s/g, "")}`}>
					<h3>{title}</h3>
					<small>No {title} found for your level.</small>
				</div>
			) : (
				<div className="zones-list">
					<h3>{title}</h3>
					<AnimatePresence>
						{title === "Raids" && containsZones
							? raids.map((raid, index) => <Zone zone={raid} key={index} />)
							: zones.map((zone, index) => <Zone zone={zone} key={index} />)}
					</AnimatePresence>
				</div>
			)}
		</div>
	);
};
