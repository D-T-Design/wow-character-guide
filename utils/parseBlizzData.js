import fetch from "unfetch";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const getBlizzItemData = (endpoint, auth) => {
	const {
		data: blizzItemData,
		isPending,
		error,
	} = useSWR(() => `/api/blizz/${endpoint}&${auth}`, fetcher);
	return { blizzItemData, blizzItemPending: isPending, blizzItemError: error };
};

async function parseBlizzItemData(itemArray) {
	let newArr = [28768, 28310, 34329];
	let itemList = newArr.map((id) => {
		let { blizzItemData } = getBlizzItemData(id);
		setTimeout(() => {
			return blizzItemData;
		}, 100);
	});
	return itemList;
}

export { getBlizzItemData, parseBlizzItemData };
