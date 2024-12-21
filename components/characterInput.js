import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import React, { useState } from "react";

const InputButtonSection = ({ title, currentState, changeState, itemList, gender }) => {
  const srcURL = `/static/img/${title.toLowerCase()}/`;
  let itemURL = "";
  let elementClass = "";
  switch (title) {
    case "Faction":
      itemURL = (item) => `${srcURL}${item.toLowerCase()}.png`;
      elementClass = (title) => title.toLowerCase();
      break;
    case "Class":
      itemURL = (item) => `${srcURL}${item.toLowerCase()}.png`;
      elementClass = (title) => `player${title.toLowerCase()}`;
      break;
    case "Race":
      itemURL = (item) =>
        `${srcURL}${item.toLowerCase().replace(/\s/g, "")}-${
          gender ? (gender === "female" ? "female" : "male") : "male"
        }.png`;
      elementClass = (title) => title.toLowerCase();
      break;
  }
  if (itemList) {
    return (
      <div className={elementClass(title)}>
        <h2>Choose Your {title}</h2>
        {itemList.map((item, index) => (
          <label
            className={`${title.toLowerCase()}-icon ${
              currentState !== item && currentState !== "" ? "inactive" : "active"
            }`}
            key={index}
            onClick={() => changeState(item)}
            tabIndex="0"
          >
            <input type="radio" name={title} value={item} />
            <figure>
              <img src={itemURL(item)} alt={item} data-hover={item} />
              <figcaption>{item}</figcaption>
            </figure>
          </label>
        ))}
      </div>
    );
  } else {
    return null;
  }
};

const InputDataSection = ({ title, caption, currentState, changeState }) => {
  return (
    <div className={title.toLowerCase()}>
      <label htmlFor={title.toLowerCase()}>
        <h2>{caption}</h2>
      </label>
      <input
        name={title.toLowerCase()}
        type="text"
        value={currentState}
        onChange={(e) => changeState(e)}
        tabIndex="0"
        minLength="2"
        maxLength="12"
      />
    </div>
  );
};

const InputRadioSection = ({ title, caption, currentState, changeState }) => {
  return (
    <div className={title.toLowerCase()}>
      <h2>{caption}</h2>
      <label
        className={`${title.toLowerCase()} ${
          currentState !== "male" && currentState !== "" ? "inactive" : "active"
        }`}
        htmlFor={title}
        onClick={() => changeState("male")}
      >
        <input type="radio" name={title} value="male" tabIndex="0" />
        <h3>♂ Male</h3>
      </label>
      <label
        className={`${title.toLowerCase()} ${
          currentState !== "female" && currentState !== "" ? "inactive" : "active"
        }`}
        htmlFor={title}
        onClick={() => changeState("female")}
      >
        <input
          type="radio"
          name={title}
          value="female"
          onClick={(e) => changeState(e.target.value)}
          tabIndex="0"
          className={`${title.toLowerCase()} ${
            currentState !== "female" && currentState !== "" ? "inactive" : "active"
          }`}
        />
        <h3>♀ Female</h3>
      </label>
    </div>
  );
};

export const InputCharacter = ({ action, character, gameData }) => {
  const { formAction, title, callback } = action;
  const [formState, setState] = character
    ? useState(character)
    : useState({
        faction: "",
        level: 1,
        name: "",
        playerClass: "",
        race: "",
        gender: "",
      });
  const updateName = (e) => {
    e.target.value.match(/^[a-zA-Z]+$/) || e.target.value === ""
      ? setState({
          ...formState,
          name: e.target.value.toLowerCase().replace(/^\w/, (c) => c.toUpperCase()),
        })
      : null;
  };
  const updateLevel = (e) => {
    if (!isNaN(e.target.value)) {
      const newLevel = e.target.value;
      const level = newLevel === "" ? "" : newLevel < 1 ? 1 : newLevel > 70 ? 70 : newLevel;
      setState({ ...formState, level });
    }
  };
  const updateGender = (gender) => {
    setState({ ...formState, gender });
  };
  const updateFaction = (faction) => {
    setState({ ...formState, faction, race: "", playerClass: "" });
  };
  const updateRace = (race) => {
    setState({ ...formState, race, playerClass: "" });
  };
  const updateClass = (playerClass) => {
    setState({ ...formState, playerClass });
  };
  const { name, level, gender, faction, playerClass, race } = formState;

  return (
    <section className="character-input">
      <section className="input-faction">
        <InputButtonSection
          title="Faction"
          currentState={faction}
          changeState={updateFaction}
          itemList={gameData.availableFactions}
        />
      </section>
      <section className="input-race">
        <InputButtonSection
          title="Race"
          currentState={race}
          changeState={updateRace}
          itemList={gameData[`${faction.toLowerCase()}Races`]}
          gender={gender}
        />
      </section>
      <section className="input-class">
        <InputButtonSection
          title="Class"
          currentState={playerClass}
          changeState={updateClass}
          itemList={gameData[`${race.replace(/\s/g, "").toLowerCase()}Classes`]}
        />
      </section>
      {faction && playerClass && race ? (
        <section className="input-namelevel">
          <InputDataSection title="Name" caption="Name" currentState={name} changeState={updateName} />
          <InputDataSection title="Level" caption="Level" currentState={level} changeState={updateLevel} />
          <InputRadioSection
            title="Gender"
            caption="Gender"
            changeState={updateGender}
            currentState={gender}
          />
        </section>
      ) : null}
      {name && level && gender && faction && playerClass && race ? (
        <section className="input-submit">
          <button
            onClick={() => {
              formAction(formState);
              return callback();
            }}
          >
            {title}
          </button>
        </section>
      ) : null}
    </section>
  );
};

export const NewCharacterModal = ({ addCharacter, gameData, show, onClose }) => {
  const addAction = {
    title: "Add New Character",
    formAction: addCharacter,
    callback: onClose,
  };
  const closeModal = (e) => {
    e.preventDefault();
    onClose();
  };
  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          key="overlay"
        >
          <AnimateSharedLayout>
            <motion.div
              className="modal"
              initial={{ opacity: 0, y: "5rem" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              key="modal"
              layout
            >
              <div className="modal-header">
                <h2>Add a New Character</h2>
              </div>
              <div className="modal-content">
                <InputCharacter action={addAction} gameData={gameData} parent="New Character Modal" />
              </div>
              <div className="modal-close">
                <motion.a href="#" onClick={closeModal} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <img width="16" height="16" src="/static/img/exit.svg" alt="Close Character Input" />
                </motion.a>
              </div>
            </motion.div>
          </AnimateSharedLayout>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export const EditCharacterModal = ({ character, editCharacter, gameData, show, onClose }) => {
  const closeModal = (e) => {
    e.preventDefault();
    onClose();
  };
  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          key="overlay"
        >
          <AnimateSharedLayout>
            <motion.div
              className="modal"
              initial={{ opacity: 0, y: "5rem" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              key="modal"
              layout
            >
              <div className="modal-header">
                <h2>Edit {character.name}</h2>
              </div>
              <div className="modal-content">
                <InputCharacter
                  action={editCharacter}
                  character={character}
                  gameData={gameData}
                  parent="Edit Character Modal"
                />
              </div>
              <div className="modal-close">
                <motion.a href="#" onClick={closeModal} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <img width="16" height="16" src="/static/img/exit.svg" alt="Close Character Input" />
                </motion.a>
              </div>
            </motion.div>
          </AnimateSharedLayout>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};
