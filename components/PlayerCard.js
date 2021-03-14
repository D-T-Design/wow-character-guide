import React from "react";

const PlayerCard = ({ level, faction, race, classPicked }) => {
	return (
		<div>
			<ul>
				<li>
					<strong>Lvl {level}</strong>
				</li>
				<li>{`${race} ${classPicked}`}</li>
				<li>{faction}</li>
			</ul>
		</div>
	);
};

export default PlayerCard;
