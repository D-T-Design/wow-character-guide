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
	});
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

	const updateState = { updateLevel, updateName, updateFaction, updateRace, updateClass };

	pageProps = {
		...pageProps,
		updateState,
		appState,
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
