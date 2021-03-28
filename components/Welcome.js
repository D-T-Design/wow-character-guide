import Link from "next/link";
import {
	Faction,
	Race,
	PlayerClass,
	Name,
	Level,
	InputCharacter,
} from "../components/characterInput";
export default function Welcome({ props }) {
	const { updateState, appState, classData, error, isPending } = props;
	const { name, level, faction, race, playerClass } = appState;
	const {
		updateName,
		updateLevel,
		updateFaction,
		updateRace,
		updateClass,
		addCharacter,
	} = updateState;
	return (
		<InputCharacter props={props} />
		// <section className="input-character">
		// 	<section className="input-namelevel">
		// 		<Name changeName={updateName} currentName={name} />
		// 		<Level changeLevel={updateLevel} currentLevel={level} />
		// 	</section>
		// 	<section className="input-faction">
		// 		<Faction
		// 			changeFaction={updateFaction}
		// 			chosenFaction={faction}
		// 			data={classData}
		// 			pending={isPending}
		// 			error={error}
		// 		/>
		// 	</section>
		// 	<section className="input-race">
		// 		<Race changeRace={updateRace} chosenRace={race} faction={faction} data={classData} />
		// 	</section>
		// 	<section className="input-class">
		// 		<PlayerClass
		// 			changeClass={updateClass}
		// 			race={race}
		// 			chosenClass={playerClass}
		// 			data={classData}
		// 		/>
		// 	</section>
		// 	<section className="input-submit">
		// 		<Link href="/gear">
		// 			<a onClick={() => addCharacter({ name, level, faction, race, playerClass })}>
		// 				Add Character
		// 			</a>
		// 		</Link>
		// 	</section>
		// </section>
	);
}
