export default function parseZoneData(data) {
	if (data.getAllZones) {
		const rawData = data.getAllZones.data;
		const parsedData = [];

		rawData.map((zone) => {
			const { faction, id, name, range, tier, img } = zone;
			const dungeons = zone.dungeons.data;
			const raids = zone.raids.data;
			const type =
				tier === 0
					? "Zone"
					: tier === 1
					? "City"
					: tier === 2
					? "Dungeon"
					: tier === 3
					? "Raid"
					: "Battleground";
			parsedData.push({
				dungeons,
				faction,
				id,
				name,
				raids,
				range,
				type,
				img
			});
		});

		return parsedData;
	} else {
		return data;
	}
}
