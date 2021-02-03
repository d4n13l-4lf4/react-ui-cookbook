import {createStyles, Grid, Paper, Typography} from "@material-ui/core";
import {Theme, withStyles} from "@material-ui/core/styles";

const styles = (theme: Theme) => createStyles({
    paper: {
        width: 200,
        height: 200,
        padding: theme.spacing(1)
    }
});

const MyPaper = withStyles(styles)(
    ({ horizontalAlign, verticalAlign, classes, ...props}: Record<string, any>) => (
        <Grid
            container
            component={Paper}
            className={classes.paper}
            alignContent={verticalAlign}
            justify={horizontalAlign}
            {...props}/>
    )
);

const MyTypography = ({ ...props }: Record<string, any>) => (
  <Grid item component={Typography} {...props} />
);

const AligningText = ({ ...props }: Record<string, any>) => (
  <MyPaper {...props}>
      <MyTypography {...props}>Text</MyTypography>
  </MyPaper>
);

export default AligningText;
