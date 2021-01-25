import React, {Fragment} from "react";
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";
import { MenuItem, Button, IconButton, Toolbar, AppBar, Menu, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const styles = (theme: any) => createStyles({
    root: {
        flexGrow: 1
    },
    flex: {
        flex: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
    },
    toolbarMargin: theme.mixins.toolbar,
});

interface Props extends WithStyles<typeof styles> {
    title?: string,
    MenuItems: React.FC<any>,
    RightButton: React.FC,
}

class MyToolbar extends React.Component<Props, any>{
    static defaultProps = {
        MenuItems: ({ closeMenu }: Record<string, any>) => (
            <Fragment>
                <MenuItem onClick={closeMenu}>Profile</MenuItem>
                <MenuItem onClick={closeMenu}>My account</MenuItem>
                <MenuItem onClick={closeMenu}>Logout</MenuItem>
            </Fragment>
        ),
        RightButton: () => <Button color={"inherit"}>Login</Button>,
    }

    state = { anchor: null };

    closeMenu = () => this.setState({ anchor: null });

    public render() {
        const { classes, title, MenuItems, RightButton } = this.props;

        return (
            <Fragment>
                <AppBar>
                    <Toolbar>
                        <IconButton
                            className={classes.menuButton}
                            color={"inherit"}
                            aria-label={"Menu"}
                            onClick={(e: any) => this.setState({ anchor: e.currentTarget })}
                        >
                         <MenuIcon />
                        </IconButton>
                        <Menu
                            anchorEl={this.state.anchor}
                            open={!!this.state.anchor}
                            onClose={this.closeMenu}
                        >
                            <MenuItems closeMenu={this.closeMenu} />
                        </Menu>
                        <Typography
                            variant={"h5"}
                            color={"inherit"}
                            className={classes.flex}
                        >{title}
                        </Typography>
                        <RightButton />
                    </Toolbar>
                </AppBar>
                <div className={classes.toolbarMargin} />
            </Fragment>
        );
    }
}

const MyTool = withStyles(styles)(MyToolbar);


// @ts-ignore
const ToolbarAbstraction = withStyles(styles)(({ classes, ...props}) => (
   <div className={classes.root}>
       <MyTool {...props} />
   </div>
));

export default ToolbarAbstraction;
