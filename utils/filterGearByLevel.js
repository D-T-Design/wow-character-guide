export default function filterGearByLevel(data, level) {
	const minLevel = level - 5;
	const maxLevel = level;
	let filteredArray = [];
	console.log(data);
	data.gearData &&
		data.gearData.map((slotType) => {
			const name = slotType.slot;
			const allItems = slotType.items;
			let items = [];
			allItems.map((item) => {
				if (item.reqLvl >= minLevel && item.reqLvl <= maxLevel) {
					items.push(item);
				}
			});
			filteredArray.push({ name, items });
		});
	const gearData = filteredArray;

	return {
		gearData,
	};
}
