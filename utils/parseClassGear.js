export default function parseClassGear(data) {
	console.log(data);
	const rawData = data.classByName.data[0].gear.data[0].slot.data;
	let gearData = [];
	rawData.map((itemSlot) => {
		const slot = itemSlot.name;
		const items = itemSlot.items.data;
		items.sort((a, b) => b.iLvl - a.iLvl);
		gearData.push({ slot, items });
	});

	return {
		gearData,
	};
}
