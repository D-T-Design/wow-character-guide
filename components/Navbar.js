import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import PlayerCard from "./PlayerCard";

export const Navbar = ({ appState }) => {
	const router = useRouter();
	const route = router.pathname;
	const links = [
		{
			path: "/",
			text: "Character",
		},
		{
			path: "/classguides",
			text: "Class Guides",
		},
		{
			path: "/gear",
			text: "Suggested Gear",
		},
		{
			path: "/zones",
			text: "World Zones",
		},
	];
	return (
		<header>
			<div className="container">
				<h1>WoW Character Guide</h1>
				<PlayerCard appState={appState} />
			</div>
			<nav>
				<ul>
					<div className="container">
						{links.map((link, index) => (
							<li key={index}>
								<Link href={link.path}>
									<a style={route === link.path ? { borderBottom: "1px solid red" } : {}}>
										{link.text}
									</a>
								</Link>
							</li>
						))}
					</div>
				</ul>
			</nav>
		</header>
	);
};
