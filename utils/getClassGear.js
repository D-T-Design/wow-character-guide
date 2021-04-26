import useSWR from "swr";
import { graphQLClient, queryGetClassGear } from "./fauna_gql";

const fetcher = (query) => graphQLClient.request(query);

export default function getClassGear(className) {
	const { data, error } = useSWR(queryGetClassGear(className), fetcher);
	let gear = data || [];
	const isPending = !data;
	if (gear.classByName) {
		gear = gear.classByName.data[0].gear;
	}
	if (error) {
		console.log(error);
	}
	return { gear, error, isPending };
}
