import {Theme} from "@material-ui/core/styles";
import {withStyles} from "@material-ui/core";
import {Fragment} from "react";
import {Cast} from "@material-ui/icons";

const styles = (theme: Theme) => ({
    icon: { margin: theme.spacing(3), },
});

const IconColorAndState = withStyles(styles)(
    ({ color, fontSize, classes }: Record<string, any>) => (
        <Fragment>
            <Cast className={classes.icon} color={color} fontSize={fontSize} />
        </Fragment>
    )
);

export default IconColorAndState;
