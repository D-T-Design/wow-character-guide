import useSWR from "swr";
import { graphQLClient, queryGetClassGear } from "./fauna_gql";
import parseClassGear from "../utils/parseClassGear";

const fetcher = (query) => graphQLClient.request(query);

export default function getClassGear(className) {
	const { data, error } = useSWR(queryGetClassGear(className), fetcher);
	let gear = data || [];
	const isPending = !data;
	const classGear = gear.classByName ? parseClassGear(gear) : gear;
	if (error) {
		console.log(error);
	}
	return { classGear, error, isPending };
}
