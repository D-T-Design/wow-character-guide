import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Image, Transformation, Placeholder } from "cloudinary-react";
const itemURLTBC = "https://tbc.wowhead.com/item=";
const factionURL = "/static/img/faction/";

export const ItemDisplay = ({ item, index, faction }) => {
	const { id, quality, name, drop, iLvl, slot, phase, imgURL } = item;
	const itemFaction = item.faction;
	const itemMotionVariants = {
		hidden: { y: "20%", opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: { delay: (index + 1) * 0.06 },
		},
		transition: { duration: 0.3, ease: "easeInOut" },
	};
	return (
		<AnimatePresence exitBeforeEnter>
			<motion.li
				key={id}
				id={id}
				className={`item item-${id}`}
				variants={itemMotionVariants}
				initial="hidden"
				animate="visible"
				exit="hidden"
				transition="transition"
			>
				<a href={`${itemURLTBC}${id}`} target="_blank" rel="noreferrer" className="item-link">
					<Image
						public-id={`/wow-character-guide/itemthumbs/${imgURL}`}
						cloudName="david-torres-design"
						version="1623049444"
						width="36"
						height="36"
						class="icon"
						loading="lazy"
						secure="true"
						alt={name}
					>
						<Transformation quality="auto" fetchFormat="auto" />
						<Placeholder />
					</Image>

					<div className="item-details">
						<h3 className={quality.toLowerCase()}>{name}</h3>

						<small className="iLvl">
							<em>iLvl {iLvl}</em>
						</small>

						<small>{slot}</small>

						{phase && (
							<Image
								public-id={`/wow-character-guide/phase${phase}`}
								cloudName="david-torres-design"
								version="1623049444"
								width="74"
								height="25"
								class="icon-phase"
								loading="lazy"
								secure="true"
								alt={`Phase ${phase}`}
							>
								<Transformation quality="auto" fetchFormat="auto" />
								<Placeholder />
							</Image>
						)}

						{drop && (
							<h4>
								Dropped by:
								<br />
								{drop}
							</h4>
						)}

						{itemFaction && (
							<img
								className="faction-icon"
								src={`${factionURL}${faction.toLowerCase()}.png`}
								alt={faction}
								title={faction}
							/>
						)}
					</div>
				</a>
			</motion.li>
		</AnimatePresence>
	);
};
