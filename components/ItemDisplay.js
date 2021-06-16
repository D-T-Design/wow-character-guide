import { Image, Transformation, Placeholder } from "cloudinary-react";
const itemURLTBC = "https://tbc.wowhead.com/item=";
const factionURL = "/static/img/faction/";

export const ItemDisplay = ({ item, faction, phaseLvl }) => {
	const { id, quality, name, drop, iLvl, slot, phase, imgURL } = item;
	const itemFaction = item.faction;
	const itemProhibited = itemFaction && itemFaction.name !== faction;
	const phaseRestricted = phase > phaseLvl;
	return !itemProhibited && !phaseRestricted ? (
		<li>
			<a href={`${itemURLTBC}${id}`} target="_blank" rel="noreferrer">
				{
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
				}
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
};
