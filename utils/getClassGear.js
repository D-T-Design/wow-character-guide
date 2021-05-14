import useSWR from "swr";
import { graphQLClient, queryItemsByClassName } from "./fauna_gql";

const fetcher = (query) => graphQLClient.request(query);

export default function getClassGear(className) {
	const { data, error } = useSWR(queryItemsByClassName(className), fetcher);
	let gear = data || [];
	const isPending = !data;
	if (gear.getItemsByClass) {
		gear = gear.getItemsByClass;
	}
	if (error) {
		console.log(error);
	}
	return { gear, error, isPending };
}
