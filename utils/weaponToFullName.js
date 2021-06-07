export const weaponToFullName = (weapon) => {
	let res = "";
	switch (weapon) {
		case "dagger":
			res = "Daggers";
			break;
		case "fistweapon":
			res = "Fist Weapons";
			break;
		case "onehandedaxe":
			res = "One-Handed Axes";
			break;
		case "onehandedmace":
			res = "One-Handed Maces";
			break;
		case "onehandedsword":
			res = "One-Handed Swords";
			break;
		case "polearm":
			res = "Polearms";
			break;
		case "staff":
			res = "Staves";
			break;
		case "twohandedsword":
			res = "TwoHanded Swords";
			break;
		case "twohandedaxe":
			res = "Two-Handed Axes";
			break;
		case "twohandedmace":
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
		case "idol":
			res = "Idols";
			break;
		case "totem":
			res = "Totems";
			break;
		case "libram":
			res = "Librams";
			break;
		case "shield":
			res = "Shields";
			break;
		case "heldinoffhand":
			res = "Held In Off-Hand";
			break;
		default:
			res = `Error, missing weapon type (${weapon})`;
	}
	return res;
};
