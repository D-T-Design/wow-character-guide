const filteredZoneData = (zoneData, playerFaction, level) => {
	// Filter zones based on Faction and Level Range
	return zoneData.filter((zone) => {
		const oppositeFaction = playerFaction === "Horde" ? "Alliance" : "Horde";
		const { range, faction } = zone;
		if (range[0] > level) return false;
		if (range[1] < level) return false;
		if (faction === oppositeFaction) return false;
		return true;
	});
};

const filteredDungeonData = (dungeonData, level) => {
	// Filter dungeons based on Level Range
	return dungeonData.filter((dungeon) => {
		const range = dungeon.level;
		if (range[0] > level || range[1] < level) {
			return false;
		} else if (range[0] === 60 && level > 69) {
			return false;
		} else {
			return true;
		}
	});
};

export const zonesByCategory = (zoneData, dungeonData, raidData, level, playerFaction) => {
	const zones = filteredZoneData(zoneData, playerFaction, level);
	const dungeons = filteredDungeonData(dungeonData, level);
	const raids = filteredDungeonData(raidData, level);
	const zonesByCategory = {
		Zone: [],
		Dungeon: [],
		Raid: [],
		City: [],
		Battleground: [],
	};
	zones.map((zone) => {
		const { type } = zone;
		zonesByCategory[type].push(zone);
	});
	zonesByCategory.Dungeon = dungeons.map((dungeon) => {
		return dungeon;
	});
	zonesByCategory.Raid = raids.map((raid) => {
		return raid;
	});
	return zonesByCategory;
};
