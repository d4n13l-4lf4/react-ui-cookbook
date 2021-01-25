import React, {useState} from "react";
import {Link, Route} from "react-router-dom";
import {
    Typography,
    Grid,
    Drawer,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Button } from "@material-ui/core";
import {
    createStyles,
    withStyles
} from "@material-ui/core/styles";
import {Home, Web} from "@material-ui/icons";

const styles = (theme: any) => createStyles({
    alignContent: {
        alignSelf: "center",
    }
});

function DrawerItemNavigation({ classes }: Record<string, any>) {

    const [open, setOpen] = useState(false);

    return (
        <Grid>
            <Grid item className={classes.alignContent}>
                <Route exact path={"/"} render={() => <Typography>Home</Typography>} />
                <Route exact path={"/page2"} render={() => <Typography>Page 2</Typography>} />
                <Route exact path={"/page3"} render={() => <Typography>Page 3</Typography>} />
            </Grid>
            <Grid item>
                <Drawer
                    className={classes.drawerWidth}
                    open={open}
                    onClose={() => setOpen(false)}
                >
                    <List>
                        <ListItem
                            component={Link}
                            to={"/"}
                            onClick={() => setOpen(false)}
                        >
                            <ListItemIcon>
                                <Home />
                            </ListItemIcon>
                            <ListItemText>Home</ListItemText>
                        </ListItem>
                        <ListItem
                            component={Link}
                            to={"/page2"}
                            onClick={() => setOpen(false)}
                        >
                            <ListItemIcon>
                                <Web />
                            </ListItemIcon>
                            <ListItemText>Page 2</ListItemText>
                        </ListItem>
                        <ListItem
                            component={Link}
                            to={"/page3"}
                            onClick={() => setOpen(false)}
                            >
                            <ListItemIcon>
                                <Web />
                            </ListItemIcon>
                            <ListItemText>Page 3</ListItemText>
                        </ListItem>
                    </List>
                </Drawer>
            </Grid>
            <Grid item>
                <Button onClick={() => setOpen(!open)}>
                    {open ? 'Hide' : 'Show'} Drawer
                </Button>
            </Grid>
        </Grid>
    );
}


export default withStyles(styles)(DrawerItemNavigation);
