import React from "react";
import { withStyles, createStyles, WithStyles, WithTheme } from "@material-ui/core/styles";
import { Grid, Paper, Typography } from "@material-ui/core";
import FillingSpace from "../subcomponent/chapter01/FillingSpace";
import AbstractingContainersAndItems from "../subcomponent/chapter01/AbstractingContainersAndItems";
import FixedColumnLayout from "../subcomponent/chapter01/FixedColumnLayout";
import ColumnDirection from "../subcomponent/chapter01/ColumnDirection";


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

class Chapter01 extends React.Component<Props, any> {
    public render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Typography className={classes.title}>Understanding breakpoints</Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
                    </Grid>
                </Grid>
                <FillingSpace justify={"space-between"} />
                <AbstractingContainersAndItems />
                <FixedColumnLayout width={3} />
                <ColumnDirection />
            </div>
        );
    }
}

export default withStyles(styles)(Chapter01);
