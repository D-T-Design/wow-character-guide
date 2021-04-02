import React, { useState } from "react";

const itemURL = "https://classic.wowhead.com/item=";
const itemURLTBC = "https://tbc.wowhead.com/item=";
const armorURL = "/static/img/armor/";
const factionURL = "/static/img/faction/";

export const GearSlot = ({ name, items, level, faction }) => {
	const [open, setOpen] = useState(false);
	const containsItems = items.length > 0;
	const toggleOpen = () => {
		setOpen(!open);
	};
	const numItems = items.length;
	return (
		<article>
			<figure onClick={toggleOpen} style={{ cursor: "pointer" }}>
				<img src={`${armorURL}${name.toLowerCase().replace(/\s/g, "").replace(/-/, "")}.png`} />
				<figcaption>
					<h3>
						{name}
						<span>{open ? "X" : "+"}</span>
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
					items.map((item, index) => {
						const { id, quality, name, drop } = item;
						const itemFaction = item.faction;
						const itemProhibited = itemFaction && itemFaction.name !== faction;
						return !itemProhibited ? (
							<li key={index}>
								<a href={`${itemURLTBC}${id}`}>
									<h3 className={quality.toLowerCase()}>{name}</h3>
									<h4>{drop ? drop : "Drop"}</h4>
									{itemFaction ? (
										<img
											className="faction-icon"
											src={`${factionURL}${faction.toLowerCase()}.png`}
										/>
									) : null}
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
