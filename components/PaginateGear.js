import ReactPaginate from "react-paginate";
import { ItemDisplay } from "./ItemDisplay";

export const PaginateGear = ({
	currentPageData,
	pageCount,
	currentPage,
	handlePageClick,
	containsItems,
	faction,
}) => {
	return containsItems ? (
		<ul>
			{currentPageData.map((item, index) => (
				<ItemDisplay item={item} faction={faction} index={index} key={index} />
			))}
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
		</ul>
	) : (
		<p>No items found for your current level...</p>
	);
};
