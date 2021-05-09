import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import PlayerCard from "./PlayerCard";

export const Navbar = ({ appState }) => {
	const router = useRouter();
	const route = router.asPath;
	const links = [
		{
			path: "/",
			text: "My Characters",
			icon: "/static/img/character.svg",
		},
		{
			path: "/classguides",
			text: "Class Guides",
			icon: "/static/img/guide.svg",
		},
		{
			path: "/gear",
			text: "Suggested Gear",
			icon: "/static/img/loot.svg",
		},
		{
			path: "/zones",
			text: "World Zones",
			icon: "/static/img/zone.svg",
		},
	];
	const noCharacters = appState.savedCharacters.length === 0;
	const selectedCharacter = appState.savedCharacters.find(
		(character) => character.id === appState.character
	);
	const [navOpen, toggleNav] = useState(false);
	return (
		<header>
			<div className="header-img">
				<img className="header-bg" src="/static/img/bc_bg.jpg" />
				<div className="container">
					<Link href="/">
						<a>
							<h1>
								<img
									src="/static/img/wccg.svg"
									alt="WoW TBC Classic Character Guide"
									title="Go back to homepage - WoW TBC Classic Character Guide"
								/>
							</h1>
						</a>
					</Link>
					{!noCharacters && <PlayerCard appState={selectedCharacter} />}
					{!noCharacters &&
						(!navOpen ? (
							<div className="nav-toggle">
								<button onClick={() => toggleNav(true)}>
									<img src="/static/img/menu.svg" alt="Open Nav Menu" />
								</button>
							</div>
						) : (
							<div className="nav-toggle">
								<button onClick={() => toggleNav(false)}>
									<img src="/static/img/exit.svg" alt="Close Nav Menu" />
								</button>
							</div>
						))}
				</div>
			</div>
			<nav className={!noCharacters ? (navOpen ? "nav open" : "nav") : undefined}>
				<ul>
					<div className="container">
						{!noCharacters &&
							links.map((link, index) => {
								const isHomeLink = link.path === "/";
								const isClassLink = link.path.includes("classguides");
								const isActive = isHomeLink && route !== "/" ? false : route.includes(link.path);
								const path =
									isHomeLink || !isClassLink
										? link.path
										: `${link.path}/${selectedCharacter.playerClass.toLowerCase()}`;
								return (
									<li key={index}>
										<Link href={`${path}`}>
											<a
												className={`playerclass-${selectedCharacter.playerClass}${
													isActive ? " active" : ""
												}`}
												onClick={() => toggleNav(false)}
											>
												<img src={link.icon} />
												{link.text}
											</a>
										</Link>
									</li>
								);
							})}
					</div>
				</ul>
			</nav>
		</header>
	);
};
