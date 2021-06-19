import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

import { ItemDisplay } from "./ItemDisplay";

const gearURL = "/static/img/gear/";
import { weaponToFullName } from "../utils/weaponToFullName";

export const GearSlot = ({ name, items, faction, phase, type, level }) => {
	const [open, setOpen] = useState(false);
	const containsItems = items.length > 0;
	const toggleOpen = () => {
		setOpen(!open);
	};
	const phaseLvl = phase;
	const itemList = containsItems && items.filter((item) => item.phase <= phaseLvl);
	const itemsFilterByFaction =
		itemList.length > 0
			? itemList.filter((item) => {
					return item.faction === null || item.faction.name === faction;
			  })
			: itemList;
	const itemsFilterByPhase =
		itemsFilterByFaction.length > 0
			? itemsFilterByFaction.filter((item) => {
					return item.phase <= phase;
			  })
			: itemsFilterByFaction;
	const numItems = itemsFilterByPhase.length;

	const [currentPage, setCurrentPage] = useState(0);
	const PER_PAGE = 10;
	const offset = currentPage * PER_PAGE;
	let currentPageData = [];
	if (containsItems) {
		currentPageData = itemsFilterByPhase
			.slice(offset, offset + PER_PAGE)
			.map((item, index) => (
				<ItemDisplay item={item} faction={faction} phaseLvl={phase} key={index} />
			));
	}

	const pageCount = Math.ceil(itemList.length / PER_PAGE);

	function handlePageClick({ selected: selectedPage }) {
		setCurrentPage(selectedPage);
	}

	useEffect(() => {
		setCurrentPage(0);
	}, [phase, level]);
	
	return (
		<article>
			<figure onClick={toggleOpen} style={{ cursor: "pointer" }}>
				<img
					src={`${gearURL}${name.toLowerCase().replace(/\s/g, "").replace(/-/, "")}.png`}
					className="gear-icon"
				/>
				<figcaption>
					<h3 className="gear-type">
						{type === "Weapons" ? weaponToFullName(name) : name}
						<span>
							{open ? <img src="/static/img/exit.svg" /> : <img src="/static/img/plus.svg" />}
						</span>
					</h3>
					<small>
						<em>{containsItems ? `${numItems} items found.` : `0 items found.`}</em>
					</small>
				</figcaption>
			</figure>
			<ul
				className={open ? "open" : "closed"}
				style={
					open && containsItems
						? { height: "auto" }
						: open && !containsItems
						? { height: "auto" }
						: { height: "0" }
				}
			>
				{containsItems ? (
					<>
						{currentPageData}
						<ReactPaginate
							previousLabel={"← Previous"}
							pageRangeDisplayed={1}
							marginPagesDisplayed={1}
							nextLabel={"Next →"}
							pageCount={pageCount}
							forcePage={currentPage}
							onPageChange={handlePageClick}
							containerClassName={"pagination"}
							previousLinkClassName={"pagination__link"}
							nextLinkClassName={"pagination__link"}
							disabledClassName={"pagination__link--disabled"}
							activeClassName={"pagination__link--active"}
						/>
					</>
				) : (
					<li>No items found for your level.</li>
				)}
			</ul>
		</article>
	);
};
