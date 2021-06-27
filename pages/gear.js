import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import getClassGear from "../utils/getClassGear";
import filterGearByLevel from "../utils/filterGearByLevel";
import separateGearByType from "../utils/separateGearByType";
import { GearSlot } from "../components/GearSlot";

import useSWR from "swr";
import { graphQLClient, queryAllFactions } from "../utils/fauna_gql";
import parseClassData from "../utils/parseClassData";

import { weaponToFullName } from "../utils/weaponToFullName";

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
	const separatedGearByType = gearData ? separateGearByType(gearData) : [{}, {}, {}];

	const classWepTypes = classData.classes.find((className) => className.name === playerClass)
		.reference.weaponTypes;

	const [phaseState, setPhase] = useState(1);
	const { updateCharacter } = props.updateState;

	const transition = {
		duration: 0.3,
		ease: "easeInOut",
	};

	const pageVariants = {
		exit: { opacity: 0, transition },
		enter: {
			opacity: 1,
			transition,
		},
		initial: {
			opacity: 0,
			transition,
		},
	};

	const slotColumnVariants = {
		animate: {
			opacity: 1,
			transition: { staggerChildren: 0.5, delayChildren: 0.5 },
		},
		initial: {
			opacity: 0,
		},
		transition: { duration: 0.5 },
	};

	const slotVariants = {
		animate: {
			opacity: 1,
			scale: 1,
			transition: { staggerChildren: 1, delayChildren: 0.5 },
		},
		initial: {
			opacity: 0,
			scale: 0.8,
		},
		transition: { duration: 0.5 },
	};
	return (
		<motion.section
			className="content gear"
			initial="initial"
			animate="enter"
			exit="exit"
			variants={pageVariants}
		>
			<div className="container">
				<h2>Leveling Gear</h2>
				<AnimatePresence>
					{error ? (
						<motion.p
							key="error-msg"
							initial="initial"
							animate="enter"
							exit="exit"
							variants={pageVariants}
						>
							Error loading class gear. Let me know in a message!
						</motion.p>
					) : isPending ? (
						<motion.p
							key="loading-msg"
							initial="initial"
							animate="enter"
							exit="exit"
							variants={pageVariants}
						>
							Loading gear based on your class and level... <div className="spin"></div>
						</motion.p>
					) : (
						<>
							<motion.aside
								key="level-slider"
								initial="initial"
								animate="enter"
								exit="exit"
								variants={pageVariants}
								layout
							>
								<label htmlFor="levelslider">
									Filter by Level:
									<br />
									{level}
								</label>
								<input
									type="range"
									min="1"
									max="70"
									value={level}
									className="levelfilter"
									id="levelfilter"
									name="levelfilter"
									onChange={(e) => updateCharacter({ ...selectedCharacter, level: e.target.value })}
								/>
							</motion.aside>
							{level === "70" && (
								<motion.aside initial="initial" animate="enter" exit="exit" variants={pageVariants}>
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
								</motion.aside>
							)}
							<motion.main variants={slotColumnVariants} animate="animate" initial="initial">
								{separatedGearByType.map((gearType, index) => {
									const { items, type } = gearType;
									return (
										<motion.div
											className="column"
											key={type}
											initial={{ opacity: 0, y: "15%", transition: { delay: (index + 1) * 0.5 } }}
											animate={{ opacity: 1, y: 0 }}
										>
											<h3>{type}</h3>
											<motion.div
												key={type}
												variants={slotVariants}
												animate="animate"
												initial="initial"
												transition="transition"
											>
												{items.map((itemType, index) => {
													const typeName = Object.keys(itemType)[0];
													const weaponTypeMatch =
														type === "Weapons" &&
														classWepTypes.some(
															(wepType) => wepType.name === weaponToFullName(typeName)
														);
													if (weaponTypeMatch || type !== "Weapons") {
														return (
															<GearSlot
																name={typeName}
																items={itemType[typeName]}
																index={index}
																key={index}
																level={level}
																faction={faction}
																phase={phaseState}
																type={type}
															/>
														);
													}
												})}
											</motion.div>
										</motion.div>
									);
								})}
							</motion.main>
						</>
					)}
				</AnimatePresence>
			</div>
		</motion.section>
	);
};

export default Gear;
