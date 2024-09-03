const TableHead = ({ columns }) => {
    return (
        <thead>
            <tr>
                {columns.map(({label, accessor}) => {
                    return <th key={accessor} className="custom-header">{label}</th>
                })}
            </tr>
        </thead>
    );
};
export default TableHead;