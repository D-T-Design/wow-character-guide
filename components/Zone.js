export default function Zone({ zone }) {
	const { name, id, type, faction, img } = zone;
	const zoneLevel = zone.level || zone.range;
	const zoneURL = "https://tbc.wowhead.com/zone=";
	const factionURL = "/static/img/faction/";
	const zoneURLString = "/static/img/zone/";
	const imgBase = "https://res.cloudinary.com/david-torres-design/image/upload/";
	const imgTransform = "w_844,h_400,c_fill";
	const imgGradient = "/e_gradient_fade,y_-0.5,b_rgb:000000A0/";
	const imgFolder = "/v1618808611/wow-character-guide/";
	return (
		<div className="quests-zone">
			<a href={`${zoneURL}${id}`} target="_blank" rel="noopener noreferrer">
				{img && (
					<div className="zone-bg">
						<img
							src={`${imgBase}${imgTransform}${imgGradient}${imgFolder}${img.toLowerCase()}`}
							title={name}
						/>
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
