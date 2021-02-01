import {withStyles} from "@material-ui/core/styles";
import {Grid, TextField} from "@material-ui/core";

const styles = (theme: any) => ({
    container: { margin: theme.spacing(2) },
});

const PlaceholderAndHelperText = withStyles(styles)(
    ({ classes }: Record<string, any>) => (
        <Grid container spacing={4} className={classes.container}>
            <Grid item>
                <TextField label={"The value"} />
            </Grid>
            <Grid item>
                <TextField placeholder={"Example Value"} />
            </Grid>
            <Grid item>
                <TextField helperText={"Brief explanation of the value"} />
            </Grid>
            <Grid item>
                <TextField
                    label={"The Value"}
                    placeholder={"Example Value"}
                    helperText={"Brief explanation of the value"} />
            </Grid>
        </Grid>
    )
);

export default PlaceholderAndHelperText;
