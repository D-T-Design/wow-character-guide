import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { InputCharacter } from "../components/characterInput";
const CharacterDisplay = React.forwardRef((props, ref) => {
	const { character, updateState, appState, gameData, updateGameData } = props;
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
								{editCharacter && (
									<InputCharacter
										action={editAction}
										character={character}
										gameData={gameData}
										updateGameData={updateGameData}
									/>
								)}
							</li>
							{!editCharacter && (
								<li>
									<button
										onClick={() => {
											if (removalApproved) {
												approveRemoval(false);
												return removeCharacter(id);
											} else {
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
							)}
							{isSelectedCharacter && (
								<li className="navigate">
									<Link href={`/classguides/${playerClass.toLowerCase()}`}>
										<a>
											<button className="button-navigate" title={`See all ${playerClass} guides`}>
												<img src={`${iconURL}guide.svg`} />
												Guides
											</button>
										</a>
									</Link>
									<Link href={`/gear`}>
										<a>
											<button className="button-navigate" title={`See all ${playerClass} gear`}>
												<img src={`${iconURL}loot.svg`} />
												Gear
											</button>
										</a>
									</Link>
									<Link href={`/zones`}>
										<a>
											<button className="button-navigate" title={`See all ${playerClass} zones`}>
												<img src={`${iconURL}zone.svg`} />
												Zones
											</button>
										</a>
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
	const { updateState, appState, gameData } = props;
	const { savedCharacters } = appState;
	const { addCharacter, updateGameData } = updateState;
	const [addForm, toggleAddForm] = useState(false);
	const switchAddForm = () => toggleAddForm(!addForm);
	const addAction = {
		title: "Add Character",
		formAction: addCharacter,
		callback: switchAddForm,
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
	return (
		<section className="edit-characters">
			<h2>Your Saved Characters</h2>
			{savedCharacters && (
				<motion.ul
					className="character-list"
					variants={listVariant}
					initial="hidden"
					animate="show"
					key="characterList"
				>
					{savedCharacters.map((character, index) => (
						<MotionCharacter
							character={character}
							key={index}
							updateState={updateState}
							appState={appState}
							gameData={gameData}
							updateGameData={updateGameData}
							variants={characterVariant}
							initial="hidden"
							animate="fadeIn"
						/>
					))}
				</motion.ul>
			)}

			<h2>Add Characters</h2>
			{addForm ? (
				<>
					<button onClick={() => toggleAddForm(!addForm)} className="character-add">
						<img src="/static/img/exit.svg" />
						Cancel Add Character
					</button>
					<InputCharacter action={addAction} gameData={gameData} updateGameData={updateGameData} />
				</>
			) : (
				<button onClick={() => toggleAddForm(!addForm)} className="character-add">
					<img src="/static/img/plus.svg" />
					Add Character
				</button>
			)}
		</section>
	);
}
