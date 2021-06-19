import { Image, Placeholder } from "cloudinary-react";

export default function Zone({ zone }) {
	const { name, id, type, faction, img } = zone;
	const zoneLevel = zone.level || zone.range;
	const zoneURL = "https://tbc.wowhead.com/zone=";
	const factionURL = "/static/img/faction/";
	const zoneURLString = "/static/img/zone/";
	return (
		<div className="quests-zone">
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
					{zone.tier && <small>Tier: {zone.tier}</small>}
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
		</div>
	);
}
