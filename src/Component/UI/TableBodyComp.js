import React from 'react';
import SearchResult from './SearchResult';
const TableBodyComp = ({ result }) => <tbody>
    {
        (result && result.length > 0)
            ? (result).map(row => function_name(row))
            : <tr><td>'No Data Found'</td></tr>
    }
</tbody>;

const function_name = (row) => (
    <tr key={row.id}>
        {
            Object.values(row).map((col, i) => {
                return (
                    <td key={i}>
                        {
                            (col && typeof col === 'object') ?
                                <SearchResult result={[col]} />
                                : col
                        }
                    </td>
                )
            })
        }
    </tr>
)

export default TableBodyComp;