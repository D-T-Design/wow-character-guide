import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { motion, AnimatePresence } from "framer-motion";

import PlayerCard from "./PlayerCard";
import { NewCharacterModal } from "./characterInput";

export const Navbar = ({ appState, updateState, changePage }) => {
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
	const charactersSaved = appState.savedCharacters.length !== 0;
	const selectedCharacter = appState.savedCharacters.find(
		(character) => character.id === appState.character
	);
	const [navOpen, toggleNav] = useState(true);

	const gameData = appState.gameData;
	const [characterModal, toggleCharacterModal] = useState(false);
	return (
		<header>
			<div className="header-img">
				<div className="container">
					<Link href="/">
						<a onClick={() => changePage("/")}>
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
							<button className="character-cta" onClick={() => toggleCharacterModal(true)}>
								Create Character
							</button>
							<NewCharacterModal
								addCharacter={updateState.addCharacter}
								gameData={gameData}
								updateGameData={updateState.updateCharacter}
								show={characterModal}
								onClose={() => toggleCharacterModal(false)}
							/>
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
			<AnimatePresence exitBeforeEnter>
				{navOpen && (
					<motion.nav
						className={charactersSaved ? (navOpen ? "nav open" : "nav") : undefined}
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3, type: "tween" }}
						style={{ overflow: "hidden" }}
						key="nav"
					>
						<div className="container">
							<ul>
								{charactersSaved &&
									links.map((link, index) => {
										const isHomeLink = link.path === "/";
										const isClassLink = link.path.includes("classguides");
										const isActive =
											isHomeLink && route !== "/" ? false : route.includes(link.path);
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
														onClick={() => {
															changePage(path);
														}}
													>
														<img src={link.icon} />
														{link.text}
													</a>
												</Link>
											</li>
										);
									})}
							</ul>
						</div>
					</motion.nav>
				)}
			</AnimatePresence>
		</header>
	);
};
