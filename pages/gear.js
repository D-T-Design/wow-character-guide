import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import fetch from "isomorphic-unfetch";
import useSWR from "swr";
import { graphQLClient, queryAllFactions } from "../utils/fauna_gql";

import getClassGear from "../utils/getClassGear";
import filterGearByLevel from "../utils/filterGearByLevel";
import separateGearByType from "../utils/separateGearByType";
import { GearSlot } from "../components/GearSlot";

import parseClassData from "../utils/parseClassData";

import { weaponToFullName } from "../utils/weaponToFullName";

import { Image, Placeholder } from "cloudinary-react";
import BlizzContext from "../utils/blizzContext";

const fetcher = (query) => graphQLClient.request(query);
const blizzFetcher = (url) => fetch(url).then((res) => res.json());

export async function getStaticProps() {
	const classData = await fetcher(queryAllFactions);
	const blizzardID = process.env.NEXT_PUBLIC_BLIZZ_ID;
	const blizzardSecret = process.env.NEXT_PUBLIC_BLIZZ_SECRET;
	const auth = Buffer.from(`${blizzardID}:${blizzardSecret}`).toString("base64");
	const tokenResponse = await fetch("https://us.battle.net/oauth/token", {
		body: "grant_type=client_credentials",
		headers: {
			Authorization: `Basic ${auth}`,
			"Content-Type": "application/x-www-form-urlencoded",
		},
		method: "POST",
	});
	const accessBlizz = await tokenResponse.json();
	return {
		props: { classData, accessBlizz },
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
	const [phasesActive, setActivePhases] = useState({
		1: true,
		2: false,
		3: false,
		4: false,
		5: false,
	});

	const handlePhaseChanges = (num, event) => {
		return setActivePhases({ ...phasesActive, [num]: event.target.checked ? true : false });
	};
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

	const fadeUp = {
		initial: {
			opacity: 0,
			y: "5%",
			transition,
		},
		animate: {
			opacity: 1,
			y: 0,
			transition,
		},
	};
	return (
		<BlizzContext.Provider value={{ token: props.accessBlizz.access_token }}>
			<motion.section
				className="content gear"
				initial="initial"
				animate="enter"
				exit="exit"
				variants={pageVariants}
			>
				<div className="container">
					<section className="blurb" style={{ width: "100%" }}>
						<div>
							<h2>Leveling Gear</h2>
							<p>
								These items are generated based on your chosen class and level. You can also show
								gear from later phases using the Filter by Phase slider.
							</p>
						</div>
						<motion.aside
							className="img-container"
							initial="initial"
							animate="animate"
							variants={fadeUp}
						>
							<Image
								public-id="/wow-character-guide/Wow-Reaver.jpg"
								cloudName="david-torres-design"
								version="1618808611"
								loading="lazy"
								dpr="auto"
								responsive
								width="auto"
								crop="fill"
								aspectRatio="16:9"
								responsiveUseBreakpoints="true"
								secure="true"
							>
								<Placeholder type="predominant" />
							</Image>
						</motion.aside>
					</section>

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
										onChange={(e) =>
											updateCharacter({ ...selectedCharacter, level: e.target.value })
										}
									/>
								</motion.aside>
								{level === "70" && (
									<aside initial="initial" animate="enter" exit="exit" variants={pageVariants}>
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
										{/* {[1, 2, 3, 4, 5].map((phaseNum) => (
											<>
												<label
													className={
														phasesActive[phaseNum] ? "phase-button active" : "phase-button inactive"
													}
													htmlFor={`phase${phaseNum}`}
												>{`Phase ${phaseNum} - ${phasesActive[phaseNum] ? "x" : "+"}`}</label>
												<input
													type="checkbox"
													value={phaseNum}
													className="phase-button check"
													id={`phase${phaseNum}`}
													name={`phase${phaseNum}`}
													onChange={(e) => handlePhaseChanges(phaseNum, e)}
													checked={phasesActive[phaseNum]}
												/>
											</>
										))} */}
									</aside>
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
		</BlizzContext.Provider>
	);
};

export default Gear;
