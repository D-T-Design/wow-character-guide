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
                        platform
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
        gear
      }
    }
  }`;

export const queryAllDungeons = `{
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

const queryAllItems = () =>
	`{
    getItems(_size: 3000) {
      data {
        armorType
        drop
        faction {
          name
        }
        id
        iLvl
        name
        phase
        quality
        reqLvl
        slot
        wepType
      }
    }
  }`;

const getAllClassGear = `{
	getAllClassItems {
        data {
          name
          gear
        }
      }
    }`;

const queryItemsByArray = (arr) =>
	`getItemsByArray(array: ${arr}) {
    armorType
    drop
    faction {
      name
    }
    id
    iLvl
    name
    phase
    quality
    reqLvl
    slot
    wepType
  }`;

const queryItemsByClassName = (className) =>
	`{
  getItemsByClass(
    class: "${className}") {
    armorType
    drop
    faction {
      name
    }
    id
    iLvl
    imgURL
    name
    phase
    quality
    reqLvl
    slot
    wepType
  }
}`;

export {
	getAllClassGear,
	queryAllFactions,
	queryClassGear,
	queryAllZones,
	queryAllRaids,
	queryGetClassGear,
	queryAllItems,
	queryItemsByArray,
	queryItemsByClassName,
};
