import React from "react";

const factionURL = "/static/img/faction/";
const raceURL = "/static/img/race/";
const classURL = "/static/img/class/";

const Faction = ({ chosenFaction, changeFaction, data }) => {
	const availableFactions = data.availableFactions;
	return availableFactions ? (
		<div className="faction">
			<h2>Faction</h2>
			{availableFactions.map((faction, index) => (
				<label
					className={`faction-icon ${
						chosenFaction !== faction && chosenFaction !== "" ? "inactive" : "active"
					}`}
					key={index}
				>
					<input type="radio" name="Faction" value={faction} />
					<img
						src={`${factionURL}${faction.toLowerCase()}.png`}
						alt={faction}
						data-hover={faction}
						onClick={() => changeFaction(faction)}
					/>
				</label>
			))}
			<span className="selection-title chosen">{chosenFaction}</span>
		</div>
	) : null;
};

const Race = ({ faction, chosenRace, changeRace, data }) => {
	const availableRaces = faction === "Horde" ? data.hordeRaces : data.allianceRaces;
	return faction ? (
		<div className="race">
			<h2>Race</h2>
			{availableRaces.map((race, index) => (
				<label
					key={index}
					className={`race-icon ${
						chosenRace !== race && chosenRace !== "" ? "inactive" : "active"
					}`}
					tabIndex="0"
				>
					<input type="radio" name="Race" value={race} />
					<img
						src={`${raceURL}${race.toLowerCase().replace(/\s/g, "")}-male.png`}
						alt={race}
						onClick={() => changeRace(race)}
					/>
				</label>
			))}
			<span className="selection-title chosen">{chosenRace}</span>
		</div>
	) : null;
};

const PlayerClass = ({ race, chosenClass, changeClass, data }) => {
	let availableClasses = [];
	switch (race) {
		case "Undead":
			availableClasses = data.undeadClasses;
			break;
		case "Troll":
			availableClasses = data.trollClasses;
			break;
		case "Tauren":
			availableClasses = data.taurenClasses;
			break;
		case "Orc":
			availableClasses = data.orcClasses;
			break;
		case "Human":
			availableClasses = data.humanClasses;
			break;
		case "Night Elf":
			availableClasses = data.nightElfClasses;
			break;
		case "Dwarf":
			availableClasses = data.dwarfClasses;
			break;
		case "Gnome":
			availableClasses = data.gnomeClasses;
			break;
		default:
			availableClasses = [];
	}
	return (
		race && (
			<div className="playerclass">
				<h2>Class</h2>
				{availableClasses.map((classType, index) => (
					<label
						key={index}
						className={`class-icon ${
							chosenClass !== classType && chosenClass !== "" ? "inactive" : "active"
						}`}
					>
						<input type="radio" name="Class" value={classType} />
						<img
							src={`${classURL}${classType.toLowerCase()}.png`}
							alt={classType}
							onClick={() => {
								changeClass(classType);
							}}
							className={chosenClass !== classType && chosenClass !== "" ? "inactive" : null}
						/>
					</label>
				))}
				<span className="selection-title chosen">{chosenClass}</span>
			</div>
		)
	);
};

const Name = ({ currentName, changeName }) => (
	<div className="character-name">
		<label htmlFor="name">Character Name</label>
		<input
			name="name"
			type="text"
			value={currentName}
			onChange={(e) =>
				e.target.value.match(/^[a-zA-Z]+$/) || e.target.value === "" ? changeName(e) : null
			}
		/>
	</div>
);

const Level = ({ currentLevel, changeLevel }) => (
	<div className="level">
		<label htmlFor="level">Your Level</label>
		<input
			name="level"
			type="text"
			value={currentLevel}
			onChange={(e) => !isNaN(e.target.value) && changeLevel(e)}
		/>
	</div>
);

export { Faction, Race, PlayerClass, Name, Level };
