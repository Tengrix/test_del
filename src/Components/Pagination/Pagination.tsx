import React from 'react';
import {usePagination} from "../../hooks/usePagination";

type PaginationType = {
    totalPages: number;
    pages:number;
    changePageHandler: (value: number) => void
}
const Pagination = ({totalPages, pages, changePageHandler}: PaginationType) => {
    const listOfPages = usePagination(totalPages)
    return (
        <div>
            {listOfPages.map(el =>
                <span key={el}>
                    <button onClick={() => changePageHandler(el)}>{el}</button>
                </span>
            )}
        </div>
    );
};

export default Pagination;