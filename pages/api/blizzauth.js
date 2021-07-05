var fetch = require("isomorphic-unfetch");

const blizzardID = process.env.NEXT_PUBLIC_BLIZZ_ID;
const blizzardSecret = process.env.NEXT_PUBLIC_BLIZZ_SECRET;

export default async function blizzAuthHandler(req, res) {
	const auth = Buffer.from(`${blizzardID}:${blizzardSecret}`).toString("base64");
	const tokenResponse = await fetch("https://us.battle.net/oauth/token", {
		body: "grant_type=client_credentials",
		headers: {
			Authorization: `Basic ${auth}`,
			"Content-Type": "application/x-www-form-urlencoded",
		},
		method: "POST",
	});
	const data = await tokenResponse.json();
	res.status(200).json(data);
}
