import {Fragment, useState} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Snackbar, TextField} from "@material-ui/core";

export default function CollectingFormInput() {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [email, setEmail] = useState('');

    const onDialogOpen = () => setDialogOpen(true);

    const onDialogClose = () => {
        setDialogOpen(false);
        setFirst('');
        setLast('');
        setEmail('');
    };

    const onSnackbarClose = (e: any, reason: string) => {
        if (reason === 'clickaway')
            return;
        setSnackbarOpen(false);
        setSnackbarMessage('');
    }

    const onCreate = () => {
        setSnackbarOpen(true);
        setSnackbarMessage(`${first} ${last} created`);
        onDialogClose();
    };

    return (
        <Fragment>
            <Button color={"primary"} onClick={onDialogOpen}>
                New User
            </Button>
            <Dialog open={dialogOpen} onClose={onDialogClose}>
                <DialogTitle>New User</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus={true}
                        margin={"normal"}
                        label={"First Name"}
                        InputProps={{ name: 'first' }}
                        onChange={(e: any) => setFirst(e.target.value)}
                        value={first}
                        fullWidth
                    />
                    <TextField
                        margin={"normal"}
                        label={"Last Name"}
                        InputProps={{
                            name: 'last'
                        }}
                        onChange={(e: any) => setLast(e.target.value)}
                        value={last}
                        fullWidth
                    />
                    <TextField
                        margin={"normal"}
                        label={"Email Address"}
                        type={"email"}
                        InputProps={{
                            name: "email"
                        }}
                        onChange={(e: any) => setEmail(e.target.value)}
                        value={email}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onDialogClose} color={"primary"}>Cancel</Button>
                    <Button
                        variant={"contained"}
                        onClick={onCreate}
                        color={"primary"}>
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
            <Snackbar
                open={snackbarOpen}
                message={snackbarMessage}
                onClose={onSnackbarClose}
                autoHideDuration={2000}
            />
        </Fragment>
    );
}
