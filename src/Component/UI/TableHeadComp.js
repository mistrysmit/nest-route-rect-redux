import React from 'react';
const TableHeadComp = ({ result }) => <thead>
    <tr>
        {
            (result && result.length > 0)
                ? Object.keys(result[0]).map((item, i) => <th key={i}>{item}</th>) : null
        }
    </tr>
</thead>;

export default TableHeadComp;