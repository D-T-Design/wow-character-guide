import useSWR from "swr";
import { graphQLClient, queryAllDungeons } from "./fauna_gql";
import parseDungeonData from "./parseDungeonData";

const fetcher = (query) => graphQLClient.request(query);

export default function useDungeonData() {
	const { data, error } = useSWR(queryAllDungeons, fetcher);
	let newData = data || [];
	const dungeonIsPending = !data;
	const dungeonError = error;
	const dungeonData = newData.getAllDungeons ? parseDungeonData(newData) : newData;
	if (error) {
		console.log(error);
	}
	return { dungeonData, dungeonError, dungeonIsPending };
}
