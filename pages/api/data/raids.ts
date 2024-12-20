import { createClient } from "@utils/supabase/static-props";
import { NextApiRequest, NextApiResponse } from "next/types";

// Will include query params for the players current level and faction
// ?level=60&tier=1

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const { level, tier } = req.query;
      let query = createClient().from("raids").select("*");

      if (level && level !== "0") {
        const levelInt = parseInt(level as string, 10);
        query = query.lte("level_range->0", levelInt);
      }

      if (tier) {
        query = query.lte("tier", tier);
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
