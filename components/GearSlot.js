import React, { useState } from "react";

const itemURL = "https://classic.wowhead.com/item=";
const armorURL = "/static/img/armor/";

export const GearSlot = ({ name, items }) => {
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
						{name} Weapons
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
						? { height: `calc(75px * ${numItems} + 20px)` }
						: open && !containsItems
						? { height: `56px` }
						: { height: "0" }
				}
			>
				{containsItems ? (
					items.map((item, index) => {
						const { id, quality, name, drop } = item;
						return (
							<li key={index}>
								<a href={`${itemURL}${id}`}>
									<h3 className={quality.toLowerCase()}>{name}</h3>
									<h4>{drop ? drop : "Drop"}</h4>
								</a>
							</li>
						);
					})
				) : (
					<li>No items found for your level.</li>
				)}
			</ul>
		</article>
	);
};
