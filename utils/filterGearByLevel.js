export default function filterGearByLevel(data, level) {
  const minLevel = level - 10;
  const maxLevel = level;
  const gearData = data.filter(
    (item) => (item.req_lvl >= minLevel && item.req_lvl <= maxLevel) || item.req_lvl === null
  );
  return {
    gearData,
  };
}
