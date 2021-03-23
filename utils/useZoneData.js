import useSWR from "swr";
import { graphQLClient, queryAllZones } from "./fauna_gql";
import parseZoneData from "./parseZoneData";

const fetcher = (query) => graphQLClient.request(query);

export default function useZoneData() {
	const { data, error } = useSWR(queryAllZones, fetcher);
	let newData = data || [];
	const isPending = !data;
	const zoneData = newData.getAllZones ? parseZoneData(newData) : newData;
	if (error) {
		console.log(error);
	}
	return { zoneData, error, isPending };
}
