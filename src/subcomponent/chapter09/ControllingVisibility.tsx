import {Fragment, useState} from "react";
import {Button, Snackbar} from "@material-ui/core";

export default function ControllingVisibility() {
    const [open, setOpen] = useState(false);

    const showSnackbar = () => setOpen(true);

    const hideSnackbar = () => setOpen(false);

    return (
        <Fragment>
            <Button variant={"contained"} onClick={showSnackbar}>
                Show Snackbar
            </Button>
            <Snackbar
                open={open}
                message={"Visible Snackbar"}
                autoHideDuration={2000}
                onClose={() => hideSnackbar()}
            />
        </Fragment>
    );
}
