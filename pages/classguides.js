import React from "react";
import useClassData from "../utils/useClassData";
import { statToFullName } from "../utils/statToFullName";

const wccgClassImg = "/static/img/class/";
const imgBase = "https://res.cloudinary.com/david-torres-design/image/upload/";
const imgGuideTransform = "w_690,h_430,c_fill";
const imgCreatorTransform = "w_200,h_200,c_fill";
const imgFolder = "/v1618808611/wow-character-guide/";

const DefaultPage = ({ children }) => (
	<section className="content guides">
		<div className="container">
			<div className="guide-default">
				<h2>
					Player class guides - a simple summary of class roles, abilities, and strategies for your
					character's class.
				</h2>
				<h3>
					Links to community class guides, YouTube channels and streamers that are for your class!
				</h3>
				{children}
			</div>
		</div>
	</section>
);

const ClassGuides = ({ appState }) => {
	const { classData, error, isPending } = useClassData();
	let selectedCharacter = appState.savedCharacters.find(
		(character) => character.id === appState.character
	);
	const { playerClass } = selectedCharacter ? selectedCharacter : { playerClass: "Default" };

	if (error) {
		return (
			<DefaultPage>
				<p>Error loading class data...</p>
			</DefaultPage>
		);
	} else if (isPending) {
		return (
			<DefaultPage>
				<p>Loading class data...</p>
			</DefaultPage>
		);
	} else {
		const ref = classData[`${playerClass.toLowerCase()}Ref`];
		const {
			summary,
			teamroles,
			resource,
			primarystats,
			secondarystats,
			specs,
			weaponTypes,
			armorTypes,
			classGuides,
			creators,
		} = ref ? ref : null;
		console.log(ref);
		return (
			<section className="content guides">
				<div className="container">
					<div className="guide-grid">
						<section>
							<main className={`class-feature ${playerClass}`}>
								<h1>{playerClass}</h1>
								<img
									src={`${wccgClassImg}${playerClass.toLowerCase()}.png`}
									title={playerClass}
									alt={playerClass}
								/>
								<h2>Class Guide</h2>
								<p>{summary}</p>
							</main>
							<aside className="class-reference">
								<h2>{playerClass} Quick Reference</h2>
								<section>
									<ul>
										<h3>Team Role</h3>
										{teamroles.map((role, index) => (
											<li key={index}>{role}</li>
										))}
									</ul>
									<ul>
										<h3>Available Specs</h3>
										{specs.map((spec, index) => (
											<li key={index}>{spec}</li>
										))}
									</ul>
									<ul>
										<h3>Resource</h3>
										<li>{resource}</li>
									</ul>
									<ul>
										<h3>Primary Stats</h3>
										{primarystats.map((stat, index) => (
											<li key={index}>{statToFullName(stat)}</li>
										))}
									</ul>
									<ul>
										<h3>Secondary Stats</h3>
										{secondarystats.map((stat, index) => (
											<li key={index}>{statToFullName(stat)}</li>
										))}
									</ul>
									<ul>
										<h3>Weapon Types</h3>
										{weaponTypes.map((weaponType, index) => (
											<li key={index}>{weaponType.name}</li>
										))}
									</ul>
									<ul>
										<h3>Armor Types</h3>
										{armorTypes.map((armorType, index) => (
											<li key={index}>{armorType.name}</li>
										))}
									</ul>
								</section>
							</aside>
						</section>
						<section>
							<aside className="class-guides">
								<h3>{playerClass} Class Guides</h3>
								<p>
									Class guides from around the internet, these will help you play your class better.
									Want your guide or content featured here? Contact me from the Support page!
								</p>
								<section>
									<ul>
										{classGuides.data ? (
											classGuides.data.map((guide, index) => (
												<li key={index}>
													<a
														href={guide.link}
														target="_blank"
														title={`Link to ${guide.title}`}
														className={playerClass}
													>
														<figure>
															<img
																src={`${imgBase}${imgGuideTransform}${imgFolder}${guide.thumb}`}
																alt={`Link to ${guide.title}`}
															/>
															<figcaption>{guide.title}</figcaption>
														</figure>
													</a>
												</li>
											))
										) : (
											<h4>No guides found for your class.</h4>
										)}
									</ul>
								</section>
							</aside>
							<aside className="class-creators">
								<h3>{playerClass} Streamers &amp; YouTubers</h3>
								<section>
									<ul>
										{creators &&
											(creators.data ? (
												creators.data.map((creator, index) => (
													<li key={index}>
														<a
															href={creator.link}
															target="_blank"
															className={playerClass}
															title={`Find ${creator.title} online`}
														>
															<figure>
																<img
																	src={`${imgBase}${imgCreatorTransform}${imgFolder}${creator.icon}`}
																/>
																<figcaption>{creator.title}</figcaption>
															</figure>
														</a>
													</li>
												))
											) : (
												<h4>No creators found for your class.</h4>
											))}
									</ul>
								</section>
							</aside>
						</section>
					</div>
				</div>
			</section>
		);
	}
};

export default ClassGuides;
