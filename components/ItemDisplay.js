import { AdvancedImage } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { cld } from "../utils/cloudinary";
import ToggleItemStats from "./ToggleItemStats";

const itemURLTBC = "https://wowhead.com/classic/item=";

export const ItemDisplay = ({ item, index, faction }) => {
  const { item_id, quality, name, drop_location, phase, img_url, req_lvl, ilvl } = item;
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
        key={item_id}
        id={item_id}
        className={`item`}
        variants={itemMotionVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition="transition"
      >
        <div className="item-details">
          <AdvancedImage
            cldImg={cld
              .image(`/wow-character-guide/itemthumbs/${img_url}`)
              .resize(fill().width(36).height(36))}
          />
          <div className="item-name">
            <h3 className={quality.toLowerCase()}>{name}</h3>
            {phase && (
              <AdvancedImage
                className="icon-phase"
                loading="lazy"
                alt={`Phase ${phase}`}
                cldImg={cld
                  .image(`/wow-character-guide/phase${phase}-vector.svg`)
                  .resize(fill().width(57).height(19))}
              />
            )}
          </div>
        </div>
        <div className="item-stats">
          <section className="equip-toggle">
            <ToggleItemStats
              id={item_id}
              drop={drop_location}
              itemFaction={itemFaction}
              faction={faction}
              savedStats={savedStats}
              reqLvl={req_lvl}
              iLvl={ilvl}
            />
            <a
              href={`${itemURLTBC}${item_id}`}
              className="equip-link"
              title="See more details on Wowhead"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src="/static/img/logout.svg" className="wowhead-icon" />
              <AdvancedImage
                cldImg={cld.image(`/wow-character-guide/wowhead`).resize(fill().width(60).height(50))}
                className="wowhead"
                loading="lazy"
                alt="See more details on Wowhead"
              />
            </a>
          </section>
        </div>
      </motion.li>
    </AnimatePresence>
  );
};
