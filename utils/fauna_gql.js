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
                  reference {
                    summary
                    teamroles
                    resource
                    primarystats
                    secondarystats
                    specs
                    weaponTypes {
                      name
                    }
                    armorTypes {
                      name
                    }
                    classGuides {
                      data {
                        title
                        link
                        thumb
                      }
                    }
                    creators {
                      data {
                        title
                        link
                        icon
                      }
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
  getAllZones(_size:500) {
    data {
      name
      id
      range
      faction
      tier
      img
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

const queryAllRaids = `{
  getAllRaids {
      data {
        id
        name
        zone {
          name
          faction
        }
        level
        tier
        img
        phase
      }
    }
  }`;

const queryGetClassGear = (className) =>
	`{
    classByName(name: "${className}") {
      data {
        gear {
          data {
            slot {
              data {
                name
                items(_size:3000) {
                  data {
                    name
                    faction {
                      name
                    }
                    quality
                    wepType
                    id
                    iLvl
                    reqLvl
                    drop
                  }
                }
              }
            }
          }
        }
      }
    }
  }`;

export const queryAllDungeons = () =>
	`{
    getAllDungeons(_size:500) {
      data {
        id
        name
        zone {
          name
          faction
        }
        level
        img
      }
    }
  }`;

export {
	queryAllFactions,
	queryClassGear,
	queryAllZones,
	queryAllRaids,
	queryGetClassGear,
};
