import {createStyles} from "@material-ui/core/styles";
import {useState} from "react";
import {AppBar, Tab, Tabs, Typography, withStyles} from "@material-ui/core";
import {Link, Route} from "react-router-dom";

const styles = (theme: any) => createStyles({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    tabContent: {
        padding: theme.spacing(2),
    }
});

const TabContainer = ({ value }: Record<string, any>) => (
  <AppBar position={"static"}>
      <Tabs value={value}>
          <Tab label={"Item One"} component={Link} to={"/"} />
          <Tab label={"Item Two"} component={Link} to={"/page2"} />
          <Tab label={"Item Three"} component={Link} to={"/page3"}/>
      </Tabs>
  </AppBar>
);

/*
* const TabNavigationWithRoutes = withStyles(styles)(({ classes }: Record<string, any>) => {
* <div className={classes.root}>
    <Route
    * exact
    * path="/"
    * render={() => (
    *   <Fragment>
    *       <TabContainer value={0} />
    *       <Typography component="div" className={classes.tabContent}>
    *           Item One
    *       </Typography>
    *   </Fragment>
    * )}
    * />
    * ... rest of the routes
* </div>
* })
* */

function TabNavigationWithRoutes({ classes }: Record<string, any>) {
    const [value, setValue] = useState(0);

    const onChange = (e: any, value: number) => setValue(value);

    return (
        <div className={classes.root}>
            <AppBar position={"static"}>
                <Tabs value={value} onChange={onChange}>
                    <Tab label={"Item One"} component={Link} to={"/"} />
                    <Tab label={"Item Two"} component={Link} to={"/page2"} />
                    <Tab label={"Item Three"} component={Link} to={"/page3"}/>
                </Tabs>
            </AppBar>
            <Route
                exact
                path={"/"}
                render={() => (<Typography component={"div"} className={classes.tabContent}>Item One</Typography>)}/>
            <Route
                exact
                path={"/page2"}
                render={() => (<Typography component={"div"} className={classes.tabContent}>Item Two</Typography>)}/>
            <Route
                exact
                path={"/page3"}
                render={() => (<Typography component={"div"} className={classes.tabContent}>Item Three</Typography>)}/>
        </div>
    );
}

export default withStyles(styles)(TabNavigationWithRoutes);
