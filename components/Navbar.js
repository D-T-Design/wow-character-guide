import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useWindowWidth } from "@react-hook/window-size";

import { motion } from "framer-motion";

import PlayerCard from "./PlayerCard";

export const Navbar = ({ appState, updateState, changePage, buildNewCharacterModal }) => {
	const [charactersSaved, setSavedCharacters] = useState(false);
	const router = useRouter();
	const route = router.asPath;
	const links = [
		{
			path: "/character",
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
			text: "Gear",
			icon: "/static/img/loot.svg",
		},
		{
			path: "/zones",
			text: "Zones",
			icon: "/static/img/zone.svg",
		},
	];
	const selectedCharacter = appState.savedCharacters.find(
		(character) => character.id === appState.character
	);
	const [navOpen, toggleNav] = useState(false);

	const { gameData } = appState;

	const [characterModal, toggleCharacterModal] = useState(false);

	const windowWidth = useWindowWidth({ wait: 500 });

	useEffect(() => {
		appState.savedCharacters.length > 0 && setSavedCharacters(true);
		windowWidth >= 992 && toggleNav(true);
	}, [windowWidth, appState.savedCharacters]);

	return (
		<header>
			<div className="header-img">
				<div className="container">
					<Link href="/">
						<a
							onClick={() => {
								changePage("/");
								windowWidth < 992 && toggleNav(false);
							}}
						>
							<h1>
								<img
									src="/static/img/wccg.svg"
									alt="WoW TBC Classic Character Guide"
									title="Go back to homepage - WoW TBC Classic Character Guide"
								/>
							</h1>
						</a>
					</Link>
					{charactersSaved ? (
						<PlayerCard
							selectCharacter={updateState.selectCharacter}
							savedCharacters={appState.savedCharacters}
							currentCharacter={selectedCharacter}
						/>
					) : (
						<>
							<button className="character-cta" onClick={() => buildNewCharacterModal(gameData)}>
								Create Character
							</button>
						</>
					)}
					{charactersSaved &&
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
			<motion.nav
				className={charactersSaved ? (navOpen ? "nav open" : "nav closed") : undefined}
				key="nav"
			>
				<div className="container">
					{charactersSaved && (
						<motion.div
							className="playercard-mobile"
							initial={false}
							animate={navOpen ? { opacity: 1 } : { opacity: 0 }}
							transition={{ duration: 0.3 }}
						>
							<PlayerCard
								selectCharacter={updateState.selectCharacter}
								savedCharacters={appState.savedCharacters}
								currentCharacter={selectedCharacter}
							/>
						</motion.div>
					)}
					<ul>
						{charactersSaved &&
							links.map((link, index) => {
								const isHomeLink = link.path === "/";
								const isClassLink = link.path.includes("classguides");
								const isActive = isHomeLink && route !== "/" ? false : route.includes(link.path);
								const path =
									isHomeLink || !isClassLink
										? link.path
										: `${link.path}/${selectedCharacter.playerClass.toLowerCase()}`;
								return (
									<motion.li
										key={index}
										initial={false}
										animate={navOpen ? { opacity: 1 } : { opacity: 0 }}
										transition={{ duration: 0.3 }}
									>
										<Link href={`${path}`}>
											<a
												className={`playerclass-${selectedCharacter.playerClass}${
													isActive ? " active" : ""
												}`}
												onClick={() => {
													changePage(path);
													windowWidth < 992 && toggleNav(false);
												}}
											>
												<img src={link.icon} />
												{link.text}
											</a>
										</Link>
									</motion.li>
								);
							})}
					</ul>
				</div>
			</motion.nav>
		</header>
	);
};
