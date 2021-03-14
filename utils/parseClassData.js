export default function parseClassData(data) {
	const availableFactions = data.allFactions.data.map((faction) => faction.name);

	const [hordeRaces, allianceRaces] = data.allFactions.data.map((faction) =>
		faction.races.data.map((race) => race.name)
	);

	const extractClasses = data.allFactions.data.map((faction) =>
		faction.races.data.map((race) => race.classes.data)
	);

	let classes = [];
	extractClasses.map((faction) =>
		faction.map((race) =>
			race.map(
				(playerClass) =>
					!classes.includes(classes.find((el) => el.name === playerClass.name)) &&
					classes.push(playerClass)
			)
		)
	);

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
		humanClasses,
		nightElfClasses,
		dwarfClasses,
		gnomeClasses,
	] = [
		getAvailableClasses(hordeData, "Undead"),
		getAvailableClasses(hordeData, "Troll"),
		getAvailableClasses(hordeData, "Tauren"),
		getAvailableClasses(hordeData, "Orc"),
		getAvailableClasses(allianceData, "Human"),
		getAvailableClasses(allianceData, "Night Elf"),
		getAvailableClasses(allianceData, "Dwarf"),
		getAvailableClasses(allianceData, "Gnome"),
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
		nightElfClasses,
		dwarfClasses,
		gnomeClasses,
	};
}
