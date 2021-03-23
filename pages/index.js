import React from "react";
import Link from "next/link";
import { Faction, Race, PlayerClass, Name, Level } from "../components/characterInput";

const Home = ({ updateState, appState, classData, error, isPending }) => {
	const { updateName, updateLevel, updateFaction, updateRace, updateClass } = updateState;
	const { name, level, faction, race, playerClass } = appState;
	return (
		<section className="content">
			<div className="container">
				<aside className="blurb">
					<h2>Welcome to WoW Classic Character Guide!</h2>
					<h2>Build Your Character</h2>
					<p>
						Enter your character details and you'll get a quick reference guide for your World of
						Warcraft Character.
					</p>
					<p>
						The quick reference guide includes a class guide, gear options, and zones… all tailored
						to your current level, class, and race!
					</p>
				</aside>
				<section className="input-character">
					<section className="input-namelevel">
						<Name changeName={updateName} currentName={name} />
						<Level changeLevel={updateLevel} currentLevel={level} />
					</section>
					<section className="input-faction">
						<Faction
							changeFaction={updateFaction}
							chosenFaction={faction}
							data={classData}
							pending={isPending}
							error={error}
						/>
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
						<Link href="/gear">Add Character</Link>
					</section>
				</section>
			</div>
		</section>
	);
};

export default Home;
