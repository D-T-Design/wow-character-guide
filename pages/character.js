import React from "react";
import { motion } from "framer-motion";

import Character from "../components/Character";

const MyCharacters = (props) => {
	const charactersSaved = props.appState.savedCharacters.length !== 0;

	/* ---- Motion Variants ---- */
	const transition = {
		duration: 0.3,
		ease: "easeInOut",
	};
	const pageVariants = {
		exit: { opacity: 0, transition },
		enter: {
			opacity: 1,
			transition,
		},
		initial: {
			opacity: 0,
			transition,
		},
	};

	return (
		<motion.section
			key={"character"}
			className="content character"
			initial="initial"
			animate="enter"
			exit="exit"
			variants={pageVariants}
		>
			<div className="container">
				{charactersSaved && (
					<section className="character">
						<aside className="blurb">
							<h2>Choose Your Character</h2>
							<p>Edit your character, or add new characters to get another personalized guide!</p>
						</aside>
						<main className="character-list">
							<Character props={props} />
						</main>
					</section>
				)}
			</div>
		</motion.section>
	);
};

export default MyCharacters;
