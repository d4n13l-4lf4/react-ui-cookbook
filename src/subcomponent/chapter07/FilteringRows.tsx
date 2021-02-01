import {createStyles, makeStyles, withStyles} from "@material-ui/core/styles";
import {Fragment, useEffect, useState} from "react";
import {
    CircularProgress,
    InputAdornment,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TextField
} from "@material-ui/core";
import {Search} from "@material-ui/icons";

const fetchData = () => new Promise<Record<string, any>>(
    (resolve) => {
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
    }
);


const styles = (theme: any) => createStyles({
    root: { margin: theme.spacing(2), textAlign: 'center' },
    progress: { margin: theme.spacing(2) },
    search: { marginLeft: theme.spacing(2) }
});

const useStyles = makeStyles(styles);

const MaybeLoading = withStyles(styles)(
    ({ classes, loading }: Record<string, any>) => loading ? <CircularProgress className={classes.progress} /> : null
);

export default function FilteringRows() {
    const classes = useStyles();
    const [search, setSearch] = useState('');
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetch = async () => {
            const items = await fetchData();

            // @ts-ignore
            setItems(items);
            setLoading(false);
        };
        fetch().catch(e => console.error(e));
    }, []);

    const onSearchChange = (e: any) => {
      setSearch(e.target.value);
    };

    return (
        <Fragment>
            <TextField
                value={search}
                onChange={onSearchChange}
                className={classes.search}
                id={"input-search"}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position={"start"}>
                            <Search />
                        </InputAdornment>
                    )
                }}
            />
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
                                .filter((item: Record<string, any>) => !search || item.name.includes(search))
                                .map((item: Record<string, any>) => {
                                    return (
                                     <TableRow key={item.id}>
                                         <TableCell component={"th"} scope={"row"}>{item.name}</TableCell>
                                         <TableCell>{item.created.toLocaleString()}</TableCell>
                                         <TableCell align={"right"}>{item.high}</TableCell>
                                         <TableCell align={"right"}>{item.low}</TableCell>
                                         <TableCell align={"right"}>{item.average}</TableCell>
                                     </TableRow>
                                    );
                                })
                        }
                    </TableBody>
                </Table>
                <MaybeLoading loading={loading} />
            </Paper>
        </Fragment>
    );
}


