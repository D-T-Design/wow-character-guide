import React from "react";

const wccgClassImg = "/static/img/class/";

const ClassGuides = ({ appState }) => {
	let selectedCharacter = appState.savedCharacters.find(
		(character) => character.id === appState.character
	);
	const { playerClass } = selectedCharacter ? selectedCharacter : { playerClass: "Default" };
	return (
		<section className="content">
			<div className="container">
				{playerClass === "Default" ? (
					<div className="guide-default">
						<h2>
							Player class guides - a simple summary of class roles, abilities, and strategies for
							your character's class.
						</h2>
						<h3>
							Links to community class guides, YouTube channels and streamers that are for your
							class!
						</h3>
					</div>
				) : (
					<div className="guide-grid">
						<main>
							<h1>{playerClass}</h1>
							<img src={`${wccgClassImg}${playerClass.toLowerCase()}.png`} />
							<h2>Class Guides</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget rutrum
								elit, vitae vulputate neque. Nullam maximus, sapien et elementum faucibus, enim sem
								tempus felis, et aliquam metus libero sed sapien.
							</p>
						</main>
						<aside>
							<h2>{playerClass} Quick Reference</h2>
							<section>
								<ul>
									<h3>Team Role</h3>
									<li>DPS</li>
									<li>Crowd Control</li>
								</ul>
								<ul>
									<h3>Primary Stats</h3>
									<li>Agility</li>
									<li>Stamina</li>
								</ul>
								<ul>
									<h3>Secondary Stats</h3>
									<li>Strength</li>
									<li>Crit Chance</li>
									<li>Hit Chance</li>
									<li>Attack Power</li>
									<li>Weapon Skill</li>
								</ul>
								<ul>
									<h3>Weapon Types</h3>
									<li>Daggers</li>
									<li>Fist Weapons</li>
									<li>One-Handed Maces</li>
								</ul>
								<ul>
									<h3>Armor Types</h3>
									<li>Leather</li>
								</ul>
							</section>
						</aside>
						<aside>
							<h3>{playerClass} Class Guides</h3>
							<p>
								Class guides from around the internet, these will help you play your class better.
								Want your guide or content featured here? Contact me from the Support page!
							</p>
							<section>
								<ul>
									<li>
										<a>
											<figure>
												{/* Content Thumbnail Img  */}
												<figcaption>
													Link Title
													<span>Link Icon</span>
												</figcaption>
											</figure>
										</a>
									</li>
									<li>
										<a>
											<figure>
												{/* Content Thumbnail Img  */}
												<figcaption>
													Link Title
													<span>Link Icon</span>
												</figcaption>
											</figure>
										</a>
									</li>
								</ul>
							</section>
						</aside>
					</div>
				)}
			</div>
		</section>
	);
};

export default ClassGuides;
