import {
    ListItem,
    ListItemIcon,
    ListItemText,
    Grid,
    List,
    Typography,
    Drawer,
    Button
} from "@material-ui/core";
import {
    withStyles,
    createStyles
} from "@material-ui/core/styles";
import {Link, NavLink, Route, Switch} from "react-router-dom";
import clsx from "clsx";
import React, {useState} from "react";
import {Home, Web} from "@material-ui/icons";

const styles = (theme: any) => createStyles({
    alignContent: {
        alignSelf: 'center'
    },
    activeListItem: {
        color: theme.palette.primary.main
    },
});

// @ts-ignore
const NavListItem = withStyles(styles)(
    ({ classes, Icon, text, active, ...other}: Record<string, any>) => (
        <ListItem /*component={NavLink}*/ {...other}>
            <ListItemIcon
                classes={{root: clsx({[classes.activeListItem]: active})}}
            >
                <Icon />
            </ListItemIcon>
            <ListItemText
                classes={{
                    primary: clsx({
                        [classes.activeListItem]: active
                    })
                }}
            >
                {text}
            </ListItemText>
        </ListItem>
    )
);

const NavItem = (props: any) => (
    <Switch>
        <Route
            exact
            path={props.to}
            render={() => <NavListItem active={true} {...props}/> }/>
        <Route
            path={"/"}
            render={() => <NavListItem {...props} />}
        />
    </Switch>
);

function DrawerItemNavigation({ classes }: Record<string, any>) {
    const [open, setOpen] = useState(false);

    return (
        <Grid container justify={"space-between"}>
            <Grid item className={classes.alignContent}>
                <Route
                    exact
                    path={"/"}
                    render={() => <Typography> Home</Typography>}/>
                <Route
                    exact
                    path={"/page2"}
                    render={() => <Typography>Page 2</Typography>}/>
                <Route
                    exact
                    path={"/page3"}
                    render={() => <Typography>Page 3</Typography>}/>
            </Grid>
            <Grid item>
                <Drawer
                    className={classes.drawerWidth}
                    open={open}
                    onClose={() => setOpen(false)}>
                    <List>
                        <NavItem
                            to={"/"}
                            text={"Home"}
                            Icon={Home}
                            onClick={() => setOpen(false) } />
                        <NavItem
                            to={"/page2"}
                            text={"Page 2"}
                            Icon={Web}
                            onCLick={() => setOpen(false)}/>
                        <NavItem
                            to={"/page3"}
                            text={"Page 3"}
                            Icon={Web}
                            onClick={() => setOpen(false)}/>
                    </List>
                </Drawer>
            </Grid>
            <Grid item>
                <Button onClick={() => setOpen(!open)}>
                    { open ? 'Hide' : 'Show' } Drawer
                </Button>
            </Grid>
        </Grid>
    );
}

export default withStyles(styles)(DrawerItemNavigation);


