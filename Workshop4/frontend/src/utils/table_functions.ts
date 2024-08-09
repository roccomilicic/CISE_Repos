/**
 * Function to sort data based on a sortKey, and whether the sorting should be reversed or not.
 * 
 * @param tableData the data to sort. this is an array of objects
 * @param sortKey the key to sort by.
 * @param reverse True if we should reverse the order of sorting (sorts ascending if false, decending if true)
 * @returns
 */

export function sortData<T>(
    tableData: T[],
    sortKey: keyof T,
    reverse: boolean
): T[] {
    const sortedData = tableData.sort((a, b) => {
        return a[sortKey] > b[sortKey] ? 1 : -1;
    })

    if (reverse) {
        return sortedData.reverse();
    }
    return sortedData;
}