import React from "react";
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography, Hidden } from "@material-ui/core";

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

interface Props extends WithStyles<typeof styles> {
}

// xs is the default breakpoint, items will accommodate their size according to this value

class ColumnDirection extends React.Component<Props, any> {

    public render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Typography className={classes.title}>Column direction and hidden</Typography>
                <Grid container justify={"space-around"} spacing={4}>
                   <Grid item xs={3}>
                       <Grid container direction={"column"} spacing={2}>
                           <Grid item>
                               <Paper className={classes.paper}>
                                   <Typography>One</Typography>
                               </Paper>
                           </Grid>
                           <Grid item>
                               <Paper className={classes.paper}>
                                   <Typography>Two</Typography>
                               </Paper>
                           </Grid>
                       </Grid>
                   </Grid>
                    <Grid item xs={3}>
                        <Grid container direction={"column"} spacing={2}>
                            <Grid item>
                                <Paper className={classes.paper}>
                                    <Typography>Three</Typography>
                                </Paper>
                            </Grid>
                            <Grid item>
                                <Paper className={classes.paper}>
                                    <Typography>Four</Typography>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={3}>
                        <Grid container direction={"column"} spacing={2}>
                            <Grid item>
                                <Paper className={classes.paper}>
                                    <Typography>Five</Typography>
                                </Paper>
                            </Grid>
                            <Grid item>
                                <Paper className={classes.paper}>
                                    <Typography>Six</Typography>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Hidden smDown>
                    <Grid item xs={3}>
                        <Grid container direction={"column"} spacing={2}>
                            <Grid item>
                                <Paper className={classes.paper}>
                                    <Typography>Seven</Typography>
                                </Paper>
                            </Grid>
                            <Grid item>
                                <Paper className={classes.paper}>
                                    <Typography>Eight</Typography>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                    </Hidden>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(ColumnDirection);
