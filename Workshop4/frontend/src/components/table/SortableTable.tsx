import React from "react";
import Table from "../../styles/Table.module.scss";

interface SortableTableProps {
    headers: { key: string; label: string }[];
    data: any[];
}

const SortableTable: React.FC<SortableTableProps> = ({ headers, data }) => (
    <table className={Table.tableCell}>
        <thead >
            <tr >
                {headers.map((header) => (
                    <th className={Table.tableCell} key={header.key}>{header.label}</th>
                ))}
            </tr>
        </thead>
        <tbody>
            {data.map((row, index) => (
                <tr key={index}>
                    {headers.map((header) => (
                        <td className={Table.tableCell} key={header.key}>{row[header.key]}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    </table >
)

export default SortableTable;