import React from "react";

import getWowheadXML from "../utils/getWowheadXML.js";
import getClassGear from "../utils/getClassGear";
import filterGearByLevel from "../utils/filterGearByLevel";
import separateGearByType from "../utils/separateGearByType";

import { GearSlot } from "../components/GearSlot";

const Gear = ({ appState }) => {
	const selectedCharacter = appState.savedCharacters.find(
		(character) => character.id === appState.character
	);
	const { playerClass, level, faction } = selectedCharacter
		? selectedCharacter
		: { playerClass: "Rogue", level: 1, faction: "Horde" };
	const { classGear, error, isPending } = getClassGear(playerClass);
	const { gearData } = classGear ? filterGearByLevel(classGear, level) : [{}];
	const separatedGearByType = gearData ? separateGearByType(gearData) : [{}, {}, {}];
	const { xmldata, xmlerror } = getWowheadXML();

	return (
		<section className="content gear">
			<div className="container">
				<h1>Leveling Gear</h1>
				{console.log(xmldata, xmlerror)}
				<main>
					{error ? (
						<p>Error loading class gear. Let me know in a message!</p>
					) : isPending ? (
						<p>Loading gear based on your class and level...</p>
					) : (
						separatedGearByType.map((gearType, index) => {
							const { type } = gearType;
							const key = Object.keys(gearType)[1];
							return (
								<div className="column" key={index}>
									<h3>{type}</h3>
									{gearType[key]
										.slice(0)
										.reverse()
										.map((slotType, index) => {
											const { name, items } = slotType;
											return (
												<GearSlot
													name={name}
													items={items}
													key={index}
													level={level}
													faction={faction}
												/>
											);
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
