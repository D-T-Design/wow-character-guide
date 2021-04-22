import React, { useState } from "react";

import { InputCharacter } from "../components/characterInput";

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
			<h2>Your Saved Characters</h2>
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
				<>
					<button onClick={() => toggleAddForm(!addForm)}>Cancel Add Character</button>
					<InputCharacter action={addAction} />
				</>
			) : (
				<button onClick={() => toggleAddForm(!addForm)}>Add Character</button>
			)}
		</section>
	);
}

const CharacterDisplay = ({ character, updateState, appState }) => {
	const { name, level, faction, race, playerClass, gender, id } = character;
	const { removeCharacter, selectCharacter, updateCharacter } = updateState;
	const isSelectedCharacter = id === appState.character;
	const [editCharacter, toggleEdit] = useState(false);
	const switchEditForm = () => toggleEdit(!editCharacter);
	const editAction = {
		title: "Submit Changes",
		formAction: updateCharacter,
		callback: switchEditForm,
	};
	const [removalApproved, approveRemoval] = useState(false);
	const factionImgURL = `/static/img/faction/${faction.toLowerCase()}.png`;
	const raceImgURL = `/static/img/race/${race.toLowerCase().replace(/\s/g, "")}-${
		gender ? gender : "male"
	}.png`;
	const classImgURL = `/static/img/class/${playerClass.toLowerCase()}.png`;
	const iconURL = `/static/img/`;
	return (
		<li className={`saved-character ${playerClass}${isSelectedCharacter ? " class-selected" : ""}`}>
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
							{!isSelectedCharacter && !editCharacter && (
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
										return toggleEdit(!editCharacter);
									}}
									className={!editCharacter ? "button-edit-inactive" : "button-edit-active"}
									title="Click to edit this character"
								>
									{!editCharacter ? (
										<>
											<img src={`${iconURL}edit.svg`} />
											Edit
										</>
									) : (
										<>
											<img src={`${iconURL}exit.svg`} />
											Cancel Edit
										</>
									)}
								</button>
								{editCharacter && <InputCharacter action={editAction} character={character} />}
							</li>
							{!editCharacter && (
								<li>
									{removalApproved ? (
										<>
											<button
												onClick={() => {
													approveRemoval(false);
													return removeCharacter(id);
												}}
												className="button-delete"
												title="Click to permanently delete character"
											>
												<img src={`${iconURL}trash.svg`} />
												Are you sure?
											</button>
										</>
									) : (
										<button
											onClick={() => approveRemoval(true)}
											className="button-delete"
											title="Click to permanently delete character"
										>
											<img src={`${iconURL}trash.svg`} />
											Delete
										</button>
									)}
								</li>
							)}
						</ul>
					</section>
				</figcaption>
			</figure>
		</li>
	);
};
