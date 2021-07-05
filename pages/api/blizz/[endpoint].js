var fetch = require("isomorphic-unfetch");

export default async function blizzAPIHandler(req, res) {
	const {
		query: { endpoint },
	} = req;
	const itemID = endpoint.substring(0, endpoint.indexOf("&"));
	const bearerToken = endpoint.substring(endpoint.indexOf("&") + 1);
	const url = "https://us.api.blizzard.com/data/wow";
	const namespace = "?namespace=static-classic-us";
	const locale = "&locale=en_US";
	const access_token = `&access_token=${bearerToken}`;
	const lookupResponse = await fetch(`${url}/item/${itemID}${namespace}${locale}${access_token}`);
	const data = await lookupResponse.json();
	res.status(200).json(data);
}
