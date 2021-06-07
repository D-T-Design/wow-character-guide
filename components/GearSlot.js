import React, { useState } from "react";

const itemURLTBC = "https://tbc.wowhead.com/item=";
const gearURL = "/static/img/gear/";
const factionURL = "/static/img/faction/";
import { weaponToFullName } from "../utils/weaponToFullName";
const itemImgURL =
	"https://res.cloudinary.com/david-torres-design/image/upload/v1623049444/wow-character-guide/itemthumbs/";

export const GearSlot = ({ name, items, faction, phase, type }) => {
	const [open, setOpen] = useState(false);
	const containsItems = items.length > 0;
	const toggleOpen = () => {
		setOpen(!open);
	};
	const phaseLvl = phase;
	const itemList = containsItems && items.filter((item) => item.phase <= phaseLvl);
	const numItems = itemList.length;
	return (
		<article>
			<figure onClick={toggleOpen} style={{ cursor: "pointer" }}>
				<img
					src={`${gearURL}${name.toLowerCase().replace(/\s/g, "").replace(/-/, "")}.png`}
					className="gear-icon"
				/>
				<figcaption>
					<h3 className="gear-type">
						{type === "Weapons" ? weaponToFullName(name) : name}
						<span>
							{open ? <img src="/static/img/exit.svg" /> : <img src="/static/img/plus.svg" />}
						</span>
					</h3>
					<small>
						<em>{containsItems ? `${numItems} items found.` : `0 items found.`}</em>
					</small>
				</figcaption>
			</figure>
			<ul
				className={open ? "open" : "closed"}
				style={
					open && containsItems
						? { height: "auto" }
						: open && !containsItems
						? { height: "auto" }
						: { height: "0" }
				}
			>
				{containsItems ? (
					itemList.map((item, index) => {
						const { id, quality, name, drop, iLvl, slot, phase, imgURL } = item;
						const itemFaction = item.faction;
						const itemProhibited = itemFaction && itemFaction.name !== faction;
						const phaseRestricted = phase > phaseLvl;
						return !itemProhibited && !phaseRestricted ? (
							<li key={index}>
								<a href={`${itemURLTBC}${id}`} target="_blank" rel="noreferrer">
									{imgURL && <img src={`${itemImgURL}${imgURL}.jpg`} className="icon" alt={name} />}
									<div className="item-details">
										<h3 className={quality.toLowerCase()}>{name}</h3>
										<small className="iLvl">
											<em>iLvl {iLvl}</em>
										</small>
										<small>{slot}</small>
										{drop ? <h4>Source: {drop}</h4> : null}
										{itemFaction ? (
											<img
												className="faction-icon"
												src={`${factionURL}${faction.toLowerCase()}.png`}
												alt={faction}
												title={faction}
											/>
										) : null}
										{phase ? (
											<small>
												Phase <strong>{phase}</strong>
											</small>
										) : null}
									</div>
								</a>
							</li>
						) : null;
					})
				) : (
					<li>No items found for your level.</li>
				)}
			</ul>
		</article>
	);
};
