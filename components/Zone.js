import React from "react";
import { Image, Placeholder } from "cloudinary-react";
import { motion } from "framer-motion";

export const Zone = React.forwardRef((props, ref) => {
	const { name, id, type, faction, img } = props.zone;
	const zoneLevel = props.zone.level || props.zone.range;
	const zoneURL = "https://tbc.wowhead.com/zone=";
	const factionURL = "/static/img/faction/";
	const zoneURLString = "/static/img/zone/";
	return (
		<motion.div
			className="quests-zone"
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
			ref={ref}
		>
			<a href={`${zoneURL}${id}`} target="_blank" rel="noopener noreferrer">
				{/* If database includes Zone Image URL, generate image from Cloudinary */}
				{img && (
					<div className="zone-bg">
						<Image
							public-id={`/wow-character-guide/${img.toLowerCase()}`}
							cloudName="david-torres-design"
							version="1618808611"
							alt={name}
							title={name}
							loading="lazy"
							dpr="auto"
							responsive
							width="auto"
							crop="fill"
							aspectRatio="16:9"
							responsiveUseBreakpoints="true"
							secure="true"
						>
							<Placeholder type="predominant" />
						</Image>
					</div>
				)}

				<h3 className="zone-name">{name}</h3>

				<div className="quests-range">
					<small>
						<em>{`(Lvl: ${zoneLevel[0]}${zoneLevel.length > 1 ? `-${zoneLevel[1]}` : ""})`}</em>
					</small>
					{props.zone.tier && <small>Tier: {props.zone.tier}</small>}
				</div>

				<div className="icons">
					{/* Display zone icons for faction specific, cities, and instances  */}
					{type !== "Zone" && (
						<div className="zone-icon" data-faction={type}>
							<img src={`${zoneURLString}${type}.png`} alt={type} title={type} />
						</div>
					)}
					{faction !== "Contested" && faction !== "PvP" && faction !== "Sanctuary" && (
						<div className="faction-icon" data-faction={faction}>
							<img
								src={`${factionURL}${faction.toLowerCase()}.png`}
								alt={faction}
								title={faction}
							/>
						</div>
					)}
				</div>
			</a>
		</motion.div>
	);
});
export const MotionZone = motion(Zone, { forwardMotionProps: true });
