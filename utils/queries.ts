import { useQuery } from "@tanstack/react-query";
import { raidPhases } from "../pages/zones";

const ZoneTier = {
  0: "Zone",
  1: "City",
  2: "Dungeon",
  3: "Raid",
  4: "PvP",
} as Record<number, string>;

type DbZone = {
  id: number;
  zone_id: number;
  name: string;
  level_range: number[];
  faction: string;
  tier: number;
  img: string;
};

type Zone = {
  dungeons?: any;
  faction: string;
  id: string;
  name: string;
  raids?: any;
  range: number[];
  type: string;
  img: string;
};

type Dungeon = {
  id: string;
  name: string;
  level: number[];
  faction: string;
  zoneName: string;
  type: string;
  img: string;
};

type DbDungeon = {
  id: number;
  zone_id: number;
  name: string;
  level_range: number[];
  img: string;
  dungeon_id: number;
};

type Raid = {
  id: string;
  name: string;
  level: number[];
  faction: string;
  zoneName: string;
  type: string;
  tier: string;
  img: string;
  phase: string;
};

type DbRaid = {
  id: number;
  zone_id: number;
  name: string;
  level_range: number[];
  tier: number;
  img: string;
  raid_id: number;
};

type Item = {
  armor_type: string;
  wep_type: string;
  name: string;
  quality: string;
  ilvl: number;
  req_lvl: number;
  slot: string;
  drop: string;
  phase: number;
  imgURL: string;
  faction?: string;
  id: number;
  item_id: number;
};

const filteredZoneByLevel = (zoneData: DbZone, playerFaction: "Alliance" | "Horde", level: number) => {
  const oppositeFaction = playerFaction === "Horde" ? "Alliance" : "Horde";
  const { level_range, faction } = zoneData;
  if (faction === "PvP" && level < 10) return false;
  if (level_range[0] > level) return false;
  if (level_range[1] < level) return false;
  if (faction !== "PvP" && faction === oppositeFaction) return false;
  return true;
};

const filterDungeonByLevel = (dungeonData: DbDungeon, level: number) => {
  const range = dungeonData.level_range;
  if (range[0] > level || range[1] < level) {
    return false;
  } else if (range[0] === 60 && level > 69) {
    return false;
  } else {
    return true;
  }
};

const filterRaidByLevel = (raidData: DbRaid, level: number) => {
  return level >= 60;
};

type ZonesByCategory = {
  Zone: Zone[];
  Dungeon: Dungeon[];
  Raid: Raid[];
  City: Zone[];
  Battleground: Zone[];
} & Record<string, any>;

export const useZoneQuery = (level = 1, faction = "Alliance") =>
  useQuery<DbZone[]>({
    queryKey: ["zones", level, faction],
    queryFn: async () => {
      const zones = await fetch(`/api/data/zones?level=${level}&faction=${faction}`);
      if (!zones.ok) {
        throw new Error("Failed to fetch zones data");
      }
      return zones.json();
    },
    staleTime: 1000 * 60 * 60,
  });

export const useRaidQuery = (level = 1, tier?: number) =>
  useQuery<DbRaid[]>({
    queryKey: ["raids", level, tier],
    queryFn: async () => {
      const query = `/api/data/raids?level=${level}${tier ? `&tier=${tier}` : ""}`;
      const raids = await fetch(query);
      if (!raids.ok) {
        throw new Error("Failed to fetch raids data");
      }
      return raids.json();
    },
    staleTime: 1000 * 60 * 60,
  });

export const useDungeonQuery = (level = 1) =>
  useQuery<DbDungeon[]>({
    queryKey: ["dungeons", level],
    queryFn: async () => {
      const dungeons = await fetch(`/api/data/dungeons?level=${level}`);
      if (!dungeons.ok) {
        throw new Error("Failed to fetch dungeons data");
      }
      return dungeons.json();
    },
    staleTime: 1000 * 60 * 60,
  });

export const useZonesByCategory = (
  level = 1,
  faction = "Alliance" as "Alliance" | "Horde",
  tier?: number
) => {
  const { data: zones } = useZoneQuery(level, faction);
  const { data: dungeons } = useDungeonQuery(level);
  const { data: raids } = useRaidQuery(level, tier);
  return useQuery<ZonesByCategory>({
    queryKey: ["zonesByCategory", level, faction],
    queryFn: async () => ({
      Zone:
        zones
          ?.filter((zone) => ZoneTier[zone.tier] === "Zone")
          .filter((zone) => filteredZoneByLevel(zone, faction, level))
          .map(
            (zone) =>
              ({
                faction: zone.faction,
                id: zone.zone_id.toString(),
                name: zone.name,
                range: zone.level_range,
                type: ZoneTier[zone.tier],
                img: zone.img,
              } as Zone)
          )
          .sort((a, b) => a.name.localeCompare(b.name)) ?? [],
      Dungeon:
        dungeons
          ?.filter((dungeon) => filterDungeonByLevel(dungeon, level))
          .map((dungeon) => {
            const zone = zones?.find((zone) => zone.id === dungeon.zone_id);
            return {
              id: dungeon.dungeon_id.toString(),
              name: dungeon.name,
              level: dungeon.level_range,
              faction: zone?.faction || "Neutral",
              zoneName: zone?.name || "Unknown",
              type: "Dungeon",
              img: dungeon.img,
            } as Dungeon;
          })
          .sort((a, b) => a.name.localeCompare(b.name)) ?? [],
      Raid:
        raids
          ?.filter((raid) => filterRaidByLevel(raid, level))
          .map((raid) => {
            const zone = zones?.find((zone) => zone.id === raid.zone_id);
            const phase = `${raidPhases[raid.name] ?? "Unknown"}`;
            return {
              id: raid.raid_id.toString(),
              name: raid.name,
              level: raid.level_range,
              faction: zone?.faction ?? "Neutral",
              zoneName: zone?.name ?? "Unknown",
              type: "Raid",
              img: raid.img,
              tier: raid.tier.toString(),
              phase,
            } as Raid;
          })
          .sort((a, b) => a.name.localeCompare(b.name)) ?? [],
      City:
        zones
          ?.filter((zone) => ZoneTier[zone.tier] === "City")
          .filter((zone) => filteredZoneByLevel(zone, faction, level))
          .map((zone) => ({
            faction: zone.faction,
            id: zone.zone_id.toString(),
            name: zone.name,
            range: zone.level_range,
            type: ZoneTier[zone.tier],
            img: zone.img,
          }))
          .sort((a, b) => a.name.localeCompare(b.name)) ?? [],
      Battleground:
        zones
          ?.filter((zone) => ZoneTier[zone.tier] === "PvP")
          .filter((zone) => filteredZoneByLevel(zone, faction, level))
          .map((zone) => ({
            faction: zone.faction,
            id: zone.zone_id.toString(),
            name: zone.name,
            range: zone.level_range,
            type: ZoneTier[zone.tier],
            img: zone.img,
          }))
          .sort((a, b) => a.name.localeCompare(b.name)) ?? [],
    }),
    enabled: !!zones && !!dungeons && !!raids,
    staleTime: 1000 * 60 * 60,
  });
};

export const useClassGear = (className: string, level = 1) => {
  return useQuery<Item[]>({
    queryKey: ["classGear", className, level],
    queryFn: async () => {
      const response = await fetch("/api/data/items?className=" + className + "&level=" + level);
      if (!response.ok) {
        throw new Error("Failed to fetch class gear data");
      }
      return await response.json();
    },
    staleTime: 1000 * 60 * 60,
  });
};
