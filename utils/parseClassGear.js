export default function parseClassGear(data) {
	const rawData = data.classByName.data[0].gear.data[0].slot.data;
	let gearData = [];
	rawData.map((itemSlot) => {
		const slot = itemSlot.name;
		const items = itemSlot.items.data;
		gearData.push({ slot, items });
	});

	return {
		gearData,
	};
}
