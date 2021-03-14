import useSWR from "swr";
import { graphQLClient, queryAllFactions } from "./fauna_gql";
import parseClassData from "../utils/parseClassData";

const fetcher = (query) => graphQLClient.request(query);

export default function useClassData() {
	const { data, error } = useSWR(queryAllFactions, fetcher);
	let newData = data || [];
	const isPending = !data;
	const classData = newData.allFactions ? parseClassData(newData) : newData;
	if (error) {
		console.log(error);
	}
	return { classData, error, isPending };
}
