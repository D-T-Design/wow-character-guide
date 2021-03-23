export default function parseDungeonData(data) {
	if (data.getAllDungeons) {
		const rawData = data.getAllDungeons.data;
		const parsedData = [];

		rawData.map((zone) => {
			const type = "Dungeon";
			const { id, name, level } = zone;
			const { faction } = zone.zone;
			const zoneName = zone.zone.name;
			parsedData.push({
				id,
				name,
				level,
				faction,
				zoneName,
				type,
			});
		});

		return parsedData;
	} else {
		return data;
	}
}
