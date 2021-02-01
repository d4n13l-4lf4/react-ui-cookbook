import {createStyles, withStyles} from "@material-ui/core/styles";
import {Button, Grid} from "@material-ui/core";
import {Link} from "react-router-dom";


const styles = (theme: any) => createStyles({
   content: {
       margin: theme.spacing(2),
   }
});

/*
const NavButton = ({ color, ...props }) => (
  <Switch>
      <Route
          exact
      path={props.to}
      render={() => (
          <Button color={"primary"} component={Link} {...props} />
      )}/>
      <Route
      path="/"
      render={() => <Button component={Link} {...props} />}
  </Switch>
);
*/

const LinkButtons = withStyles(styles)(
    ({ classes }: Record<string, any>) => (
        <Grid container direction={"column"} className={classes.container}>
            <Grid item>
                <Grid container>
                    <Grid item>
                        <Button component={Link} to={"/"}>Home</Button>
                    </Grid>
                    <Grid item>
                        <Button component={Link} to={"/chapter01"}>
                            Chapter 01
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button component={Link} to={"/chapter02"}>
                            Chapter 02
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
);

export default LinkButtons;
