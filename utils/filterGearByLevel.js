export default function filterGearByLevel(data, level) {
	const minLevel = level - 3;
	const maxLevel = level;
	const gearData = data.filter(
		(item) => (item.reqLvl >= minLevel && item.reqLvl <= maxLevel) || item.reqLvl === null
	);

	return {
		gearData,
	};
}
