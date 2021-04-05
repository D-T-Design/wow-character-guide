import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import PlayerCard from "./PlayerCard";
import classColor from "../utils/classColor";

export const Navbar = ({ appState, savedCharacters }) => {
	const router = useRouter();
	const route = router.pathname;
	const links = [
		{
			path: "/",
			text: "Character",
		},
		{
			path: "/classguides",
			text: "Class Guides",
		},
		{
			path: "/gear",
			text: "Suggested Gear",
		},
		{
			path: "/zones",
			text: "World Zones",
		},
	];
	const noCharacters = appState.savedCharacters.length === 0;
	const selectedCharacter = appState.savedCharacters.find(
		(character) => character.id === appState.character
	);
	return (
		<header>
			<div className="container">
				<Link href="/">
					<a>
						<h1>WoW Character Guide</h1>
					</a>
				</Link>
				{!noCharacters && <PlayerCard appState={selectedCharacter} />}
			</div>
			<nav>
				<ul>
					<div className="container">
						{!noCharacters &&
							links.map((link, index) => (
								<li key={index}>
									<Link href={link.path}>
										<a
											className={`playerclass-${selectedCharacter.playerClass}${
												route === link.path ? " active" : ""
											}`}
										>
											{link.text}
										</a>
									</Link>
								</li>
							))}
					</div>
				</ul>
			</nav>
		</header>
	);
};
