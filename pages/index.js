import React from "react";
import { Navbar } from "../components/Navbar";

const Home = ({ appState }) => {
	return (
		<section className="content">
			<div className="container">
				<Navbar />
				<section className="results-container">
					<div className="container">Results here.</div>
				</section>
			</div>
		</section>
	);
};

export default Home;