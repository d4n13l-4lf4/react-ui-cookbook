import React from "react";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import { Grid, Paper, Chip, GridJustification, Typography } from "@material-ui/core";

const styles = (theme: any) => createStyles({
    root: {
        flexGrow: 1,
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
    justify: GridJustification
}

class FillingSpace extends React.Component<Props, any> {


    public render() {
        const { classes, justify } = this.props;

        return (
            <div className={classes.root}>
                <Typography className={classes.title}>Filling space</Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Paper className={classes.paper}>
                            <Grid container justify={justify}>
                                <Grid item><Chip label={"xs=12"}/></Grid>
                                <Grid item><Chip label={"sm=6"}/></Grid>
                                <Grid item><Chip label={"md=3"}/></Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Paper className={classes.paper}>
                            <Grid container justify={justify}>
                                <Grid item>
                                    <Chip label={"xs=12"} />
                                </Grid>
                                <Grid item>
                                    <Chip label={"sm=6"} />
                                </Grid>
                                <Grid item>
                                    <Chip label={"md=3"} />
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Paper className={classes.paper}>
                            <Grid container justify={justify}>
                                <Grid item>
                                    <Chip label={"xs=12"}/>
                                </Grid>
                                <Grid item>
                                    <Chip label={"sm=6"} />
                                </Grid>
                                <Grid item>
                                    <Chip label={"md=3"} />
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Paper className={classes.paper}>
                            <Grid container justify={justify}>
                                <Grid item>
                                    <Chip label={"xs=12"}/>
                                </Grid>
                                <Grid item>
                                    <Chip label={"sm=6"} />
                                </Grid>
                                <Grid item>
                                    <Chip label={"md=3"} />
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }

}

export default withStyles(styles)(FillingSpace);
