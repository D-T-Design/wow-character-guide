export default function getAllData() {
  return {
		allFactions: {
			data: [
				{
					name: "Horde",
					races: {
						data: [
							{
								name: "Undead",
								classes: {
									data: [
										{
											id: "8",
											name: "Mage",
											reference: {
												summary:
													"The ultimate caster class in the game, Mages excel in ranged spell power.  Frost spells allow them to slow their enemies and control their movement.  Fire spells bring massive damage and burning effects, while Arcane provides burst damage and even more versatility for PVP.  In a team setting, mages are great thanks to one of the best crowd control spells: Polymorph.  They also buff other casters and can conjure food & drink for the party members.  They can also spawn city portals to save their party travel time.",
												teamroles: ["DPS", "Crowd Control"],
												resource: "Mana",
												primarystats: ["int", "sta"],
												secondarystats: [
													"spi",
													"spellhit",
													"spellhaste",
													"spellpower",
													"spellcrit",
												],
												specs: ["Arcane", "Fire", "Frost"],
												weaponTypes: [
													{ name: "Daggers" },
													{ name: "One-Handed Swords" },
													{ name: "Staves" },
													{ name: "Wands" },
													{ name: "Held In Off-Hand" },
												],
												armorTypes: [{ name: "Cloth" }],
												classGuides: {
													data: [
														{
															title: "TBC Mage Guide",
															link: "https://legacy-wow.com/tbc-mage-guide/",
															thumb: "mage_dtjzek.jpg",
														},
														{
															title: "Fire Mage PvE Guide",
															link: "https://www.warcrafttavern.com/tbc/guides/fire-mage-pve/",
															thumb:
																"TBC-Classic-PVE-Fire-Mage-DPS-Guide-Burning-Crusade-Classic_o4ikb4.jpg",
														},
														{
															title: "PVE Frost Mage Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-frost-mage-guide-tbc-2-4-3/",
															thumb: "PVE-Frost-Mage-Guide-TBC-2.4.3_jlmzrh.jpg",
														},
														{
															title: "PVE Arcane Mage Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-arcane-mage-guide-tbc-2-4-3/",
															thumb: "PVE-Arcane-Mage-Guide-TBC-2.4.3_xlayaz.jpg",
														},
													],
												},
												creators: {
													data: [
														{
															title: "FrostLive",
															link: "https://www.twitch.tv/frostlive",
															icon: "frostlive_iek6c8.png",
															platform: null,
														},
														{
															title: "Graycen",
															link: "https://www.twitch.tv/graycen",
															icon: "graycen_wri7wp.png",
															platform: null,
														},
														{
															title: "Alfie",
															link: "https://www.twitch.tv/alfie",
															icon: "alfie_c5quys.png",
															platform: null,
														},
													],
												},
											},
										},
										{
											id: "5",
											name: "Priest",
											reference: {
												summary:
													"Do you need a healer?  Priest is the top healer in the game, and they can even provide DPS with their Shadow tree.  Priests can buff, shield, dispel, and heal their teammates, making them required for raiding and other difficult content.  They have powerful heal over time spells and can burst heal groups or single targets as needed.  When paired with Warlocks, Shadow priests can dish out massive damage and provide debuffs on their enemies.",
												teamroles: ["Heal", "DPS", "Crowd Control"],
												resource: "Mana",
												primarystats: ["int", "spi"],
												secondarystats: [
													"healpower",
													"mp5",
													"sta",
													"spellpower",
													"spellcrit",
													"spellhit",
													"spellhaste",
												],
												specs: ["Discipline", "Holy", "Shadow"],
												weaponTypes: [
													{ name: "Daggers" },
													{ name: "One-Handed Maces" },
													{ name: "Staves" },
													{ name: "Wands" },
													{ name: "Held In Off-Hand" },
												],
												armorTypes: [{ name: "Cloth" }],
												classGuides: {
													data: [
														{
															title: "PVE Shadow Priest Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-shadow-priest/",
															thumb: "PVE-Shadow-Priest-Guide-TBC-2.4.3_swcpaf.jpg",
														},
														{
															title: "PVE Holy Priest Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-holy-priest/",
															thumb: "PVE-Holy-Priest-Guide-TBC-2.4.3_qslefj.jpg",
														},
														{
															title: "TBC Classic Holy Priest Guide",
															link: "https://wowtbc.gg/class-guides/holy-priest/",
															thumb:
																"angel-priest-world-of-warcraft-game-hd-wallpaper-1920x1080-4022-975x549_mwv5cs.jpg",
														},
														{
															title: "TBC Classic Shadow Priest Guide",
															link: "https://wowtbc.gg/class-guides/shadow-priest/",
															thumb: "450px-Shadowform_full_mf1uhy.jpg",
														},
													],
												},
												creators: {
													data: [
														{
															title: "Defcamp",
															link: "https://www.twitch.tv/defcamp",
															icon: "defcamp_js6qar.png",
															platform: null,
														},
													],
												},
											},
										},
										{
											id: "4",
											name: "Rogue",
											reference: {
												summary:
													'A master of stealth, the Rogue is a melee damage dealing class that specializes in dual-weilding and poisons.  While the class lacks team support abilities, it makes up for it with consistent damage, stealth crowd control abilities, and a unique playstyle.  Rogues use a Combo Point system, most primary attack skills add 1 Combo Point, allowing other skills called "finishers" to be used.',
												teamroles: ["DPS", "Crowd Control"],
												resource: "Energy",
												primarystats: ["agi", "sta"],
												secondarystats: ["str", "crit", "hit", "ap", "expertise"],
												specs: ["Assassination", "Combat", "Subtlety"],
												weaponTypes: [
													{ name: "Daggers" },
													{ name: "Fist Weapons" },
													{ name: "One-Handed Maces" },
													{ name: "One-Handed Swords" },
													{ name: "Bows" },
													{ name: "Crossbows" },
													{ name: "Guns" },
													{ name: "Thrown" },
												],
												armorTypes: [{ name: "Leather" }],
												classGuides: {
													data: [
														{
															title: "PVE Combat Rogue Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-combat-rogue-guide-tbc-2-4-3/",
															thumb: "PVE-Combat-Rogue-Guide-TBC-2.4.3_c4vroi.jpg",
														},
														{
															title: "Guide for Shadowstep PVP Rogue",
															link: "https://silentshadows.net/shadowstep-rogue-pvp-guide-burning-crusade/",
															thumb: "shsbuild_big-1024x576_plkvwl.jpg",
														},
														{
															title: "TBC Classic Combat Rogue Guide",
															link: "https://wowtbc.gg/class-guides/combat-rogue/",
															thumb: "rogue-650x325_lm6vxx.jpg",
														},
														{
															title: "Classic Rogue for Dummies",
															link: "https://classicroguecraft.com/",
															thumb: "rogue_wow_by_edgarsh422-dbehspp_tifm8o.jpg",
														},
													],
												},
												creators: {
													data: [
														{
															title: "Payo",
															link: "https://www.twitch.tv/Payo",
															icon: "payo_ghiuc8.jpg",
															platform: null,
														},
														{
															title: "Barny64",
															link: "https://www.twitch.tv/barny",
															icon: "barny64_abfj6q.jpg",
															platform: null,
														},
														{
															title: "snomie",
															link: "https://www.twitch.tv/snomie",
															icon: "snomie_jgtkce.png",
															platform: null,
														},
														{
															title: "Nahj",
															link: "https://www.twitch.tv/nahj",
															icon: "nahj_rrhyom.png",
															platform: null,
														},
													],
												},
											},
										},
										{
											id: "9",
											name: "Warlock",
											reference: {
												summary:
													"Dark magic, blood, and fire fuel Warlocks, they are the top damage dealing casters in the game and one of two pet classes.  Instead of animals found in the world, Warlocks dominate summoned demons and use them as pets.  Warlocks excel in damage over time spells and can provide burst damage that competes with any other class for top damage done.  Warlocks lack much team buffing abilities, but they do provide Soulstones allowing others to revive as needed -- this is required for raiding content.  Also, they can summon teammates to any location, saving travel time.",
												teamroles: ["Heal", "DPS", "Crowd Control"],
												resource: "Mana",
												primarystats: ["int", "sta"],
												secondarystats: ["spellhit", "spellpower", "spellcrit", "spellhaste"],
												specs: ["Affliction", "Demonology", "Destruction"],
												weaponTypes: [
													{ name: "Daggers" },
													{ name: "One-Handed Swords" },
													{ name: "Staves" },
													{ name: "Wands" },
													{ name: "Held In Off-Hand" },
												],
												armorTypes: [{ name: "Cloth" }],
												classGuides: {
													data: [
														{
															title: "TBC Warlock Guide (1-70)",
															link: "https://legacy-wow.com/tbc-warlock-guide/",
															thumb: "warlock_ek0ant.jpg",
														},
														{
															title: "PVE Destruction Warlock Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-destruction-warlock-guide-tbc-2-4-3/",
															thumb: "PVE-Destruction-Warlock-Guide-TBC-2.4.3_bkvaqk.jpg",
														},
														{
															title: "PVE Affliction Warlock Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-affliction-warlock-guide-tbc-2-4-3/",
															thumb: "PVE-Affliction-Warlock-Guide-TBC-2.4.3_z2enhx.jpg",
														},
														{
															title: "TBC Classic Destruction Warlock Guide",
															link: "https://wowtbc.gg/class-guides/destruction-warlock/",
															thumb: "Mort-vivant_Demoniste_se5ger.webp",
														},
													],
												},
												creators: {
													data: [
														{
															title: "Kargoz",
															link: "https://www.twitch.tv/kargozgaming",
															icon: "kargoz_d1xghc.png",
															platform: null,
														},
														{
															title: "Crix Gaming",
															link: "https://www.youtube.com/channel/UCPhMcl-ppbEqGDulH_Kf1MQ",
															icon: "crix_ai4yqt.jpg",
															platform: null,
														},
													],
												},
											},
										},
										{
											id: "1",
											name: "Warrior",
											reference: {
												summary:
													"Warriors are the ultimate melee class, and they are the strongest tank class in the game.  Warriors can wear plate armor and equip almost every weapon type there is.  When tanking, warriors can keep enemies focused on them while buffing their teammates.  When providing melee DPS, warriors can dual-wield or wield two-hand weapons to destroy their enemies.",
												teamroles: ["Tank", "DPS"],
												resource: "Rage",
												primarystats: ["str", "sta"],
												secondarystats: [
													"defense",
													"block",
													"expertise",
													"hit",
													"agi",
													"haste",
													"crit",
												],
												specs: ["Arms", "Fury", "Protection"],
												weaponTypes: [
													{ name: "Daggers" },
													{ name: "Fist Weapons" },
													{ name: "One-Handed Axes" },
													{ name: "One-Handed Maces" },
													{ name: "One-Handed Swords" },
													{ name: "Polearms" },
													{ name: "Staves" },
													{ name: "Two-Handed Axes" },
													{ name: "Two-Handed Maces" },
													{ name: "Two-Handed Swords" },
													{ name: "Shields" },
													{ name: "Bows" },
													{ name: "Crossbows" },
													{ name: "Guns" },
													{ name: "Thrown" },
												],
												armorTypes: [{ name: "Mail" }, { name: "Plate" }],
												classGuides: {
													data: [
														{
															title: "TBC Warrior Guide",
															link: "https://legacy-wow.com/tbc-warrior-guide/",
															thumb: "tbc_warrior_guide_ojyy08.jpg",
														},
														{
															title: "PVE Fury Warrior DPS Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-fury-warrior-dps-guide-tbc-2-4-3/",
															thumb: "PVE-Fury-Warrior-DPS-Guide-TBC-2.4.3_aclkg0.jpg",
														},
														{
															title: "PVE DPS Arms Warrior Guide (TBC 2.4.3) ",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-dps-arms-warrior/",
															thumb: "PVE-DPS-Arms-Warrior-Guide-TBC-2.4.3_q75yfp.jpg",
														},
														{
															title: "PvE Protection Warrior Tank Guide",
															link: "https://www.warcrafttavern.com/tbc/guides/pve-protection-warrior-tank/",
															thumb:
																"TBC-Classic-PvE-Protection-Warrior-Tank-Guide-Burning-Crusade-Classic_llzjfw.jpg",
														},
													],
												},
												creators: {
													data: [
														{
															title: "Asmongold",
															link: "https://www.twitch.tv/asmongold",
															icon: "asmon_m0grlo.png",
															platform: null,
														},
														{
															title: "Rai Bread",
															link: "https://www.youtube.com/channel/UCYNsSRo2Rg20CZiXHeFQmpw",
															icon: "raibread_sm6rna.jpg",
															platform: null,
														},
													],
												},
											},
										},
									],
								},
							},
							{
								name: "Troll",
								classes: {
									data: [
										{
											id: "3",
											name: "Hunter",
											reference: {
												summary:
													"Hunters are the top ranged physical DPS in the game.  They are one of two classes that use pets, and hunters are known for soloing dungeons and kiting world bosses thanks to their long range and high DPS.  Hunters can provide crowd control in the form of traps and are great in PVP too.",
												teamroles: ["DPS", "Crowd Control"],
												resource: "Mana",
												primarystats: ["agi", "int"],
												secondarystats: ["sta", "haste", "hit", "ap", "crit", "parry"],
												specs: ["Marksmanship", "Beast Mastery", "Survival"],
												weaponTypes: [
													{ name: "Daggers" },
													{ name: "Fist Weapons" },
													{ name: "One-Handed Axes" },
													{ name: "One-Handed Swords" },
													{ name: "Polearms" },
													{ name: "Staves" },
													{ name: "Two-Handed Axes" },
													{ name: "Two-Handed Swords" },
													{ name: "Bows" },
													{ name: "Crossbows" },
													{ name: "Guns" },
													{ name: "Thrown" },
												],
												armorTypes: [{ name: "Leather" }, { name: "Mail" }],
												classGuides: {
													data: [
														{
															title:
																"TBC Classic: Hunter Class DEEP DIVE (All 3 Specs, PvE, PvP, Tips & Tricks) - The Burning Crusade",
															link: "https://www.youtube.com/watch?v=xnk3GiaDB9k",
															thumb: "kargozhunter_xids6w.jpg",
														},
														{
															title: "PvE Beast Mastery Hunter Guide",
															link: "https://www.warcrafttavern.com/tbc/guides/pve-beast-mastery-hunter/",
															thumb: "pve-beast-mastery-hunter-guide_k4dhmn.jpg",
														},
														{
															title: "TBC Hunter Guide",
															link: "https://legacy-wow.com/tbc-hunter-guide/",
															thumb: "hunter_trkhcg.jpg",
														},
													],
												},
												creators: {
													data: [
														{
															title: "Agran",
															link: "https://www.youtube.com/watch?v=dH6lJMU43bw&list=PLdlIYjR4sJScJrvhHZYSwq91jAvinEmsp",
															icon: "agran_n7x301.jpg",
															platform: null,
														},
														{
															title: "Bigbobbedboi",
															link: "https://www.youtube.com/channel/UCMrTztxAtaZDZZk6hu8HLig",
															icon: "bigbobbedboi_qj9qdq.jpg",
															platform: null,
														},
													],
												},
											},
										},
										{
											id: "8",
											name: "Mage",
											reference: {
												summary:
													"The ultimate caster class in the game, Mages excel in ranged spell power.  Frost spells allow them to slow their enemies and control their movement.  Fire spells bring massive damage and burning effects, while Arcane provides burst damage and even more versatility for PVP.  In a team setting, mages are great thanks to one of the best crowd control spells: Polymorph.  They also buff other casters and can conjure food & drink for the party members.  They can also spawn city portals to save their party travel time.",
												teamroles: ["DPS", "Crowd Control"],
												resource: "Mana",
												primarystats: ["int", "sta"],
												secondarystats: [
													"spi",
													"spellhit",
													"spellhaste",
													"spellpower",
													"spellcrit",
												],
												specs: ["Arcane", "Fire", "Frost"],
												weaponTypes: [
													{ name: "Daggers" },
													{ name: "One-Handed Swords" },
													{ name: "Staves" },
													{ name: "Wands" },
													{ name: "Held In Off-Hand" },
												],
												armorTypes: [{ name: "Cloth" }],
												classGuides: {
													data: [
														{
															title: "TBC Mage Guide",
															link: "https://legacy-wow.com/tbc-mage-guide/",
															thumb: "mage_dtjzek.jpg",
														},
														{
															title: "Fire Mage PvE Guide",
															link: "https://www.warcrafttavern.com/tbc/guides/fire-mage-pve/",
															thumb:
																"TBC-Classic-PVE-Fire-Mage-DPS-Guide-Burning-Crusade-Classic_o4ikb4.jpg",
														},
														{
															title: "PVE Frost Mage Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-frost-mage-guide-tbc-2-4-3/",
															thumb: "PVE-Frost-Mage-Guide-TBC-2.4.3_jlmzrh.jpg",
														},
														{
															title: "PVE Arcane Mage Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-arcane-mage-guide-tbc-2-4-3/",
															thumb: "PVE-Arcane-Mage-Guide-TBC-2.4.3_xlayaz.jpg",
														},
													],
												},
												creators: {
													data: [
														{
															title: "FrostLive",
															link: "https://www.twitch.tv/frostlive",
															icon: "frostlive_iek6c8.png",
															platform: null,
														},
														{
															title: "Graycen",
															link: "https://www.twitch.tv/graycen",
															icon: "graycen_wri7wp.png",
															platform: null,
														},
														{
															title: "Alfie",
															link: "https://www.twitch.tv/alfie",
															icon: "alfie_c5quys.png",
															platform: null,
														},
													],
												},
											},
										},
										{
											id: "5",
											name: "Priest",
											reference: {
												summary:
													"Do you need a healer?  Priest is the top healer in the game, and they can even provide DPS with their Shadow tree.  Priests can buff, shield, dispel, and heal their teammates, making them required for raiding and other difficult content.  They have powerful heal over time spells and can burst heal groups or single targets as needed.  When paired with Warlocks, Shadow priests can dish out massive damage and provide debuffs on their enemies.",
												teamroles: ["Heal", "DPS", "Crowd Control"],
												resource: "Mana",
												primarystats: ["int", "spi"],
												secondarystats: [
													"healpower",
													"mp5",
													"sta",
													"spellpower",
													"spellcrit",
													"spellhit",
													"spellhaste",
												],
												specs: ["Discipline", "Holy", "Shadow"],
												weaponTypes: [
													{ name: "Daggers" },
													{ name: "One-Handed Maces" },
													{ name: "Staves" },
													{ name: "Wands" },
													{ name: "Held In Off-Hand" },
												],
												armorTypes: [{ name: "Cloth" }],
												classGuides: {
													data: [
														{
															title: "PVE Shadow Priest Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-shadow-priest/",
															thumb: "PVE-Shadow-Priest-Guide-TBC-2.4.3_swcpaf.jpg",
														},
														{
															title: "PVE Holy Priest Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-holy-priest/",
															thumb: "PVE-Holy-Priest-Guide-TBC-2.4.3_qslefj.jpg",
														},
														{
															title: "TBC Classic Holy Priest Guide",
															link: "https://wowtbc.gg/class-guides/holy-priest/",
															thumb:
																"angel-priest-world-of-warcraft-game-hd-wallpaper-1920x1080-4022-975x549_mwv5cs.jpg",
														},
														{
															title: "TBC Classic Shadow Priest Guide",
															link: "https://wowtbc.gg/class-guides/shadow-priest/",
															thumb: "450px-Shadowform_full_mf1uhy.jpg",
														},
													],
												},
												creators: {
													data: [
														{
															title: "Defcamp",
															link: "https://www.twitch.tv/defcamp",
															icon: "defcamp_js6qar.png",
															platform: null,
														},
													],
												},
											},
										},
										{
											id: "4",
											name: "Rogue",
											reference: {
												summary:
													'A master of stealth, the Rogue is a melee damage dealing class that specializes in dual-weilding and poisons.  While the class lacks team support abilities, it makes up for it with consistent damage, stealth crowd control abilities, and a unique playstyle.  Rogues use a Combo Point system, most primary attack skills add 1 Combo Point, allowing other skills called "finishers" to be used.',
												teamroles: ["DPS", "Crowd Control"],
												resource: "Energy",
												primarystats: ["agi", "sta"],
												secondarystats: ["str", "crit", "hit", "ap", "expertise"],
												specs: ["Assassination", "Combat", "Subtlety"],
												weaponTypes: [
													{ name: "Daggers" },
													{ name: "Fist Weapons" },
													{ name: "One-Handed Maces" },
													{ name: "One-Handed Swords" },
													{ name: "Bows" },
													{ name: "Crossbows" },
													{ name: "Guns" },
													{ name: "Thrown" },
												],
												armorTypes: [{ name: "Leather" }],
												classGuides: {
													data: [
														{
															title: "PVE Combat Rogue Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-combat-rogue-guide-tbc-2-4-3/",
															thumb: "PVE-Combat-Rogue-Guide-TBC-2.4.3_c4vroi.jpg",
														},
														{
															title: "Guide for Shadowstep PVP Rogue",
															link: "https://silentshadows.net/shadowstep-rogue-pvp-guide-burning-crusade/",
															thumb: "shsbuild_big-1024x576_plkvwl.jpg",
														},
														{
															title: "TBC Classic Combat Rogue Guide",
															link: "https://wowtbc.gg/class-guides/combat-rogue/",
															thumb: "rogue-650x325_lm6vxx.jpg",
														},
														{
															title: "Classic Rogue for Dummies",
															link: "https://classicroguecraft.com/",
															thumb: "rogue_wow_by_edgarsh422-dbehspp_tifm8o.jpg",
														},
													],
												},
												creators: {
													data: [
														{
															title: "Payo",
															link: "https://www.twitch.tv/Payo",
															icon: "payo_ghiuc8.jpg",
															platform: null,
														},
														{
															title: "Barny64",
															link: "https://www.twitch.tv/barny",
															icon: "barny64_abfj6q.jpg",
															platform: null,
														},
														{
															title: "snomie",
															link: "https://www.twitch.tv/snomie",
															icon: "snomie_jgtkce.png",
															platform: null,
														},
														{
															title: "Nahj",
															link: "https://www.twitch.tv/nahj",
															icon: "nahj_rrhyom.png",
															platform: null,
														},
													],
												},
											},
										},
										{
											id: "7",
											name: "Shaman",
											reference: {
												summary:
													"Shamans are a great hybrid class, they are considered one of the best team buffing classes in the game thanks to their unique skill: Totems.  They are useful for healing and specialize in group healing with Chain Heal and other group healing abilities.  When it comes to damage, a Shaman in invaluable when paired with either melee DPS for Enhancement shamans or casters for Elemental shamans, but they provide great DPS themselves too. In a raid setting, no raid is complete without the ultimate abilities: Bloodlust & Heroism.",
												teamroles: ["Heal", "DPS"],
												resource: "Mana",
												primarystats: ["int", "sta", "str"],
												secondarystats: [
													"healpower",
													"mp5",
													"spi",
													"spellpower",
													"spellcrit",
													"spellhit",
													"spellhaste",
													"hit",
													"crit",
													"haste",
													"expertise",
												],
												specs: ["Elemental", "Enhancement", "Restoration"],
												weaponTypes: [
													{ name: "Fist Weapons" },
													{ name: "One-Handed Axes" },
													{ name: "One-Handed Maces" },
													{ name: "Staves" },
													{ name: "Two-Handed Axes" },
													{ name: "Two-Handed Maces" },
													{ name: "Daggers" },
													{ name: "Totems" },
													{ name: "Shields" },
													{ name: "Held In Off-Hand" },
												],
												armorTypes: [{ name: "Leather" }, { name: "Mail" }],
												classGuides: {
													data: [
														{
															title: "PVE Restoration Shaman Healing Guide (TBC 2.4.3)",
															link: "https://dev.gnarlyguides.com/tbc/guides/pve-restoration-shaman/",
															thumb: "PVE-Healing-Restoration-Shaman-Guide-TBC-2.4.3_lyxq9k.jpg",
														},
														{
															title: "PVE Enhancement Shaman Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-enhancement-shaman-guide-tbc-2-4-3/",
															thumb: "PVE-Enhancement-Shaman-Guide-TBC-2.4.3_ytupas.jpg",
														},
														{
															title: "TBC Classic Elemental Shaman Guide",
															link: "https://wowtbc.gg/class-guides/elemental-shaman/",
															thumb:
																"wow-world-of-warcraft-troll-shaman-wallpaper-preview_humowe.jpg",
														},
														{
															title: "PVE Elemental Shaman Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-elemental-shaman-guide-tbc-2-4-3/",
															thumb: "PVE-Elemental-Shaman-Guide-TBC-2.4.3_sw7hcv.jpg",
														},
													],
												},
												creators: {
													data: [
														{
															title: "Melderon",
															link: "https://www.twitch.tv/melderon",
															icon: "melderon_rz8hwq.png",
															platform: null,
														},
														{
															title: "just_ouro",
															link: "https://www.twitch.tv/just_ouro",
															icon: "ouro_qjapj6.png",
															platform: null,
														},
													],
												},
											},
										},
										{
											id: "1",
											name: "Warrior",
											reference: {
												summary:
													"Warriors are the ultimate melee class, and they are the strongest tank class in the game.  Warriors can wear plate armor and equip almost every weapon type there is.  When tanking, warriors can keep enemies focused on them while buffing their teammates.  When providing melee DPS, warriors can dual-wield or wield two-hand weapons to destroy their enemies.",
												teamroles: ["Tank", "DPS"],
												resource: "Rage",
												primarystats: ["str", "sta"],
												secondarystats: [
													"defense",
													"block",
													"expertise",
													"hit",
													"agi",
													"haste",
													"crit",
												],
												specs: ["Arms", "Fury", "Protection"],
												weaponTypes: [
													{ name: "Daggers" },
													{ name: "Fist Weapons" },
													{ name: "One-Handed Axes" },
													{ name: "One-Handed Maces" },
													{ name: "One-Handed Swords" },
													{ name: "Polearms" },
													{ name: "Staves" },
													{ name: "Two-Handed Axes" },
													{ name: "Two-Handed Maces" },
													{ name: "Two-Handed Swords" },
													{ name: "Shields" },
													{ name: "Bows" },
													{ name: "Crossbows" },
													{ name: "Guns" },
													{ name: "Thrown" },
												],
												armorTypes: [{ name: "Mail" }, { name: "Plate" }],
												classGuides: {
													data: [
														{
															title: "TBC Warrior Guide",
															link: "https://legacy-wow.com/tbc-warrior-guide/",
															thumb: "tbc_warrior_guide_ojyy08.jpg",
														},
														{
															title: "PVE Fury Warrior DPS Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-fury-warrior-dps-guide-tbc-2-4-3/",
															thumb: "PVE-Fury-Warrior-DPS-Guide-TBC-2.4.3_aclkg0.jpg",
														},
														{
															title: "PVE DPS Arms Warrior Guide (TBC 2.4.3) ",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-dps-arms-warrior/",
															thumb: "PVE-DPS-Arms-Warrior-Guide-TBC-2.4.3_q75yfp.jpg",
														},
														{
															title: "PvE Protection Warrior Tank Guide",
															link: "https://www.warcrafttavern.com/tbc/guides/pve-protection-warrior-tank/",
															thumb:
																"TBC-Classic-PvE-Protection-Warrior-Tank-Guide-Burning-Crusade-Classic_llzjfw.jpg",
														},
													],
												},
												creators: {
													data: [
														{
															title: "Asmongold",
															link: "https://www.twitch.tv/asmongold",
															icon: "asmon_m0grlo.png",
															platform: null,
														},
														{
															title: "Rai Bread",
															link: "https://www.youtube.com/channel/UCYNsSRo2Rg20CZiXHeFQmpw",
															icon: "raibread_sm6rna.jpg",
															platform: null,
														},
													],
												},
											},
										},
									],
								},
							},
							{
								name: "Tauren",
								classes: {
									data: [
										{
											id: "11",
											name: "Druid",
											reference: {
												summary:
													"One of three Hybrid classes, the Druid can heal, tank, melee DPS, or even cast spells.  This can be done thanks to Druid's unique skill: Shapeshifting.  When in bear form they are the second best tank in the game, and when healing they specialize in healing over time spells.  For damage dealing, cat form is used for melee damage.  Druids even have a dedicated form for ranged spellcasting Moonkin.",
												teamroles: ["Tank", "DPS", "Heal", "Crowd Control"],
												resource: "Mana",
												primarystats: ["int", "agi", "sta"],
												secondarystats: [
													"str",
													"crit",
													"hit",
													"ap",
													"expertise",
													"spellpower",
													"healpower",
													"mp5",
													"spi",
												],
												specs: ["Balance", "Feral", "Restoration"],
												weaponTypes: [
													{ name: "Daggers" },
													{ name: "Fist Weapons" },
													{ name: "One-Handed Maces" },
													{ name: "Two-Handed Maces" },
													{ name: "Polearms" },
													{ name: "Staves" },
													{ name: "Idols" },
													{ name: "Held In Off-Hand" },
												],
												armorTypes: [{ name: "Leather" }, { name: "Cloth" }],
												classGuides: {
													data: [
														{
															title: "TBC Tank Druid Guide",
															link: "https://legacy-wow.com/druid-feral-level-70/",
															thumb: "druid_puah9r.jpg",
														},
														{
															title: "TBC Resto Druid Guide",
															link: "https://legacy-wow.com/tbc-resto-druid-guide/",
															thumb: "druid-resto_qe2twk.jpg",
														},
														{
															title: "TBC Classic Restoration Druid Guide",
															link: "https://wowtbc.gg/class-guides/restoration-druid/",
															thumb: "morova-of-the-sand-world-of_bgseki.jpg",
														},
														{
															title: "PvE Balance Druid Boomkin DPS Guide",
															link: "https://www.warcrafttavern.com/tbc/guides/pve-balance-druid-boomkin-dps/",
															thumb:
																"PVE-Balance-Druid-Boomkin-DPS-Guide-TBC-Burning-Crusade-Classic_uanvfx.jpg",
														},
													],
												},
												creators: {
													data: [
														{
															title: "Venruki",
															link: "https://www.twitch.tv/venruki",
															icon: "venruki_dhaj7d.jpg",
															platform: null,
														},
														{
															title: "Knot",
															link: "https://www.youtube.com/channel/UCVS0sYnWlOgO6MG8pLNI_wA",
															icon: "knot_j5nekp.jpg",
															platform: null,
														},
													],
												},
											},
										},
										{
											id: "3",
											name: "Hunter",
											reference: {
												summary:
													"Hunters are the top ranged physical DPS in the game.  They are one of two classes that use pets, and hunters are known for soloing dungeons and kiting world bosses thanks to their long range and high DPS.  Hunters can provide crowd control in the form of traps and are great in PVP too.",
												teamroles: ["DPS", "Crowd Control"],
												resource: "Mana",
												primarystats: ["agi", "int"],
												secondarystats: ["sta", "haste", "hit", "ap", "crit", "parry"],
												specs: ["Marksmanship", "Beast Mastery", "Survival"],
												weaponTypes: [
													{ name: "Daggers" },
													{ name: "Fist Weapons" },
													{ name: "One-Handed Axes" },
													{ name: "One-Handed Swords" },
													{ name: "Polearms" },
													{ name: "Staves" },
													{ name: "Two-Handed Axes" },
													{ name: "Two-Handed Swords" },
													{ name: "Bows" },
													{ name: "Crossbows" },
													{ name: "Guns" },
													{ name: "Thrown" },
												],
												armorTypes: [{ name: "Leather" }, { name: "Mail" }],
												classGuides: {
													data: [
														{
															title:
																"TBC Classic: Hunter Class DEEP DIVE (All 3 Specs, PvE, PvP, Tips & Tricks) - The Burning Crusade",
															link: "https://www.youtube.com/watch?v=xnk3GiaDB9k",
															thumb: "kargozhunter_xids6w.jpg",
														},
														{
															title: "PvE Beast Mastery Hunter Guide",
															link: "https://www.warcrafttavern.com/tbc/guides/pve-beast-mastery-hunter/",
															thumb: "pve-beast-mastery-hunter-guide_k4dhmn.jpg",
														},
														{
															title: "TBC Hunter Guide",
															link: "https://legacy-wow.com/tbc-hunter-guide/",
															thumb: "hunter_trkhcg.jpg",
														},
													],
												},
												creators: {
													data: [
														{
															title: "Agran",
															link: "https://www.youtube.com/watch?v=dH6lJMU43bw&list=PLdlIYjR4sJScJrvhHZYSwq91jAvinEmsp",
															icon: "agran_n7x301.jpg",
															platform: null,
														},
														{
															title: "Bigbobbedboi",
															link: "https://www.youtube.com/channel/UCMrTztxAtaZDZZk6hu8HLig",
															icon: "bigbobbedboi_qj9qdq.jpg",
															platform: null,
														},
													],
												},
											},
										},
										{
											id: "7",
											name: "Shaman",
											reference: {
												summary:
													"Shamans are a great hybrid class, they are considered one of the best team buffing classes in the game thanks to their unique skill: Totems.  They are useful for healing and specialize in group healing with Chain Heal and other group healing abilities.  When it comes to damage, a Shaman in invaluable when paired with either melee DPS for Enhancement shamans or casters for Elemental shamans, but they provide great DPS themselves too. In a raid setting, no raid is complete without the ultimate abilities: Bloodlust & Heroism.",
												teamroles: ["Heal", "DPS"],
												resource: "Mana",
												primarystats: ["int", "sta", "str"],
												secondarystats: [
													"healpower",
													"mp5",
													"spi",
													"spellpower",
													"spellcrit",
													"spellhit",
													"spellhaste",
													"hit",
													"crit",
													"haste",
													"expertise",
												],
												specs: ["Elemental", "Enhancement", "Restoration"],
												weaponTypes: [
													{ name: "Fist Weapons" },
													{ name: "One-Handed Axes" },
													{ name: "One-Handed Maces" },
													{ name: "Staves" },
													{ name: "Two-Handed Axes" },
													{ name: "Two-Handed Maces" },
													{ name: "Daggers" },
													{ name: "Totems" },
													{ name: "Shields" },
													{ name: "Held In Off-Hand" },
												],
												armorTypes: [{ name: "Leather" }, { name: "Mail" }],
												classGuides: {
													data: [
														{
															title: "PVE Restoration Shaman Healing Guide (TBC 2.4.3)",
															link: "https://dev.gnarlyguides.com/tbc/guides/pve-restoration-shaman/",
															thumb: "PVE-Healing-Restoration-Shaman-Guide-TBC-2.4.3_lyxq9k.jpg",
														},
														{
															title: "PVE Enhancement Shaman Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-enhancement-shaman-guide-tbc-2-4-3/",
															thumb: "PVE-Enhancement-Shaman-Guide-TBC-2.4.3_ytupas.jpg",
														},
														{
															title: "TBC Classic Elemental Shaman Guide",
															link: "https://wowtbc.gg/class-guides/elemental-shaman/",
															thumb:
																"wow-world-of-warcraft-troll-shaman-wallpaper-preview_humowe.jpg",
														},
														{
															title: "PVE Elemental Shaman Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-elemental-shaman-guide-tbc-2-4-3/",
															thumb: "PVE-Elemental-Shaman-Guide-TBC-2.4.3_sw7hcv.jpg",
														},
													],
												},
												creators: {
													data: [
														{
															title: "Melderon",
															link: "https://www.twitch.tv/melderon",
															icon: "melderon_rz8hwq.png",
															platform: null,
														},
														{
															title: "just_ouro",
															link: "https://www.twitch.tv/just_ouro",
															icon: "ouro_qjapj6.png",
															platform: null,
														},
													],
												},
											},
										},
										{
											id: "1",
											name: "Warrior",
											reference: {
												summary:
													"Warriors are the ultimate melee class, and they are the strongest tank class in the game.  Warriors can wear plate armor and equip almost every weapon type there is.  When tanking, warriors can keep enemies focused on them while buffing their teammates.  When providing melee DPS, warriors can dual-wield or wield two-hand weapons to destroy their enemies.",
												teamroles: ["Tank", "DPS"],
												resource: "Rage",
												primarystats: ["str", "sta"],
												secondarystats: [
													"defense",
													"block",
													"expertise",
													"hit",
													"agi",
													"haste",
													"crit",
												],
												specs: ["Arms", "Fury", "Protection"],
												weaponTypes: [
													{ name: "Daggers" },
													{ name: "Fist Weapons" },
													{ name: "One-Handed Axes" },
													{ name: "One-Handed Maces" },
													{ name: "One-Handed Swords" },
													{ name: "Polearms" },
													{ name: "Staves" },
													{ name: "Two-Handed Axes" },
													{ name: "Two-Handed Maces" },
													{ name: "Two-Handed Swords" },
													{ name: "Shields" },
													{ name: "Bows" },
													{ name: "Crossbows" },
													{ name: "Guns" },
													{ name: "Thrown" },
												],
												armorTypes: [{ name: "Mail" }, { name: "Plate" }],
												classGuides: {
													data: [
														{
															title: "TBC Warrior Guide",
															link: "https://legacy-wow.com/tbc-warrior-guide/",
															thumb: "tbc_warrior_guide_ojyy08.jpg",
														},
														{
															title: "PVE Fury Warrior DPS Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-fury-warrior-dps-guide-tbc-2-4-3/",
															thumb: "PVE-Fury-Warrior-DPS-Guide-TBC-2.4.3_aclkg0.jpg",
														},
														{
															title: "PVE DPS Arms Warrior Guide (TBC 2.4.3) ",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-dps-arms-warrior/",
															thumb: "PVE-DPS-Arms-Warrior-Guide-TBC-2.4.3_q75yfp.jpg",
														},
														{
															title: "PvE Protection Warrior Tank Guide",
															link: "https://www.warcrafttavern.com/tbc/guides/pve-protection-warrior-tank/",
															thumb:
																"TBC-Classic-PvE-Protection-Warrior-Tank-Guide-Burning-Crusade-Classic_llzjfw.jpg",
														},
													],
												},
												creators: {
													data: [
														{
															title: "Asmongold",
															link: "https://www.twitch.tv/asmongold",
															icon: "asmon_m0grlo.png",
															platform: null,
														},
														{
															title: "Rai Bread",
															link: "https://www.youtube.com/channel/UCYNsSRo2Rg20CZiXHeFQmpw",
															icon: "raibread_sm6rna.jpg",
															platform: null,
														},
													],
												},
											},
										},
									],
								},
							},
							{
								name: "Orc",
								classes: {
									data: [
										{
											id: "3",
											name: "Hunter",
											reference: {
												summary:
													"Hunters are the top ranged physical DPS in the game.  They are one of two classes that use pets, and hunters are known for soloing dungeons and kiting world bosses thanks to their long range and high DPS.  Hunters can provide crowd control in the form of traps and are great in PVP too.",
												teamroles: ["DPS", "Crowd Control"],
												resource: "Mana",
												primarystats: ["agi", "int"],
												secondarystats: ["sta", "haste", "hit", "ap", "crit", "parry"],
												specs: ["Marksmanship", "Beast Mastery", "Survival"],
												weaponTypes: [
													{ name: "Daggers" },
													{ name: "Fist Weapons" },
													{ name: "One-Handed Axes" },
													{ name: "One-Handed Swords" },
													{ name: "Polearms" },
													{ name: "Staves" },
													{ name: "Two-Handed Axes" },
													{ name: "Two-Handed Swords" },
													{ name: "Bows" },
													{ name: "Crossbows" },
													{ name: "Guns" },
													{ name: "Thrown" },
												],
												armorTypes: [{ name: "Leather" }, { name: "Mail" }],
												classGuides: {
													data: [
														{
															title:
																"TBC Classic: Hunter Class DEEP DIVE (All 3 Specs, PvE, PvP, Tips & Tricks) - The Burning Crusade",
															link: "https://www.youtube.com/watch?v=xnk3GiaDB9k",
															thumb: "kargozhunter_xids6w.jpg",
														},
														{
															title: "PvE Beast Mastery Hunter Guide",
															link: "https://www.warcrafttavern.com/tbc/guides/pve-beast-mastery-hunter/",
															thumb: "pve-beast-mastery-hunter-guide_k4dhmn.jpg",
														},
														{
															title: "TBC Hunter Guide",
															link: "https://legacy-wow.com/tbc-hunter-guide/",
															thumb: "hunter_trkhcg.jpg",
														},
													],
												},
												creators: {
													data: [
														{
															title: "Agran",
															link: "https://www.youtube.com/watch?v=dH6lJMU43bw&list=PLdlIYjR4sJScJrvhHZYSwq91jAvinEmsp",
															icon: "agran_n7x301.jpg",
															platform: null,
														},
														{
															title: "Bigbobbedboi",
															link: "https://www.youtube.com/channel/UCMrTztxAtaZDZZk6hu8HLig",
															icon: "bigbobbedboi_qj9qdq.jpg",
															platform: null,
														},
													],
												},
											},
										},
										{
											id: "4",
											name: "Rogue",
											reference: {
												summary:
													'A master of stealth, the Rogue is a melee damage dealing class that specializes in dual-weilding and poisons.  While the class lacks team support abilities, it makes up for it with consistent damage, stealth crowd control abilities, and a unique playstyle.  Rogues use a Combo Point system, most primary attack skills add 1 Combo Point, allowing other skills called "finishers" to be used.',
												teamroles: ["DPS", "Crowd Control"],
												resource: "Energy",
												primarystats: ["agi", "sta"],
												secondarystats: ["str", "crit", "hit", "ap", "expertise"],
												specs: ["Assassination", "Combat", "Subtlety"],
												weaponTypes: [
													{ name: "Daggers" },
													{ name: "Fist Weapons" },
													{ name: "One-Handed Maces" },
													{ name: "One-Handed Swords" },
													{ name: "Bows" },
													{ name: "Crossbows" },
													{ name: "Guns" },
													{ name: "Thrown" },
												],
												armorTypes: [{ name: "Leather" }],
												classGuides: {
													data: [
														{
															title: "PVE Combat Rogue Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-combat-rogue-guide-tbc-2-4-3/",
															thumb: "PVE-Combat-Rogue-Guide-TBC-2.4.3_c4vroi.jpg",
														},
														{
															title: "Guide for Shadowstep PVP Rogue",
															link: "https://silentshadows.net/shadowstep-rogue-pvp-guide-burning-crusade/",
															thumb: "shsbuild_big-1024x576_plkvwl.jpg",
														},
														{
															title: "TBC Classic Combat Rogue Guide",
															link: "https://wowtbc.gg/class-guides/combat-rogue/",
															thumb: "rogue-650x325_lm6vxx.jpg",
														},
														{
															title: "Classic Rogue for Dummies",
															link: "https://classicroguecraft.com/",
															thumb: "rogue_wow_by_edgarsh422-dbehspp_tifm8o.jpg",
														},
													],
												},
												creators: {
													data: [
														{
															title: "Payo",
															link: "https://www.twitch.tv/Payo",
															icon: "payo_ghiuc8.jpg",
															platform: null,
														},
														{
															title: "Barny64",
															link: "https://www.twitch.tv/barny",
															icon: "barny64_abfj6q.jpg",
															platform: null,
														},
														{
															title: "snomie",
															link: "https://www.twitch.tv/snomie",
															icon: "snomie_jgtkce.png",
															platform: null,
														},
														{
															title: "Nahj",
															link: "https://www.twitch.tv/nahj",
															icon: "nahj_rrhyom.png",
															platform: null,
														},
													],
												},
											},
										},
										{
											id: "7",
											name: "Shaman",
											reference: {
												summary:
													"Shamans are a great hybrid class, they are considered one of the best team buffing classes in the game thanks to their unique skill: Totems.  They are useful for healing and specialize in group healing with Chain Heal and other group healing abilities.  When it comes to damage, a Shaman in invaluable when paired with either melee DPS for Enhancement shamans or casters for Elemental shamans, but they provide great DPS themselves too. In a raid setting, no raid is complete without the ultimate abilities: Bloodlust & Heroism.",
												teamroles: ["Heal", "DPS"],
												resource: "Mana",
												primarystats: ["int", "sta", "str"],
												secondarystats: [
													"healpower",
													"mp5",
													"spi",
													"spellpower",
													"spellcrit",
													"spellhit",
													"spellhaste",
													"hit",
													"crit",
													"haste",
													"expertise",
												],
												specs: ["Elemental", "Enhancement", "Restoration"],
												weaponTypes: [
													{ name: "Fist Weapons" },
													{ name: "One-Handed Axes" },
													{ name: "One-Handed Maces" },
													{ name: "Staves" },
													{ name: "Two-Handed Axes" },
													{ name: "Two-Handed Maces" },
													{ name: "Daggers" },
													{ name: "Totems" },
													{ name: "Shields" },
													{ name: "Held In Off-Hand" },
												],
												armorTypes: [{ name: "Leather" }, { name: "Mail" }],
												classGuides: {
													data: [
														{
															title: "PVE Restoration Shaman Healing Guide (TBC 2.4.3)",
															link: "https://dev.gnarlyguides.com/tbc/guides/pve-restoration-shaman/",
															thumb: "PVE-Healing-Restoration-Shaman-Guide-TBC-2.4.3_lyxq9k.jpg",
														},
														{
															title: "PVE Enhancement Shaman Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-enhancement-shaman-guide-tbc-2-4-3/",
															thumb: "PVE-Enhancement-Shaman-Guide-TBC-2.4.3_ytupas.jpg",
														},
														{
															title: "TBC Classic Elemental Shaman Guide",
															link: "https://wowtbc.gg/class-guides/elemental-shaman/",
															thumb:
																"wow-world-of-warcraft-troll-shaman-wallpaper-preview_humowe.jpg",
														},
														{
															title: "PVE Elemental Shaman Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-elemental-shaman-guide-tbc-2-4-3/",
															thumb: "PVE-Elemental-Shaman-Guide-TBC-2.4.3_sw7hcv.jpg",
														},
													],
												},
												creators: {
													data: [
														{
															title: "Melderon",
															link: "https://www.twitch.tv/melderon",
															icon: "melderon_rz8hwq.png",
															platform: null,
														},
														{
															title: "just_ouro",
															link: "https://www.twitch.tv/just_ouro",
															icon: "ouro_qjapj6.png",
															platform: null,
														},
													],
												},
											},
										},
										{
											id: "9",
											name: "Warlock",
											reference: {
												summary:
													"Dark magic, blood, and fire fuel Warlocks, they are the top damage dealing casters in the game and one of two pet classes.  Instead of animals found in the world, Warlocks dominate summoned demons and use them as pets.  Warlocks excel in damage over time spells and can provide burst damage that competes with any other class for top damage done.  Warlocks lack much team buffing abilities, but they do provide Soulstones allowing others to revive as needed -- this is required for raiding content.  Also, they can summon teammates to any location, saving travel time.",
												teamroles: ["Heal", "DPS", "Crowd Control"],
												resource: "Mana",
												primarystats: ["int", "sta"],
												secondarystats: ["spellhit", "spellpower", "spellcrit", "spellhaste"],
												specs: ["Affliction", "Demonology", "Destruction"],
												weaponTypes: [
													{ name: "Daggers" },
													{ name: "One-Handed Swords" },
													{ name: "Staves" },
													{ name: "Wands" },
													{ name: "Held In Off-Hand" },
												],
												armorTypes: [{ name: "Cloth" }],
												classGuides: {
													data: [
														{
															title: "TBC Warlock Guide (1-70)",
															link: "https://legacy-wow.com/tbc-warlock-guide/",
															thumb: "warlock_ek0ant.jpg",
														},
														{
															title: "PVE Destruction Warlock Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-destruction-warlock-guide-tbc-2-4-3/",
															thumb: "PVE-Destruction-Warlock-Guide-TBC-2.4.3_bkvaqk.jpg",
														},
														{
															title: "PVE Affliction Warlock Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-affliction-warlock-guide-tbc-2-4-3/",
															thumb: "PVE-Affliction-Warlock-Guide-TBC-2.4.3_z2enhx.jpg",
														},
														{
															title: "TBC Classic Destruction Warlock Guide",
															link: "https://wowtbc.gg/class-guides/destruction-warlock/",
															thumb: "Mort-vivant_Demoniste_se5ger.webp",
														},
													],
												},
												creators: {
													data: [
														{
															title: "Kargoz",
															link: "https://www.twitch.tv/kargozgaming",
															icon: "kargoz_d1xghc.png",
															platform: null,
														},
														{
															title: "Crix Gaming",
															link: "https://www.youtube.com/channel/UCPhMcl-ppbEqGDulH_Kf1MQ",
															icon: "crix_ai4yqt.jpg",
															platform: null,
														},
													],
												},
											},
										},
										{
											id: "1",
											name: "Warrior",
											reference: {
												summary:
													"Warriors are the ultimate melee class, and they are the strongest tank class in the game.  Warriors can wear plate armor and equip almost every weapon type there is.  When tanking, warriors can keep enemies focused on them while buffing their teammates.  When providing melee DPS, warriors can dual-wield or wield two-hand weapons to destroy their enemies.",
												teamroles: ["Tank", "DPS"],
												resource: "Rage",
												primarystats: ["str", "sta"],
												secondarystats: [
													"defense",
													"block",
													"expertise",
													"hit",
													"agi",
													"haste",
													"crit",
												],
												specs: ["Arms", "Fury", "Protection"],
												weaponTypes: [
													{ name: "Daggers" },
													{ name: "Fist Weapons" },
													{ name: "One-Handed Axes" },
													{ name: "One-Handed Maces" },
													{ name: "One-Handed Swords" },
													{ name: "Polearms" },
													{ name: "Staves" },
													{ name: "Two-Handed Axes" },
													{ name: "Two-Handed Maces" },
													{ name: "Two-Handed Swords" },
													{ name: "Shields" },
													{ name: "Bows" },
													{ name: "Crossbows" },
													{ name: "Guns" },
													{ name: "Thrown" },
												],
												armorTypes: [{ name: "Mail" }, { name: "Plate" }],
												classGuides: {
													data: [
														{
															title: "TBC Warrior Guide",
															link: "https://legacy-wow.com/tbc-warrior-guide/",
															thumb: "tbc_warrior_guide_ojyy08.jpg",
														},
														{
															title: "PVE Fury Warrior DPS Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-fury-warrior-dps-guide-tbc-2-4-3/",
															thumb: "PVE-Fury-Warrior-DPS-Guide-TBC-2.4.3_aclkg0.jpg",
														},
														{
															title: "PVE DPS Arms Warrior Guide (TBC 2.4.3) ",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-dps-arms-warrior/",
															thumb: "PVE-DPS-Arms-Warrior-Guide-TBC-2.4.3_q75yfp.jpg",
														},
														{
															title: "PvE Protection Warrior Tank Guide",
															link: "https://www.warcrafttavern.com/tbc/guides/pve-protection-warrior-tank/",
															thumb:
																"TBC-Classic-PvE-Protection-Warrior-Tank-Guide-Burning-Crusade-Classic_llzjfw.jpg",
														},
													],
												},
												creators: {
													data: [
														{
															title: "Asmongold",
															link: "https://www.twitch.tv/asmongold",
															icon: "asmon_m0grlo.png",
															platform: null,
														},
														{
															title: "Rai Bread",
															link: "https://www.youtube.com/channel/UCYNsSRo2Rg20CZiXHeFQmpw",
															icon: "raibread_sm6rna.jpg",
															platform: null,
														},
													],
												},
											},
										},
									],
								},
							},
							{
								name: "Blood Elf",
								classes: {
									data: [
										{
											id: "3",
											name: "Hunter",
											reference: {
												summary:
													"Hunters are the top ranged physical DPS in the game.  They are one of two classes that use pets, and hunters are known for soloing dungeons and kiting world bosses thanks to their long range and high DPS.  Hunters can provide crowd control in the form of traps and are great in PVP too.",
												teamroles: ["DPS", "Crowd Control"],
												resource: "Mana",
												primarystats: ["agi", "int"],
												secondarystats: ["sta", "haste", "hit", "ap", "crit", "parry"],
												specs: ["Marksmanship", "Beast Mastery", "Survival"],
												weaponTypes: [
													{ name: "Daggers" },
													{ name: "Fist Weapons" },
													{ name: "One-Handed Axes" },
													{ name: "One-Handed Swords" },
													{ name: "Polearms" },
													{ name: "Staves" },
													{ name: "Two-Handed Axes" },
													{ name: "Two-Handed Swords" },
													{ name: "Bows" },
													{ name: "Crossbows" },
													{ name: "Guns" },
													{ name: "Thrown" },
												],
												armorTypes: [{ name: "Leather" }, { name: "Mail" }],
												classGuides: {
													data: [
														{
															title:
																"TBC Classic: Hunter Class DEEP DIVE (All 3 Specs, PvE, PvP, Tips & Tricks) - The Burning Crusade",
															link: "https://www.youtube.com/watch?v=xnk3GiaDB9k",
															thumb: "kargozhunter_xids6w.jpg",
														},
														{
															title: "PvE Beast Mastery Hunter Guide",
															link: "https://www.warcrafttavern.com/tbc/guides/pve-beast-mastery-hunter/",
															thumb: "pve-beast-mastery-hunter-guide_k4dhmn.jpg",
														},
														{
															title: "TBC Hunter Guide",
															link: "https://legacy-wow.com/tbc-hunter-guide/",
															thumb: "hunter_trkhcg.jpg",
														},
													],
												},
												creators: {
													data: [
														{
															title: "Agran",
															link: "https://www.youtube.com/watch?v=dH6lJMU43bw&list=PLdlIYjR4sJScJrvhHZYSwq91jAvinEmsp",
															icon: "agran_n7x301.jpg",
															platform: null,
														},
														{
															title: "Bigbobbedboi",
															link: "https://www.youtube.com/channel/UCMrTztxAtaZDZZk6hu8HLig",
															icon: "bigbobbedboi_qj9qdq.jpg",
															platform: null,
														},
													],
												},
											},
										},
										{
											id: "8",
											name: "Mage",
											reference: {
												summary:
													"The ultimate caster class in the game, Mages excel in ranged spell power.  Frost spells allow them to slow their enemies and control their movement.  Fire spells bring massive damage and burning effects, while Arcane provides burst damage and even more versatility for PVP.  In a team setting, mages are great thanks to one of the best crowd control spells: Polymorph.  They also buff other casters and can conjure food & drink for the party members.  They can also spawn city portals to save their party travel time.",
												teamroles: ["DPS", "Crowd Control"],
												resource: "Mana",
												primarystats: ["int", "sta"],
												secondarystats: [
													"spi",
													"spellhit",
													"spellhaste",
													"spellpower",
													"spellcrit",
												],
												specs: ["Arcane", "Fire", "Frost"],
												weaponTypes: [
													{ name: "Daggers" },
													{ name: "One-Handed Swords" },
													{ name: "Staves" },
													{ name: "Wands" },
													{ name: "Held In Off-Hand" },
												],
												armorTypes: [{ name: "Cloth" }],
												classGuides: {
													data: [
														{
															title: "TBC Mage Guide",
															link: "https://legacy-wow.com/tbc-mage-guide/",
															thumb: "mage_dtjzek.jpg",
														},
														{
															title: "Fire Mage PvE Guide",
															link: "https://www.warcrafttavern.com/tbc/guides/fire-mage-pve/",
															thumb:
																"TBC-Classic-PVE-Fire-Mage-DPS-Guide-Burning-Crusade-Classic_o4ikb4.jpg",
														},
														{
															title: "PVE Frost Mage Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-frost-mage-guide-tbc-2-4-3/",
															thumb: "PVE-Frost-Mage-Guide-TBC-2.4.3_jlmzrh.jpg",
														},
														{
															title: "PVE Arcane Mage Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-arcane-mage-guide-tbc-2-4-3/",
															thumb: "PVE-Arcane-Mage-Guide-TBC-2.4.3_xlayaz.jpg",
														},
													],
												},
												creators: {
													data: [
														{
															title: "FrostLive",
															link: "https://www.twitch.tv/frostlive",
															icon: "frostlive_iek6c8.png",
															platform: null,
														},
														{
															title: "Graycen",
															link: "https://www.twitch.tv/graycen",
															icon: "graycen_wri7wp.png",
															platform: null,
														},
														{
															title: "Alfie",
															link: "https://www.twitch.tv/alfie",
															icon: "alfie_c5quys.png",
															platform: null,
														},
													],
												},
											},
										},
										{
											id: "5",
											name: "Priest",
											reference: {
												summary:
													"Do you need a healer?  Priest is the top healer in the game, and they can even provide DPS with their Shadow tree.  Priests can buff, shield, dispel, and heal their teammates, making them required for raiding and other difficult content.  They have powerful heal over time spells and can burst heal groups or single targets as needed.  When paired with Warlocks, Shadow priests can dish out massive damage and provide debuffs on their enemies.",
												teamroles: ["Heal", "DPS", "Crowd Control"],
												resource: "Mana",
												primarystats: ["int", "spi"],
												secondarystats: [
													"healpower",
													"mp5",
													"sta",
													"spellpower",
													"spellcrit",
													"spellhit",
													"spellhaste",
												],
												specs: ["Discipline", "Holy", "Shadow"],
												weaponTypes: [
													{ name: "Daggers" },
													{ name: "One-Handed Maces" },
													{ name: "Staves" },
													{ name: "Wands" },
													{ name: "Held In Off-Hand" },
												],
												armorTypes: [{ name: "Cloth" }],
												classGuides: {
													data: [
														{
															title: "PVE Shadow Priest Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-shadow-priest/",
															thumb: "PVE-Shadow-Priest-Guide-TBC-2.4.3_swcpaf.jpg",
														},
														{
															title: "PVE Holy Priest Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-holy-priest/",
															thumb: "PVE-Holy-Priest-Guide-TBC-2.4.3_qslefj.jpg",
														},
														{
															title: "TBC Classic Holy Priest Guide",
															link: "https://wowtbc.gg/class-guides/holy-priest/",
															thumb:
																"angel-priest-world-of-warcraft-game-hd-wallpaper-1920x1080-4022-975x549_mwv5cs.jpg",
														},
														{
															title: "TBC Classic Shadow Priest Guide",
															link: "https://wowtbc.gg/class-guides/shadow-priest/",
															thumb: "450px-Shadowform_full_mf1uhy.jpg",
														},
													],
												},
												creators: {
													data: [
														{
															title: "Defcamp",
															link: "https://www.twitch.tv/defcamp",
															icon: "defcamp_js6qar.png",
															platform: null,
														},
													],
												},
											},
										},
										{
											id: "4",
											name: "Rogue",
											reference: {
												summary:
													'A master of stealth, the Rogue is a melee damage dealing class that specializes in dual-weilding and poisons.  While the class lacks team support abilities, it makes up for it with consistent damage, stealth crowd control abilities, and a unique playstyle.  Rogues use a Combo Point system, most primary attack skills add 1 Combo Point, allowing other skills called "finishers" to be used.',
												teamroles: ["DPS", "Crowd Control"],
												resource: "Energy",
												primarystats: ["agi", "sta"],
												secondarystats: ["str", "crit", "hit", "ap", "expertise"],
												specs: ["Assassination", "Combat", "Subtlety"],
												weaponTypes: [
													{ name: "Daggers" },
													{ name: "Fist Weapons" },
													{ name: "One-Handed Maces" },
													{ name: "One-Handed Swords" },
													{ name: "Bows" },
													{ name: "Crossbows" },
													{ name: "Guns" },
													{ name: "Thrown" },
												],
												armorTypes: [{ name: "Leather" }],
												classGuides: {
													data: [
														{
															title: "PVE Combat Rogue Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-combat-rogue-guide-tbc-2-4-3/",
															thumb: "PVE-Combat-Rogue-Guide-TBC-2.4.3_c4vroi.jpg",
														},
														{
															title: "Guide for Shadowstep PVP Rogue",
															link: "https://silentshadows.net/shadowstep-rogue-pvp-guide-burning-crusade/",
															thumb: "shsbuild_big-1024x576_plkvwl.jpg",
														},
														{
															title: "TBC Classic Combat Rogue Guide",
															link: "https://wowtbc.gg/class-guides/combat-rogue/",
															thumb: "rogue-650x325_lm6vxx.jpg",
														},
														{
															title: "Classic Rogue for Dummies",
															link: "https://classicroguecraft.com/",
															thumb: "rogue_wow_by_edgarsh422-dbehspp_tifm8o.jpg",
														},
													],
												},
												creators: {
													data: [
														{
															title: "Payo",
															link: "https://www.twitch.tv/Payo",
															icon: "payo_ghiuc8.jpg",
															platform: null,
														},
														{
															title: "Barny64",
															link: "https://www.twitch.tv/barny",
															icon: "barny64_abfj6q.jpg",
															platform: null,
														},
														{
															title: "snomie",
															link: "https://www.twitch.tv/snomie",
															icon: "snomie_jgtkce.png",
															platform: null,
														},
														{
															title: "Nahj",
															link: "https://www.twitch.tv/nahj",
															icon: "nahj_rrhyom.png",
															platform: null,
														},
													],
												},
											},
										},
										{
											id: "9",
											name: "Warlock",
											reference: {
												summary:
													"Dark magic, blood, and fire fuel Warlocks, they are the top damage dealing casters in the game and one of two pet classes.  Instead of animals found in the world, Warlocks dominate summoned demons and use them as pets.  Warlocks excel in damage over time spells and can provide burst damage that competes with any other class for top damage done.  Warlocks lack much team buffing abilities, but they do provide Soulstones allowing others to revive as needed -- this is required for raiding content.  Also, they can summon teammates to any location, saving travel time.",
												teamroles: ["Heal", "DPS", "Crowd Control"],
												resource: "Mana",
												primarystats: ["int", "sta"],
												secondarystats: ["spellhit", "spellpower", "spellcrit", "spellhaste"],
												specs: ["Affliction", "Demonology", "Destruction"],
												weaponTypes: [
													{ name: "Daggers" },
													{ name: "One-Handed Swords" },
													{ name: "Staves" },
													{ name: "Wands" },
													{ name: "Held In Off-Hand" },
												],
												armorTypes: [{ name: "Cloth" }],
												classGuides: {
													data: [
														{
															title: "TBC Warlock Guide (1-70)",
															link: "https://legacy-wow.com/tbc-warlock-guide/",
															thumb: "warlock_ek0ant.jpg",
														},
														{
															title: "PVE Destruction Warlock Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-destruction-warlock-guide-tbc-2-4-3/",
															thumb: "PVE-Destruction-Warlock-Guide-TBC-2.4.3_bkvaqk.jpg",
														},
														{
															title: "PVE Affliction Warlock Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-affliction-warlock-guide-tbc-2-4-3/",
															thumb: "PVE-Affliction-Warlock-Guide-TBC-2.4.3_z2enhx.jpg",
														},
														{
															title: "TBC Classic Destruction Warlock Guide",
															link: "https://wowtbc.gg/class-guides/destruction-warlock/",
															thumb: "Mort-vivant_Demoniste_se5ger.webp",
														},
													],
												},
												creators: {
													data: [
														{
															title: "Kargoz",
															link: "https://www.twitch.tv/kargozgaming",
															icon: "kargoz_d1xghc.png",
															platform: null,
														},
														{
															title: "Crix Gaming",
															link: "https://www.youtube.com/channel/UCPhMcl-ppbEqGDulH_Kf1MQ",
															icon: "crix_ai4yqt.jpg",
															platform: null,
														},
													],
												},
											},
										},
										{
											id: "2",
											name: "Paladin",
											reference: {
												summary:
													"A powerful hybrid class, Paladins are great healers, tanks, and damage dealers.  As a healer, Paladins provide burst healing capabilities and can save a wipe using invulderability spells.  No matter what spec, Paladins are great teammates with useful buffs and auras.  As a tank, Paladins excel in group pulls and offer reliable tanking abilities.  While damage dealing, a two-hand Retribution paladin can pull off great damage, especially in PVP environments.",
												teamroles: ["Tank", "Heal", "DPS"],
												resource: "Mana",
												primarystats: ["int", "sta", "str"],
												secondarystats: [
													"healpower",
													"mp5",
													"spellpower",
													"spellcrit",
													"spellhaste",
													"hit",
													"crit",
													"haste",
													"expertise",
													"armorpen",
													"defense",
													"parry",
												],
												specs: ["Holy", "Protection", "Retribution"],
												weaponTypes: [
													{ name: "One-Handed Axes" },
													{ name: "One-Handed Maces" },
													{ name: "One-Handed Swords" },
													{ name: "Polearms" },
													{ name: "Two-Handed Axes" },
													{ name: "Two-Handed Maces" },
													{ name: "Two-Handed Swords" },
													{ name: "Shields" },
													{ name: "Librams" },
												],
												armorTypes: [{ name: "Mail" }, { name: "Plate" }],
												classGuides: {
													data: [
														{
															title: "TBC Paladin Tank Guide (1-70)",
															link: "https://legacy-wow.com/tbc-paladin-guide/",
															thumb: "paladin_peuvwv.jpg",
														},
														{
															title: "PVE Holy Paladin Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-holy-paladin/",
															thumb: "PVE-Holy-Paladin-DPS-Guide-TBC-2.4.3_kcjzca.jpg",
														},
														{
															title: "PvE Retribution Paladin Guide",
															link: "https://www.warcrafttavern.com/tbc/guides/pve-retribution-paladin/https://www.gnarlyguides.com/tbc/guides/pve-holy-paladin/",
															thumb:
																"TBC-Classic-PvE-Retribution-Paladin-Guide-Burning-Crusade-Classic_rxqmml.jpg",
														},
													],
												},
												creators: {
													data: [
														{
															title: "Esfand",
															link: "https://www.twitch.tv/esfandtv",
															icon: "esfand_by6pgx.png",
															platform: null,
														},
														{
															title: "Graysfordays",
															link: "https://www.twitch.tv/graysfordays",
															icon: "grays_gyhtyx.png",
															platform: null,
														},
														{
															title: "Costin Gaming",
															link: "https://www.youtube.com/channel/UCnSuI6Qe57RSyIXn2Q-2Emg",
															icon: "costin_uep5lw.jpg",
															platform: null,
														},
													],
												},
											},
										},
									],
								},
							},
						],
					},
				},
				{
					name: "Alliance",
					races: {
						data: [
							{
								name: "Human",
								classes: {
									data: [
										{
											id: "8",
											name: "Mage",
											reference: {
												summary:
													"The ultimate caster class in the game, Mages excel in ranged spell power.  Frost spells allow them to slow their enemies and control their movement.  Fire spells bring massive damage and burning effects, while Arcane provides burst damage and even more versatility for PVP.  In a team setting, mages are great thanks to one of the best crowd control spells: Polymorph.  They also buff other casters and can conjure food & drink for the party members.  They can also spawn city portals to save their party travel time.",
												teamroles: ["DPS", "Crowd Control"],
												resource: "Mana",
												primarystats: ["int", "sta"],
												secondarystats: [
													"spi",
													"spellhit",
													"spellhaste",
													"spellpower",
													"spellcrit",
												],
												specs: ["Arcane", "Fire", "Frost"],
												weaponTypes: [
													{ name: "Daggers" },
													{ name: "One-Handed Swords" },
													{ name: "Staves" },
													{ name: "Wands" },
													{ name: "Held In Off-Hand" },
												],
												armorTypes: [{ name: "Cloth" }],
												classGuides: {
													data: [
														{
															title: "TBC Mage Guide",
															link: "https://legacy-wow.com/tbc-mage-guide/",
															thumb: "mage_dtjzek.jpg",
														},
														{
															title: "Fire Mage PvE Guide",
															link: "https://www.warcrafttavern.com/tbc/guides/fire-mage-pve/",
															thumb:
																"TBC-Classic-PVE-Fire-Mage-DPS-Guide-Burning-Crusade-Classic_o4ikb4.jpg",
														},
														{
															title: "PVE Frost Mage Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-frost-mage-guide-tbc-2-4-3/",
															thumb: "PVE-Frost-Mage-Guide-TBC-2.4.3_jlmzrh.jpg",
														},
														{
															title: "PVE Arcane Mage Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-arcane-mage-guide-tbc-2-4-3/",
															thumb: "PVE-Arcane-Mage-Guide-TBC-2.4.3_xlayaz.jpg",
														},
													],
												},
												creators: {
													data: [
														{
															title: "FrostLive",
															link: "https://www.twitch.tv/frostlive",
															icon: "frostlive_iek6c8.png",
															platform: null,
														},
														{
															title: "Graycen",
															link: "https://www.twitch.tv/graycen",
															icon: "graycen_wri7wp.png",
															platform: null,
														},
														{
															title: "Alfie",
															link: "https://www.twitch.tv/alfie",
															icon: "alfie_c5quys.png",
															platform: null,
														},
													],
												},
											},
										},
										{
											id: "5",
											name: "Priest",
											reference: {
												summary:
													"Do you need a healer?  Priest is the top healer in the game, and they can even provide DPS with their Shadow tree.  Priests can buff, shield, dispel, and heal their teammates, making them required for raiding and other difficult content.  They have powerful heal over time spells and can burst heal groups or single targets as needed.  When paired with Warlocks, Shadow priests can dish out massive damage and provide debuffs on their enemies.",
												teamroles: ["Heal", "DPS", "Crowd Control"],
												resource: "Mana",
												primarystats: ["int", "spi"],
												secondarystats: [
													"healpower",
													"mp5",
													"sta",
													"spellpower",
													"spellcrit",
													"spellhit",
													"spellhaste",
												],
												specs: ["Discipline", "Holy", "Shadow"],
												weaponTypes: [
													{ name: "Daggers" },
													{ name: "One-Handed Maces" },
													{ name: "Staves" },
													{ name: "Wands" },
													{ name: "Held In Off-Hand" },
												],
												armorTypes: [{ name: "Cloth" }],
												classGuides: {
													data: [
														{
															title: "PVE Shadow Priest Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-shadow-priest/",
															thumb: "PVE-Shadow-Priest-Guide-TBC-2.4.3_swcpaf.jpg",
														},
														{
															title: "PVE Holy Priest Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-holy-priest/",
															thumb: "PVE-Holy-Priest-Guide-TBC-2.4.3_qslefj.jpg",
														},
														{
															title: "TBC Classic Holy Priest Guide",
															link: "https://wowtbc.gg/class-guides/holy-priest/",
															thumb:
																"angel-priest-world-of-warcraft-game-hd-wallpaper-1920x1080-4022-975x549_mwv5cs.jpg",
														},
														{
															title: "TBC Classic Shadow Priest Guide",
															link: "https://wowtbc.gg/class-guides/shadow-priest/",
															thumb: "450px-Shadowform_full_mf1uhy.jpg",
														},
													],
												},
												creators: {
													data: [
														{
															title: "Defcamp",
															link: "https://www.twitch.tv/defcamp",
															icon: "defcamp_js6qar.png",
															platform: null,
														},
													],
												},
											},
										},
										{
											id: "4",
											name: "Rogue",
											reference: {
												summary:
													'A master of stealth, the Rogue is a melee damage dealing class that specializes in dual-weilding and poisons.  While the class lacks team support abilities, it makes up for it with consistent damage, stealth crowd control abilities, and a unique playstyle.  Rogues use a Combo Point system, most primary attack skills add 1 Combo Point, allowing other skills called "finishers" to be used.',
												teamroles: ["DPS", "Crowd Control"],
												resource: "Energy",
												primarystats: ["agi", "sta"],
												secondarystats: ["str", "crit", "hit", "ap", "expertise"],
												specs: ["Assassination", "Combat", "Subtlety"],
												weaponTypes: [
													{ name: "Daggers" },
													{ name: "Fist Weapons" },
													{ name: "One-Handed Maces" },
													{ name: "One-Handed Swords" },
													{ name: "Bows" },
													{ name: "Crossbows" },
													{ name: "Guns" },
													{ name: "Thrown" },
												],
												armorTypes: [{ name: "Leather" }],
												classGuides: {
													data: [
														{
															title: "PVE Combat Rogue Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-combat-rogue-guide-tbc-2-4-3/",
															thumb: "PVE-Combat-Rogue-Guide-TBC-2.4.3_c4vroi.jpg",
														},
														{
															title: "Guide for Shadowstep PVP Rogue",
															link: "https://silentshadows.net/shadowstep-rogue-pvp-guide-burning-crusade/",
															thumb: "shsbuild_big-1024x576_plkvwl.jpg",
														},
														{
															title: "TBC Classic Combat Rogue Guide",
															link: "https://wowtbc.gg/class-guides/combat-rogue/",
															thumb: "rogue-650x325_lm6vxx.jpg",
														},
														{
															title: "Classic Rogue for Dummies",
															link: "https://classicroguecraft.com/",
															thumb: "rogue_wow_by_edgarsh422-dbehspp_tifm8o.jpg",
														},
													],
												},
												creators: {
													data: [
														{
															title: "Payo",
															link: "https://www.twitch.tv/Payo",
															icon: "payo_ghiuc8.jpg",
															platform: null,
														},
														{
															title: "Barny64",
															link: "https://www.twitch.tv/barny",
															icon: "barny64_abfj6q.jpg",
															platform: null,
														},
														{
															title: "snomie",
															link: "https://www.twitch.tv/snomie",
															icon: "snomie_jgtkce.png",
															platform: null,
														},
														{
															title: "Nahj",
															link: "https://www.twitch.tv/nahj",
															icon: "nahj_rrhyom.png",
															platform: null,
														},
													],
												},
											},
										},
										{
											id: "9",
											name: "Warlock",
											reference: {
												summary:
													"Dark magic, blood, and fire fuel Warlocks, they are the top damage dealing casters in the game and one of two pet classes.  Instead of animals found in the world, Warlocks dominate summoned demons and use them as pets.  Warlocks excel in damage over time spells and can provide burst damage that competes with any other class for top damage done.  Warlocks lack much team buffing abilities, but they do provide Soulstones allowing others to revive as needed -- this is required for raiding content.  Also, they can summon teammates to any location, saving travel time.",
												teamroles: ["Heal", "DPS", "Crowd Control"],
												resource: "Mana",
												primarystats: ["int", "sta"],
												secondarystats: ["spellhit", "spellpower", "spellcrit", "spellhaste"],
												specs: ["Affliction", "Demonology", "Destruction"],
												weaponTypes: [
													{ name: "Daggers" },
													{ name: "One-Handed Swords" },
													{ name: "Staves" },
													{ name: "Wands" },
													{ name: "Held In Off-Hand" },
												],
												armorTypes: [{ name: "Cloth" }],
												classGuides: {
													data: [
														{
															title: "TBC Warlock Guide (1-70)",
															link: "https://legacy-wow.com/tbc-warlock-guide/",
															thumb: "warlock_ek0ant.jpg",
														},
														{
															title: "PVE Destruction Warlock Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-destruction-warlock-guide-tbc-2-4-3/",
															thumb: "PVE-Destruction-Warlock-Guide-TBC-2.4.3_bkvaqk.jpg",
														},
														{
															title: "PVE Affliction Warlock Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-affliction-warlock-guide-tbc-2-4-3/",
															thumb: "PVE-Affliction-Warlock-Guide-TBC-2.4.3_z2enhx.jpg",
														},
														{
															title: "TBC Classic Destruction Warlock Guide",
															link: "https://wowtbc.gg/class-guides/destruction-warlock/",
															thumb: "Mort-vivant_Demoniste_se5ger.webp",
														},
													],
												},
												creators: {
													data: [
														{
															title: "Kargoz",
															link: "https://www.twitch.tv/kargozgaming",
															icon: "kargoz_d1xghc.png",
															platform: null,
														},
														{
															title: "Crix Gaming",
															link: "https://www.youtube.com/channel/UCPhMcl-ppbEqGDulH_Kf1MQ",
															icon: "crix_ai4yqt.jpg",
															platform: null,
														},
													],
												},
											},
										},
										{
											id: "1",
											name: "Warrior",
											reference: {
												summary:
													"Warriors are the ultimate melee class, and they are the strongest tank class in the game.  Warriors can wear plate armor and equip almost every weapon type there is.  When tanking, warriors can keep enemies focused on them while buffing their teammates.  When providing melee DPS, warriors can dual-wield or wield two-hand weapons to destroy their enemies.",
												teamroles: ["Tank", "DPS"],
												resource: "Rage",
												primarystats: ["str", "sta"],
												secondarystats: [
													"defense",
													"block",
													"expertise",
													"hit",
													"agi",
													"haste",
													"crit",
												],
												specs: ["Arms", "Fury", "Protection"],
												weaponTypes: [
													{ name: "Daggers" },
													{ name: "Fist Weapons" },
													{ name: "One-Handed Axes" },
													{ name: "One-Handed Maces" },
													{ name: "One-Handed Swords" },
													{ name: "Polearms" },
													{ name: "Staves" },
													{ name: "Two-Handed Axes" },
													{ name: "Two-Handed Maces" },
													{ name: "Two-Handed Swords" },
													{ name: "Shields" },
													{ name: "Bows" },
													{ name: "Crossbows" },
													{ name: "Guns" },
													{ name: "Thrown" },
												],
												armorTypes: [{ name: "Mail" }, { name: "Plate" }],
												classGuides: {
													data: [
														{
															title: "TBC Warrior Guide",
															link: "https://legacy-wow.com/tbc-warrior-guide/",
															thumb: "tbc_warrior_guide_ojyy08.jpg",
														},
														{
															title: "PVE Fury Warrior DPS Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-fury-warrior-dps-guide-tbc-2-4-3/",
															thumb: "PVE-Fury-Warrior-DPS-Guide-TBC-2.4.3_aclkg0.jpg",
														},
														{
															title: "PVE DPS Arms Warrior Guide (TBC 2.4.3) ",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-dps-arms-warrior/",
															thumb: "PVE-DPS-Arms-Warrior-Guide-TBC-2.4.3_q75yfp.jpg",
														},
														{
															title: "PvE Protection Warrior Tank Guide",
															link: "https://www.warcrafttavern.com/tbc/guides/pve-protection-warrior-tank/",
															thumb:
																"TBC-Classic-PvE-Protection-Warrior-Tank-Guide-Burning-Crusade-Classic_llzjfw.jpg",
														},
													],
												},
												creators: {
													data: [
														{
															title: "Asmongold",
															link: "https://www.twitch.tv/asmongold",
															icon: "asmon_m0grlo.png",
															platform: null,
														},
														{
															title: "Rai Bread",
															link: "https://www.youtube.com/channel/UCYNsSRo2Rg20CZiXHeFQmpw",
															icon: "raibread_sm6rna.jpg",
															platform: null,
														},
													],
												},
											},
										},
										{
											id: "2",
											name: "Paladin",
											reference: {
												summary:
													"A powerful hybrid class, Paladins are great healers, tanks, and damage dealers.  As a healer, Paladins provide burst healing capabilities and can save a wipe using invulderability spells.  No matter what spec, Paladins are great teammates with useful buffs and auras.  As a tank, Paladins excel in group pulls and offer reliable tanking abilities.  While damage dealing, a two-hand Retribution paladin can pull off great damage, especially in PVP environments.",
												teamroles: ["Tank", "Heal", "DPS"],
												resource: "Mana",
												primarystats: ["int", "sta", "str"],
												secondarystats: [
													"healpower",
													"mp5",
													"spellpower",
													"spellcrit",
													"spellhaste",
													"hit",
													"crit",
													"haste",
													"expertise",
													"armorpen",
													"defense",
													"parry",
												],
												specs: ["Holy", "Protection", "Retribution"],
												weaponTypes: [
													{ name: "One-Handed Axes" },
													{ name: "One-Handed Maces" },
													{ name: "One-Handed Swords" },
													{ name: "Polearms" },
													{ name: "Two-Handed Axes" },
													{ name: "Two-Handed Maces" },
													{ name: "Two-Handed Swords" },
													{ name: "Shields" },
													{ name: "Librams" },
												],
												armorTypes: [{ name: "Mail" }, { name: "Plate" }],
												classGuides: {
													data: [
														{
															title: "TBC Paladin Tank Guide (1-70)",
															link: "https://legacy-wow.com/tbc-paladin-guide/",
															thumb: "paladin_peuvwv.jpg",
														},
														{
															title: "PVE Holy Paladin Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-holy-paladin/",
															thumb: "PVE-Holy-Paladin-DPS-Guide-TBC-2.4.3_kcjzca.jpg",
														},
														{
															title: "PvE Retribution Paladin Guide",
															link: "https://www.warcrafttavern.com/tbc/guides/pve-retribution-paladin/https://www.gnarlyguides.com/tbc/guides/pve-holy-paladin/",
															thumb:
																"TBC-Classic-PvE-Retribution-Paladin-Guide-Burning-Crusade-Classic_rxqmml.jpg",
														},
													],
												},
												creators: {
													data: [
														{
															title: "Esfand",
															link: "https://www.twitch.tv/esfandtv",
															icon: "esfand_by6pgx.png",
															platform: null,
														},
														{
															title: "Graysfordays",
															link: "https://www.twitch.tv/graysfordays",
															icon: "grays_gyhtyx.png",
															platform: null,
														},
														{
															title: "Costin Gaming",
															link: "https://www.youtube.com/channel/UCnSuI6Qe57RSyIXn2Q-2Emg",
															icon: "costin_uep5lw.jpg",
															platform: null,
														},
													],
												},
											},
										},
									],
								},
							},
							{
								name: "Night Elf",
								classes: {
									data: [
										{
											id: "11",
											name: "Druid",
											reference: {
												summary:
													"One of three Hybrid classes, the Druid can heal, tank, melee DPS, or even cast spells.  This can be done thanks to Druid's unique skill: Shapeshifting.  When in bear form they are the second best tank in the game, and when healing they specialize in healing over time spells.  For damage dealing, cat form is used for melee damage.  Druids even have a dedicated form for ranged spellcasting Moonkin.",
												teamroles: ["Tank", "DPS", "Heal", "Crowd Control"],
												resource: "Mana",
												primarystats: ["int", "agi", "sta"],
												secondarystats: [
													"str",
													"crit",
													"hit",
													"ap",
													"expertise",
													"spellpower",
													"healpower",
													"mp5",
													"spi",
												],
												specs: ["Balance", "Feral", "Restoration"],
												weaponTypes: [
													{ name: "Daggers" },
													{ name: "Fist Weapons" },
													{ name: "One-Handed Maces" },
													{ name: "Two-Handed Maces" },
													{ name: "Polearms" },
													{ name: "Staves" },
													{ name: "Idols" },
													{ name: "Held In Off-Hand" },
												],
												armorTypes: [{ name: "Leather" }, { name: "Cloth" }],
												classGuides: {
													data: [
														{
															title: "TBC Tank Druid Guide",
															link: "https://legacy-wow.com/druid-feral-level-70/",
															thumb: "druid_puah9r.jpg",
														},
														{
															title: "TBC Resto Druid Guide",
															link: "https://legacy-wow.com/tbc-resto-druid-guide/",
															thumb: "druid-resto_qe2twk.jpg",
														},
														{
															title: "TBC Classic Restoration Druid Guide",
															link: "https://wowtbc.gg/class-guides/restoration-druid/",
															thumb: "morova-of-the-sand-world-of_bgseki.jpg",
														},
														{
															title: "PvE Balance Druid Boomkin DPS Guide",
															link: "https://www.warcrafttavern.com/tbc/guides/pve-balance-druid-boomkin-dps/",
															thumb:
																"PVE-Balance-Druid-Boomkin-DPS-Guide-TBC-Burning-Crusade-Classic_uanvfx.jpg",
														},
													],
												},
												creators: {
													data: [
														{
															title: "Venruki",
															link: "https://www.twitch.tv/venruki",
															icon: "venruki_dhaj7d.jpg",
															platform: null,
														},
														{
															title: "Knot",
															link: "https://www.youtube.com/channel/UCVS0sYnWlOgO6MG8pLNI_wA",
															icon: "knot_j5nekp.jpg",
															platform: null,
														},
													],
												},
											},
										},
										{
											id: "3",
											name: "Hunter",
											reference: {
												summary:
													"Hunters are the top ranged physical DPS in the game.  They are one of two classes that use pets, and hunters are known for soloing dungeons and kiting world bosses thanks to their long range and high DPS.  Hunters can provide crowd control in the form of traps and are great in PVP too.",
												teamroles: ["DPS", "Crowd Control"],
												resource: "Mana",
												primarystats: ["agi", "int"],
												secondarystats: ["sta", "haste", "hit", "ap", "crit", "parry"],
												specs: ["Marksmanship", "Beast Mastery", "Survival"],
												weaponTypes: [
													{ name: "Daggers" },
													{ name: "Fist Weapons" },
													{ name: "One-Handed Axes" },
													{ name: "One-Handed Swords" },
													{ name: "Polearms" },
													{ name: "Staves" },
													{ name: "Two-Handed Axes" },
													{ name: "Two-Handed Swords" },
													{ name: "Bows" },
													{ name: "Crossbows" },
													{ name: "Guns" },
													{ name: "Thrown" },
												],
												armorTypes: [{ name: "Leather" }, { name: "Mail" }],
												classGuides: {
													data: [
														{
															title:
																"TBC Classic: Hunter Class DEEP DIVE (All 3 Specs, PvE, PvP, Tips & Tricks) - The Burning Crusade",
															link: "https://www.youtube.com/watch?v=xnk3GiaDB9k",
															thumb: "kargozhunter_xids6w.jpg",
														},
														{
															title: "PvE Beast Mastery Hunter Guide",
															link: "https://www.warcrafttavern.com/tbc/guides/pve-beast-mastery-hunter/",
															thumb: "pve-beast-mastery-hunter-guide_k4dhmn.jpg",
														},
														{
															title: "TBC Hunter Guide",
															link: "https://legacy-wow.com/tbc-hunter-guide/",
															thumb: "hunter_trkhcg.jpg",
														},
													],
												},
												creators: {
													data: [
														{
															title: "Agran",
															link: "https://www.youtube.com/watch?v=dH6lJMU43bw&list=PLdlIYjR4sJScJrvhHZYSwq91jAvinEmsp",
															icon: "agran_n7x301.jpg",
															platform: null,
														},
														{
															title: "Bigbobbedboi",
															link: "https://www.youtube.com/channel/UCMrTztxAtaZDZZk6hu8HLig",
															icon: "bigbobbedboi_qj9qdq.jpg",
															platform: null,
														},
													],
												},
											},
										},
										{
											id: "5",
											name: "Priest",
											reference: {
												summary:
													"Do you need a healer?  Priest is the top healer in the game, and they can even provide DPS with their Shadow tree.  Priests can buff, shield, dispel, and heal their teammates, making them required for raiding and other difficult content.  They have powerful heal over time spells and can burst heal groups or single targets as needed.  When paired with Warlocks, Shadow priests can dish out massive damage and provide debuffs on their enemies.",
												teamroles: ["Heal", "DPS", "Crowd Control"],
												resource: "Mana",
												primarystats: ["int", "spi"],
												secondarystats: [
													"healpower",
													"mp5",
													"sta",
													"spellpower",
													"spellcrit",
													"spellhit",
													"spellhaste",
												],
												specs: ["Discipline", "Holy", "Shadow"],
												weaponTypes: [
													{ name: "Daggers" },
													{ name: "One-Handed Maces" },
													{ name: "Staves" },
													{ name: "Wands" },
													{ name: "Held In Off-Hand" },
												],
												armorTypes: [{ name: "Cloth" }],
												classGuides: {
													data: [
														{
															title: "PVE Shadow Priest Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-shadow-priest/",
															thumb: "PVE-Shadow-Priest-Guide-TBC-2.4.3_swcpaf.jpg",
														},
														{
															title: "PVE Holy Priest Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-holy-priest/",
															thumb: "PVE-Holy-Priest-Guide-TBC-2.4.3_qslefj.jpg",
														},
														{
															title: "TBC Classic Holy Priest Guide",
															link: "https://wowtbc.gg/class-guides/holy-priest/",
															thumb:
																"angel-priest-world-of-warcraft-game-hd-wallpaper-1920x1080-4022-975x549_mwv5cs.jpg",
														},
														{
															title: "TBC Classic Shadow Priest Guide",
															link: "https://wowtbc.gg/class-guides/shadow-priest/",
															thumb: "450px-Shadowform_full_mf1uhy.jpg",
														},
													],
												},
												creators: {
													data: [
														{
															title: "Defcamp",
															link: "https://www.twitch.tv/defcamp",
															icon: "defcamp_js6qar.png",
															platform: null,
														},
													],
												},
											},
										},
										{
											id: "4",
											name: "Rogue",
											reference: {
												summary:
													'A master of stealth, the Rogue is a melee damage dealing class that specializes in dual-weilding and poisons.  While the class lacks team support abilities, it makes up for it with consistent damage, stealth crowd control abilities, and a unique playstyle.  Rogues use a Combo Point system, most primary attack skills add 1 Combo Point, allowing other skills called "finishers" to be used.',
												teamroles: ["DPS", "Crowd Control"],
												resource: "Energy",
												primarystats: ["agi", "sta"],
												secondarystats: ["str", "crit", "hit", "ap", "expertise"],
												specs: ["Assassination", "Combat", "Subtlety"],
												weaponTypes: [
													{ name: "Daggers" },
													{ name: "Fist Weapons" },
													{ name: "One-Handed Maces" },
													{ name: "One-Handed Swords" },
													{ name: "Bows" },
													{ name: "Crossbows" },
													{ name: "Guns" },
													{ name: "Thrown" },
												],
												armorTypes: [{ name: "Leather" }],
												classGuides: {
													data: [
														{
															title: "PVE Combat Rogue Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-combat-rogue-guide-tbc-2-4-3/",
															thumb: "PVE-Combat-Rogue-Guide-TBC-2.4.3_c4vroi.jpg",
														},
														{
															title: "Guide for Shadowstep PVP Rogue",
															link: "https://silentshadows.net/shadowstep-rogue-pvp-guide-burning-crusade/",
															thumb: "shsbuild_big-1024x576_plkvwl.jpg",
														},
														{
															title: "TBC Classic Combat Rogue Guide",
															link: "https://wowtbc.gg/class-guides/combat-rogue/",
															thumb: "rogue-650x325_lm6vxx.jpg",
														},
														{
															title: "Classic Rogue for Dummies",
															link: "https://classicroguecraft.com/",
															thumb: "rogue_wow_by_edgarsh422-dbehspp_tifm8o.jpg",
														},
													],
												},
												creators: {
													data: [
														{
															title: "Payo",
															link: "https://www.twitch.tv/Payo",
															icon: "payo_ghiuc8.jpg",
															platform: null,
														},
														{
															title: "Barny64",
															link: "https://www.twitch.tv/barny",
															icon: "barny64_abfj6q.jpg",
															platform: null,
														},
														{
															title: "snomie",
															link: "https://www.twitch.tv/snomie",
															icon: "snomie_jgtkce.png",
															platform: null,
														},
														{
															title: "Nahj",
															link: "https://www.twitch.tv/nahj",
															icon: "nahj_rrhyom.png",
															platform: null,
														},
													],
												},
											},
										},
										{
											id: "1",
											name: "Warrior",
											reference: {
												summary:
													"Warriors are the ultimate melee class, and they are the strongest tank class in the game.  Warriors can wear plate armor and equip almost every weapon type there is.  When tanking, warriors can keep enemies focused on them while buffing their teammates.  When providing melee DPS, warriors can dual-wield or wield two-hand weapons to destroy their enemies.",
												teamroles: ["Tank", "DPS"],
												resource: "Rage",
												primarystats: ["str", "sta"],
												secondarystats: [
													"defense",
													"block",
													"expertise",
													"hit",
													"agi",
													"haste",
													"crit",
												],
												specs: ["Arms", "Fury", "Protection"],
												weaponTypes: [
													{ name: "Daggers" },
													{ name: "Fist Weapons" },
													{ name: "One-Handed Axes" },
													{ name: "One-Handed Maces" },
													{ name: "One-Handed Swords" },
													{ name: "Polearms" },
													{ name: "Staves" },
													{ name: "Two-Handed Axes" },
													{ name: "Two-Handed Maces" },
													{ name: "Two-Handed Swords" },
													{ name: "Shields" },
													{ name: "Bows" },
													{ name: "Crossbows" },
													{ name: "Guns" },
													{ name: "Thrown" },
												],
												armorTypes: [{ name: "Mail" }, { name: "Plate" }],
												classGuides: {
													data: [
														{
															title: "TBC Warrior Guide",
															link: "https://legacy-wow.com/tbc-warrior-guide/",
															thumb: "tbc_warrior_guide_ojyy08.jpg",
														},
														{
															title: "PVE Fury Warrior DPS Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-fury-warrior-dps-guide-tbc-2-4-3/",
															thumb: "PVE-Fury-Warrior-DPS-Guide-TBC-2.4.3_aclkg0.jpg",
														},
														{
															title: "PVE DPS Arms Warrior Guide (TBC 2.4.3) ",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-dps-arms-warrior/",
															thumb: "PVE-DPS-Arms-Warrior-Guide-TBC-2.4.3_q75yfp.jpg",
														},
														{
															title: "PvE Protection Warrior Tank Guide",
															link: "https://www.warcrafttavern.com/tbc/guides/pve-protection-warrior-tank/",
															thumb:
																"TBC-Classic-PvE-Protection-Warrior-Tank-Guide-Burning-Crusade-Classic_llzjfw.jpg",
														},
													],
												},
												creators: {
													data: [
														{
															title: "Asmongold",
															link: "https://www.twitch.tv/asmongold",
															icon: "asmon_m0grlo.png",
															platform: null,
														},
														{
															title: "Rai Bread",
															link: "https://www.youtube.com/channel/UCYNsSRo2Rg20CZiXHeFQmpw",
															icon: "raibread_sm6rna.jpg",
															platform: null,
														},
													],
												},
											},
										},
									],
								},
							},
							{
								name: "Dwarf",
								classes: {
									data: [
										{
											id: "3",
											name: "Hunter",
											reference: {
												summary:
													"Hunters are the top ranged physical DPS in the game.  They are one of two classes that use pets, and hunters are known for soloing dungeons and kiting world bosses thanks to their long range and high DPS.  Hunters can provide crowd control in the form of traps and are great in PVP too.",
												teamroles: ["DPS", "Crowd Control"],
												resource: "Mana",
												primarystats: ["agi", "int"],
												secondarystats: ["sta", "haste", "hit", "ap", "crit", "parry"],
												specs: ["Marksmanship", "Beast Mastery", "Survival"],
												weaponTypes: [
													{ name: "Daggers" },
													{ name: "Fist Weapons" },
													{ name: "One-Handed Axes" },
													{ name: "One-Handed Swords" },
													{ name: "Polearms" },
													{ name: "Staves" },
													{ name: "Two-Handed Axes" },
													{ name: "Two-Handed Swords" },
													{ name: "Bows" },
													{ name: "Crossbows" },
													{ name: "Guns" },
													{ name: "Thrown" },
												],
												armorTypes: [{ name: "Leather" }, { name: "Mail" }],
												classGuides: {
													data: [
														{
															title:
																"TBC Classic: Hunter Class DEEP DIVE (All 3 Specs, PvE, PvP, Tips & Tricks) - The Burning Crusade",
															link: "https://www.youtube.com/watch?v=xnk3GiaDB9k",
															thumb: "kargozhunter_xids6w.jpg",
														},
														{
															title: "PvE Beast Mastery Hunter Guide",
															link: "https://www.warcrafttavern.com/tbc/guides/pve-beast-mastery-hunter/",
															thumb: "pve-beast-mastery-hunter-guide_k4dhmn.jpg",
														},
														{
															title: "TBC Hunter Guide",
															link: "https://legacy-wow.com/tbc-hunter-guide/",
															thumb: "hunter_trkhcg.jpg",
														},
													],
												},
												creators: {
													data: [
														{
															title: "Agran",
															link: "https://www.youtube.com/watch?v=dH6lJMU43bw&list=PLdlIYjR4sJScJrvhHZYSwq91jAvinEmsp",
															icon: "agran_n7x301.jpg",
															platform: null,
														},
														{
															title: "Bigbobbedboi",
															link: "https://www.youtube.com/channel/UCMrTztxAtaZDZZk6hu8HLig",
															icon: "bigbobbedboi_qj9qdq.jpg",
															platform: null,
														},
													],
												},
											},
										},
										{
											id: "5",
											name: "Priest",
											reference: {
												summary:
													"Do you need a healer?  Priest is the top healer in the game, and they can even provide DPS with their Shadow tree.  Priests can buff, shield, dispel, and heal their teammates, making them required for raiding and other difficult content.  They have powerful heal over time spells and can burst heal groups or single targets as needed.  When paired with Warlocks, Shadow priests can dish out massive damage and provide debuffs on their enemies.",
												teamroles: ["Heal", "DPS", "Crowd Control"],
												resource: "Mana",
												primarystats: ["int", "spi"],
												secondarystats: [
													"healpower",
													"mp5",
													"sta",
													"spellpower",
													"spellcrit",
													"spellhit",
													"spellhaste",
												],
												specs: ["Discipline", "Holy", "Shadow"],
												weaponTypes: [
													{ name: "Daggers" },
													{ name: "One-Handed Maces" },
													{ name: "Staves" },
													{ name: "Wands" },
													{ name: "Held In Off-Hand" },
												],
												armorTypes: [{ name: "Cloth" }],
												classGuides: {
													data: [
														{
															title: "PVE Shadow Priest Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-shadow-priest/",
															thumb: "PVE-Shadow-Priest-Guide-TBC-2.4.3_swcpaf.jpg",
														},
														{
															title: "PVE Holy Priest Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-holy-priest/",
															thumb: "PVE-Holy-Priest-Guide-TBC-2.4.3_qslefj.jpg",
														},
														{
															title: "TBC Classic Holy Priest Guide",
															link: "https://wowtbc.gg/class-guides/holy-priest/",
															thumb:
																"angel-priest-world-of-warcraft-game-hd-wallpaper-1920x1080-4022-975x549_mwv5cs.jpg",
														},
														{
															title: "TBC Classic Shadow Priest Guide",
															link: "https://wowtbc.gg/class-guides/shadow-priest/",
															thumb: "450px-Shadowform_full_mf1uhy.jpg",
														},
													],
												},
												creators: {
													data: [
														{
															title: "Defcamp",
															link: "https://www.twitch.tv/defcamp",
															icon: "defcamp_js6qar.png",
															platform: null,
														},
													],
												},
											},
										},
										{
											id: "4",
											name: "Rogue",
											reference: {
												summary:
													'A master of stealth, the Rogue is a melee damage dealing class that specializes in dual-weilding and poisons.  While the class lacks team support abilities, it makes up for it with consistent damage, stealth crowd control abilities, and a unique playstyle.  Rogues use a Combo Point system, most primary attack skills add 1 Combo Point, allowing other skills called "finishers" to be used.',
												teamroles: ["DPS", "Crowd Control"],
												resource: "Energy",
												primarystats: ["agi", "sta"],
												secondarystats: ["str", "crit", "hit", "ap", "expertise"],
												specs: ["Assassination", "Combat", "Subtlety"],
												weaponTypes: [
													{ name: "Daggers" },
													{ name: "Fist Weapons" },
													{ name: "One-Handed Maces" },
													{ name: "One-Handed Swords" },
													{ name: "Bows" },
													{ name: "Crossbows" },
													{ name: "Guns" },
													{ name: "Thrown" },
												],
												armorTypes: [{ name: "Leather" }],
												classGuides: {
													data: [
														{
															title: "PVE Combat Rogue Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-combat-rogue-guide-tbc-2-4-3/",
															thumb: "PVE-Combat-Rogue-Guide-TBC-2.4.3_c4vroi.jpg",
														},
														{
															title: "Guide for Shadowstep PVP Rogue",
															link: "https://silentshadows.net/shadowstep-rogue-pvp-guide-burning-crusade/",
															thumb: "shsbuild_big-1024x576_plkvwl.jpg",
														},
														{
															title: "TBC Classic Combat Rogue Guide",
															link: "https://wowtbc.gg/class-guides/combat-rogue/",
															thumb: "rogue-650x325_lm6vxx.jpg",
														},
														{
															title: "Classic Rogue for Dummies",
															link: "https://classicroguecraft.com/",
															thumb: "rogue_wow_by_edgarsh422-dbehspp_tifm8o.jpg",
														},
													],
												},
												creators: {
													data: [
														{
															title: "Payo",
															link: "https://www.twitch.tv/Payo",
															icon: "payo_ghiuc8.jpg",
															platform: null,
														},
														{
															title: "Barny64",
															link: "https://www.twitch.tv/barny",
															icon: "barny64_abfj6q.jpg",
															platform: null,
														},
														{
															title: "snomie",
															link: "https://www.twitch.tv/snomie",
															icon: "snomie_jgtkce.png",
															platform: null,
														},
														{
															title: "Nahj",
															link: "https://www.twitch.tv/nahj",
															icon: "nahj_rrhyom.png",
															platform: null,
														},
													],
												},
											},
										},
										{
											id: "1",
											name: "Warrior",
											reference: {
												summary:
													"Warriors are the ultimate melee class, and they are the strongest tank class in the game.  Warriors can wear plate armor and equip almost every weapon type there is.  When tanking, warriors can keep enemies focused on them while buffing their teammates.  When providing melee DPS, warriors can dual-wield or wield two-hand weapons to destroy their enemies.",
												teamroles: ["Tank", "DPS"],
												resource: "Rage",
												primarystats: ["str", "sta"],
												secondarystats: [
													"defense",
													"block",
													"expertise",
													"hit",
													"agi",
													"haste",
													"crit",
												],
												specs: ["Arms", "Fury", "Protection"],
												weaponTypes: [
													{ name: "Daggers" },
													{ name: "Fist Weapons" },
													{ name: "One-Handed Axes" },
													{ name: "One-Handed Maces" },
													{ name: "One-Handed Swords" },
													{ name: "Polearms" },
													{ name: "Staves" },
													{ name: "Two-Handed Axes" },
													{ name: "Two-Handed Maces" },
													{ name: "Two-Handed Swords" },
													{ name: "Shields" },
													{ name: "Bows" },
													{ name: "Crossbows" },
													{ name: "Guns" },
													{ name: "Thrown" },
												],
												armorTypes: [{ name: "Mail" }, { name: "Plate" }],
												classGuides: {
													data: [
														{
															title: "TBC Warrior Guide",
															link: "https://legacy-wow.com/tbc-warrior-guide/",
															thumb: "tbc_warrior_guide_ojyy08.jpg",
														},
														{
															title: "PVE Fury Warrior DPS Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-fury-warrior-dps-guide-tbc-2-4-3/",
															thumb: "PVE-Fury-Warrior-DPS-Guide-TBC-2.4.3_aclkg0.jpg",
														},
														{
															title: "PVE DPS Arms Warrior Guide (TBC 2.4.3) ",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-dps-arms-warrior/",
															thumb: "PVE-DPS-Arms-Warrior-Guide-TBC-2.4.3_q75yfp.jpg",
														},
														{
															title: "PvE Protection Warrior Tank Guide",
															link: "https://www.warcrafttavern.com/tbc/guides/pve-protection-warrior-tank/",
															thumb:
																"TBC-Classic-PvE-Protection-Warrior-Tank-Guide-Burning-Crusade-Classic_llzjfw.jpg",
														},
													],
												},
												creators: {
													data: [
														{
															title: "Asmongold",
															link: "https://www.twitch.tv/asmongold",
															icon: "asmon_m0grlo.png",
															platform: null,
														},
														{
															title: "Rai Bread",
															link: "https://www.youtube.com/channel/UCYNsSRo2Rg20CZiXHeFQmpw",
															icon: "raibread_sm6rna.jpg",
															platform: null,
														},
													],
												},
											},
										},
										{
											id: "2",
											name: "Paladin",
											reference: {
												summary:
													"A powerful hybrid class, Paladins are great healers, tanks, and damage dealers.  As a healer, Paladins provide burst healing capabilities and can save a wipe using invulderability spells.  No matter what spec, Paladins are great teammates with useful buffs and auras.  As a tank, Paladins excel in group pulls and offer reliable tanking abilities.  While damage dealing, a two-hand Retribution paladin can pull off great damage, especially in PVP environments.",
												teamroles: ["Tank", "Heal", "DPS"],
												resource: "Mana",
												primarystats: ["int", "sta", "str"],
												secondarystats: [
													"healpower",
													"mp5",
													"spellpower",
													"spellcrit",
													"spellhaste",
													"hit",
													"crit",
													"haste",
													"expertise",
													"armorpen",
													"defense",
													"parry",
												],
												specs: ["Holy", "Protection", "Retribution"],
												weaponTypes: [
													{ name: "One-Handed Axes" },
													{ name: "One-Handed Maces" },
													{ name: "One-Handed Swords" },
													{ name: "Polearms" },
													{ name: "Two-Handed Axes" },
													{ name: "Two-Handed Maces" },
													{ name: "Two-Handed Swords" },
													{ name: "Shields" },
													{ name: "Librams" },
												],
												armorTypes: [{ name: "Mail" }, { name: "Plate" }],
												classGuides: {
													data: [
														{
															title: "TBC Paladin Tank Guide (1-70)",
															link: "https://legacy-wow.com/tbc-paladin-guide/",
															thumb: "paladin_peuvwv.jpg",
														},
														{
															title: "PVE Holy Paladin Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-holy-paladin/",
															thumb: "PVE-Holy-Paladin-DPS-Guide-TBC-2.4.3_kcjzca.jpg",
														},
														{
															title: "PvE Retribution Paladin Guide",
															link: "https://www.warcrafttavern.com/tbc/guides/pve-retribution-paladin/https://www.gnarlyguides.com/tbc/guides/pve-holy-paladin/",
															thumb:
																"TBC-Classic-PvE-Retribution-Paladin-Guide-Burning-Crusade-Classic_rxqmml.jpg",
														},
													],
												},
												creators: {
													data: [
														{
															title: "Esfand",
															link: "https://www.twitch.tv/esfandtv",
															icon: "esfand_by6pgx.png",
															platform: null,
														},
														{
															title: "Graysfordays",
															link: "https://www.twitch.tv/graysfordays",
															icon: "grays_gyhtyx.png",
															platform: null,
														},
														{
															title: "Costin Gaming",
															link: "https://www.youtube.com/channel/UCnSuI6Qe57RSyIXn2Q-2Emg",
															icon: "costin_uep5lw.jpg",
															platform: null,
														},
													],
												},
											},
										},
									],
								},
							},
							{
								name: "Gnome",
								classes: {
									data: [
										{
											id: "8",
											name: "Mage",
											reference: {
												summary:
													"The ultimate caster class in the game, Mages excel in ranged spell power.  Frost spells allow them to slow their enemies and control their movement.  Fire spells bring massive damage and burning effects, while Arcane provides burst damage and even more versatility for PVP.  In a team setting, mages are great thanks to one of the best crowd control spells: Polymorph.  They also buff other casters and can conjure food & drink for the party members.  They can also spawn city portals to save their party travel time.",
												teamroles: ["DPS", "Crowd Control"],
												resource: "Mana",
												primarystats: ["int", "sta"],
												secondarystats: [
													"spi",
													"spellhit",
													"spellhaste",
													"spellpower",
													"spellcrit",
												],
												specs: ["Arcane", "Fire", "Frost"],
												weaponTypes: [
													{ name: "Daggers" },
													{ name: "One-Handed Swords" },
													{ name: "Staves" },
													{ name: "Wands" },
													{ name: "Held In Off-Hand" },
												],
												armorTypes: [{ name: "Cloth" }],
												classGuides: {
													data: [
														{
															title: "TBC Mage Guide",
															link: "https://legacy-wow.com/tbc-mage-guide/",
															thumb: "mage_dtjzek.jpg",
														},
														{
															title: "Fire Mage PvE Guide",
															link: "https://www.warcrafttavern.com/tbc/guides/fire-mage-pve/",
															thumb:
																"TBC-Classic-PVE-Fire-Mage-DPS-Guide-Burning-Crusade-Classic_o4ikb4.jpg",
														},
														{
															title: "PVE Frost Mage Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-frost-mage-guide-tbc-2-4-3/",
															thumb: "PVE-Frost-Mage-Guide-TBC-2.4.3_jlmzrh.jpg",
														},
														{
															title: "PVE Arcane Mage Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-arcane-mage-guide-tbc-2-4-3/",
															thumb: "PVE-Arcane-Mage-Guide-TBC-2.4.3_xlayaz.jpg",
														},
													],
												},
												creators: {
													data: [
														{
															title: "FrostLive",
															link: "https://www.twitch.tv/frostlive",
															icon: "frostlive_iek6c8.png",
															platform: null,
														},
														{
															title: "Graycen",
															link: "https://www.twitch.tv/graycen",
															icon: "graycen_wri7wp.png",
															platform: null,
														},
														{
															title: "Alfie",
															link: "https://www.twitch.tv/alfie",
															icon: "alfie_c5quys.png",
															platform: null,
														},
													],
												},
											},
										},
										{
											id: "4",
											name: "Rogue",
											reference: {
												summary:
													'A master of stealth, the Rogue is a melee damage dealing class that specializes in dual-weilding and poisons.  While the class lacks team support abilities, it makes up for it with consistent damage, stealth crowd control abilities, and a unique playstyle.  Rogues use a Combo Point system, most primary attack skills add 1 Combo Point, allowing other skills called "finishers" to be used.',
												teamroles: ["DPS", "Crowd Control"],
												resource: "Energy",
												primarystats: ["agi", "sta"],
												secondarystats: ["str", "crit", "hit", "ap", "expertise"],
												specs: ["Assassination", "Combat", "Subtlety"],
												weaponTypes: [
													{ name: "Daggers" },
													{ name: "Fist Weapons" },
													{ name: "One-Handed Maces" },
													{ name: "One-Handed Swords" },
													{ name: "Bows" },
													{ name: "Crossbows" },
													{ name: "Guns" },
													{ name: "Thrown" },
												],
												armorTypes: [{ name: "Leather" }],
												classGuides: {
													data: [
														{
															title: "PVE Combat Rogue Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-combat-rogue-guide-tbc-2-4-3/",
															thumb: "PVE-Combat-Rogue-Guide-TBC-2.4.3_c4vroi.jpg",
														},
														{
															title: "Guide for Shadowstep PVP Rogue",
															link: "https://silentshadows.net/shadowstep-rogue-pvp-guide-burning-crusade/",
															thumb: "shsbuild_big-1024x576_plkvwl.jpg",
														},
														{
															title: "TBC Classic Combat Rogue Guide",
															link: "https://wowtbc.gg/class-guides/combat-rogue/",
															thumb: "rogue-650x325_lm6vxx.jpg",
														},
														{
															title: "Classic Rogue for Dummies",
															link: "https://classicroguecraft.com/",
															thumb: "rogue_wow_by_edgarsh422-dbehspp_tifm8o.jpg",
														},
													],
												},
												creators: {
													data: [
														{
															title: "Payo",
															link: "https://www.twitch.tv/Payo",
															icon: "payo_ghiuc8.jpg",
															platform: null,
														},
														{
															title: "Barny64",
															link: "https://www.twitch.tv/barny",
															icon: "barny64_abfj6q.jpg",
															platform: null,
														},
														{
															title: "snomie",
															link: "https://www.twitch.tv/snomie",
															icon: "snomie_jgtkce.png",
															platform: null,
														},
														{
															title: "Nahj",
															link: "https://www.twitch.tv/nahj",
															icon: "nahj_rrhyom.png",
															platform: null,
														},
													],
												},
											},
										},
										{
											id: "9",
											name: "Warlock",
											reference: {
												summary:
													"Dark magic, blood, and fire fuel Warlocks, they are the top damage dealing casters in the game and one of two pet classes.  Instead of animals found in the world, Warlocks dominate summoned demons and use them as pets.  Warlocks excel in damage over time spells and can provide burst damage that competes with any other class for top damage done.  Warlocks lack much team buffing abilities, but they do provide Soulstones allowing others to revive as needed -- this is required for raiding content.  Also, they can summon teammates to any location, saving travel time.",
												teamroles: ["Heal", "DPS", "Crowd Control"],
												resource: "Mana",
												primarystats: ["int", "sta"],
												secondarystats: ["spellhit", "spellpower", "spellcrit", "spellhaste"],
												specs: ["Affliction", "Demonology", "Destruction"],
												weaponTypes: [
													{ name: "Daggers" },
													{ name: "One-Handed Swords" },
													{ name: "Staves" },
													{ name: "Wands" },
													{ name: "Held In Off-Hand" },
												],
												armorTypes: [{ name: "Cloth" }],
												classGuides: {
													data: [
														{
															title: "TBC Warlock Guide (1-70)",
															link: "https://legacy-wow.com/tbc-warlock-guide/",
															thumb: "warlock_ek0ant.jpg",
														},
														{
															title: "PVE Destruction Warlock Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-destruction-warlock-guide-tbc-2-4-3/",
															thumb: "PVE-Destruction-Warlock-Guide-TBC-2.4.3_bkvaqk.jpg",
														},
														{
															title: "PVE Affliction Warlock Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-affliction-warlock-guide-tbc-2-4-3/",
															thumb: "PVE-Affliction-Warlock-Guide-TBC-2.4.3_z2enhx.jpg",
														},
														{
															title: "TBC Classic Destruction Warlock Guide",
															link: "https://wowtbc.gg/class-guides/destruction-warlock/",
															thumb: "Mort-vivant_Demoniste_se5ger.webp",
														},
													],
												},
												creators: {
													data: [
														{
															title: "Kargoz",
															link: "https://www.twitch.tv/kargozgaming",
															icon: "kargoz_d1xghc.png",
															platform: null,
														},
														{
															title: "Crix Gaming",
															link: "https://www.youtube.com/channel/UCPhMcl-ppbEqGDulH_Kf1MQ",
															icon: "crix_ai4yqt.jpg",
															platform: null,
														},
													],
												},
											},
										},
										{
											id: "1",
											name: "Warrior",
											reference: {
												summary:
													"Warriors are the ultimate melee class, and they are the strongest tank class in the game.  Warriors can wear plate armor and equip almost every weapon type there is.  When tanking, warriors can keep enemies focused on them while buffing their teammates.  When providing melee DPS, warriors can dual-wield or wield two-hand weapons to destroy their enemies.",
												teamroles: ["Tank", "DPS"],
												resource: "Rage",
												primarystats: ["str", "sta"],
												secondarystats: [
													"defense",
													"block",
													"expertise",
													"hit",
													"agi",
													"haste",
													"crit",
												],
												specs: ["Arms", "Fury", "Protection"],
												weaponTypes: [
													{ name: "Daggers" },
													{ name: "Fist Weapons" },
													{ name: "One-Handed Axes" },
													{ name: "One-Handed Maces" },
													{ name: "One-Handed Swords" },
													{ name: "Polearms" },
													{ name: "Staves" },
													{ name: "Two-Handed Axes" },
													{ name: "Two-Handed Maces" },
													{ name: "Two-Handed Swords" },
													{ name: "Shields" },
													{ name: "Bows" },
													{ name: "Crossbows" },
													{ name: "Guns" },
													{ name: "Thrown" },
												],
												armorTypes: [{ name: "Mail" }, { name: "Plate" }],
												classGuides: {
													data: [
														{
															title: "TBC Warrior Guide",
															link: "https://legacy-wow.com/tbc-warrior-guide/",
															thumb: "tbc_warrior_guide_ojyy08.jpg",
														},
														{
															title: "PVE Fury Warrior DPS Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-fury-warrior-dps-guide-tbc-2-4-3/",
															thumb: "PVE-Fury-Warrior-DPS-Guide-TBC-2.4.3_aclkg0.jpg",
														},
														{
															title: "PVE DPS Arms Warrior Guide (TBC 2.4.3) ",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-dps-arms-warrior/",
															thumb: "PVE-DPS-Arms-Warrior-Guide-TBC-2.4.3_q75yfp.jpg",
														},
														{
															title: "PvE Protection Warrior Tank Guide",
															link: "https://www.warcrafttavern.com/tbc/guides/pve-protection-warrior-tank/",
															thumb:
																"TBC-Classic-PvE-Protection-Warrior-Tank-Guide-Burning-Crusade-Classic_llzjfw.jpg",
														},
													],
												},
												creators: {
													data: [
														{
															title: "Asmongold",
															link: "https://www.twitch.tv/asmongold",
															icon: "asmon_m0grlo.png",
															platform: null,
														},
														{
															title: "Rai Bread",
															link: "https://www.youtube.com/channel/UCYNsSRo2Rg20CZiXHeFQmpw",
															icon: "raibread_sm6rna.jpg",
															platform: null,
														},
													],
												},
											},
										},
									],
								},
							},
							{
								name: "Draenei",
								classes: {
									data: [
										{
											id: "3",
											name: "Hunter",
											reference: {
												summary:
													"Hunters are the top ranged physical DPS in the game.  They are one of two classes that use pets, and hunters are known for soloing dungeons and kiting world bosses thanks to their long range and high DPS.  Hunters can provide crowd control in the form of traps and are great in PVP too.",
												teamroles: ["DPS", "Crowd Control"],
												resource: "Mana",
												primarystats: ["agi", "int"],
												secondarystats: ["sta", "haste", "hit", "ap", "crit", "parry"],
												specs: ["Marksmanship", "Beast Mastery", "Survival"],
												weaponTypes: [
													{ name: "Daggers" },
													{ name: "Fist Weapons" },
													{ name: "One-Handed Axes" },
													{ name: "One-Handed Swords" },
													{ name: "Polearms" },
													{ name: "Staves" },
													{ name: "Two-Handed Axes" },
													{ name: "Two-Handed Swords" },
													{ name: "Bows" },
													{ name: "Crossbows" },
													{ name: "Guns" },
													{ name: "Thrown" },
												],
												armorTypes: [{ name: "Leather" }, { name: "Mail" }],
												classGuides: {
													data: [
														{
															title:
																"TBC Classic: Hunter Class DEEP DIVE (All 3 Specs, PvE, PvP, Tips & Tricks) - The Burning Crusade",
															link: "https://www.youtube.com/watch?v=xnk3GiaDB9k",
															thumb: "kargozhunter_xids6w.jpg",
														},
														{
															title: "PvE Beast Mastery Hunter Guide",
															link: "https://www.warcrafttavern.com/tbc/guides/pve-beast-mastery-hunter/",
															thumb: "pve-beast-mastery-hunter-guide_k4dhmn.jpg",
														},
														{
															title: "TBC Hunter Guide",
															link: "https://legacy-wow.com/tbc-hunter-guide/",
															thumb: "hunter_trkhcg.jpg",
														},
													],
												},
												creators: {
													data: [
														{
															title: "Agran",
															link: "https://www.youtube.com/watch?v=dH6lJMU43bw&list=PLdlIYjR4sJScJrvhHZYSwq91jAvinEmsp",
															icon: "agran_n7x301.jpg",
															platform: null,
														},
														{
															title: "Bigbobbedboi",
															link: "https://www.youtube.com/channel/UCMrTztxAtaZDZZk6hu8HLig",
															icon: "bigbobbedboi_qj9qdq.jpg",
															platform: null,
														},
													],
												},
											},
										},
										{
											id: "8",
											name: "Mage",
											reference: {
												summary:
													"The ultimate caster class in the game, Mages excel in ranged spell power.  Frost spells allow them to slow their enemies and control their movement.  Fire spells bring massive damage and burning effects, while Arcane provides burst damage and even more versatility for PVP.  In a team setting, mages are great thanks to one of the best crowd control spells: Polymorph.  They also buff other casters and can conjure food & drink for the party members.  They can also spawn city portals to save their party travel time.",
												teamroles: ["DPS", "Crowd Control"],
												resource: "Mana",
												primarystats: ["int", "sta"],
												secondarystats: [
													"spi",
													"spellhit",
													"spellhaste",
													"spellpower",
													"spellcrit",
												],
												specs: ["Arcane", "Fire", "Frost"],
												weaponTypes: [
													{ name: "Daggers" },
													{ name: "One-Handed Swords" },
													{ name: "Staves" },
													{ name: "Wands" },
													{ name: "Held In Off-Hand" },
												],
												armorTypes: [{ name: "Cloth" }],
												classGuides: {
													data: [
														{
															title: "TBC Mage Guide",
															link: "https://legacy-wow.com/tbc-mage-guide/",
															thumb: "mage_dtjzek.jpg",
														},
														{
															title: "Fire Mage PvE Guide",
															link: "https://www.warcrafttavern.com/tbc/guides/fire-mage-pve/",
															thumb:
																"TBC-Classic-PVE-Fire-Mage-DPS-Guide-Burning-Crusade-Classic_o4ikb4.jpg",
														},
														{
															title: "PVE Frost Mage Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-frost-mage-guide-tbc-2-4-3/",
															thumb: "PVE-Frost-Mage-Guide-TBC-2.4.3_jlmzrh.jpg",
														},
														{
															title: "PVE Arcane Mage Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-arcane-mage-guide-tbc-2-4-3/",
															thumb: "PVE-Arcane-Mage-Guide-TBC-2.4.3_xlayaz.jpg",
														},
													],
												},
												creators: {
													data: [
														{
															title: "FrostLive",
															link: "https://www.twitch.tv/frostlive",
															icon: "frostlive_iek6c8.png",
															platform: null,
														},
														{
															title: "Graycen",
															link: "https://www.twitch.tv/graycen",
															icon: "graycen_wri7wp.png",
															platform: null,
														},
														{
															title: "Alfie",
															link: "https://www.twitch.tv/alfie",
															icon: "alfie_c5quys.png",
															platform: null,
														},
													],
												},
											},
										},
										{
											id: "5",
											name: "Priest",
											reference: {
												summary:
													"Do you need a healer?  Priest is the top healer in the game, and they can even provide DPS with their Shadow tree.  Priests can buff, shield, dispel, and heal their teammates, making them required for raiding and other difficult content.  They have powerful heal over time spells and can burst heal groups or single targets as needed.  When paired with Warlocks, Shadow priests can dish out massive damage and provide debuffs on their enemies.",
												teamroles: ["Heal", "DPS", "Crowd Control"],
												resource: "Mana",
												primarystats: ["int", "spi"],
												secondarystats: [
													"healpower",
													"mp5",
													"sta",
													"spellpower",
													"spellcrit",
													"spellhit",
													"spellhaste",
												],
												specs: ["Discipline", "Holy", "Shadow"],
												weaponTypes: [
													{ name: "Daggers" },
													{ name: "One-Handed Maces" },
													{ name: "Staves" },
													{ name: "Wands" },
													{ name: "Held In Off-Hand" },
												],
												armorTypes: [{ name: "Cloth" }],
												classGuides: {
													data: [
														{
															title: "PVE Shadow Priest Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-shadow-priest/",
															thumb: "PVE-Shadow-Priest-Guide-TBC-2.4.3_swcpaf.jpg",
														},
														{
															title: "PVE Holy Priest Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-holy-priest/",
															thumb: "PVE-Holy-Priest-Guide-TBC-2.4.3_qslefj.jpg",
														},
														{
															title: "TBC Classic Holy Priest Guide",
															link: "https://wowtbc.gg/class-guides/holy-priest/",
															thumb:
																"angel-priest-world-of-warcraft-game-hd-wallpaper-1920x1080-4022-975x549_mwv5cs.jpg",
														},
														{
															title: "TBC Classic Shadow Priest Guide",
															link: "https://wowtbc.gg/class-guides/shadow-priest/",
															thumb: "450px-Shadowform_full_mf1uhy.jpg",
														},
													],
												},
												creators: {
													data: [
														{
															title: "Defcamp",
															link: "https://www.twitch.tv/defcamp",
															icon: "defcamp_js6qar.png",
															platform: null,
														},
													],
												},
											},
										},
										{
											id: "7",
											name: "Shaman",
											reference: {
												summary:
													"Shamans are a great hybrid class, they are considered one of the best team buffing classes in the game thanks to their unique skill: Totems.  They are useful for healing and specialize in group healing with Chain Heal and other group healing abilities.  When it comes to damage, a Shaman in invaluable when paired with either melee DPS for Enhancement shamans or casters for Elemental shamans, but they provide great DPS themselves too. In a raid setting, no raid is complete without the ultimate abilities: Bloodlust & Heroism.",
												teamroles: ["Heal", "DPS"],
												resource: "Mana",
												primarystats: ["int", "sta", "str"],
												secondarystats: [
													"healpower",
													"mp5",
													"spi",
													"spellpower",
													"spellcrit",
													"spellhit",
													"spellhaste",
													"hit",
													"crit",
													"haste",
													"expertise",
												],
												specs: ["Elemental", "Enhancement", "Restoration"],
												weaponTypes: [
													{ name: "Fist Weapons" },
													{ name: "One-Handed Axes" },
													{ name: "One-Handed Maces" },
													{ name: "Staves" },
													{ name: "Two-Handed Axes" },
													{ name: "Two-Handed Maces" },
													{ name: "Daggers" },
													{ name: "Totems" },
													{ name: "Shields" },
													{ name: "Held In Off-Hand" },
												],
												armorTypes: [{ name: "Leather" }, { name: "Mail" }],
												classGuides: {
													data: [
														{
															title: "PVE Restoration Shaman Healing Guide (TBC 2.4.3)",
															link: "https://dev.gnarlyguides.com/tbc/guides/pve-restoration-shaman/",
															thumb: "PVE-Healing-Restoration-Shaman-Guide-TBC-2.4.3_lyxq9k.jpg",
														},
														{
															title: "PVE Enhancement Shaman Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-enhancement-shaman-guide-tbc-2-4-3/",
															thumb: "PVE-Enhancement-Shaman-Guide-TBC-2.4.3_ytupas.jpg",
														},
														{
															title: "TBC Classic Elemental Shaman Guide",
															link: "https://wowtbc.gg/class-guides/elemental-shaman/",
															thumb:
																"wow-world-of-warcraft-troll-shaman-wallpaper-preview_humowe.jpg",
														},
														{
															title: "PVE Elemental Shaman Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-elemental-shaman-guide-tbc-2-4-3/",
															thumb: "PVE-Elemental-Shaman-Guide-TBC-2.4.3_sw7hcv.jpg",
														},
													],
												},
												creators: {
													data: [
														{
															title: "Melderon",
															link: "https://www.twitch.tv/melderon",
															icon: "melderon_rz8hwq.png",
															platform: null,
														},
														{
															title: "just_ouro",
															link: "https://www.twitch.tv/just_ouro",
															icon: "ouro_qjapj6.png",
															platform: null,
														},
													],
												},
											},
										},
										{
											id: "1",
											name: "Warrior",
											reference: {
												summary:
													"Warriors are the ultimate melee class, and they are the strongest tank class in the game.  Warriors can wear plate armor and equip almost every weapon type there is.  When tanking, warriors can keep enemies focused on them while buffing their teammates.  When providing melee DPS, warriors can dual-wield or wield two-hand weapons to destroy their enemies.",
												teamroles: ["Tank", "DPS"],
												resource: "Rage",
												primarystats: ["str", "sta"],
												secondarystats: [
													"defense",
													"block",
													"expertise",
													"hit",
													"agi",
													"haste",
													"crit",
												],
												specs: ["Arms", "Fury", "Protection"],
												weaponTypes: [
													{ name: "Daggers" },
													{ name: "Fist Weapons" },
													{ name: "One-Handed Axes" },
													{ name: "One-Handed Maces" },
													{ name: "One-Handed Swords" },
													{ name: "Polearms" },
													{ name: "Staves" },
													{ name: "Two-Handed Axes" },
													{ name: "Two-Handed Maces" },
													{ name: "Two-Handed Swords" },
													{ name: "Shields" },
													{ name: "Bows" },
													{ name: "Crossbows" },
													{ name: "Guns" },
													{ name: "Thrown" },
												],
												armorTypes: [{ name: "Mail" }, { name: "Plate" }],
												classGuides: {
													data: [
														{
															title: "TBC Warrior Guide",
															link: "https://legacy-wow.com/tbc-warrior-guide/",
															thumb: "tbc_warrior_guide_ojyy08.jpg",
														},
														{
															title: "PVE Fury Warrior DPS Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-fury-warrior-dps-guide-tbc-2-4-3/",
															thumb: "PVE-Fury-Warrior-DPS-Guide-TBC-2.4.3_aclkg0.jpg",
														},
														{
															title: "PVE DPS Arms Warrior Guide (TBC 2.4.3) ",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-dps-arms-warrior/",
															thumb: "PVE-DPS-Arms-Warrior-Guide-TBC-2.4.3_q75yfp.jpg",
														},
														{
															title: "PvE Protection Warrior Tank Guide",
															link: "https://www.warcrafttavern.com/tbc/guides/pve-protection-warrior-tank/",
															thumb:
																"TBC-Classic-PvE-Protection-Warrior-Tank-Guide-Burning-Crusade-Classic_llzjfw.jpg",
														},
													],
												},
												creators: {
													data: [
														{
															title: "Asmongold",
															link: "https://www.twitch.tv/asmongold",
															icon: "asmon_m0grlo.png",
															platform: null,
														},
														{
															title: "Rai Bread",
															link: "https://www.youtube.com/channel/UCYNsSRo2Rg20CZiXHeFQmpw",
															icon: "raibread_sm6rna.jpg",
															platform: null,
														},
													],
												},
											},
										},
										{
											id: "2",
											name: "Paladin",
											reference: {
												summary:
													"A powerful hybrid class, Paladins are great healers, tanks, and damage dealers.  As a healer, Paladins provide burst healing capabilities and can save a wipe using invulderability spells.  No matter what spec, Paladins are great teammates with useful buffs and auras.  As a tank, Paladins excel in group pulls and offer reliable tanking abilities.  While damage dealing, a two-hand Retribution paladin can pull off great damage, especially in PVP environments.",
												teamroles: ["Tank", "Heal", "DPS"],
												resource: "Mana",
												primarystats: ["int", "sta", "str"],
												secondarystats: [
													"healpower",
													"mp5",
													"spellpower",
													"spellcrit",
													"spellhaste",
													"hit",
													"crit",
													"haste",
													"expertise",
													"armorpen",
													"defense",
													"parry",
												],
												specs: ["Holy", "Protection", "Retribution"],
												weaponTypes: [
													{ name: "One-Handed Axes" },
													{ name: "One-Handed Maces" },
													{ name: "One-Handed Swords" },
													{ name: "Polearms" },
													{ name: "Two-Handed Axes" },
													{ name: "Two-Handed Maces" },
													{ name: "Two-Handed Swords" },
													{ name: "Shields" },
													{ name: "Librams" },
												],
												armorTypes: [{ name: "Mail" }, { name: "Plate" }],
												classGuides: {
													data: [
														{
															title: "TBC Paladin Tank Guide (1-70)",
															link: "https://legacy-wow.com/tbc-paladin-guide/",
															thumb: "paladin_peuvwv.jpg",
														},
														{
															title: "PVE Holy Paladin Guide (TBC 2.4.3)",
															link: "https://www.gnarlyguides.com/tbc/guides/pve-holy-paladin/",
															thumb: "PVE-Holy-Paladin-DPS-Guide-TBC-2.4.3_kcjzca.jpg",
														},
														{
															title: "PvE Retribution Paladin Guide",
															link: "https://www.warcrafttavern.com/tbc/guides/pve-retribution-paladin/https://www.gnarlyguides.com/tbc/guides/pve-holy-paladin/",
															thumb:
																"TBC-Classic-PvE-Retribution-Paladin-Guide-Burning-Crusade-Classic_rxqmml.jpg",
														},
													],
												},
												creators: {
													data: [
														{
															title: "Esfand",
															link: "https://www.twitch.tv/esfandtv",
															icon: "esfand_by6pgx.png",
															platform: null,
														},
														{
															title: "Graysfordays",
															link: "https://www.twitch.tv/graysfordays",
															icon: "grays_gyhtyx.png",
															platform: null,
														},
														{
															title: "Costin Gaming",
															link: "https://www.youtube.com/channel/UCnSuI6Qe57RSyIXn2Q-2Emg",
															icon: "costin_uep5lw.jpg",
															platform: null,
														},
													],
												},
											},
										},
									],
								},
							},
						],
					},
				},
			],
		},
	};
}