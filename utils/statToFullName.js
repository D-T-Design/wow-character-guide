export const statToFullName = (stat) => {
	let res = "";
	switch (stat) {
		case "agi":
			res = "Agility";
			break;
		case "sta":
			res = "Stamina";
			break;
		case "str":
			res = "Strength";
			break;
		case "int":
			res = "Intelligence";
			break;
		case "spi":
			res = "Spirit";
			break;
		case "crit":
			res = "Critical Strike Rating";
			break;
		case "hit":
			res = "Hit Rating";
			break;
		case "haste":
			res = "Haste";
			break;
		case "ap":
			res = "Attack Power";
			break;
		case "expertise":
			res = "Expertise";
			break;
		case "defense":
			res = "Defense Rating";
			break;
		case "block":
			res = "Block Rating";
			break;
		case "parry":
			res = "Parry Rating";
			break;
		case "armorpen":
			res = "Armor Penetration";
			break;
		case "spellpower":
			res = "Spell Power";
			break;
		case "spellcrit":
			res = "Spell Critical Strike Rating";
			break;
		case "spellhit":
			res = "Spell Hit Rating";
			break;
		case "spellhaste":
			res = "Spell Haste Rating";
			break;
		case "healpower":
			res = "Heal Power";
			break;
		case "mp5":
			res = "Mana Regeneration";
			break;
		default:
			res = `Error, missing stat (${stat})`;
	}
	return res;
};
