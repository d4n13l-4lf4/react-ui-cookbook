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

const Container = (props: any) => <Grid container {...props} />;
const Item = (props: any) => <Grid item {...props} />
// could use <Grid item xs={12} sm={6} md={3} {...props} /> to avoid same breakpoints always

interface Props extends WithStyles<typeof styles> {

}

class AbstractingContainersAndItems extends React.Component<Props, any> {

    public render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Typography className={classes.title}>Abstracting containers and items</Typography>
                <Container spacing={4}>
                    <Item xs={12} sm={6} md={3}>
                        <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
                    </Item>
                    <Item xs={12} sm={6} md={3}>
                        <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
                    </Item>
                    <Item xs={12} sm={6} md={3}>
                        <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
                    </Item>
                    <Item xs={12} sm={6} md={3}>
                        <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
                    </Item>
                </Container>
            </div>
        );
    }
}

export default withStyles(styles)(AbstractingContainersAndItems);
