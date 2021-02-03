import {makeStyles} from "@material-ui/core/styles";
import {
    AppBar,
    Button,
    Dialog,
    IconButton,
    Slide,
    Table, TableBody, TableCell,
    TableHead,
    TableRow,
    Toolbar,
    Typography
} from "@material-ui/core";
import {Fragment, useState} from "react";
import {Close} from "@material-ui/icons";

const useStyles = makeStyles((theme: any) => ({
    appBar: {
        position: 'relative',
    },
    flex: {
        flex: 1,
    },
    table: {}
}));

const Transition = (props: Record<string, any>) => <Slide direction={"up"} {...props} />;

const id = (function*() {
    let id = 0;
    while (true) {
        id += 1;
        yield id;
    }
})();

const rowData = (name: string, calories: number, fat: number, carbs: number, protein: number) => ({
    id: id.next().value,
    name,
    calories,
    fat,
    carbs,
    protein
});

const rows = [
    rowData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    rowData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    rowData('Eclair', 262, 16.0, 24, 6.0),
    rowData('Cupcake', 305, 3.7, 67, 4.3),
    rowData('Gingerbread', 356, 16.0, 49, 3.9)
];

export default function FullScreenDialog() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const onOpen = () => setOpen(true);

    const onClose = () => setOpen(false);

    return (
        <Fragment>
            <Button variant={"outlined"} color={"primary"} onClick={onOpen}>
                Export data
            </Button>
            <Dialog
                fullScreen
                open={open}
                onClose={onClose}
                TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color={"inherit"}
                            onClick={onClose}
                            aria-label={"Close"}>
                            <Close />
                        </IconButton>
                        <Typography
                            variant={"h6"}
                            color={"inherit"}
                            className={classes.flex}>
                            Export Data
                        </Typography>
                        <Button color={"inherit"} onClick={onClose}>
                            Export
                        </Button>
                    </Toolbar>
                </AppBar>
                <Table className={classes.table}>
                    <TableHead className={classes.table}>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align={"right"}>Calories</TableCell>
                            <TableCell align={"right"}>Fat (g)</TableCell>
                            <TableCell align={"right"}>Carbs (g)</TableCell>
                            <TableCell align={"right"}>Protein (g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            rows
                                .map((row: any) => (
                                    <TableRow key={row.id}>
                                        <TableCell component={"th"} scope={"row"}>
                                            {row.name}
                                        </TableCell>
                                        <TableCell align={"right"}>{row.calories}</TableCell>
                                        <TableCell align={"right"}>{row.fat}</TableCell>
                                        <TableCell align={"right"}>{row.carbs}</TableCell>
                                        <TableCell align={"right"}>{row.protein}</TableCell>
                                    </TableRow>
                                ))
                        }
                    </TableBody>
                </Table>
            </Dialog>
        </Fragment>
    );
}
