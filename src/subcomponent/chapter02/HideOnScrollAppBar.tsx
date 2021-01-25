import React from "react";
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";
import { AppBar, Typography, Toolbar, IconButton, Button, Fade, Grow } from "@material-ui/core";
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

interface State {
    scrolling: boolean,
    scrollTop: number
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
class HideOnScrollAppBar extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = { scrolling: false, scrollTop: 0 };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.onScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.onScroll);
    }

    shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): boolean {
        return this.state.scrolling !== nextState.scrolling;
    }

    onScroll = (e: any) => {
        this.setState(state => ({
            ...state,
            scrollTop: e.target.documentElement.scrollTop,
            scrolling: e.target.documentElement.scrollTop > state.scrollTop,
        }));
    }

    public render() {
        const { classes } = this.props;
        const { scrolling } = this.state;

        return (
            /* Use grow or fade as effect */
            <Grow in={!scrolling}>
                <AppBar>
                    <Toolbar>
                        <IconButton
                            className={classes.menuButton}
                            color={"inherit"}
                            aria-label={"Menu"}
                        >
                            <Menu />
                        </IconButton>
                        <Typography
                            variant={"h6"}
                            color={"inherit"}
                            className={classes.flex}
                        >
                            My Title
                        </Typography>
                        <Button color={"inherit"}>Login</Button>
                    </Toolbar>
                </AppBar>
            </Grow>
        );
    }
}

const DecoratedScroll = withStyles(styles)(HideOnScrollAppBar);


// @ts-ignore
const ScrollableAppBar = withStyles(styles)(({ classes, title, buttonText }) => (
  <div className={classes.root}>
      <DecoratedScroll />
      <div className={classes.toolbarMargin}>
          <ul>
              {
                  new Array(500).fill(null).map((v, i) => <li key={i}>{i}</li>)
              }
          </ul>
      </div>
  </div>
));

export default ScrollableAppBar;
