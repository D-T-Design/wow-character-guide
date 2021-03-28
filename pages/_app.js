import React, { useState } from "react";
import useClassData from "../utils/useClassData";

import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/globals.scss";

const MyApp = ({ Component, pageProps }) => {
	const { classData, error, isPending } = useClassData();
	let classGear = {};
	const [appState, setState] = useState({
		faction: "",
		level: 1,
		name: "",
		playerClass: "",
		race: "",
		gear: {},
		character: {},
	});
	const [savedCharacters, setCharacters] = useState([]);
	const updateLevel = (e) => {
		const newLevel = e.target.value;
		const level = newLevel === "" ? "" : newLevel < 1 ? 1 : newLevel > 60 ? 60 : newLevel;
		setState({ ...appState, level });
	};
	const updateName = (e) => {
		setState({ ...appState, name: e.target.value });
	};
	const updateFaction = (faction) => {
		setState({ ...appState, faction, race: "", playerClass: "" });
	};
	const updateRace = (race) => {
		setState({ ...appState, race, playerClass: "" });
	};
	const updateClass = (playerClass) => {
		setState({ ...appState, playerClass });
	};
	const updateGear = (gear) => {
		setState({ ...appState, gear });
	};
	const addCharacter = (data) => {
		const character = { ...data, ts: Date.now() };
		setCharacters([...savedCharacters, character]);
		setState({ ...appState, character: data });
	};
	const updateCharacter = (character, key) => {
		setCharacters((savedCharacters[key] = character));
	};
	const removeCharacter = (key) => {
		const currentCharacters = [...savedCharacters];
		setCharacters(
			currentCharacters.filter((character, i) => {
				return i !== key;
			})
		);
		setState({ ...appState, character: savedCharacters[0] });
	};

	const updateState = {
		updateLevel,
		updateName,
		updateFaction,
		updateRace,
		updateClass,
		updateGear,
		addCharacter,
		removeCharacter,
		updateCharacter,
	};

	pageProps = {
		...pageProps,
		updateState,
		appState,
		savedCharacters,
		classData,
		classGear,
		error,
		isPending,
	};
	return (
		<div>
			<Navbar {...pageProps} />
			<Component {...pageProps} />
			<Footer />
		</div>
	);
};

export default MyApp;
