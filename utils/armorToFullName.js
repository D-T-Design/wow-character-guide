export const armorToFullName = (armor) => {
	let res = "";
	switch (armor) {
		case "shoulder":
			res = "Shoulder";
			break;
		case "head":
			res = "Head";
			break;
		case "wrist":
			res = "Wrist";
			break;
		case "legs":
			res = "Legs";
			break;
		case "feet":
			res = "Feet";
			break;
		case "hands":
			res = "Hands";
			break;
		case "chest":
			res = "Chest";
			break;
		case "waist":
			res = "Waist";
			break;
		case "back":
			res = "Back";
			break;
		default:
			res = `Error, missing armor type (${armor})`;
	}
	return res;
};
