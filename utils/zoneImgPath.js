const zoneImgPath = (zoneName) => {
	let path = "";
	switch (zoneName) {
		case "World Zones":
			path = "Worldzone";
			break;
		case "Dungeons":
			path = "Dungeon";
			break;
		case "Raids":
			path = "Raid";
			break;
		case "Battlegrounds":
			path = "Battleground";
			break;
		case "Cities":
			path = "City";
			break;
		default:
			path = "Worldzone";
			break;
	}
	return path;
};

export default zoneImgPath;
