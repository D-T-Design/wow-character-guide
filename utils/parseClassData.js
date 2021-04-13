export default function parseClassData(data) {
	// Create array of just the Faction names for return
	const availableFactions = data.allFactions.data.map((faction) => faction.name);

	// Assign array for each faction with just the Race names for return
	const [hordeRaces, allianceRaces] = data.allFactions.data.map((faction) =>
		faction.races.data.map((race) => race.name)
	);

	// Assign array of all available classes
	const extractClasses = data.allFactions.data.map((faction) =>
		faction.races.data.map((race) => race.classes.data)
	);

	// Create array of class data for return
	let classes = [];
	extractClasses.map((faction) =>
		faction.map((race) => {
			return race.map(
				(playerClass) =>
					!classes.includes(classes.find((el) => el.name === playerClass.name)) &&
					classes.push(playerClass)
			);
		})
	);

	// Expose data for export
	const hordeData = data.allFactions.data[0].races.data;
	const allianceData = data.allFactions.data[1].races.data;

	const getAvailableClasses = (data, className) =>
		data
			.find((race) => race.name === className)
			.classes.data.map((playerClass) => playerClass.name);
	const [
		undeadClasses,
		trollClasses,
		taurenClasses,
		orcClasses,
		bloodelfClasses,
		humanClasses,
		nightelfClasses,
		dwarfClasses,
		gnomeClasses,
		draeneiClasses,
	] = [
		getAvailableClasses(hordeData, "Undead"),
		getAvailableClasses(hordeData, "Troll"),
		getAvailableClasses(hordeData, "Tauren"),
		getAvailableClasses(hordeData, "Orc"),
		getAvailableClasses(hordeData, "Blood Elf"),
		getAvailableClasses(allianceData, "Human"),
		getAvailableClasses(allianceData, "Night Elf"),
		getAvailableClasses(allianceData, "Dwarf"),
		getAvailableClasses(allianceData, "Gnome"),
		getAvailableClasses(allianceData, "Draenei"),
	];
	return {
		availableFactions,
		hordeRaces,
		allianceRaces,
		classes,
		undeadClasses,
		trollClasses,
		taurenClasses,
		orcClasses,
		humanClasses,
		nightelfClasses,
		dwarfClasses,
		gnomeClasses,
		bloodelfClasses,
		draeneiClasses,
	};
}
