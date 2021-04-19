export default function parseRaidData(data) {
	if (data.getAllRaids) {
		const rawData = data.getAllRaids.data;
		const parsedData = [];

		rawData.map((raid) => {
			const type = "Raid";
			const { id, name, level, tier, img, phase } = raid;
			const { faction } = raid.zone;
			const zoneName = raid.zone.name;
			parsedData.push({
				id,
				name,
				level,
				faction,
				zoneName,
				type,
				tier,
				img,
				phase,
			});
		});

		return parsedData;
	} else {
		return data;
	}
}
