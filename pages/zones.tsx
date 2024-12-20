import { motion } from "framer-motion";
import React, { useState } from "react";
import { useZonesByCategory } from "../utils/queries";
import { ZoneListing } from "../components/ZoneListing";
import { getAppState } from "../utils/localStorage";

const zoneTypes = {
  Zone: "World Zones",
  Dungeon: "Dungeons",
  Raid: "Raids",
  Battleground: "Battlegrounds",
  City: "Cities",
} as Record<string, string>;

export const raidPhases = {
  "Molten Core": 1,
  "Onyxia's Lair": 1,
  "Blackwing Lair": 3,
  "Zul'Gurub": 4,
  "Ruins of Ahn'Qiraj": 5,
  "Temple of Ahn'Qiraj": 5,
  Naxxramas: 6,
} as Record<string, number>;

/* Motion Variants */
const transition = {
  duration: 0.3,
  ease: "easeInOut",
};
const pageVariants = {
  exit: { opacity: 0, transition },
  enter: {
    opacity: 1,
    transition,
  },
  initial: {
    opacity: 0,
    transition,
  },
};

const Zones = () => {
  const localData = getAppState();
  const level = localData?.savedCharacters.find((char) => char.id === localData.character)?.level;
  const faction = localData?.savedCharacters.find((char) => char.id === localData.character)?.faction;
  const { data: zoneData, isLoading } = useZonesByCategory(level, faction);
  const [currentZoneType, changeZoneType] = useState("Zone");
  const updateZoneType = (type: string) => {
    changeZoneType(type);
  };
  const zoneProps = {
    title: zoneTypes[currentZoneType],
    zones: zoneData?.[currentZoneType] ?? [],
    level: localData?.savedCharacters[localData.character]?.level,
    zoneTypes,
    sortedZones: zoneData ?? {},
    currentZoneType,
    updateZoneType,
  };
  return (
    <motion.section
      className="content zones"
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageVariants}
    >
      <div className="container">
        <div className="header">
          <h2>Suggested Zones</h2>
          <p>
            Here are the zones in the game that match your character, choose which type of zones you want to
            see! Clicking on a zone will take you to Wowhead for more info.
          </p>
        </div>

        <section className={`${currentZoneType}`}>
          <ZoneListing {...zoneProps} />
        </section>
      </div>
    </motion.section>
  );
};

export default Zones;
