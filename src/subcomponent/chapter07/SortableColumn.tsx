import {makeStyles} from "@material-ui/core/styles";
import {useState} from "react";
import {Paper, Table, TableBody, TableCell, TableHead, TableRow, TableSortLabel} from "@material-ui/core";


const comparator = (prop: string, desc = true) =>
    (a: Record<string, any>, b: Record<string, any>) => {
        const order = desc ? -1 : 1;

        if (a[prop] < b[prop]) {
            return -1 * order;
        }

        if (a[prop] > b[prop])
            return 1 * order;

        return 0 * order;
    };

const useStyles = makeStyles((theme: any) => ({
    root: { margin: theme.spacing(2), textAlign: 'center' },
}));

export default function SortableColumn() {
    const classes = useStyles();
    const [columns, setColumns] = useState([
        { name: 'Name', active: false },
        { name: 'Created', active: false },
        { name: 'High', active: false, numeric: true },
        { name: 'Low', active: false, numeric: true },
        { name: 'Average', active: true, numeric: true },
    ]);
    const [rows, setRows] = useState([
        { id: 1, name: 'First Item', created: new Date(), high: 2935, low: 1924, average: 2429.5, },
        { id: 2, name: 'Second Item', created: new Date(), high: 439, low: 231, average: 335 },
        { id: 3, name: 'Third Item', created: new Date(), high: 8239, low: 5629, average: 6934 },
        { id: 4, name: 'Fourth Item', created: new Date(), high: 3203, low: 3127, average: 3165 },
        { id: 5, name: 'Fifth Item', created: new Date(), high: 981, low: 879, average: 930 }
    ]);

    const onSortClick = (index: number) => () => {
        setColumns(
            // @ts-ignore
            columns
                .map((column: Record<string, any>, i: number) => ({
                    ...column,
                    active: index === i,
                    order: (index === i && (column.order === 'desc' ? 'asc' : 'desc')) || undefined
                }))
        );

        setRows(
            rows
                .slice()
                .sort(
                    comparator(
                        columns[index].name.toLowerCase(),
                        // @ts-ignore
                        columns[index].order === 'desc',
                    )
                )
        )
    };

    return (
        <Paper className={classes.root}>
            <Table>
                <TableHead>
                    <TableRow>
                        {
                            columns.map((column: Record<string, any>, index: number) => (
                                <TableCell
                                    key={column.name}
                                    align={column.numeric ? 'right' : 'inherit'}>
                                    <TableSortLabel
                                        active={column.active}
                                        direction={column.order}
                                        onClick={onSortClick(index)}>
                                        {column.name}
                                    </TableSortLabel>
                                </TableCell>
                            ))
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows
                        .map((row: Record<string, any>) => (
                            <TableRow key={row.id}>
                                <TableCell component={"th"} scope={"row"}>
                                    { row.name }
                                </TableCell>
                                <TableCell>{row.created.toLocaleString()}</TableCell>
                                <TableCell align={"right"}>{row.high}</TableCell>
                                <TableCell align={"right"}>{row.low}</TableCell>
                                <TableCell align={"right"}>{row.average}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </Paper>
    );
}
