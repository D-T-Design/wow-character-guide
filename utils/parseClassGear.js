export default function parseClassGear(data) {
	const rawData = data.classByName.data[0].gear.data[0].slot.data[0];
	const slot = rawData.name;
	const items = rawData.items.data;
	const gearData = { slot, items };

	return {
		gearData,
	};
}
