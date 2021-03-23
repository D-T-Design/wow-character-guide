import React from "react";

const PlayerCard = ({ appState }) => {
	const { level, race, playerClass, faction } = appState;
	return (
		<div>
			<ul>
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
