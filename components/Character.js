import React, { useState } from "react";
import { motion, AnimatePresence, AnimateSharedLayout, MotionConfig } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

import { InputCharacter, EditCharacterModal } from "../components/characterInput";

const CharacterDisplay = React.forwardRef((props, ref) => {
  const router = useRouter();
  const { character, updateState, appState } = props;
  const { name, level, faction, race, playerClass, gender, id } = character;
  const { removeCharacter, selectCharacter, updateCharacter } = updateState;
  const isSelectedCharacter = id === appState.character;
  const numSavedCharacters = appState.savedCharacters.length;

  const [removalApproved, approveRemoval] = useState(false);

  const factionImgURL = `/static/img/faction/${faction.toLowerCase()}.png`;
  const raceImgURL = `/static/img/race/${race.toLowerCase().replace(/\s/g, "")}-${
    gender ? gender : "male"
  }.png`;
  const classImgURL = `/static/img/class/${playerClass.toLowerCase()}.png`;
  const iconURL = `/static/img/`;

  const [characterModal, setCharacterModal] = useState(false);
  const toggleCharacterModal = () => setCharacterModal(!characterModal);
  const editAction = {
    title: "Submit Changes",
    formAction: updateCharacter,
    callback: toggleCharacterModal,
  };
  return (
    <li
      ref={ref}
      key={id}
      className={`saved-character ${playerClass}${isSelectedCharacter ? " class-selected" : ""}`}
    >
      <figure>
        <div>
          <img src={factionImgURL} title={faction} className="faction" />
          <img src={raceImgURL} title={race} className="race" />
          <img src={classImgURL} title={playerClass} className="playerclass" />
        </div>
        <figcaption>
          <h3>{name}</h3>
          <h4>
            {`${level} ${race} `}
            <span className={playerClass}>{playerClass}</span>
          </h4>
          <section>
            <ul>
              {!isSelectedCharacter && (
                <li>
                  <button
                    onClick={() => {
                      approveRemoval(false);
                      return selectCharacter(id);
                    }}
                    className="button-select"
                    title="Click to select this character"
                  >
                    <img src={`${iconURL}swap.svg`} />
                    Swap
                  </button>
                </li>
              )}
              <li>
                <button
                  onClick={() => {
                    approveRemoval(false);
                    return toggleCharacterModal();
                  }}
                  className={!characterModal ? "button-edit-inactive" : "button-edit-active"}
                  title="Click to edit this character"
                >
                  <img src={`${iconURL}edit.svg`} />
                  Edit
                </button>
                {characterModal && (
                  <EditCharacterModal
                    editCharacter={editAction}
                    character={character}
                    gameData={appState.gameData}
                    show={characterModal}
                    onClose={() => toggleCharacterModal()}
                  />
                )}
              </li>
              <li>
                <button
                  onClick={() => {
                    if (removalApproved) {
                      // User has clicked delete once already, proceed with delete, route if needed
                      approveRemoval(false);
                      if (numSavedCharacters === 1) {
                        removeCharacter(id);
                        router.push("/");
                      } else {
                        removeCharacter(id);
                      }
                    } else {
                      // User has not clicked delete button, approveRemoval allows deletion on another button press
                      return approveRemoval(true);
                    }
                  }}
                  className="button-delete"
                  title="Click to permanently delete character"
                >
                  <img src={`${iconURL}trash.svg`} />
                  {removalApproved ? "Are you sure?" : "Delete"}
                </button>
              </li>
              {isSelectedCharacter && (
                <li className="navigate">
                  <Link href={`/classguides/${playerClass.toLowerCase()}`}>
                    <button className="button-navigate" title={`See all ${playerClass} guides`}>
                      <img src={`${iconURL}guide.svg`} />
                      Guides
                    </button>
                  </Link>
                  <Link href={`/gear`}>
                    <button className="button-navigate" title={`See all ${playerClass} gear`}>
                      <img src={`${iconURL}loot.svg`} />
                      Gear
                    </button>
                  </Link>
                  <Link href={`/zones`}>
                    <button className="button-navigate" title={`See all ${playerClass} zones`}>
                      <img src={`${iconURL}zone.svg`} />
                      Zones
                    </button>
                  </Link>
                </li>
              )}
            </ul>
          </section>
        </figcaption>
      </figure>
    </li>
  );
});

const MotionCharacter = motion(CharacterDisplay, { forwardMotionProps: true });

export default function Character({ props }) {
  const { updateState, appState, changePage } = props;
  const { savedCharacters, gameData } = appState;
  const { addCharacter } = updateState;

  const [addForm, toggleAddForm] = useState(false);
  const switchAddForm = () => toggleAddForm(!addForm);
  const addAction = {
    title: "Add Character",
    formAction: addCharacter,
    callback: switchAddForm,
  };

  const transition = {
    type: "tween",
    duration: 0.2,
  };
  const listVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };
  const characterVariant = {
    hidden: { opacity: 0, y: 20 },
    fadeIn: {
      opacity: 1,
      y: 0,
    },
  };
  const buttonVariant = {
    hidden: { opacity: 0 },
    fadeIn: {
      opacity: 1,
    },
  };
  return (
    <>
      <section className="edit-characters">
        <h2>Your Saved Characters</h2>
        <MotionConfig transition={transition}>
          <AnimateSharedLayout>
            {savedCharacters && (
              <motion.ul
                className="character-list"
                variants={listVariant}
                initial="hidden"
                animate="show"
                key="characterList"
              >
                <AnimatePresence>
                  {savedCharacters.map((character, index) => (
                    <MotionCharacter
                      character={character}
                      key={index}
                      updateState={updateState}
                      appState={appState}
                      changePage={changePage}
                      variants={characterVariant}
                      initial="hidden"
                      exit="hidden"
                      animate="fadeIn"
                    />
                  ))}
                </AnimatePresence>
              </motion.ul>
            )}
          </AnimateSharedLayout>
        </MotionConfig>
      </section>
      <section className="add-characters">
        <h2>Add Characters</h2>
        <AnimatePresence exitBeforeEnter>
          {addForm ? (
            <>
              <motion.button
                onClick={() => toggleAddForm(!addForm)}
                className="character-add open"
                variants={characterVariant}
                initial="hidden"
                exit="hidden"
                animate="fadeIn"
              >
                <img src="/static/img/exit.svg" />
                Cancel Add Character
              </motion.button>
              <InputCharacter action={addAction} gameData={gameData} parent="Saved Character Page" />
            </>
          ) : (
            <motion.button
              onClick={() => toggleAddForm(!addForm)}
              className="character-add"
              variants={characterVariant}
              initial="hidden"
              exit="hidden"
              animate="fadeIn"
            >
              <img src="/static/img/plus.svg" />
              Add Character
            </motion.button>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}
