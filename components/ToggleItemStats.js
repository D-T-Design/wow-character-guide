import React, { useContext, useEffect, useRef } from "react";
import fetch from "isomorphic-unfetch";
import useSWR from "swr";
import BlizzContext from "../utils/blizzContext";
import Money from "./Money";

const factionURL = "/static/img/faction/";

const fetcher = (url) => fetch(url).then((res) => res.json());
const getItemData = (item, token) => {
	const url = "https://us.api.blizzard.com/data/wow";
	const namespace = "?namespace=static-classic-us";
	const locale = "&locale=en_US";
	const { data, isPending, error } = useSWR(
		`${url}/item/${item}${namespace}${locale}&access_token=${token}`,
		fetcher
	);
	return { data, isPending, error };
};
const BlizzStats = ({ data }) => {
	if (data.preview_item) {
		const { binding, armor, weapon, stats, spells, sell_price, durability } = data.preview_item;
		const { level, inventory_type, item_subclass, required_level } = data;
		let { gold, silver, copper } = 0;
		if (sell_price) {
			gold = sell_price.display_strings.gold;
			silver = sell_price.display_strings.silver;
			copper = sell_price.display_strings.copper;
		}
		return (
			<aside>
				{level && (
					<small className="iLvl">
						<em>Item Level {level}</em>
					</small>
				)}
				{binding && <small>{binding.name}</small>}
				<section className="equip-type">
					{inventory_type && <small>{inventory_type.name}</small>}
					{item_subclass && item_subclass.name !== "Miscellaneous" && (
						<small>{item_subclass.name}</small>
					)}
				</section>
				{armor && <small>{armor.display.display_string}</small>}
				{weapon && (
					<ul className="equip-weapon">
						<li>
							<small>{weapon.damage.display_string}</small>
							<small>{weapon.attack_speed.display_string}</small>
						</li>
						<li>
							<small>{`(${Math.round(weapon.dps.value * 100) / 100} damage per second)`}</small>
						</li>
					</ul>
				)}
				{stats &&
					stats.map(
						(stat, index) =>
							!stat.is_equip_bonus && (
								<small key={index} className="equip-stats">
									{stat.display.display_string}
								</small>
							)
					)}
				{durability && <small>{durability.display_string}</small>}
				{required_level && <small>Requires Level {required_level}</small>}
				{stats &&
					stats.map(
						(stat, index) =>
							stat.is_equip_bonus && (
								<small key={index} className="equip-bonus">
									{`Equip: ${stat.type.name.replace("%s", stat.value)}`}
								</small>
							)
					)}
				{spells &&
					spells.map((spell, index) => (
						<small key={index} className="equip-spells">
							{spell.description}
						</small>
					))}
				{sell_price && (
					<small className="equip-sell">
						{gold > 0 && (
							<>
								{`Sell price: ${gold} `}
								<Money name="gold" />
							</>
						)}
						{silver > 0 ? (
							<>
								{` ${silver} `}
								<Money name="silver" />
							</>
						) : (
							gold > 0 && (
								<>
									{` ${silver} `}
									<Money name="silver" />
								</>
							)
						)}
						{` ${copper} `}
						<Money name="copper" />
					</small>
				)}
			</aside>
		);
	} else {
		return "Item Error";
	}
};
const ToggleItemStats = ({ id, drop, itemFaction, faction }) => {
	const { token } = useContext(BlizzContext);
	const { data: itemBlizzData, isPending, error } = getItemData(id, token);

	return (
		<>
			{error && <small>Error loading item stats.</small>}
			{isPending && <small>Loading item data...</small>}
			{itemBlizzData ? <BlizzStats data={itemBlizzData} /> : null}
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
		</>
	);
};

export default ToggleItemStats;
