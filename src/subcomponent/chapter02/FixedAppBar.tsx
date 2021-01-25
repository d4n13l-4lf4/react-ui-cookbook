import React from "react";
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";
import { AppBar, Typography, Toolbar, IconButton, Button } from "@material-ui/core";
import Menu from "@material-ui/icons/Menu";

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

}

class FixedAppBar extends React.Component<Props, any> {

    public render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Typography className={classes.title}>Fixed App Bar</Typography>
                <AppBar position={"fixed"}>
                    <Toolbar>
                        <IconButton
                            className={classes.menuButton}
                            color={"inherit"}
                            aria-label={"Menu"}
                        >
                            <Menu />
                        </IconButton>
                        <Typography
                            variant={"h5"}
                            color={"inherit"}
                            className={classes.flex}
                        >
                            Title
                        </Typography>
                        <Button color={"inherit"}>Login</Button>
                    </Toolbar>
                </AppBar>
                <div className={classes.toolbarMargin} />
                <ul>
                    {
                        new Array(500).fill(null).map((v, i) => (
                            <li key={i}>{i}</li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default withStyles(styles)(FixedAppBar);
