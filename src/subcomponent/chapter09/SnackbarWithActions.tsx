import {Fragment, useState} from "react";
import {Button, IconButton, Snackbar, Typography} from "@material-ui/core";
import {Close} from "@material-ui/icons";
import {Route} from "react-router-dom";

/* Could work with routes in actions */
export default function SnackbarWithActions() {
    const [open, setOpen] = useState(false);

    return (
        <Fragment>
            <Route
                exact
                path={"/"}
                render={() => <Button onClick={() => setOpen(true)}>create thing</Button>} />
            <Route
                exact
                path={"/thing"}
                render={() => <Typography>The  thing</Typography>}/>
            <Button onClick={() => setOpen(true)}>Do Something</Button>
            <Snackbar
                open={open}
                onClose={() => setOpen(false)}
                message={"All done doung the thing"}
                action={[
                    <IconButton color={"inherit"} onClick={() => setOpen(false)}>
                        <Close />
                    </IconButton>
                ]}/>
        </Fragment>
    );
}
