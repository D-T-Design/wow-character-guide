import React, { useEffect } from "react";
import getClassGear from "../utils/getClassGear";
import filterGearByLevel from "../utils/filterGearByLevel";
import { GearSlot } from "../components/GearSlot";

const Gear = ({ appState, updateState }) => {
	const { playerClass, level } = appState;
	const { classGear, error, isPending } = getClassGear(playerClass);
	const { gearData } = filterGearByLevel(classGear, level);
	useEffect(() => {
		updateState.updateGear(gearData);
	}, []);
	return (
		<section className="content">
			<div className="container">
				<h1>Leveling Gear</h1>
				{error ? (
					"Error loading class gear. Let me know in a message!"
				) : isPending ? (
					"Loading gear based on your class and level..."
				) : (
					<div className="column">
						<h2>Weapons</h2>
						{gearData
							.slice(0)
							.reverse()
							.map((slotType, index) => (
								<GearSlot name={slotType.name} items={slotType.items} key={index} />
							))}
					</div>
				)}
			</div>
		</section>
	);
};

export default Gear;
