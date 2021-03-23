import useSWR from "swr";
import { graphQLClient, queryAllRaids } from "./fauna_gql";
import parseRaidData from "./parseRaidData";

const fetcher = (query) => graphQLClient.request(query);

export default function useRaidData() {
	const { data, error } = useSWR(queryAllRaids, fetcher);
	let newData = data || [];
	const raidIsPending = !data;
	const raidError = error;
	const raidData = newData.getAllRaids ? parseRaidData(newData) : newData;
	if (error) {
		console.log(error);
	}
	return { raidData, raidError, raidIsPending };
}
