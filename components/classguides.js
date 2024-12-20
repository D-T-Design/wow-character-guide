import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";

import { AdvancedImage } from "@cloudinary/react";
import { cld } from "../utils/cloudinary";

const wccgClassImg = "/static/img/class/";
const imgBase = "https://res.cloudinary.com/david-torres-design/image/upload/";
const imgCreatorTransform = "w_200,h_200,c_fill";
const imgFolder = "/v1618808611/wow-character-guide/";

import { statToFullName } from "../utils/statToFullName";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";

const ClassGuides = (props) => {
  const { appState, classID } = props;
  let selectedCharacter = appState.savedCharacters.find((character) => character.id === appState.character);
  const { playerClass } = selectedCharacter ? selectedCharacter : { playerClass: classID };

  const ref = appState.gameData[`${playerClass.toLowerCase()}Ref`];
  const {
    summary,
    teamroles,
    resource,
    primarystats,
    secondarystats,
    specs,
    weaponTypes,
    armorTypes,
    classGuides,
    creators,
  } = ref ? ref : null;

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
  return (
    <motion.section
      className="content guides"
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageVariants}
    >
      <Head>
        <title>TBC {playerClass} Guide - WCCG</title>
        <meta property="og:title" content={`TBC ${playerClass} Guide - WCCG`} />
      </Head>
      <div className="container">
        <div className="guide-grid">
          <motion.section
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ staggerChildren: 0.3, delayChildren: 0.3 }}
          >
            <motion.main
              className={`class-feature ${playerClass}`}
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.3 }}
            >
              <h1>{playerClass}</h1>
              <img
                src={`${wccgClassImg}${playerClass.toLowerCase()}.png`}
                title={playerClass}
                alt={playerClass}
              />
              <h2>Class Guide</h2>
              <p>{summary}</p>
            </motion.main>
            <motion.aside
              className="class-reference"
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.3 }}
            >
              <h2>{playerClass} Quick Reference</h2>
              <section>
                <ul>
                  <h3>Available Specs</h3>
                  {specs.map((spec, index) => (
                    <li key={index}>
                      <img
                        src={`/static/img/spec/${playerClass.toLowerCase()}/${spec
                          .toLowerCase()
                          .replace(/\s/g, "")}.png`}
                        alt={spec}
                        title={spec}
                      />
                      {spec}
                    </li>
                  ))}
                </ul>
                <ul>
                  <h3>Team Role</h3>
                  {teamroles.map((role, index) => (
                    <li key={index}>{role}</li>
                  ))}
                </ul>
                <ul>
                  <h3>Resource</h3>
                  <li>{resource}</li>
                </ul>
                <ul>
                  <h3>Primary Stats</h3>
                  {primarystats.map((stat, index) => (
                    <li key={index}>{statToFullName(stat)}</li>
                  ))}
                </ul>
                <ul>
                  <h3>Secondary Stats</h3>
                  {secondarystats.map((stat, index) => (
                    <li key={index}>{statToFullName(stat)}</li>
                  ))}
                </ul>
                <ul>
                  <h3>Weapon Types</h3>
                  {weaponTypes.map((weaponType, index) => (
                    <li key={index}>{weaponType.name}</li>
                  ))}
                </ul>
                <ul>
                  <h3>Armor Types</h3>
                  {armorTypes.map((armorType, index) => (
                    <li key={index}>{armorType.name}</li>
                  ))}
                </ul>
              </section>
            </motion.aside>
          </motion.section>
          <motion.section
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ staggerChildren: 0.3, delayChildren: 0.3 }}
          >
            <motion.aside
              className="class-guides"
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.3 }}
            >
              <h3>{playerClass} Class Guides</h3>
              <p>
                Class guides from around the internet, these will help you play your class better. Want your
                guide or content featured here? Contact me from the Support page!
              </p>
              <section>
                <ul>
                  {classGuides.data ? (
                    classGuides.data.map((guide, index) => {
                      const guideImg = cld
                        .image(`/wow-character-guide/${guide.thumb}`)
                        .resize(fill().width("auto").gravity(autoGravity()).aspectRatio("16:9"));
                      return (
                        <li key={index}>
                          <motion.a
                            href={guide.link}
                            target="_blank"
                            title={`Link to ${guide.title}`}
                            className={playerClass}
                            initial={false}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <figure>
                              <AdvancedImage cldImg={guideImg} />
                              <figcaption>
                                {guide.title}
                                <img src="/static/img/logout.svg" alt="Link to new tab" />
                              </figcaption>
                            </figure>
                          </motion.a>
                        </li>
                      );
                    })
                  ) : (
                    <h4>No guides found for your class.</h4>
                  )}
                </ul>
              </section>
            </motion.aside>
            <motion.aside
              className="class-creators"
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.3 }}
            >
              <h3>{playerClass} Streamers &amp; YouTubers</h3>
              <section>
                <ul>
                  {creators &&
                    (creators.data ? (
                      creators.data.map((creator, index) => (
                        <li key={index}>
                          <motion.a
                            href={creator.link}
                            target="_blank"
                            className={playerClass}
                            title={`Find ${creator.title} online`}
                            initial={false}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <figure>
                              <img src={`${imgBase}${imgCreatorTransform}${imgFolder}${creator.icon}`} />
                              <figcaption>
                                {creator.title}
                                <img src="/static/img/link.svg" alt="Link to new tab" />
                              </figcaption>
                            </figure>
                          </motion.a>
                        </li>
                      ))
                    ) : (
                      <h4>No creators found for your class.</h4>
                    ))}
                </ul>
              </section>
            </motion.aside>
          </motion.section>
        </div>
      </div>
    </motion.section>
  );
};

export default ClassGuides;
