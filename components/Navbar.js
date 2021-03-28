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
	const noCharacters = savedCharacters.length === 0;
	return (
		<header>
			<div className="container">
				<h1>WoW Character Guide</h1>
				{!noCharacters && <PlayerCard appState={appState.character} />}
			</div>
			<nav>
				<ul>
					<div className="container">
						{!noCharacters &&
							links.map((link, index) => (
								<li key={index}>
									<Link href={link.path}>
										<a
											className={`playerclass-${appState.character.playerClass}${
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
