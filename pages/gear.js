import React, { useState } from "react";

import getClassGear from "../utils/getClassGear";
import getAllItems from "../utils/getAllItems";
import filterGearByLevel from "../utils/filterGearByLevel";
import separateGearByType from "../utils/separateGearByType";
import { weaponToFullName } from "../utils/weaponToFullName";
import { armorToFullName } from "../utils/armorToFullName";

import { GearSlot } from "../components/GearSlot";

import useSWR from "swr";
import { graphQLClient, queryAllFactions } from "../utils/fauna_gql";
import parseClassData from "../utils/parseClassData";

const fetcher = (query) => graphQLClient.request(query);

export async function getStaticProps() {
	const classData = await fetcher(queryAllFactions);
	return {
		props: { classData },
	};
}

const Gear = (props) => {
	const { savedCharacters } = props.appState;
	let selectedCharacter = {};
	if (savedCharacters.length > 0) {
		selectedCharacter = props.appState.savedCharacters.find(
			(character) => character.id === props.appState.character
		);
	}
	const { playerClass, level, faction } = selectedCharacter.playerClass
		? selectedCharacter
		: { playerClass: "Rogue", level: 1, faction: "Horde" };

	const { data } = useSWR(queryAllFactions, fetcher, { initialData: props.classData });
	const classData = data ? parseClassData(data) : data;

	const { gear, error, isPending } = getClassGear(playerClass);
	const { gearData } = gear ? filterGearByLevel(gear, level) : [{}];
	console.log(gearData);
	const separatedGearByType = gearData ? separateGearByType(gearData) : [{}, {}, {}];

	const classWepTypes = classData.classes.find((className) => className.name === playerClass)
		.reference.weaponTypes;

	const [phaseState, setPhase] = useState(1);

	return (
		<section className="content gear">
			<div className="container">
				<h2>Leveling Gear</h2>
				{error ? (
					<p>Error loading class gear. Let me know in a message!</p>
				) : isPending ? (
					<p>Loading gear based on your class and level...</p>
				) : (
					<>
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
							{separatedGearByType.map((gearType, index) => {
								const { items, type } = gearType;
								return (
									<div className="column" key={index}>
										<h3>{type}</h3>
										{items.map((itemType, index) => {
											const itemKey = Object.keys(itemType)[0];
											const weaponTypeMatch =
												type === "Weapons" &&
												classWepTypes.some((wepType) => {
													return wepType.name === weaponToFullName(itemKey);
												});
											if (weaponTypeMatch || type !== "Weapons") {
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
							})}
						</main>
					</>
				)}
			</div>
		</section>
	);
};

export default Gear;
