const wepTypes = [
  "Dagger",
  "Fist Weapon",
  "One-Handed Axe",
  "One-Handed Mace",
  "One-Handed Sword",
  "Polearm",
  "Staff",
  "Two-Handed Axe",
  "Two-Handed Mace",
  "Two-Handed Sword",
  "Bow",
  "Crossbow",
  "Gun",
  "Thrown",
  "Wand",
  "Idol",
  "Totem",
  "Libram",
  "Shield",
  "Held In Off-Hand",
];
const armorSlots = ["Shoulder", "Head", "Wrist", "Legs", "Feet", "Hands", "Chest", "Waist", "Back"];
const jewelrySlots = ["Neck", "Finger", "Trinket"];

export default function separateGearByType(gearData) {
  const weaponList = gearData
    .filter((item) => {
      return item.wep_type != null;
    })
    .sort((a, b) => b.ilvl - a.ilvl);
  const weapons = () => {
    const arr = [];
    wepTypes.map((type) =>
      arr.push({
        [type.toLowerCase().replace(/\s|-/g, "")]: weaponList.filter((item) => item.wep_type === type),
      })
    );
    return arr;
  };

  const armorList = gearData
    .filter((item) => {
      return item.armor_type != null;
    })
    .sort((a, b) => b.ilvl - a.ilvl);
  const armor = () => {
    const arr = [];
    armorSlots.map((slot) =>
      arr.push({
        [slot.toLowerCase().replace(/\s|-/g, "")]: armorList.filter((item) => item.slot === slot),
      })
    );
    return arr;
  };
  const jewelryList = gearData
    .filter((item) => {
      return jewelrySlots.includes(item.slot);
    })
    .sort((a, b) => b.ilvl - a.ilvl);
  const jewelry = () => {
    const arr = [];
    jewelrySlots.map((slot) =>
      arr.push({
        [slot.toLowerCase()]: jewelryList.filter((item) => item.slot === slot),
      })
    );
    return arr;
  };

  return [
    { type: "Weapons", items: weapons() },
    { type: "Armor", items: armor() },
    { type: "Jewelry", items: jewelry() },
  ];
}
