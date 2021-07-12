import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useClickOutside } from "../utils/useClickOutside";

const PlayerCard = ({ savedCharacters, currentCharacter, selectCharacter }) => {
	const { name, level, race, playerClass, faction, gender, id } = currentCharacter;
	const [toggleOpen, setToggle] = useState(false);
	const toggleCharacterList = () => setToggle(!toggleOpen);
	const characterListRef = useRef(null);
	const clickHandler = useClickOutside([characterListRef], toggleOpen, toggleCharacterList);
	useEffect(() => {
		document.addEventListener("click", clickHandler, true);
		return () => {
			document.removeEventListener("click", clickHandler, true);
		};
	});
	return (
		<motion.figure
			initial={{ width: 0 }}
			animate={{ width: "auto" }}
			className={`playercard ${playerClass.toLowerCase()}`}
			whileHover={{ scale: 1.03 }}
			whileTap={{ scale: 0.95 }}
			transition={{ duration: 0.1 }}
		>
			<motion.button
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
			</motion.button>
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
		</motion.figure>
	);
};

export default PlayerCard;
