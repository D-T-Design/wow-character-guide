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
const BlizzStats = ({ data, reqLvl }) => {
	const { level, inventory_type, item_subclass, required_level } = data;
	if (data.preview_item) {
		const {
			armor,
			binding,
			description,
			weapon,
			stats,
			spells,
			sell_price,
			durability,
			requirements,
			set,
		} = data.preview_item;
		let { gold, silver, copper } = 0;

		if (sell_price) {
			gold = sell_price.display_strings.gold;
			silver = sell_price.display_strings.silver;
			copper = sell_price.display_strings.copper;
		}

		return (
			<aside>
				{level && <small className="iLvl">Item Level {level}</small>}

				{binding && <small>{binding.name}</small>}

				<section className="equip-type">
					{inventory_type && (
						<small>
							{inventory_type.name || (inventory_type.type === "RANGEDRIGHT" && "Ranged")}
						</small>
					)}
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

				{requirements?.playable_classes && (
					<small>
						Classes:{" "}
						{requirements.playable_classes.links.length === 1 ? (
							<span className={requirements.playable_classes.links[0].name}>
								{requirements.playable_classes.links[0].name}
							</span>
						) : (
							requirements.playable_classes.links.map((playerClass, index) => (
								<>
									<span key={index} className={playerClass.name}>
										{playerClass.name}
									</span>
									{index === requirements.playable_classes.links.length - 1 ? "" : ", "}
								</>
							))
						)}
					</small>
				)}

				{requirements?.playable_races && (
					<small>{requirements.playable_races.display_string}</small>
				)}

				{required_level && required_level > 0 ? (
					<small>Requires Level {required_level}</small>
				) : (
					<small>Requires Level {reqLvl}</small>
				)}

				{requirements?.reputation && <small>{requirements.reputation.display_string}</small>}

				{requirements?.ability && <small>{requirements.ability.display_string}</small>}

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

				{!stats && !spells && <small className="equip-random">{`<Random Enchantment>`}</small>}

				{set && (
					<div className="equip-set">
						<h5>{set.display_string}</h5>
						<ul className="equip-set-list">
							{set.items.map((setItem, index) => (
								<li key={index}>
									<small>{setItem.item.name}</small>
								</li>
							))}
						</ul>
						<ul className="equip-set-spells">
							{set.effects.map((effect, index) => (
								<li key={index}>
									<small>{effect.display_string}</small>
								</li>
							))}
						</ul>
					</div>
				)}

				{sell_price && (
					<small className="equip-sell">
						{"Sell price: "}
						{gold > 0 && (
							<>
								{`${gold} `}
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

				{description && <small className="equip-description iLvl">"{description}"</small>}
			</aside>
		);
	} else {
		return "Item Error";
	}
};
const ToggleItemStats = ({ id, drop, itemFaction, faction, reqLvl }) => {
	const { token } = useContext(BlizzContext);
	const { data: itemBlizzData, isPending, error } = getItemData(id, token);

	return (
		<>
			{error && <small>Error loading item stats.</small>}
			{isPending && <small>Loading item data...</small>}
			{itemBlizzData ? <BlizzStats data={itemBlizzData} reqLvl={reqLvl} /> : null}
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
					alt={`${faction} Only`}
					title={`${faction} Only`}
				/>
			)}
			{/* {console.log(id === 23542 && itemBlizzData)} */}
		</>
	);
};

export default ToggleItemStats;
