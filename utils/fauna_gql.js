import { GraphQLClient } from "graphql-request";

const endpoint = "https://graphql.fauna.com/graphql";

export const graphQLClient = new GraphQLClient(endpoint, {
	headers: {
		authorization: `Bearer ${process.env.NEXT_PUBLIC_FAUNADB}`,
	},
});

const queryAllFactions = `{
      allFactions {
        data {
          name
          races {
            data {
              name
              classes {
                data {
                  id
                  name
                  armorTypes {
                    data {
                      name
                      id
                    }
                  }
                  weaponTypes {
                    data {
                      name
                      id
                    }
                  }
                  statTypes {
                    data {
                      name
                      id
                    }
                  }
                }
              }
            }
          }
        }
      }
    }`;

const queryClassGear = (className) =>
	`{
    classByName(name: "${className}") {
      data {
        name
        gear {
          data {
            slot {
              data {
                name
                items {
                  data {
                    name
                    quality
                    id
                    iLvl
                    reqLvl
                  }
                }
              }
            }
          }
        } 
      }
    }
  }`;

const queryAllZones = `{
  getAllZones {
    data {
      name
      id
      range
      faction
      tier
      dungeons {
        data {
          name
        }
      }
      raids {
        data {
          name
        }
      }
    }
  }
}`;

const queryAllDungeons = `{
  getAllDungeons {
    data {
      name
      level
      zone {
        name
      }
      id
    }
  }
}`;

const queryAllRaids = `{
  getAllRaids {
    data {
      name
      level
      zone {
        name
      }
      id
      tier
    }
  }
}`;

export {
	queryAllFactions,
	queryClassGear,
	queryAllZones,
	queryAllDungeons,
	queryAllRaids
};
