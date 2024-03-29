import React from "react";
import { Faction, Race, PlayerClass, Name, Level } from "./characterInput";

const EditCharacter = ({ updateState, appState }) => {
	return (
		<section className="edit-character-section">
			<section className="input-container">
				<div className="container">
					<div>
						<Name changeName={updateState.updateName} currentName={appState.name} />
						<section>
							<Level changeLevel={updateState.updateLevel} currentLevel={appState.level} />
							<Faction
								changeFaction={updateState.updateFaction}
								chosenFaction={appState.faction}
								data={appState.gameData}
							/>
						</section>
					</div>
					<div>
						<Race
							changeRace={updateState.updateRace}
							chosenRace={appState.race}
							faction={appState.faction}
							data={appState.gameData}
						/>
						<PlayerClass
							changeClass={updateState.updateClass}
							race={appState.race}
							chosenClass={appState.playerClass}
							data={appState.gameData}
						/>
					</div>
				</div>
			</section>
		</section>
	);
};

export default EditCharacter;
