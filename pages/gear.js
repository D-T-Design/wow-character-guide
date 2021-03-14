import React from "react";
import { Navbar } from "../components/Navbar";
import getClassGear from "../utils/getClassGear";

const Gear = ({ appState }) => {
	const { classGear, error, isPending } = getClassGear(appState.playerClass);
	return (
		<section className="content">
			<div className="container">
				<Navbar />
				<section className="results-container">
					<div className="container">
						<h1>Leveling Gear</h1>
						{isPending ? (
							<div>Loading gear data...</div>
						) : error ? (
							<div>Error gear data...{console.log(error)}</div>
						) : (
							classGear.gearData && (
								<>
									<p>{classGear.gearData.slot}</p>
									<ul>
										{classGear.gearData.items.map((item, index) => (
											<li key={index}>
												<h3 className={item.quality.toLowerCase()}>{item.name}</h3>
												<h4>{item.quality}</h4>
												<ul>
													<li>id: {item.id}</li>
													<li>iLvl: {item.iLvl}</li>
													<li>Req Lvl: {item.reqLvl}</li>
												</ul>
												{console.log(item)}
											</li>
										))}
									</ul>
								</>
							)
						)}
					</div>
				</section>
			</div>
		</section>
	);
};

export default Gear;
