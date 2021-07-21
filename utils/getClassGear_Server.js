import { graphQLClient, queryItemsByClassName } from "./fauna_gql";

const fetcher = (query) => graphQLClient.request(query);

export default async function getClassGear_Server() {
	const { getItemsByClass: druid } = await fetcher(queryItemsByClassName("Druid"));
	const { getItemsByClass: hunter } = await fetcher(queryItemsByClassName("Hunter"));
	const { getItemsByClass: mage } = await fetcher(queryItemsByClassName("Mage"));
	const { getItemsByClass: paladin } = await fetcher(queryItemsByClassName("Paladin"));
	const { getItemsByClass: priest } = await fetcher(queryItemsByClassName("Priest"));
	const { getItemsByClass: rogue } = await fetcher(queryItemsByClassName("Rogue"));
	const { getItemsByClass: shaman } = await fetcher(queryItemsByClassName("Shaman"));
	const { getItemsByClass: warlock } = await fetcher(queryItemsByClassName("Warlock"));
	const { getItemsByClass: warrior } = await fetcher(queryItemsByClassName("Warrior"));
	const gearData = {
		druid,
		hunter,
		mage,
		paladin,
		priest,
		rogue,
		shaman,
		warlock,
		warrior,
	};
	return gearData;
}
