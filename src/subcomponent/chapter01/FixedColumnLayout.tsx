import React from "react";
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography } from "@material-ui/core";

const styles = (theme: any) => createStyles({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
    }
});

type GridWidth = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface Props extends WithStyles<typeof styles> {
    width: GridWidth,
}

// xs is the default breakpoint, items will accommodate their size according to this value

class FixedColumnLayout extends React.Component<Props, any> {

    public render() {
        const { classes, width } = this.props;

        return (
            <div className={classes.root}>
                <Typography className={classes.title}>Fixed column layout</Typography>
                <Grid container spacing={4}>
                    <Grid item xs={width}>
                        <Paper className={classes.paper}>xs={width}</Paper>
                    </Grid>
                    <Grid item xs={width}>
                        <Paper className={classes.paper}>xs={width}</Paper>
                    </Grid>
                    <Grid item xs={width}>
                        <Paper className={classes.paper}>xs={width}</Paper>
                    </Grid>
                    <Grid item xs={width}>
                        <Paper className={classes.paper}>xs={width}</Paper>
                    </Grid>
                    <Grid item xs={width}>
                        <Paper className={classes.paper}>xs={width}</Paper>
                    </Grid>
                    <Grid item xs={width}>
                        <Paper className={classes.paper}>xs={width}</Paper>
                    </Grid>
                    <Grid item xs={width}>
                        <Paper className={classes.paper}>xs={width}</Paper>
                    </Grid>
                    <Grid item xs={width}>
                        <Paper className={classes.paper}>xs={width}</Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(FixedColumnLayout);
