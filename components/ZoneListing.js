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
						<div className={`zones-mask ${zoneChangeOpen ? "open" : "closed"}`}>
							<AnimatePresence>
								{zoneChangeOpen && (
									<motion.div
										className="zones-dropdown"
										initial={{ y: "-2rem", opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										exit={{ y: "-5rem", opacity: 0 }}
										transition={{ duration: 0.3 }}
									>
										<ul>
											{Object.keys(sortedZones).map((zoneType, index) => {
												const title = zoneTypes[zoneType];
												return currentZoneType !== zoneType ? (
													<li
														className={`${title.toLowerCase().replace(/\s/g, "")}`}
														onClick={() => updateZoneType(zoneType)}
														key={index}
														title={`View ${title}`}
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
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					</button>
					<div className="zones-container">
						<AnimatePresence exitBeforeEnter>
							{title === "Raids" && containsZones
								? raids.map((raid, index) => (
										<MotionZone zone={raid} index={index} key={raid.name} />
								  ))
								: zones.map((zone, index) => (
										<MotionZone zone={zone} index={index} key={zone.name} />
								  ))}
						</AnimatePresence>
					</div>
				</div>
			)}
		</div>
	);
};
