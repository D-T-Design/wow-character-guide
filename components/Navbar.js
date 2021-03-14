import React from "react";
import Link from "next/link";

const Navbar = () => {
	return (
		<div className="navbar">
			<ul>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/zones">World Zones</Link>
				</li>
				<li>
					<Link href="/dungeons">Dungeons</Link>
				</li>
				<li>
					<Link href="/battlegrounds">Battlegrounds</Link>
				</li>
				<li>
					<Link href="/gear">Suggested Gear</Link>
				</li>
				<li>
					<Link href="/classguides">Class Guides</Link>
				</li>
			</ul>
		</div>
	);
};

export { Navbar };
