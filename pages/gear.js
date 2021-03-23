import React from "react";
import getClassGear from "../utils/getClassGear";
import filterGearByLevel from "../utils/filterGearByLevel";
import { GearSlot } from "../components/GearSlot";

const Gear = ({ appState }) => {
	const { playerClass, level } = appState;
	const { classGear, error, isPending } = getClassGear(playerClass);
	const { gearData } = filterGearByLevel(classGear, level);
	if (error) {
		return (
			<section className="content">
				<div className="container">
					<h1>Leveling Gear</h1>
					Error loading class gear. See console.
				</div>
			</section>
		);
	}
	if (isPending) {
		return (
			<section className="content">
				<div className="container">
					<h1>Leveling Gear</h1>
					Loading gear based on your class and level...
				</div>
			</section>
		);
	}
	return (
		<section className="content">
			<div className="container">
				<h1>Leveling Gear</h1>
				<div className="column">
					<h2>Weapons</h2>
					{gearData
						.slice(0)
						.reverse()
						.map((slotType, index) => (
							<GearSlot name={slotType.name} items={slotType.items} key={index} />
						))}
				</div>
			</div>
		</section>
	);
};

export default Gear;
