import React, { useState } from "react";
import ReactPaginate from "react-paginate";

import { ItemDisplay } from "./ItemDisplay";

const gearURL = "/static/img/gear/";
import { weaponToFullName } from "../utils/weaponToFullName";

export const GearSlot = ({ name, items, faction, phase, type }) => {
	const [open, setOpen] = useState(false);
	const containsItems = items.length > 0;
	const toggleOpen = () => {
		setOpen(!open);
	};
	const phaseLvl = phase;
	const itemList = containsItems && items.filter((item) => item.phase <= phaseLvl);
	const numItems = itemList.length;

	const [currentPage, setCurrentPage] = useState(0);
	const PER_PAGE = 10;
	const offset = currentPage * PER_PAGE;
	let currentPageData = [];
	if (containsItems) {
		currentPageData = itemList
			.slice(offset, offset + PER_PAGE)
			.map((item, index) => (
				<ItemDisplay item={item} faction={faction} phaseLvl={phase} key={index} />
			));
	}
	const pageCount = Math.ceil(itemList.length / PER_PAGE);
	function handlePageClick({ selected: selectedPage }) {
		setCurrentPage(selectedPage);
	}
	// const cloud = new Cloudinary({
	// 	cloud: {
	// 		cloudName: "david-torres-design",
	// 	},
	// });
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
