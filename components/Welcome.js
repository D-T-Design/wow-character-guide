import { InputCharacter } from "../components/characterInput";
import useClassData from "../utils/useClassData";

export default function Welcome({ props }) {
	const { classData, error, isPending } = useClassData();
	const { addCharacter } = props.updateState;
	const blankCallback = () => null;
	const action = { title: "Add Character", formAction: addCharacter, callback: blankCallback };
	return (
		<>
			{error ? (
				<p>Error loading class data.</p>
			) : isPending ? (
				<p>Loading class data...</p>
			) : (
				<InputCharacter classData={classData} action={action} />
			)}
		</>
	);
}
