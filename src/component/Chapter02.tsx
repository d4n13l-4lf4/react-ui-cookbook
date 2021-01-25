import React from "react";
import { withStyles, createStyles, WithStyles, WithTheme } from "@material-ui/core/styles";
import FixedAppBar from "../subcomponent/chapter02/FixedAppBar";
import HideOnScrollAppBar from "../subcomponent/chapter02/HideOnScrollAppBar";
import MyToolbar from "../subcomponent/chapter02/MyToolbar";


const styles = (th: any) => createStyles({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: th.spacing(2),
        textAlign: 'center',
        color: th.palette.text.secondary
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
    }
});

interface Props extends WithStyles<typeof styles>, WithTheme {

}

class Chapter02 extends React.Component<Props, any> {
    public render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                {/* <FixedAppBar />  */}
                {/* <HideOnScrollAppBar /> */}
                <MyToolbar/>
            </div>
        );
    }
}

export default withStyles(styles)(Chapter02);
