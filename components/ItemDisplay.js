import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Image, Transformation, Placeholder } from "cloudinary-react";
import ToggleItemStats from "./ToggleItemStats";
const itemURLTBC = "https://tbc.wowhead.com/item=";

export const ItemDisplay = ({ item, index, faction }) => {
  const {
    data: { id },
    quality,
    name,
    drop,
    phase,
    imgURL,
    reqLvl,
    iLvl
  } = item;
  const itemFaction = item.faction;
  const itemMotionVariants = {
    hidden: { y: "20%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay: (index + 1) * 0.06 },
    },
    transition: { duration: 0.3, ease: "easeInOut" },
  };

  const [savedStats, setSavedStats] = useState({});
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.li
        key={id}
        id={id}
        className={`item`}
        variants={itemMotionVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition="transition"
      >
        <div className="item-details">
          <Image
            public-id={`/wow-character-guide/itemthumbs/${imgURL}`}
            cloudName="david-torres-design"
            version="1623049444"
            width="36"
            height="36"
            className="icon"
            loading="lazy"
            secure="true"
            alt=""
          >
            <Transformation quality="auto" fetchFormat="auto" />
            <Placeholder />
          </Image>
          <div className="item-name">
            <h3 className={quality.toLowerCase()}>{name}</h3>
            {phase && (
              <Image
                public-id={`/wow-character-guide/phase${phase}-vector.svg`}
                cloudName="david-torres-design"
                version="1623049444"
                width="57"
                height="19"
                className="icon-phase"
                loading="lazy"
                secure="true"
                alt={`Phase ${phase}`}
              />
            )}
          </div>
        </div>
        <div className="item-stats">
          <section className="equip-toggle">
            <ToggleItemStats
              id={id}
              drop={drop}
              itemFaction={itemFaction}
              faction={faction}
              savedStats={savedStats}
              reqLvl={reqLvl}
              iLvl={iLvl}
            />
            <a
              href={`${itemURLTBC}${id}`}
              className="equip-link"
              title="See more details on Wowhead"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src="/static/img/logout.svg" className="wowhead-icon" />
              <Image
                public-id={`/wow-character-guide/wowhead`}
                cloudName="david-torres-design"
                version="1623049444"
                width="60"
                height="50"
                className="wowhead"
                loading="lazy"
                secure="true"
                alt="See more details on Wowhead"
              />
            </a>
          </section>
        </div>
      </motion.li>
    </AnimatePresence>
  );
};
