import useSWR from "swr";
import { graphQLClient, queryAllItems } from "./fauna_gql";

const fetcher = (query) => graphQLClient.request(query);

export default function getAllItems() {
	const { data, error } = useSWR(queryAllItems(), fetcher);
	let items = data || [];
	let itemsError = error || null;
	const itemsPending = !data;
	if (items.getItems) {
		items = items.getItems.data;
	}
	if (itemsError) {
		console.log(itemsError);
	}
	return { items, itemsError, itemsPending };
}
