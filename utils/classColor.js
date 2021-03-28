export default function classColor(className) {
  switch (className) {
		case "Rogue":
			return "#FFF468";
			break;
		case "Druid":
			return "#ff7c0a";
			break;
		case "Paladin":
			return "#f48cba";
			break;
		case "Hunter":
			return "#aad372";
			break;
		case "Mage":
			return "#68ccef";
			break;
		case "Warrior":
			return "#c69b6d";
			break;
		case "Warlock":
			return "#9382c9";
			break;
		case "Priest":
			return "#f0ebe0";
			break;
		case "Shaman":
			return "#2359ff";
			break;
    default:
      return "#D8D9D7";
	}
}