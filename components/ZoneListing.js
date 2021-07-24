import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Zone, MotionZone } from "./Zone";

import zoneImgPath from "../utils/zoneImgPath";

export const ZoneListing = ({
	title,
	zones,
	level,
	zoneTypes,
	sortedZones,
	currentZoneType,
	updateZoneType,
}) => {
	console.log(zoneTypes, sortedZones, currentZoneType, updateZoneType);
	const containsZones = zones ? zones.length > 0 : false;
	let raids = [];
	const [zoneChangeOpen, toggleZoneChange] = useState(false);

	if (containsZones && title === "Raids") {
		raids = zones.sort((a, b) => a.phase - b.phase);
	}

	return (
		<div className={`${title.toLowerCase().replace(/\s/g, "")}`}>
			{containsZones && (zones.length === 0 || (title === "Raids" && level < 60)) ? (
				<div className={`${title.toLowerCase().replace(/\s/g, "")}`}>
					<h3>{title}</h3>
					<small>No {title} found for your level.</small>
				</div>
			) : (
				<div className="zones-list" id="zones-list">
					<button
						onClick={() => toggleZoneChange(!zoneChangeOpen)}
						title={zoneChangeOpen ? "Close Zone Change Menu" : "Change Zone Type"}
					>
						<h3>
							<img
								src={`/static/img/zone/${zoneImgPath(title)}.png`}
								alt={zoneImgPath(title)}
								title={zoneImgPath(title)}
							/>
							{title}
							<motion.img
								src="/static/img/plus.svg"
								className="toggle closed"
								alt="Open Zone Change Menu"
								initial={false}
								animate={zoneChangeOpen ? { rotate: 45 } : { rotate: 0 }}
							/>
						</h3>
						{zoneChangeOpen && (
							<div className="zones-container">
								<ul>
									{Object.keys(sortedZones).map((zoneType, index) => {
										const title = zoneTypes[zoneType];
										return currentZoneType !== zoneType ? (
											<li
												className={`${title.toLowerCase().replace(/\s/g, "")}`}
												onClick={() => updateZoneType(zoneType)}
												key={index}
											>
												<img
													src={`/static/img/zone/${zoneImgPath(title)}.png`}
													alt={zoneImgPath(title)}
													title={zoneImgPath(title)}
												/>
												<h3>{title}</h3>
												<img src="/static/img/swap.svg" />
											</li>
										) : null;
									})}
								</ul>
							</div>
						)}
					</button>
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
