import Link from "next/link";
import { motion } from "framer-motion";

export default function HomeLinks({ savedCharacters, icons }) {
	return (
		<section className={`headline-icons${savedCharacters ? " links" : ""}`}>
			<motion.ul
				initial={{ y: "20px", opacity: 0 }}
				animate={{
					y: 0,
					opacity: 1,
					transition: { staggerChildren: 0.5, delayChildren: 0.5, duration: 0.5 },
				}}
			>
				{icons.map((icon, i) => {
					if (savedCharacters) {
						return (
							<motion.li
								key={i}
								initial={{ y: "20px", opacity: 0 }}
								animate={{
									y: 0,
									opacity: 1,
									transition: { duration: 0.5 },
								}}
							>
								<Link href={icon.link}>
									<a>
										<img src={icon.icon} />
										<h3>{icon.text}</h3>
									</a>
								</Link>
							</motion.li>
						);
					} else {
						return (
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
						);
					}
				})}
			</motion.ul>
		</section>
	);
}
