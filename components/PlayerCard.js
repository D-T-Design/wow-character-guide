import React from "react";

const PlayerCard = ({ appState }) => {
	const { name, level, race, playerClass, faction } = appState;
	return (
		<div>
			<ul>
				<h3>{name}</h3>
				<li>
					<strong>Lvl {level}</strong>
				</li>
				<li>{`${race} ${playerClass}`}</li>
				<li>{faction}</li>
			</ul>
		</div>
	);
};

export default PlayerCard;
