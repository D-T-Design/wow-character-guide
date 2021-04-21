import React from "react";
import Link from "next/link";
import Welcome from "../components/Welcome";
import Character from "../components/Character";
import { SelectedCharacter } from "../components/SelectedCharacter";

const Home = (props) => {
	const noCharacters = props.appState.savedCharacters.length === 0;
	let character = {};
	if (!noCharacters) {
		character = props.appState.savedCharacters.find((char) => char.id === props.appState.character);
	}
	return (
		<section className="content home">
			<div className="container">
				{noCharacters ? (
					<section className="new">
						<aside className="blurb">
							<h2>
								<small>Welcome to</small> WoW Classic Character Guide!
							</h2>
							<h3>Build Your Character</h3>
							<caption>
								<p>
									Enter your character details and you'll get a{" "}
									<strong>quick reference guide</strong> for your World of Warcraft Character.
								</p>
								<p>
									The quick reference guide includes a class guide, gear options, and zones… all
									tailored to your current level, class, and race!
								</p>
							</caption>
						</aside>
						<main className="character-new">
							<Welcome props={props} />
						</main>
					</section>
				) : (
					<section className="character">
						<aside className="blurb">
							<h2>Choose Your Character</h2>
							<p>Edit your character, or add new characters to get another personalized guide!</p>
						</aside>
						<main className="character-selected">
							<SelectedCharacter appState={props.appState} updateState={props.updateState} />
						</main>
						<main className="character-list">
							<Character props={props} />
						</main>
					</section>
				)}
			</div>
		</section>
	);
};

export default Home;
