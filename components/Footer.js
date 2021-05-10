import React from "react";
import Link from "next/link";

const Footer = () => (
	<footer className="footer-terms">
		<div className="container">
			<p>
				<small>
					Link Tooltips and Search Results powered by WoWHead.
					<br /> This site is open source, the source code can be found on the Github page.
					<br /> I do not claim ownership of any World of Warcraft related assets, this is just a
					fan site!
				</small>
			</p>
			<Link href="/about">About</Link>
		</div>
	</footer>
);

export default Footer;
