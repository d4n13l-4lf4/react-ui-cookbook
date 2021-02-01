import {createStyles, makeStyles} from "@material-ui/core/styles";
import React, {Fragment, useState} from "react";
import {
    Card,
    CardContent,
    CardHeader, Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow, Typography
} from "@material-ui/core";

const useStyles = makeStyles((theme: any) => createStyles({
    root: { margin: theme.spacing.unit * 2, textAlign: 'center' },
    card: { margin: theme.spacing.unit * 2, maxWidth: 300 },
}));

export default function SelectingRows() {
    const classes = useStyles();
    const [columns, setColumns] = useState([
        { name: 'Name', active: false },
        { name: 'Created', active: false },
        { name: 'High', active: false, numeric: true },
        { name: 'Low', active: false, numeric: true },
        { name: 'Average', active: true, numeric: true }
    ]);
    const [rows, setRows] = useState([
        { id: 1, name: 'First Item', created: new Date(), high: 2935, low: 1924, average: 2429.5 },
        { id: 2, name: 'Second Item', created: new Date(), high: 439, low: 231, average: 335 },
        { id: 3, name: 'Third Item', created: new Date(), high: 8239, low: 5629, average: 6934 },
        { id: 4, name: 'Fourth Item', created: new Date(), high: 3203, low: 3127, average: 3165 },
        { id: 5, name: 'Fifth Item', created: new Date(), high: 981, low: 879, average: 930 }
    ]);

    const onRowClick = (id: number) => () => {
      const newRows = [...rows];
      const index = rows.findIndex(row => row.id === id);
      const row = rows[index];

        // @ts-ignore
        newRows[index] = { ...row, selected: !row.selected };
        setRows(rows);
    };

    const selections = () => rows.filter((row: Record<string, any>) => row.selected).length;

    const selectedLow = () => rows
        .filter((row: Record<string, any>) => row.selected)
        .reduce((total, row) => total + row.low, 0);

    const selectedHigh = () =>
        rows
            .filter((row: Record<string, any>) => row.selected)
            .reduce((total, row) => total + row.high, 0);

    const selectedAverage = () => (selectedLow() + selectedHigh()) / 2;

    return (
           <Fragment>
               <Card className={classes.card}>
                   <CardHeader title={`(${selections()}) rows selected`} />
                   <CardContent>
                       <Grid container direction={"column"}>
                           <Grid item>
                               <Grid container justify={"space-between"}>
                                   <Grid item>
                                       <Typography>Low</Typography>
                                   </Grid>
                                   <Grid item>
                                       <Typography>{selectedLow()}</Typography>
                                   </Grid>
                               </Grid>
                           </Grid>
                           <Grid item>
                               <Grid container justify={"space-between"}>
                                   <Grid item>
                                       <Typography>High</Typography>
                                   </Grid>
                                   <Grid item>
                                       <Typography>{selectedHigh()}</Typography>
                                   </Grid>
                               </Grid>
                           </Grid>
                           <Grid item>
                               <Grid container justify={"space-between"}>
                                   <Grid item>
                                       <Typography>Average</Typography>
                                   </Grid>
                                   <Grid item>
                                       <Typography>{selectedAverage()}</Typography>
                                   </Grid>
                               </Grid>
                           </Grid>
                       </Grid>
                   </CardContent>
               </Card>
               <Paper className={classes.root}>
                   <Table>
                       <TableHead>
                           <TableRow>
                               {
                                   columns.map((column: Record<string, any>) => (
                                       <TableCell
                                           key={column.name}
                                           align={column.numeric ? 'right': 'inherit'}
                                       >
                                           {column.name}
                                       </TableCell>
                                   ))
                               }
                           </TableRow>
                       </TableHead>
                       <TableBody>
                           {
                               rows.map((row: Record<string, any>) => (
                                   <TableRow
                                   key={row.id}
                                   onClick={onRowClick(row.id)}
                                   selected={row.selected}>
                                       <TableCell component={"th"} scope={"row"}>{row.name}</TableCell>
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
           </Fragment>
    );
}
