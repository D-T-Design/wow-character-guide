import { useRouter } from "next/router";

import ClassGuides from "../../components/classguides";

import { graphQLClient, queryAllFactions } from "../../utils/fauna_gql";

const fetcher = (query) => graphQLClient.request(query);

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
	const classData = await fetcher(queryAllFactions);
	return {
		props: { classData, classID: params.classid },
	};
}
const ClassGuide = ({ appState, classData, classID, currentPage }) => {
	const router = useRouter();
	if (router.isFallback) {
		return <div>Loading...</div>;
	}
	return (
		<ClassGuides
			appState={appState}
			classData={classData}
			classID={classID}
			currentPage={currentPage}
		/>
	);
};
export default ClassGuide;
