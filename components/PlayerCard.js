import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useClickOutside } from "../utils/useClickOutside";

const PlayerCard = ({ savedCharacters, currentCharacter, selectCharacter }) => {
	const { name, level, race, playerClass, faction, gender, id } = currentCharacter;
	const [toggleOpen, setToggle] = useState(false);
	const toggleCharacterList = () => setToggle(!toggleOpen);
	const characterListRef = useRef(null);
	const clickHandler = useClickOutside([characterListRef], toggleOpen, toggleCharacterList);
	/* Motion Variants */
	const playercardToggleImg = {
		rest: {
			opacity: 0.5,
			transition: { duration: 0.2 },
		},
		hover: {
			opacity: 1,
			transition: { duration: 0.2 },
		},
		exit: { opacity: 0, transition: { duration: 0.2 } },
	};
	const playercardToggleBtn = {
		rest: {
			transform: "brightness(1)",
			transition: { duration: 0.2 },
		},
		hover: {
			transform: "brightness(1.2)",
			transition: { duration: 0.2 },
		},
		exit: { opacity: 0, transition: { duration: 0.2 } },
	};
	useEffect(() => {
		document.addEventListener("click", clickHandler, true);
		return () => {
			document.removeEventListener("click", clickHandler, true);
		};
	});
	return (
		<figure className={`playercard ${playerClass.toLowerCase()}`}>
			<button
				onClick={() => toggleCharacterList()}
				className="playercard-button"
				style={{ cursor: savedCharacters.length <= 1 ? "default" : "pointer" }}
				title={savedCharacters.length <= 1 ? null : "Select one of your characters"}
			>
				<figcaption>
					<div className="lvl">
						<small>LVL</small>
						<strong>{level}</strong>
					</div>
					<div className="name">
						<h3>{name}</h3>
						<small>{`${race} ${playerClass}`}</small>
					</div>
				</figcaption>
				<img
					src={`/static/img/faction/${faction.toLowerCase()}.png`}
					title={faction}
					alt={faction}
				/>
				<img
					src={`/static/img/race/${race.toLowerCase().replace(/\s/g, "")}-${
						gender ? gender : "male"
					}.png`}
					title={race}
					alt={race}
				/>
				<img
					src={`/static/img/class/${playerClass.toLowerCase()}.png`}
					title={playerClass}
					alt={playerClass}
				/>
				<AnimatePresence>
					{toggleOpen && savedCharacters.length > 1 ? (
						<img src="/static/img/exit.svg" alt="Close List" title="Close List" />
					) : (
						<img src="/static/img/swap.svg" alt="Select Character" title="Select Character" />
					)}
				</AnimatePresence>
			</button>
			<AnimatePresence>
				{toggleOpen && savedCharacters.length > 1 && (
					<motion.ul
						className="playercard-list"
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						ref={characterListRef}
					>
						{savedCharacters.map((character, i) => {
							const { level, name, playerClass, race, gender } = character;
							if (character.id !== id) {
								return (
									<li key={i} className="playercard-character">
										<button
											onClick={() => {
												toggleCharacterList();
												return selectCharacter(character.id);
											}}
											title={`Pick ${name} as your selected character.`}
										>
											<img
												src={`/static/img/race/${race.toLowerCase().replace(/\s/g, "")}-${
													gender ? gender : "male"
												}.png`}
												title={race}
												alt={race}
											/>
											<img
												src={`/static/img/class/${playerClass.toLowerCase()}.png`}
												title={playerClass}
												alt={playerClass}
											/>
											<div className="lvl">
												<strong>{level}</strong>
											</div>
											<div className="name">
												<h3>
													<span className={playerClass}>{name}</span>
												</h3>
											</div>
											<img src="/static/img/swap.svg" alt="Select Character" />
										</button>
									</li>
								);
							}
						})}
					</motion.ul>
				)}
			</AnimatePresence>
		</figure>
	);
};

export default PlayerCard;
