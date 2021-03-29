import React from "react";

const wccgClassImg = "/static/img/class/";

const ClassGuides = ({ appState }) => {
	const selectedCharacter = appState.savedCharacters.find(
		(character) => character.ts === appState.character
	);
	const { playerClass, level, race, faction, gear } = selectedCharacter;
	return (
		<section className="content">
			<div className="container">
				{playerClass ? (
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
				) : null}
			</div>
		</section>
	);
};

export default ClassGuides;
