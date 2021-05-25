export const weaponToFullName = (weapon) => {
	let res = "";
	switch (weapon) {
		case "dagger":
			res = "Daggers";
			break;
		case "fistweapon":
			res = "Fist Weapons";
			break;
		case "one-handedaxe":
			res = "One-Handed Axes";
			break;
		case "one-handedmace":
			res = "One-Handed Maces";
			break;
		case "one-handedsword":
			res = "One-Handed Swords";
			break;
		case "polearm":
			res = "Polearms";
			break;
		case "staff":
			res = "Staves";
			break;
		case "two-handedsword":
			res = "Two-Handed Swords";
			break;
		case "two-handedaxe":
			res = "Two-Handed Axes";
			break;
		case "two-handedmace":
			res = "Two-Handed Maces";
			break;
		case "bow":
			res = "Bows";
			break;
		case "crossbow":
			res = "Crossbows";
			break;
		case "gun":
			res = "Guns";
			break;
		case "thrown":
			res = "Thrown";
			break;
		case "wand":
			res = "Wands";
			break;
		default:
			res = `Error, missing weapon type (${weapon})`;
	}
	return res;
};
