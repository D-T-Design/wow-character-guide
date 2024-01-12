import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { PaginateGear } from "./PaginateGear";

const gearURL = "/static/img/gear/";
import { weaponToFullName } from "../utils/weaponToFullName";

export const GearSlot = ({ name, items, faction, phase, type, level, index }) => {
  const [open, setOpen] = useState(false);
  const containsItems = items.length > 0;
  const toggleOpen = () => {
    setOpen(!open);
  };

  const itemsFilterByPhase = containsItems && items.filter((item) => Number(item.phase) <= phase);
  const itemsFilterByFaction =
    itemsFilterByPhase.length > 0
      ? itemsFilterByPhase.filter((item) => {
          return (
            item.faction === null ||
            item.faction === undefined ||
            (item.faction?.name && item.faction?.name === faction)
          );
        })
      : itemsFilterByPhase;
  const numItems = itemsFilterByFaction.length;

  const [currentPage, setCurrentPage] = useState(0);
  const PER_PAGE = 10;
  const offset = currentPage * PER_PAGE;
  let currentPageData = [];
  if (containsItems) {
    currentPageData = itemsFilterByFaction.slice(offset, offset + PER_PAGE);
  }

  const pageCount = Math.ceil(itemsFilterByFaction.length / PER_PAGE);

  const slotRef = useRef(null);
  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
    slotRef.current.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    setCurrentPage(0);
  }, [phase, level]);

  const fadeIn = {
    initial: { opacity: 0, y: "15%" },
    animate: { opacity: 1, y: 0, transition: { staggerChildren: 1, delay: (index + 1) * 0.05 } },
    transition: { duration: 0.5 },
  };
  const paginateMotionVariants = {
    animate: {
      opacity: 1,
      height: "calc(100% + 1px)",
    },
    initial: {
      opacity: 0,
      height: 0,
    },
    exit: {
      opacity: 0,
      height: 0,
    },
    transition: { duration: 0.3, ease: "easeInOut" },
  };

  return (
    <motion.article
      variants={fadeIn}
      initial="initial"
      animate="animate"
      transition="transition"
      className={open ? "gearslot-open" : "gearslot-closed"}
      key={name}
      ref={slotRef}
      layout
    >
      <figure>
        <button onClick={toggleOpen} style={{ cursor: "pointer" }} title={open ? "Close List" : "Open List"}>
          <img
            src={`${gearURL}${name.toLowerCase().replace(/\s/g, "").replace(/-/, "")}.png`}
            className="gear-icon"
          />
          <figcaption>
            <h3 className="gear-type">
              {type === "Weapons" ? weaponToFullName(name) : name}
              <span>
                <img
                  src="/static/img/plus.svg"
                  className={`toggle ${open ? "open" : "closed"}`}
                  alt={open ? "Close Gear Slot" : "Open Gear Slot"}
                />
              </span>
            </h3>
            <small>
              <em>{containsItems ? `${numItems} items found.` : `0 items found.`}</em>
            </small>
          </figcaption>
        </button>
        <AnimatePresence exitBeforeEnter>
          {open && (
            <motion.div
              key="paginate-gear"
              variants={paginateMotionVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition="transition"
              layout
            >
              <PaginateGear
                currentPageData={currentPageData}
                pageCount={pageCount}
                currentPage={currentPage}
                handlePageClick={handlePageClick}
                containsItems={containsItems}
                faction={faction}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </figure>
    </motion.article>
  );
};
