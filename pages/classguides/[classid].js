import { useRouter } from "next/router";
import ClassGuides from "../../components/classguides";


export async function getStaticPaths() {
	return {
		paths: [
			{ params: { classid: "druid" } },
			{ params: { classid: "hunter" } },
			{ params: { classid: "mage" } },
			{ params: { classid: "paladin" } },
			{ params: { classid: "priest" } },
			{ params: { classid: "rogue" } },
			{ params: { classid: "shaman" } },
			{ params: { classid: "warlock" } },
			{ params: { classid: "warrior" } },
		],
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	return {
		props: { classID: params.classid },
	};
}
const ClassGuide = ({ appState, classID }) => {
	const router = useRouter();
	if (router.isFallback) {
		return <div>Loading...</div>;
	}
	return (
		<ClassGuides
			appState={appState}
			classID={classID}
		/>
	);
};
export default ClassGuide;
