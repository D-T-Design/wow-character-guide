import React from "react";

import getClassGear from "../utils/getClassGear";
import filterGearByLevel from "../utils/filterGearByLevel";

import { GearSlot } from "../components/GearSlot";

const Gear = ({ appState }) => {
	const selectedCharacter = appState.savedCharacters.find(
		(character) => character.ts === appState.character
	);
	const { playerClass, level, faction } = selectedCharacter;
	const { classGear, error, isPending } = getClassGear(playerClass);
	const { gearData } = filterGearByLevel(classGear, level);
	const weaponSlots = ["Ranged", "Off Hand", "One-Hand", "Main Hand"];
	const armorSlots = [
		"Shoulder",
		"Head",
		"Wrist",
		"Legs",
		"Feet",
		"Hands",
		"Chest",
		"Waist",
		"Back",
	];
	const jewelrySlots = ["Neck", "Finger", "Trinket"];
	const weaponList = gearData.filter((slot) => {
		const { name } = slot;
		return weaponSlots.includes(name);
	});
	const armorList = gearData.filter((slot) => {
		const { name } = slot;
		return armorSlots.includes(name);
	});
	const jewelryList = gearData.filter((slot) => {
		const { name } = slot;
		return jewelrySlots.includes(name);
	});

	return (
		<section className="content gear">
			<div className="container">
				<h1>Leveling Gear</h1>
				{console.log(gearData)}
				<main>
					{error ? (
						<p>Error loading class gear. Let me know in a message!</p>
					) : isPending ? (
						<p>Loading gear based on your class and level...</p>
					) : (
						<>
							<div className="column">
								<h3>Weapons</h3>
								{weaponList
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
							<div className="column">
								<h3>Armor</h3>
								{armorList
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
							<div className="column">
								<h3>Jewelery</h3>
								{jewelryList
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
						</>
					)}
				</main>
			</div>
		</section>
	);
};

export default Gear;
