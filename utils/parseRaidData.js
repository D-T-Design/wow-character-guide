export default function parseRaidData(data) {
	const parsedData = [];

	data.map((raid) => {
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
}
