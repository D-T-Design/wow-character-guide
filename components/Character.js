import React, { useState } from "react";
import Link from "next/link";

import { Faction, Race, PlayerClass, Name, Level } from "../components/characterInput";
import classColor from "../utils/classColor";

export default function Character({ props }) {
	const { updateState, appState, savedCharacters, classData, error, isPending } = props;
	const { name, level, faction, race, playerClass } = appState;
	const {
		updateName,
		updateLevel,
		updateFaction,
		updateRace,
		updateClass,
		addCharacter,
		removeCharacter,
		updateCharacter,
	} = updateState;
	const [editCharacter, toggleEdit] = useState(false);
	return (
		<section className="edit-characters">
			<ul className="character-list">
				{savedCharacters.map((character, index) => (
					<li>
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
						<button onClick={() => toggleEdit(!editCharacter)}>Edit Character</button>
						<button onClick={() => removeCharacter(index)}>Delete Character</button>
						{editCharacter && (
							<section>
								<section className="input-namelevel">
									<Name changeName={updateName} currentName={name} />
									<Level changeLevel={updateLevel} currentLevel={level} />
								</section>
								<section className="input-faction">
									<Faction
										changeFaction={updateFaction}
										chosenFaction={faction}
										data={classData}
										pending={isPending}
										error={error}
									/>
								</section>
								<section className="input-race">
									<Race
										changeRace={updateRace}
										chosenRace={race}
										faction={faction}
										data={classData}
									/>
								</section>
								<section className="input-class">
									<PlayerClass
										changeClass={updateClass}
										race={race}
										chosenClass={playerClass}
										data={classData}
									/>
								</section>
								<section className="input-submit">
									<button
										onClick={() =>
											updateCharacter({ name, level, faction, race, playerClass }, index)
										}
									>
										Submit Changes
									</button>
								</section>
							</section>
						)}
					</li>
				))}
			</ul>
			<h2>Add Characters</h2>
			<button>Add Character</button>
		</section>
	);
}
