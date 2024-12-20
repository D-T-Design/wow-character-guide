import React, { useState } from "react";
import { motion } from "framer-motion";
import { AdvancedImage } from "@cloudinary/react";
import { transformationStringFromObject, Transformation } from "@cloudinary/url-gen";
import { cld } from "../utils/cloudinary";

import filterGearByLevel from "../utils/filterGearByLevel";
import separateGearByType from "../utils/separateGearByType";
import { weaponToFullName } from "../utils/weaponToFullName";

import { GearSlot } from "../components/GearSlot";
import { getAppState } from "../utils/localStorage.ts";
import { useClassGear } from "../utils/queries.ts";

const Gear = (props) => {
  /* Check for saved/selected character, set up variables to access data */
  const defaultAppState = getAppState();
  const character = defaultAppState?.character || 0;
  const savedCharacters = defaultAppState?.savedCharacters || [];
  const gameData = defaultAppState?.gameData || {};

  const selectedCharacter = savedCharacters.find((c) => c.id === character);
  const { playerClass, level, faction } = selectedCharacter?.playerClass
    ? selectedCharacter
    : { playerClass: "Rogue", level: 1, faction: "Horde" };
  const { data } = useClassGear(playerClass, level);

  /* Get class gear types available from server */
  const classWepTypes = gameData.classes?.find((className) => className.name === playerClass).reference
    .weaponTypes;
  /* Get class gear data and filter */
  const { gearData } = filterGearByLevel(data || [], level);
  const separatedGearByType = gearData ? separateGearByType(gearData) : [{}, {}, {}];

  /* Phase filter */
  const [phaseState, setPhase] = useState(1);
  const [phasesActive, setActivePhases] = useState({
    1: true,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  /* Level filter */
  const { updateCharacter } = props.updateState;

  /* Framer Motion variants */
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

  const slotColumnVariants = {
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.5, delayChildren: 0.5 },
    },
    initial: {
      opacity: 0,
    },
    transition: { duration: 0.5 },
  };

  const slotVariants = {
    animate: {
      opacity: 1,
      scale: 1,
      transition: { staggerChildren: 1, delayChildren: 0.5 },
    },
    initial: {
      opacity: 0,
      scale: 0.8,
    },
    transition: { duration: 0.5 },
  };

  const fadeUp = {
    initial: {
      opacity: 0,
      y: "5%",
      transition,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition,
    },
  };

  const img = cld.image("/wow-character-guide/Wow-Reaver.jpg").addTransformation(
    transformationStringFromObject([
      {
        width: 680,
        crop: "fill",
        aspectRatio: "16:9",
      },
    ])
  );

  return (
    <motion.section
      className="content gear"
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageVariants}
    >
      <div className="container">
        <section className="blurb" style={{ width: "100%" }}>
          <div>
            <h2>Leveling Gear</h2>
            <p>
              These items are generated based on your chosen class and level. You can also show gear from
              later phases using the Filter by Phase slider.
            </p>
          </div>
          <motion.aside className="img-container" initial="initial" animate="animate" variants={fadeUp}>
            <AdvancedImage cldImg={img} />
          </motion.aside>
        </section>
        <motion.aside
          key="level-slider"
          initial="initial"
          animate="enter"
          exit="exit"
          variants={pageVariants}
          layout
        >
          <label htmlFor="levelslider">
            Filter by Level:
            <br />
            {level}
          </label>
          <input
            type="range"
            min="1"
            max="70"
            value={level}
            className="levelfilter"
            id="levelfilter"
            name="levelfilter"
            onChange={(e) => updateCharacter({ ...selectedCharacter, level: e.target.value })}
          />
        </motion.aside>
        {level === "70" && (
          <aside initial="initial" animate="enter" exit="exit" variants={pageVariants}>
            <label htmlFor="phasefilter">
              Filter by Phase:
              <br />
              {phaseState}
            </label>
            <input
              type="range"
              min="1"
              max="5"
              value={phaseState}
              className="phasefilter"
              id="phasefilter"
              name="phasefilter"
              onChange={(e) => setPhase(e.target.value)}
            />
          </aside>
        )}
        <motion.main variants={slotColumnVariants} animate="animate" initial="initial">
          {separatedGearByType.map((gearType, index) => {
            const { items, type } = gearType;
            return (
              <motion.div
                className="column"
                key={type}
                initial={{
                  opacity: 0,
                  y: "15%",
                  transition: { delay: (index + 1) * 0.5 },
                }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h3>{type}</h3>
                <motion.div
                  key={type}
                  variants={slotVariants}
                  animate="animate"
                  initial="initial"
                  transition="transition"
                  layout
                >
                  {items.map((itemType, index) => {
                    const typeName = Object.keys(itemType)[0];
                    const weaponTypeMatch =
                      type === "Weapons" &&
                      classWepTypes?.some((wepType) => wepType.name === weaponToFullName(typeName));
                    if (weaponTypeMatch || type !== "Weapons") {
                      return (
                        <GearSlot
                          name={typeName}
                          items={itemType[typeName]}
                          index={index}
                          key={index}
                          level={level}
                          faction={faction}
                          phase={phaseState}
                          type={type}
                        />
                      );
                    }
                  })}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.main>
      </div>
    </motion.section>
  );
};

export default Gear;
