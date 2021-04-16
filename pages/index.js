import React from "react";
import Welcome from "../components/Welcome";
import Character from "../components/Character";

const Home = (props) => {
	const noCharacters = props.appState.savedCharacters.length === 0;
	return (
		<section className="content home">
			<div className="container">
				{noCharacters ? (
					<>
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
