import React from "react";

const factionURL = "/static/img/faction/";

const ToggleItemStats = ({ drop, itemFaction, faction, reqLvl, iLvl }) => {
  return (
    <>
      <aside>
        {iLvl && <small className="iLvl">Item Level {iLvl}</small>}
        <small>Requires Level {reqLvl}</small>
      </aside>
      {drop && (
        <h4>
          Dropped by:
          <br />
          {drop === "Drop" ? "World Drop" : drop}
        </h4>
      )}
      {itemFaction && (
        <img
          className="faction-icon"
          src={`${factionURL}${faction.toLowerCase()}.png`}
          alt={`${faction} Only`}
          title={`${faction} Only`}
        />
      )}
    </>
  );
};

export default ToggleItemStats;
