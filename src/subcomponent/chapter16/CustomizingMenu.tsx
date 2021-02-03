import {Link, Route, Switch} from "react-router-dom";
import {makeStyles, Theme} from "@material-ui/core/styles";
import {Button, Menu, MenuItem, Typography} from "@material-ui/core";
import {Fragment, useState} from "react";
import MenuIcon from "@material-ui/icons/Menu";

const NavMenuItem = ({ color, ...props }: Record<string, any>) => (
    <Switch>
        <Route
            exact
            path={props.to}
            // @ts-ignore
            render={() => <MenuItem selected component={Link} {...props} />}/>
        <Route
            path={"/"}
            // @ts-ignore
            render={() => <MenuItem component={Link} {...props} />}/>
    </Switch>
);

const useStyles = makeStyles((theme: Theme) => ({
    rightIcon: {
        marginLeft: theme.spacing(1),
    }
}));

export default function CustomizingMenuItems() {
    const classes = useStyles();
    const [anchorEl, setAnchorEL] = useState(null);

    const onOpen = (e: any) => setAnchorEL(e.currentTarget);

    const onClose = () => setAnchorEL(null);

    return (
        <Fragment>
            <Button onClick={onOpen}>
                Menu
                <MenuIcon className={classes.rightIcon} />
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={onClose}>
                <NavMenuItem to={"/"} onClick={onClose}>
                    Home
                </NavMenuItem>
                <NavMenuItem to={"/page1"} onClick={onClose}>
                    Page 1
                </NavMenuItem>
                <NavMenuItem to={"/page2"} onClick={onClose}>
                    Page 2
                </NavMenuItem>
                <Switch>
                    <Route
                        exact
                        path={"/"}
                        render={() => <Typography>home content</Typography>}
                    />
                    <Route
                        path={"/page1"}
                        render={() => <Typography>page 1 content</Typography>}
                    />
                    <Route
                        path={"/page2"}
                        render={() => <Typography>page 2 content</Typography>}/>
                </Switch>
            </Menu>
        </Fragment>
    );
}
