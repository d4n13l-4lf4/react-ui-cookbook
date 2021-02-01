import {createStyles, withStyles} from "@material-ui/core/styles";
import {Button, Grid} from "@material-ui/core";

const styles = (theme: any) => createStyles({
    container: {
        margin: theme.spacing(),
    },
});

const ButtonVariants = withStyles(styles)(
    ({ classes }: Record<string, any>) => (
        <Grid
            container
            direction={"column"}
            spacing={2}
            className={classes.container}>
            <Grid item>
                <Button variant={"text"}>Text</Button>
            </Grid>
            <Grid item>
                <Button variant={"outlined"}>Outlined</Button>
            </Grid>
            <Grid item>
                <Button variant={"contained"}>Contained</Button>
            </Grid>
        </Grid>
    )
);

export default ButtonVariants;
