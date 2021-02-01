import {createStyles, withStyles} from "@material-ui/core/styles";
import {Fragment} from "react";
import {Fab} from "@material-ui/core";
import {Add} from "@material-ui/icons";

const styles = (theme: any) => createStyles({
   fab: {
       margin: 0,
       top: 'auto',
       left: 'auto',
       bottom: 20,
       right: 20,
       position: 'fixed'
   },
});

/**
 * Should add extended prop if fab Fas a  text as child
 * */

const FloatingActions = withStyles(styles)(
    ({ classes, fabColor}: Record<string, any>) => (
        <Fragment>
            <Fab className={classes.fab} color={fabColor}>
                <Add />
            </Fab>
        </Fragment>
    )
);

export default FloatingActions;
