import React from "react";
import { motion } from "framer-motion";

const Home = () => {
	const icons = [
		{
			text: "Save Your Characters",
			icon: "/static/img/character.svg",
		},
		{
			text: "Class Guides",
			icon: "/static/img/guide.svg",
		},
		{
			text: "Suggested Gear",
			icon: "/static/img/loot.svg",
		},
		{
			text: "World Zones",
			icon: "/static/img/zone.svg",
		},
	];
	/* ---- Motion Variants ---- */
	const transition = {
		duration: 0.3,
		ease: "easeInOut",
	};

	const pageVariants = {
		exit: { opacity: 0, transition },
		enter: {
			opacity: 1,
			transition,
		},
		initial: {
			opacity: 0,
			transition,
		},
	};

	return (
		<motion.section
			key={"home"}
			className="content home"
			initial="initial"
			animate="enter"
			exit="exit"
			variants={pageVariants}
		>
			<div className="container">
				<motion.main
					className="headline"
					initial={{ y: "20px", opacity: 0 }}
					animate={{
						y: 0,
						opacity: 1,
						transition: { staggerChildren: 0.2, delayChildren: 0.2, duration: 0.5 },
					}}
				>
					<h1>Welcome to WoW Classic Character Guide!</h1>
					<section className="headline-sub">
						<h2>
							This website is your cheat sheet for playing World of Warcraft Classic and Burning
							Crusade Classic. Enter your character's details and get a list of gear to get, zones
							to go to, and class guides for your class.
						</h2>
						<section className="headline-icons">
							<motion.ul
								initial={{ y: "20px", opacity: 0 }}
								animate={{
									y: 0,
									opacity: 1,
									transition: { staggerChildren: 0.5, delayChildren: 0.5, duration: 0.5 },
								}}
							>
								{icons.map((icon, i) => (
									<motion.li
										key={i}
										initial={{ y: "20px", opacity: 0 }}
										animate={{
											y: 0,
											opacity: 1,
											transition: { duration: 0.5 },
										}}
									>
										<img src={icon.icon} />
										<h3>{icon.text}</h3>
									</motion.li>
								))}
							</motion.ul>
						</section>
						<p>
							New and returning players of World of Warcraft Classic could use some help guiding
							them to make the most of time spent. Even a veteran player may hop on an old character
							and wonder which dungeon or zone to travel to. This guide has you covered!
						</p>
						<p>
							Just for a bit of extra fun, I added in Class Content Creators to the Class Guides
							page. There I feature prominent YouTubers, and Twitch streamers who I've seen play a
							certain class. If you would like to see other creators included on the site, reach me
							on the Contact page.
						</p>
					</section>
				</motion.main>
			</div>
		</motion.section>
	);
};

export default Home;
