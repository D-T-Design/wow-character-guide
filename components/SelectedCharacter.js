import React from "react";
import Link from "next/link";

export const SelectedCharacter = ({ appState }) => {
	const currentCharacterID = appState.character;
	const characterData = appState.savedCharacters.find(
		(savedCharacter) => savedCharacter.id === currentCharacterID
	);
	const { level, name, race, playerClass, gender } = characterData;
	const raceImgURL = `/static/img/race/${race.toLowerCase().replace(/\s/g, "")}-${
		gender ? gender : "male"
	}.png`;
	const classImgURL = `/static/img/class/${playerClass.toLowerCase()}.png`;
	return (
		<div className="selected">
			<h2>Current Character</h2>
			<figure>
				<figcaption>
					<aside>
						LVL <strong>{level}</strong>
					</aside>
					<h3>{name}</h3>
					<h4>
						{race} <span className={playerClass}>{playerClass}</span>
					</h4>
				</figcaption>

				<div>
					<img src={raceImgURL} title={race} />
					<img src={classImgURL} title={playerClass} />
				</div>

				<section className="links">
					<Link href="/classguides">
						<a title="Go to class guides page">
							<button>
								{`View ${playerClass} Guides`}
								<img src="/static/img/guide.svg" />
							</button>
						</a>
					</Link>
					<Link href="/gear">
						<a title="Go to gear page">
							<button>
								{`View ${playerClass} Gear`}
								<img src="/static/img/loot.svg" />
							</button>
						</a>
					</Link>
					<Link href="/zones">
						<a title="Go to zones page">
							<button>
								View Zones
								<img src="/static/img/zone.svg" />
							</button>
						</a>
					</Link>
				</section>
			</figure>
		</div>
	);
};
