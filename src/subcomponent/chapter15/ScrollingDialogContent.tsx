import {Fragment, useState} from "react";
import {
    Button,
    Dialog, DialogActions,
    DialogContent,
    DialogTitle,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from "@material-ui/core";

const id = (function*() {

    let id = 0;

    while (true) {

        id += 1;

        yield id;

    } })();

const rowData = (name: string, calories: number, fat: number, carbs: number, protein: number) =>
    ({ id: id.next().value, name, calories, fat, carbs, protein });

const rows = new Array(50)
    .fill(null)
    .reduce( result => result.concat([
            rowData('Frozen yoghurt', 159, 6.0, 24, 4.0),
            rowData('Ice cream sandwich', 237, 9.0, 37, 4.3),
            rowData('Eclair', 262, 16.0, 24, 6.0),
            rowData('Cupcake', 305, 3.7, 67, 4.3),
            rowData('Gingerbread', 356, 16.0, 49, 3.9) ]),
        []
    );

export default function ScrollingDialogContent() {
    const [open, setOpen] = useState(false);

    const onOpen = () => setOpen(true);

    const onClose = () => setOpen(false);

    return (
        <Fragment>
            <Button variant={"outlined"} color={"primary"} onClick={onOpen}>
                Export Data
            </Button>
            <Dialog open={open} onClose={onClose}>
                <DialogTitle>Desserts</DialogTitle>
                <DialogContent>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Dessert (100g serving)</TableCell>
                                <TableCell align="right">Calories</TableCell>
                                <TableCell align="right">Fat (g)</TableCell>
                                <TableCell align="right">Carbs (g)</TableCell>
                                <TableCell align="right">Protein (g)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .map((row: any) => (
                                    <TableRow key={row.id}>
                                        <TableCell component="th" scope="row">
                                            {row.name} </TableCell>
                                        <TableCell align="right">{row.calories}</TableCell>
                                        <TableCell align="right">{row.fat}</TableCell>
                                        <TableCell align="right">{row.carbs}</TableCell>
                                        <TableCell align="right">{row.protein}</TableCell>
                                    </TableRow> ))}
                        </TableBody>
                    </Table>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} color={"primary"}>
                        Cancel
                    </Button>
                    <Button
                        variant={"contained"}
                        onClick={onClose}
                        color={"primary"}>
                        Export
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    );
}
