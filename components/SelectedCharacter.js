import React, { useState } from "react";
import { InputCharacter } from "./characterInput";
export const SelectedCharacter = ({ appState, updateState }) => {
	const characterID = appState.character;
	const character = appState.savedCharacters.find((char) => char.id === characterID);
	const { removeCharacter, updateCharacter } = updateState;
	const [editCharacter, toggleEdit] = useState(false);
	const [removalApproved, approveRemoval] = useState(false);
	const switchEditForm = () => toggleEdit(!editCharacter);
	const editAction = {
		title: "Submit Changes",
		formAction: updateCharacter,
		callback: switchEditForm,
	};
	return (
		<div className="selected">
			<h2>Current Character</h2>

			<figure>
				<figcaption>
					<aside>
						LVL <strong>{character.level}</strong>
					</aside>

					<h3>{character.name}</h3>

					<h4>
						{character.race} <span className={character.playerClass}>{character.playerClass}</span>
					</h4>
				</figcaption>

				<div>
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

				<section>
					<button
						onClick={() => toggleEdit(!editCharacter)}
						className={!editCharacter ? "button-edit-inactive" : "button-edit-active"}
					>
						{!editCharacter ? "Edit" : "Cancel Edit"}
					</button>

					{removalApproved ? (
						<button
							onClick={() => {
								approveRemoval(false);
								return removeCharacter(character.id);
							}}
							className="button-delete"
						>
							Are you sure?
						</button>
					) : (
						<button onClick={() => approveRemoval(true)} className="button-delete">
							Delete
						</button>
					)}

					{editCharacter && <InputCharacter action={editAction} character={character} />}
				</section>
			</figure>
		</div>
	);
};
