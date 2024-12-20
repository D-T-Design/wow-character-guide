import { AdvancedImage } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { motion } from "framer-motion";
import React from "react";
import { cld } from "../utils/cloudinary";

const zoneURL = "https://tbc.wowhead.com/zone=";
const factionURL = "/static/img/faction/";
const zoneURLString = "/static/img/zone/";

export const Zone = React.forwardRef((props, ref) => {
  const { name, id, type, faction, img } = props.zone;
  const zoneLevel = props.zone.level || props.zone.range;
  return (
    <motion.div
      className="quests-zone"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15, delay: 0.05 * (props.index + 1) }}
      ref={ref}
      key={name}
    >
      <a href={`${zoneURL}${id}`} target="_blank" rel="noopener noreferrer">
        {/* If database includes Zone Image URL, generate image from Cloudinary */}
        {img && (
          <div className="zone-bg">
            <AdvancedImage
              cldImg={cld
                .image(`/wow-character-guide/${img.toLowerCase()}`)
                .resize(fill().aspectRatio("16:9").width("auto"))}
            />
          </div>
        )}

        <h3 className="zone-name">
          <span>{name}</span>
        </h3>

        <div className="quests-range">
          <small>
            <em>{`(Lvl: ${zoneLevel[0]}${zoneLevel.length > 1 ? `-${zoneLevel[1]}` : ""})`}</em>
          </small>
          {props.zone.tier && <small>Tier: {props.zone.tier}</small>}
        </div>

        <div className="icons">
          {/* Display zone icons for faction specific, cities, and instances  */}
          {type !== "Zone" && (
            <div className="zone-icon" data-faction={type}>
              <img
                src={`${zoneURLString}${type === "PvP" ? "Battleground" : type}.png`}
                alt={type}
                title={type}
              />
            </div>
          )}
          {faction !== "Contested" &&
            faction !== "PvP" &&
            faction !== "Sanctuary" &&
            faction !== "Neutral" && (
              <div className="faction-icon" data-faction={faction}>
                <img src={`${factionURL}${faction.toLowerCase()}.png`} alt={faction} title={faction} />
              </div>
            )}
          <img src="/static/img/logout.svg" />
        </div>
      </a>
    </motion.div>
  );
});
export const MotionZone = motion(Zone, { forwardMotionProps: true });
