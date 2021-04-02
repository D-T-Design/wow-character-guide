import React, { useState } from "react";
import { SWRConfig } from "swr";

import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/globals.scss";

const MyApp = ({ Component, pageProps }) => {
	const [appState, setState] = useState({
		gear: [],
		character: 0,
		savedCharacters: [],
	});
	const updateGear = (gear) => {
		const characters = [...appState.savedCharacters];
		const updatedList = characters.map((savedCharacter) =>
			savedCharacter.ts === appState.character ? { ...savedCharacter, gear } : savedCharacter
		);
		setState({ ...appState, gear, savedCharacters: updatedList });
	};
	const addCharacter = (data) => {
		const character = { ...data, ts: Date.now() };
		const savedCharacters = [...appState.savedCharacters, character];
		setState({ ...appState, character: character.ts, savedCharacters });
	};
	const updateCharacter = (updatedCharacter) => {
		const characters = [...appState.savedCharacters];
		const updatedList = characters.map((savedCharacter) =>
			savedCharacter.ts === updatedCharacter.ts ? updatedCharacter : savedCharacter
		);
		setState({ ...appState, savedCharacters: updatedList });
	};
	const removeCharacter = (ts) => {
		const characters = [...appState.savedCharacters];
		const newCharacterList = characters.filter((character) => {
			return character.ts !== ts;
		});
		const isListEmpty = newCharacterList.length === 0;
		const character = isListEmpty ? 0 : newCharacterList[0].ts;
		setState({
			...appState,
			character,
			savedCharacters: newCharacterList,
		});
	};

	const selectCharacter = (ts) => {
		const savedCharacters = [...appState.savedCharacters];
		setState({
			...appState,
			character: savedCharacters.find((character) => character.ts === ts).ts,
		});
	};

	const updateState = {
		updateGear,
		addCharacter,
		removeCharacter,
		updateCharacter,
		selectCharacter,
	};

	pageProps = {
		...pageProps,
		updateState,
		appState,
	};
	return (
		<div>
			<Navbar {...pageProps} />
			<SWRConfig
				value={{
					refreshInterval: 3000000,
				}}
			>
				<Component {...pageProps} />
			</SWRConfig>
			<Footer />
		</div>
	);
};

export default MyApp;
