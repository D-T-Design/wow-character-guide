import React, { useState } from "react";

import { InputCharacter } from "../components/characterInput";
import useClassData from "../utils/useClassData";
import classColor from "../utils/classColor";

export default function Character({ props }) {
	const { classData } = useClassData();
	const { updateState, appState } = props;
	const { savedCharacters } = appState;
	const { addCharacter } = updateState;
	const [addForm, toggleAddForm] = useState(false);
	const switchAddForm = () => toggleAddForm(!addForm);
	const addAction = {
		title: "Add Character",
		formAction: addCharacter,
		callback: switchAddForm,
	};
	return (
		<section className="edit-characters">
			<ul className="character-list">
				{savedCharacters.map((character, index) => (
					<CharacterDisplay
						character={character}
						index={index}
						updateState={updateState}
						appState={appState}
						classData={classData}
					/>
				))}
			</ul>
			<h2>Add Characters</h2>
			<button onClick={() => toggleAddForm(!addForm)}>Add Character</button>
			{addForm && <InputCharacter classData={classData} action={addAction} />}
		</section>
	);
}

const CharacterDisplay = ({ character, index, updateState, appState, classData }) => {
	const { removeCharacter, selectCharacter, updateCharacter } = updateState;
	const [editCharacter, toggleEdit] = useState(false);
	const switchEditForm = () => toggleEdit(!editCharacter);
	const editAction = {
		title: "Submit Changes",
		formAction: updateCharacter,
		callback: switchEditForm,
	};
	return (
		<li className={character.ts === appState.character ? "selected" : ""} key={index}>
			<figure id={character.ts}>
				<figcaption>
					<h3>{character.name}</h3>
					<h4>
						{character.level} {character.race}{" "}
						<span style={{ color: classColor(character.playerClass) }}>
							{character.playerClass}
						</span>
					</h4>
					<h5>{character.faction}</h5>
				</figcaption>
			</figure>
			<button onClick={() => selectCharacter(character.ts)}>Select Character</button>
			<button onClick={() => toggleEdit(!editCharacter)}>Edit Character</button>
			<button onClick={() => removeCharacter(character.ts)}>Delete Character</button>
			{editCharacter && (
				<InputCharacter classData={classData} action={editAction} character={character} />
			)}
		</li>
	);
};
