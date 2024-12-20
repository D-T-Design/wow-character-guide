import { createClient } from "@utils/supabase/static-props";
import { NextApiRequest, NextApiResponse } from "next/types";

// Will include query params for the players current level and faction
// ?level=60

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const { level } = req.query;
      let query = createClient().from("dungeons").select("*");

      if (level) {
        const levelInt = parseInt(level as string, 10);
        query = query.lte("level_range->0", levelInt).gte("level_range->1", levelInt);
      }
      const { data, error } = await query;

      if (error) {
        return res.status(500).json({ error: error.message });
      }

      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
