export default function separateGearByType(gearData) {
	const weaponSlots = ["Ranged", "Off Hand", "One-Hand", "Main Hand"];
	const armorSlots = [
		"Shoulder",
		"Head",
		"Wrist",
		"Legs",
		"Feet",
		"Hands",
		"Chest",
		"Waist",
		"Back",
	];
	const jewelrySlots = ["Neck", "Finger", "Trinket"];
	const weaponList = gearData.filter((slot) => {
		const { name } = slot;
		return weaponSlots.includes(name);
	});
	const armorList = gearData.filter((slot) => {
		const { name } = slot;
		return armorSlots.includes(name);
	});
	const jewelryList = gearData.filter((slot) => {
		const { name } = slot;
		return jewelrySlots.includes(name);
	});
	return [
		{ type: "Weapons", weaponList },
		{ type: "Armor", armorList },
		{ type: "Jewelry", jewelryList },
	];
}
