import { InputCharacter } from "../components/characterInput";

export default function Welcome({ props }) {
	const { addCharacter, updateGameData } = props.updateState;
	const blankCallback = () => null;
	const action = { title: "Add Character", formAction: addCharacter, callback: blankCallback };
	return (
		<InputCharacter action={action} gameData={props.gameData} updateGameData={updateGameData} />
	);
}
