import React, { useState } from "react";

import Zone from "./Zone";
import zoneImgPath from "../utils/zoneImgPath";

export const ZoneListing = ({ title, zones, level }) => {
	const [open, setOpen] = useState(false);
	const containsZones = zones.length > 0;
	const toggleOpen = () => {
		setOpen(!open);
	};
	let raids = [];
	if (containsZones) {
		raids = zones.sort((a, b) => a.phase - b.phase);
	}
	if (zones.length === 0 || (title === "Raids" && level < 60))
		return (
			<div>
				<h3>{title}</h3>
				<small>No {title} found for your level.</small>
			</div>
		);
	return (
		<div className={`${title.toLowerCase().replace(/\s/g, "")}`} onClick={toggleOpen}>
			<img
				src={`/static/img/zone/${zoneImgPath(title)}.png`}
				alt={zoneImgPath(title)}
				title={zoneImgPath(title)}
			/>
			<h3>{title}</h3>
			<img
				src="/static/img/plus.svg"
				style={open ? { transform: "rotate(45deg)" } : { transform: "rotate(0deg)" }}
			/>
			{/* {open ? <img src="/static/img/exit.svg" /> : <img src="/static/img/plus.svg" />} */}
			<div
				className={`${open ? "open" : "closed"} zones-list`}
				style={
					open
						? { height: `${92 * (title === "Raids" ? raids.length : zones.length) + 10}px` }
						: { height: 0 }
				}
			>
				{title === "Raids"
					? raids.map((raid, index) => <Zone zone={raid} key={index} />)
					: zones.map((zone, index) => <Zone zone={zone} key={index} />)}
			</div>
		</div>
	);
};
