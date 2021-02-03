import {Fragment, useState} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";

export default function ConfirmingActions() {
    const [open, setOpen] = useState(false);

    const onShowConfirm = () => setOpen(true);

    const onDialogClose = () => setOpen(false);

    const onConfirm = () => setOpen(false);

    return (
        <Fragment>
            <Button color={"primary"} onClick={onShowConfirm}>
                Confirm Actions
            </Button>
            <Dialog
                disableBackdropClick
                disableEscapeKeyDown
                maxWidth={"xs"}
                open={open}
            >
                <DialogTitle>Confirm Delete Asset</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onDialogClose} color={"primary"}>
                        Cancel
                    </Button>
                    <Button
                        variant={"contained"}
                        onClick={onConfirm}
                        color={"primary"}>
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    );
}
