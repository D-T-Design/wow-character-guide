import React from "react";
import Link from "next/link";

const PlayerCard = ({ appState }) => {
	const { name, level, race, playerClass, faction, gender } = appState;
	return (
		<Link href="/">
			<a className="playercard">
				<figure className={`playercard ${playerClass.toLowerCase()}`} title="View Character Page">
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
					<img src={`/static/img/faction/${faction.toLowerCase()}.png`} />
					<img src={`/static/img/race/${race.toLowerCase().replace(/\s/g, "")}-${gender}.png`} />
					<img src={`/static/img/class/${playerClass.toLowerCase()}.png`} />
				</figure>
			</a>
		</Link>
	);
};

export default PlayerCard;
