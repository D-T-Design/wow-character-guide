import React, { useState } from "react";

import getClassGear from "../utils/getClassGear";
import getAllItems from "../utils/getAllItems";
import filterGearByLevel from "../utils/filterGearByLevel";
import separateGearByType from "../utils/separateGearByType";
import useClassData from "../utils/useClassData";
import { weaponToFullName } from "../utils/weaponToFullName";

import { GearSlot } from "../components/GearSlot";

const Gear = ({ appState }) => {
	const { savedCharacters } = appState;
	let selectedCharacter = {};
	if (savedCharacters.length > 0) {
		selectedCharacter = appState.savedCharacters.find(
			(character) => character.id === appState.character
		);
	}
	const { playerClass, level, faction } = selectedCharacter.playerClass
		? selectedCharacter
		: { playerClass: "Rogue", level: 1, faction: "Horde" };
	const classData = !appState.gameData ? useClassData().classData : appState.gameData;

	const { gear, error, isPending } = getClassGear(playerClass);
	const { items, itemsError, itemsPending } = getAllItems();
	const classGear = items.filter((item) => gear.includes(item.id));
	const { gearData } = classGear ? filterGearByLevel(classGear, level) : [{}];
	const separatedGearByType = gearData ? separateGearByType(gearData) : [{}, {}, {}];
	const classWepTypes = classData.classes.find((className) => className.name === playerClass)
		.reference.weaponTypes;

	const [phaseState, setPhase] = useState(1);

	return (
		<section className="content gear">
			<div className="container">
				<h2>Leveling Gear</h2>
				{level === "70" && (
					<aside>
						<label htmlFor="phasefilter">
							Filter by Phase:
							<br />
							{phaseState}
						</label>
						<input
							type="range"
							min="1"
							max="5"
							value={phaseState}
							className="phasefilter"
							id="phasefilter"
							name="phasefilter"
							onChange={(e) => setPhase(e.target.value)}
						/>
					</aside>
				)}
				<main>
					{error || itemsError ? (
						<p>Error loading class gear. Let me know in a message!</p>
					) : isPending || itemsPending ? (
						<p>Loading gear based on your class and level...</p>
					) : (
						separatedGearByType.map((gearType, index) => {
							const { type } = gearType;
							// const items = gearType.items.filter((item))
							return (
								<div className="column" key={index}>
									<h3>{type}</h3>
									{gearType.items.map((itemType, index) => {
										const itemKey = Object.keys(itemType)[0];
										if (
											(gearType.type === "Weapons" &&
												classWepTypes.some(
													(wepType) => wepType.name === weaponToFullName(itemKey)
												)) ||
											gearType.type != "Weapons"
										) {
											return (
												<GearSlot
													name={itemKey}
													items={itemType[itemKey]}
													key={index}
													level={level}
													faction={faction}
													phase={phaseState}
													type={type}
												/>
											);
										} else return null;
									})}
								</div>
							);
						})
					)}
				</main>
			</div>
		</section>
	);
};

export default Gear;
