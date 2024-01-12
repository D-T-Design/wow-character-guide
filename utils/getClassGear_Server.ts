import { useQuery } from "@tanstack/react-query";
import { Client, fql, FaunaError } from "fauna";

export function useClassGearQuery(className: string) {
  return useQuery<ItemDocument[]>(
    ["classGear", className],
    async () => {
      const docs = await getItemsByClass(className);
      return docs.data;
    },
    {
      staleTime: 1000 * 60 * 60,
      enabled: !!className,
    }
  );
}

async function getItemsByClass(className: string) {
  const client = new Client({
    secret: process.env.NEXT_PUBLIC_FAUNADB,
  });

  try {
    // execute the query
    return await client.query<ItemDocument[]>(fql`findItemsByClassName(${className})`, {
      arguments: {
        className,
      },
    });
  } catch (error) {
    if (error instanceof FaunaError) {
      // handle errors
      console.error(error);
    }
  } finally {
    // clean up any remaining resources
    client.close();
  }
}

interface ItemsByClassResponse extends Record<string, any> {
  data: ItemDocument[];
  schema_version: number;
  static_type: string;
  stats: any;
  summary: string;
  txn_ts: number;
}

interface ItemDocument {
  coll: {
    name: string;
  };
  data: {
    id: number;
  };
  drop: string;
  iLvl: number;
  id: string;
  name: string;
  imgURL: string;
  phase: number;
  quality: string;
  slot: string;
  reqLvl: number;
  armorType?: string;
  wepType?: string;
  ts: {
    isoString: string;
  };
}
