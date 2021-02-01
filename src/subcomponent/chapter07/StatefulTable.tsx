import {makeStyles} from "@material-ui/core/styles";
import {useEffect, useState} from "react";
import {CircularProgress, Paper, Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";

const fetchData = () => new Promise((resolve) => {
    const items = [
        {
            id: 1,
            name: 'First Item',
            created: new Date(),
            high: 2935,
            low: 1924,
            average: 2429.5
        },
        {
            id: 2,
            name: 'Second Item',
            created: new Date(),
            high: 439,
            low: 231,
            average: 335,
        },
        {
            id: 3,
            name: 'Third Item',
            created: new Date(),
            high: 8239,
            low: 5629,
            average: 6934,
        },
        {
            id: 4,
            name: 'Fourth Item',
            created: new Date(),
            high: 3203,
            low: 3127,
            average: 3165,
        },
        {
            id: 5,
            name: 'Fifth Item',
            created: new Date(),
            high: 981,
            low: 879,
            average: 930,
        }
    ];

    setTimeout(() => resolve(items), 1000);
});

const usePaperStyles = makeStyles((theme: any) => ({
    root: { margin: theme.spacing(2), textAlign: 'center' }
}));

const useProgressStyles = makeStyles((theme: any) => ({
    progress: { margin: theme.spacing(2) }
}));

function MaybeLoading({ loading }: Record<string, any>) {
    const classes = useProgressStyles();
    return loading ? <CircularProgress className={classes.progress}/> : null
}

export default function StatefulTable() {
    const classes = usePaperStyles();

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetch = async () => {
            const result = await fetchData();

            // @ts-ignore
            setItems(result);
            setLoading(false);
        };

        fetch()
            .catch((e) => console.error(e));
    }, []);

    return (
        <Paper className={classes.root}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Created</TableCell>
                        <TableCell align={"right"}>High</TableCell>
                        <TableCell align={"right"}>Low</TableCell>
                        <TableCell align={"right"}>Average</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        items
                            .map((item: Record<string, any>) => (
                                <TableRow key={item.id}>
                                    <TableCell component={"th"} scope={"row"}>{item.name}</TableCell>
                                    <TableCell>{ item.created.toLocaleString() }</TableCell>
                                    <TableCell align={"right"}>{item.high}</TableCell>
                                    <TableCell align={"right"}>{item.low}</TableCell>
                                    <TableCell align={"right"}>{item.average}</TableCell>
                                </TableRow>
                            ))
                    }
                </TableBody>
            </Table>
            <MaybeLoading loading={loading}/>
        </Paper>
    );
}
