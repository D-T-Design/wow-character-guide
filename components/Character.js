import React, { useState } from "react";

import { InputCharacter } from "../components/characterInput";
import classColor from "../utils/classColor";

export default function Character({ props }) {
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
						key={index}
						updateState={updateState}
						appState={appState}
					/>
				))}
			</ul>
			<h2>Add Characters</h2>
			{addForm ? (
				<InputCharacter action={addAction} />
			) : (
				<button onClick={() => toggleAddForm(!addForm)}>Add Character</button>
			)}
		</section>
	);
}

const CharacterDisplay = ({ character, updateState, appState }) => {
	const { removeCharacter, selectCharacter, updateCharacter } = updateState;
	const [editCharacter, toggleEdit] = useState(false);
	const switchEditForm = () => toggleEdit(!editCharacter);
	const editAction = {
		title: "Submit Changes",
		formAction: updateCharacter,
		callback: switchEditForm,
	};
	return character.id === appState.character ? null : (
		<li className={character.id === appState.character ? "selected" : ""}>
			<figure>
				<div>
					<img
						src={`/static/img/faction/${character.faction.toLowerCase()}.png`}
						title={character.faction}
					/>
					<img
						src={`/static/img/race/${character.race.toLowerCase().replace(/\s/g, "")}-${
							character.gender ? character.gender : "male"
						}.png`}
						title={character.race}
					/>
					<img
						src={`/static/img/class/${character.playerClass.toLowerCase()}.png`}
						title={character.playerClass}
					/>
				</div>
				<figcaption>
					<h3>{character.name}</h3>
					<h4>
						{character.level} {character.race}{" "}
						<span style={{ color: classColor(character.playerClass) }}>
							{character.playerClass}
						</span>
					</h4>
					<h5>{character.faction}</h5>
					<section>
						<button onClick={() => selectCharacter(character.id)} className="button-select">
							Select Character
						</button>
						<button
							onClick={() => toggleEdit(!editCharacter)}
							className={!editCharacter ? "button-edit-inactive" : "button-edit-active"}
						>
							{!editCharacter ? "Edit Character" : "Cancel Edit"}
						</button>
						<button onClick={() => removeCharacter(character.id)} className="button-delete">
							Delete Character
						</button>
						{editCharacter && <InputCharacter action={editAction} character={character} />}
					</section>
				</figcaption>
			</figure>
		</li>
	);
};
