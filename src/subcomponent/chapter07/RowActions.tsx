import {makeStyles} from "@material-ui/core/styles";
import {IconButton, Paper, Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";
import {PlayArrow, Stop} from "@material-ui/icons";
import {useState} from "react";

const useStyles = makeStyles((theme: any) => ({
    root: { margin: theme.spacing(2), textAlign: 'center' },
    button: {}
}));

const StartButton = ({ row, onClick }: Record<string, any>) => (
    <IconButton
        onClick={onClick}
        color={row.status === 'off' ? 'primary' : 'default'}
        disabled={row.status === 'running' }>
        <PlayArrow fontSize={"small"} />
    </IconButton>
);

const StopButton = ({ row, onClick }: Record<string, any>) => (
    <IconButton
        onClick={onClick}
        color={row.status === 'running' ? 'primary': 'default'}
        disabled={row.status === 'off'}
    >
        <Stop fontSize={"small"} />
    </IconButton>
);

export default function RowActions() {
    const classes = useStyles();
    const [rows, setRows] = useState([
        { id: 1, name: 'First Item', status: 'running' },
        { id: 2, name: 'Second Item', status: 'off' },
        { id: 3, name: 'Third Item', status: 'off' },
        { id: 4, name: 'Fourth Item', status: 'running' },
        { id: 5, name: 'Fifth Item', status: 'off' }
    ]);

    const toggleStatus = (id: number) => () => {
      const newRows = [...rows];
      const index = rows.findIndex(row => row.id === id);
      const row = rows[index];

      newRows[index] = {
        ...row,
        status: row.status === 'running' ? 'off' : 'running',
      };
      setRows(newRows);
    };

    return (
      <Paper className={classes.root}>
          <Table>
              <TableHead>
                  <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Actions</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                  {
                      rows.map((row: Record<string, any>) => {
                          return (
                            <TableRow key={row.id}>
                                <TableCell component={"th"} scope={"row"}>{row.name}</TableCell>
                                <TableCell>{row.status}</TableCell>
                                <TableCell>
                                    <StartButton row={row} onClick={toggleStatus(row.id)} />
                                    <StopButton row={row} onClick={toggleStatus(row.id)} />
                                </TableCell>
                            </TableRow>
                          );
                      })
                  }
              </TableBody>
          </Table>
      </Paper>
    );
}

