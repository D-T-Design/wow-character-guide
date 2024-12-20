let tokenCache = {
  token: null,
  expiresAt: 0,
};

async function fetchOAuthToken() {
  if (tokenCache.token && Date.now() < tokenCache.expiresAt) {
    // Return cached token if it is still valid
    return tokenCache.token;
  }
  const blizzardID = process.env.BLIZZARD_CLIENT_ID;
  const blizzardSecret = process.env.BLIZZARD_CLIENT_SECRET;
  const auth = Buffer.from(`${blizzardID}:${blizzardSecret}`).toString("base64");

  const response = await fetch("https://oauth.battle.net/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch OAuth token");
  }

  const data = await response.json();
  tokenCache.token = data.access_token;
  tokenCache.expiresAt = Date.now() + data.expires_in * 1000;

  return tokenCache.token;
}

export default fetchOAuthToken;
