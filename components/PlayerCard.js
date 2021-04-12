import React from "react";

const PlayerCard = ({ appState }) => {
	const { name, level, race, playerClass, faction, gender } = appState;
	return (
		<figure className={`playercard ${playerClass.toLowerCase()}`}>
			<img src={`/static/img/faction/${faction.toLowerCase()}.png`} />
			<img src={`/static/img/race/${race.toLowerCase().replace(/\s/g, "")}-${gender}.png`} />
			<img src={`/static/img/class/${playerClass.toLowerCase()}.png`} />
			<figcaption>
				<h3>{name}</h3>
				<strong>{level}</strong>
				{` ${race} ${playerClass}`}
			</figcaption>
		</figure>
	);
};

export default PlayerCard;
