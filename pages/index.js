import React from "react";
import Welcome from "../components/Welcome";
import Character from "../components/Character";

const Home = (props) => {
	const noCharacters = props.appState.savedCharacters.length === 0;
	return (
		<section className="content">
			<div className="container">
				{noCharacters ? (
					<>
						<aside className="blurb">
							<h2>Welcome to WoW Classic Character Guide!</h2>
							<h2>Build Your Character</h2>
							<p>
								Enter your character details and you'll get a quick reference guide for your World
								of Warcraft Character.
							</p>
							<p>
								The quick reference guide includes a class guide, gear options, and zones… all
								tailored to your current level, class, and race!
							</p>
						</aside>
						<Welcome props={props} />
					</>
				) : (
					<>
						<aside className="blurb">
							<h2>Your Saved Characters</h2>
							<p>Select, edit, and delete characters from here!</p>
						</aside>
						<Character props={props} />
					</>
				)}
			</div>
		</section>
	);
};

export default Home;
