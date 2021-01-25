import {createStyles, withStyles} from "@material-ui/core/styles";
import {Fragment, useState} from "react";
import {AppBar, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import clsx from "clsx";

const styles = (theme: any) => createStyles({
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    toolbarMargin: theme.mixins.toolbar,
    aboveDrawer: {
        zIndex: theme.zIndex.drawer + 1,
    }
});

const MyToolbar = withStyles(styles)(
    ({ classes, title, onMenuClick }: Record<string, any>) => (
        <Fragment>
            <AppBar className={classes.aboveDrawer}>
                <Toolbar>
                    <IconButton
                        className={classes.menuButton}
                        color={"inherit"}
                        aria-label={"Menu"}
                        onClick={onMenuClick}>
                        <Menu />
                    </IconButton>
                    <Typography
                        variant={"h5"}
                        color={"inherit"}
                        className={classes.flex}>
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className={classes.toolbarMargin} />
        </Fragment>
    )
);

const MyDrawer = withStyles(styles)(
    ({ classes, variant, open, onClose, onItemClick }: Record<string, any>) => {

        return (

            <Drawer variant={variant} open={open} onClose={onClose}>
                <div className={clsx({[classes.toolbarMargin]: variant === 'persistent'})} />
                <List>
                    <ListItem
                        button
                        onClick={onItemClick('Home')}
                    >
                        <ListItemText>Home</ListItemText>
                    </ListItem>
                    <ListItem
                        button
                        onClick={onItemClick('Page 2')}>
                        <ListItemText>Page 2</ListItemText>
                    </ListItem>
                    <ListItem
                        button
                        onClick={onItemClick('Page 3')}>
                        <ListItemText>Page 3</ListItemText>

                    </ListItem>
                </List>
            </Drawer>
        )
    }
);

function AppBarInteraction({ classes, variant }: Record<string, any>) {
    const [drawer, setDrawer] = useState(false);
    const [title, setTitle] = useState('Home');

    const onItemClick = (title: string) => () => {
        setTitle(title);
        setDrawer(variant === 'temporary' ? false : drawer);
    };

    const toggleDrawer = () => {
        setDrawer(!drawer);
    };

    return (
        <div className={classes.root}>
            <MyToolbar title={title} onMenuClick={toggleDrawer} />
            <MyDrawer
                open={drawer}
                onClose={toggleDrawer}
                onItemClick={onItemClick}
            />
        </div>
    );
}

export default withStyles(styles)(AppBarInteraction);
