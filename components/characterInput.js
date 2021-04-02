import React, { useState } from "react";
import Link from "next/link";
import useClassData from "../utils/useClassData";

export const Faction = ({ chosenFaction, changeFaction, data }) => {
	const factionURL = "/static/img/faction/";
	return (
		<div className="faction">
			<h2>Choose Your Faction</h2>
			{data.availableFactions.map((faction, index) => (
				<label
					className={`faction-icon ${
						chosenFaction !== faction && chosenFaction !== "" ? "inactive" : "active"
					}`}
					key={index}
					onClick={() => changeFaction(faction)}
					tabIndex="0"
				>
					<input type="radio" name="Faction" value={faction} />
					<figure>
						<img
							src={`${factionURL}${faction.toLowerCase()}.png`}
							alt={faction}
							data-hover={faction}
						/>
						<figcaption>{faction}</figcaption>
					</figure>
				</label>
			))}
		</div>
	);
};

export const Race = ({ faction, chosenRace, changeRace, data }) => {
	const raceURL = "/static/img/race/";
	const availableRaces = data[`${faction.toLowerCase()}Races`];
	return faction ? (
		<div className="race">
			<h2>Choose Your Race</h2>
			{availableRaces.map((race, index) => (
				<label
					key={index}
					className={`race-icon ${
						chosenRace !== race && chosenRace !== "" ? "inactive" : "active"
					}`}
					tabIndex="0"
					onClick={() => changeRace(race)}
				>
					<input type="radio" name="Race" value={race} />
					<figure>
						<img src={`${raceURL}${race.toLowerCase().replace(/\s/g, "")}-male.png`} alt={race} />
						<figcaption>{race}</figcaption>
					</figure>
				</label>
			))}
		</div>
	) : null;
};

export const PlayerClass = ({ race, chosenClass, changeClass, data }) => {
	const classURL = "/static/img/class/";
	const availableClasses = data[`${race.replace(/\s/g, "").toLowerCase()}Classes`];
	return (
		race && (
			<div className="playerclass">
				<h2>Choose Your Class</h2>
				{availableClasses.map((classType, index) => (
					<label
						key={index}
						className={`class-icon ${
							chosenClass !== classType && chosenClass !== "" ? "inactive" : "active"
						}`}
						onClick={() => {
							changeClass(classType);
						}}
						tabIndex="0"
					>
						<input type="radio" name="Class" value={classType} />
						<figure>
							<img src={`${classURL}${classType.toLowerCase()}.png`} alt={classType} />
							<figcaption>{classType}</figcaption>
						</figure>
					</label>
				))}
			</div>
		)
	);
};

export const Name = ({ currentName, changeName }) => (
	<div className="name">
		<label htmlFor="name">
			<h2>Character Name</h2>
		</label>
		<input
			name="name"
			type="text"
			value={currentName}
			onChange={(e) =>
				e.target.value.match(/^[a-zA-Z]+$/) || e.target.value === "" ? changeName(e) : null
			}
			tabIndex="0"
		/>
	</div>
);

export const Level = ({ currentLevel, changeLevel }) => (
	<div className="level">
		<label htmlFor="level">
			<h2>Your Level</h2>
		</label>
		<input
			name="level"
			type="text"
			value={currentLevel}
			onChange={(e) => !isNaN(e.target.value) && changeLevel(e)}
			tabIndex="0"
		/>
	</div>
);

export const InputCharacter = ({ action, character }) => {
	const { classData, error, isPending } = useClassData();
	const { formAction, title, callback } = action;
	const [formState, setState] = character
		? useState(character)
		: useState({
				faction: "",
				level: 1,
				name: "",
				playerClass: "",
				race: "",
		  });
	const updateName = (e) => {
		setState({ ...formState, name: e.target.value });
	};
	const updateLevel = (e) => {
		const newLevel = e.target.value;
		const level = newLevel === "" ? "" : newLevel < 1 ? 1 : newLevel > 70 ? 70 : newLevel;
		setState({ ...formState, level });
	};
	const updateFaction = (faction) => {
		setState({ ...formState, faction, race: "", playerClass: "" });
	};
	const updateRace = (race) => {
		setState({ ...formState, race, playerClass: "" });
	};
	const updateClass = (playerClass) => {
		setState({ ...formState, playerClass });
	};
	const { name, faction, level, playerClass, race } = formState;

	return (
		<section>
			{error ? (
				<p>Error loading class data...</p>
			) : isPending ? (
				<p>Loading class data...</p>
			) : (
				<>
					<section className="input-namelevel">
						<Name changeName={updateName} currentName={name} />
						<Level changeLevel={updateLevel} currentLevel={level} />
					</section>
					<section className="input-faction">
						<Faction changeFaction={updateFaction} chosenFaction={faction} data={classData} />
					</section>
					<section className="input-race">
						<Race changeRace={updateRace} chosenRace={race} faction={faction} data={classData} />
					</section>
					<section className="input-class">
						<PlayerClass
							changeClass={updateClass}
							race={race}
							chosenClass={playerClass}
							data={classData}
						/>
					</section>
					<section className="input-submit">
						<button
							onClick={() => {
								formAction(formState);
								return callback();
							}}
						>
							{title}
						</button>
					</section>
				</>
			)}
		</section>
	);
};
