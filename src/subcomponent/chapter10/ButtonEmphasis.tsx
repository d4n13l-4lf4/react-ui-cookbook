import {createStyles, withStyles} from "@material-ui/core/styles";
import {Button, Grid, Typography} from "@material-ui/core";

const styles = (theme: any) => createStyles({
    container: {
        margin: theme.spacing(1)
    }
});

/**
 * Color of contained buttons does not change with inheritance
 */
const ButtonEmphasis = withStyles(styles)(
    ({ classes, disabled }: Record<string, any>) => (
        <Grid
            container
            direction={"column"}
            spacing={10}
            className={classes.container}>
            <Grid item>
                <Typography variant={"h6"}>Default</Typography>
            </Grid>
            <Grid item>
                <Grid container spacing={10}>
                    <Grid item>
                        <Button variant={"text"} disabled={disabled}>
                            Text
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant={"outlined"} disabled={disabled}>
                            Outlined
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant={"contained"} disabled={disabled}>
                            Contained
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Typography variant={"h6"}>Primary</Typography>
            </Grid>
            <Grid item>
                <Grid container spacing={10}>
                    <Grid item>
                        <Button variant={"text"} color={"primary"} disabled={disabled}>
                            Text
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant={"outlined"} color={"primary"} disabled={disabled}>
                            Outlined
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant={"contained"} color={"primary"} disabled={disabled}>
                            Contained
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Typography variant="h6">Secondary</Typography>
            </Grid>
            <Grid item>
                <Grid container spacing={10}>
                    <Grid item>
                        <Button variant="text" color="secondary" disabled={disabled}> Text </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" color="secondary" disabled={disabled}>
                            Outlined
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="secondary" disabled={disabled}>
                            Contained
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
);


export default ButtonEmphasis;
