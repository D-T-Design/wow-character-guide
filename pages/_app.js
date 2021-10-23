import React, { useState } from "react";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import { SWRConfig } from "swr";
import createPersistedState from "use-persisted-state";
import Head from "next/head";

import getGameData from "../libs/gameData";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import { NewCharacterModal } from "../components/characterInput";

import "../styles/globals.scss";
const useAppState = createPersistedState("appState");
const MyApp = ({ Component, pageProps }) => {
	const [appState, setState] = useAppState({
		gear: [],
		character: 0,
		savedCharacters: [],
		gameData: getGameData(),
	});

	const updateGear = (gear) => {
		const updatedList = appState.savedCharacters.map((savedCharacter) =>
			savedCharacter.id === appState.character ? { ...savedCharacter, gear } : savedCharacter
		);
		setState({ ...appState, gear, savedCharacters: updatedList });
	};

	const addCharacter = (data) => {
		const character = { ...data, id: Date.now() };
		const savedCharacters = [...appState.savedCharacters, character];
		setState({ ...appState, character: character.id, savedCharacters });
		window.scrollTo(0, 0);
	};

	const updateCharacter = (updatedCharacter) => {
		const characters = [...appState.savedCharacters];
		const updatedList = characters.map((savedCharacter) =>
			savedCharacter.id === updatedCharacter.id ? updatedCharacter : savedCharacter
		);
		setState({ ...appState, savedCharacters: updatedList });
	};

	const removeCharacter = (id) => {
		const newCharacterList = appState.savedCharacters.filter((character) => character.id !== id);
		const isListEmpty = newCharacterList.length === 0;
		const character = isListEmpty ? 0 : newCharacterList[0].id;
		setState({
			...appState,
			character,
			savedCharacters: newCharacterList,
		});
		window.scrollTo(0, 0);
	};

	const selectCharacter = (id) => {
		const savedCharacters = [...appState.savedCharacters];
		setState({
			...appState,
			character: savedCharacters.find((character) => character.id === id).id,
		});
	};

	const updateState = {
		updateGear,
		addCharacter,
		removeCharacter,
		updateCharacter,
		selectCharacter,
	};

	const router = useRouter();
	const [currentPage, setPage] = useState("");
	const changePage = (path) => setPage(path);

	const [newCharacterModal, toggleNewCharacterModal] = useState(false);
	const [modalData, setModalData] = useState(appState.gameData);
	const buildNewCharacterModal = (gameData) => {
		setModalData(gameData);
		toggleNewCharacterModal(true);
	};

	pageProps = {
		...pageProps,
		updateState,
		appState,
		currentPage,
		changePage,
		toggleNewCharacterModal,
		buildNewCharacterModal,
	};

	return (
		<>
			<Head>
				<title>WoW TBC Classic Character Guide</title>
				<meta property="og:title" content="WoW TBC Classic Character Guide" />
				<meta
					property="og:image"
					content="https://res.cloudinary.com/david-torres-design/image/upload/c_scale,w_1200/c_crop,h_630,w_1200/l_wow-character-guide:wccg.svg,e_shadow:100,x_0,y_5,co_rgb:000000/v1625720643/wow-character-guide/bg-tbc.jpg"
				/>
				<meta
					property="og:description"
					content="Your cheat sheet for playing World of Warcraft Classic and Burning Crusade Classic. Enter your character's details and get a list of gear to get, zones to go to, and class guides for your class."
				/>
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
				<meta property="og:url" content="https://www.wowcharacter.guide/" />
				<meta property="og:type" content="website" />
				<meta name="viewport" content="width=device-width, user-scalable=no" />
			</Head>
			<Navbar {...pageProps} />
			<SWRConfig
				value={{
					refreshInterval: 3000000,
				}}
			>
				<AnimatePresence exitBeforeEnter>
					<Component {...pageProps} key={router.route} />
				</AnimatePresence>
			</SWRConfig>
			<Footer />
			<NewCharacterModal
				addCharacter={addCharacter}
				gameData={modalData}
				show={newCharacterModal}
				onClose={() => toggleNewCharacterModal(false)}
			/>
		</>
	);
};

export default MyApp;
