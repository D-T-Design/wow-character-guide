import fetch from "isomorphic-unfetch";
export default async function useBlizzAuth() {
	const blizzardID = process.env.NEXT_PUBLIC_BLIZZ_ID;
	const blizzardSecret = process.env.NEXT_PUBLIC_BLIZZ_SECRET;
	const auth = Buffer.from(`${blizzardID}:${blizzardSecret}`).toString("base64");
	const tokenResponse = await fetch("https://us.battle.net/oauth/token", {
		body: "grant_type=client_credentials",
		headers: {
			Authorization: `Basic ${auth}`,
			"Content-Type": "application/x-www-form-urlencoded",
		},
		method: "POST",
	});
	const accessBlizz = await tokenResponse.json();
	return accessBlizz;
}
