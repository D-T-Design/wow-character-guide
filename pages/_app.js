import React, { useState } from "react";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import { SWRConfig } from "swr";
import createPersistedState from "use-persisted-state";
import Head from "next/head";

import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/globals.scss";
import { Router } from "next/router";

const MyApp = ({ Component, pageProps }) => {
	const useAppState = createPersistedState("appState");
	const [appState, setState] = useAppState({
		gear: [],
		character: 0,
		savedCharacters: [],
	});
	const updateGameData = (data) => {
		setState({ ...appState, gameData: data });
	};
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
		updateGameData,
		updateGear,
		addCharacter,
		removeCharacter,
		updateCharacter,
		selectCharacter,
	};

	const router = useRouter();
	const [currentPage, setPage] = useState("");
	const changePage = (path) => setPage(path);

	pageProps = {
		...pageProps,
		updateState,
		appState,
		currentPage,
		changePage,
	};
	return (
		<>
			<Head>
				<title>WoW TBC Classic Character Guide</title>
				<meta property="og:title" content="WoW TBC Classic Character Guide" />
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
		</>
	);
};

export default MyApp;
