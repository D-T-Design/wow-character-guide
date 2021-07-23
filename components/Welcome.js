import { InputCharacter } from "../components/characterInput";

export default function Welcome({ props }) {
	const { addCharacter } = props.updateState;
	const blankCallback = () => null;
	const action = { title: "Add Character", formAction: addCharacter, callback: blankCallback };
	return <InputCharacter action={action} classData={props.classData} />;
}
