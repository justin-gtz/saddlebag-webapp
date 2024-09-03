const TableBody = ({tableData, columns}) => {
    return (
        <tbody>
            {tableData.map((data) => {
                return (
                    <tr key={data.name} className='custom-row'>
                        {columns.map(({accessor}) => {
                            const tData = data[accessor] ? data[accessor] : "——";
                            return <td key={accessor} className='custom-cell'>{tData}</td>
                        })}
                    </tr>
                );
            })}
        </tbody>
    );
};

export default TableBody;