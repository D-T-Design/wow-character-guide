import { createClient } from "@utils/supabase/static-props";
import { NextApiRequest, NextApiResponse } from "next/types";

// Will include query params for the players current level and faction
// ?className=Druid&level=60

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const { className, level } = req.query;
      const supabase = createClient();
      const { data: classData, error: classError } = await supabase
        .from("classes")
        .select("class_id")
        .eq("name", className)
        .single();

      if (classError) throw classError;
      if (!classData) throw new Error("Class not found");

      const { data, error } = await supabase
        .from("items")
        .select(`*, class_items!inner(class_id)`)
        .eq("class_items.class_id", classData.class_id)
        .lte("req_lvl", level)
        .gte("req_lvl", Number(level) - 10)
        .order("req_lvl", { ascending: false });

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
