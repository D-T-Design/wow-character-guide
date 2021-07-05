var fetch = require("isomorphic-unfetch");

export default async function blizzAPIHandler(req, res) {
	const {
		query: { bearerToken, endpoint },
	} = req;
	console.log(req);
	const url = "https://us.api.blizzard.com";
	const namespace = "?namespace=static-classic-us";
	const locale = "&locale=en_US";
	const lookupResponse = fetch(`${url}${endpoint}${namespace}${locale}`, {
		headers: {
			Authorization: `Bearer ${bearerToken}`,
			"content-type": "application/x-www-form-urlencoded",
		},
		method: "GET",
	});
	console.log("Response", lookupResponse);
	const data = lookupResponse.json();
	res.status(200).json(data);
}
