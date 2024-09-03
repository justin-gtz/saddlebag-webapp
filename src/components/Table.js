import { useMemo } from "react";
import { useTable, useSortBy, useGlobalFilter } from "react-table"
import { GlobalFilter } from "./GlobalFilter";
import data from "../data/data.json"

const Table = () => {
    //const [tableData, setTableData] = useState(data);
    const dataMemo = useMemo(() => data, []);

    // const columns = [
    //     { label: "Name", accessor: "name" },
    //     { label: "Source", accessor: "source" },
    //     { label: "Level", accessor: "level" }
    // ];


    const columns = useMemo(
        () => [
            { accessor: "id", header: "ID", },
            { accessor: "name", header: "Name", },
            { accessor: "source", header: "Source", },
            { accessor: "level", header: "Level", },
        ],
        [],
    );

    const {
        getTableProps, 
        getTableBodyProps, 
        headerGroups, 
        rows, 
        prepareRow,
        state,
        setGlobalFilter,
    } = useTable({
        columns: columns,
        data: dataMemo
    }, 
    useGlobalFilter, useSortBy);

    const {globalFilter} = state

    return (
        <>
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
            <div className="table-container">
                <table {...getTableProps()} className="table_all">
                    <thead className="table-thead">
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps(column.getSortByToggleProps())} className="custom-header">
                                        {column.render('header')}
                                        <span>
                                            {column.isSorted ? (column.isSortedDesc ? 'v' : '^') : ''}
                                        </span>
                                    </th>
                                ))}
                                
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map( row => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()} className="custom-row">
                                    {row.cells.map(cell => {
                                        return (
                                            <td {...cell.getCellProps()} className="custom-cell">{cell.render('Cell')}</td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );


    // return (
    //     <>
    //         <table className='table_all'>
    //             <caption>
    //                 Search all your collectible needs in our amazing FF14 searchable database
    //             </caption>
    //             <TableHead columns={columns} />
    //             <TableBody columns={columns} tableData={tableData} />
    //         </table>
    //     </>
    // );

}

export default Table;
