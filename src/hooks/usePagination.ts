import {useMemo} from "react";

export const usePagination = (totalPages:number) => {
    return useMemo(() => {
        let listOfPages = []
        for (let i = 1; i <= totalPages; i++) {
            listOfPages.push(i)
        }
        return listOfPages
    }, [totalPages])
}