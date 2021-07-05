import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Image, Transformation, Placeholder } from "cloudinary-react";
import ToggleItemStats from "./ToggleItemStats";
const itemURLTBC = "https://tbc.wowhead.com/item=";

export const ItemDisplay = ({ item, index, faction }) => {
	const { id, quality, name, drop, phase, imgURL } = item;
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

	const [itemStatsOpen, setItemStatsOpen] = useState(false);
	const toggleItemStats = () => {
		setItemStatsOpen(!itemStatsOpen);
	};
	const [savedStats, setSavedStats] = useState({});
	const updateSavedStats = (blizzStats) => setSavedStats({ ...blizzStats, saved: true });
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
				<button
					className="item-link"
					onClick={() => toggleItemStats()}
					data-wowhead={`item=${id}`}
					title={`${itemStatsOpen ? "Close" : "Open"} Item Details`}
				>
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
						{phase && (
							<Image
								public-id={`/wow-character-guide/phase${phase}-vector.svg`}
								cloudName="david-torres-design"
								version="1623049444"
								width="57"
								height="19"
								class="icon-phase"
								loading="lazy"
								secure="true"
								alt={`Phase ${phase}`}
							/>
						)}
						<small style={{ marginLeft: "auto" }}>
							<motion.img
								className="icon-arrow"
								src="/static/img/arrowdown.svg"
								alt={itemStatsOpen ? "Open" : "Close"}
								initial={{
									transform: `rotate(${itemStatsOpen ? 0 : 180}deg) scaleX(${
										itemStatsOpen ? "-1" : 1
									})`,
								}}
								animate={{
									transform: `rotate(${itemStatsOpen ? 180 : 0}deg) scaleX(${
										itemStatsOpen ? "-1" : 1
									})`,
								}}
							/>
						</small>
						<AnimatePresence exitBeforeEnter>
							{itemStatsOpen && (
								<motion.section
									initial={{ height: 0, opacity: 0 }}
									animate={{ height: "auto", opacity: 1 }}
									exit={{ height: 0, opacity: 0 }}
									transition={{ duration: 0.2 }}
									className="equip-toggle"
								>
									<ToggleItemStats
										id={id}
										drop={drop}
										itemFaction={itemFaction}
										faction={faction}
										savedStats={savedStats}
										updateSavedStats={updateSavedStats}
									/>
									<a
										href={`${itemURLTBC}${id}`}
										className="equip-link"
										title="See more details on Wowhead"
									>
										View on Wowhead{" "}
										<Image
											public-id={`/wow-character-guide/wowhead`}
											cloudName="david-torres-design"
											version="1623049444"
											width="30"
											height="25"
											class="wowhead"
											loading="lazy"
											secure="true"
											alt="See more details on Wowhead"
										/>
									</a>
								</motion.section>
							)}
						</AnimatePresence>
					</div>
				</button>
			</motion.li>
		</AnimatePresence>
	);
};
