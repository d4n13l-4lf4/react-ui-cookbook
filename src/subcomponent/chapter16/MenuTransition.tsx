import {makeStyles, Theme} from "@material-ui/core/styles";
import {Fragment, useState} from "react";
import {Button, Collapse, Fade, Grow, Menu, MenuItem, Slide} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme: Theme) => ({
    rightIcon: {
        // @ts-ignore
        maringLeft: theme.spacing.unit
    }
}));

export default function MenuTransition({ transition, duration }: Record<string, any>) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

    const onOpen = (e: any) => setAnchorEl(e.currentTarget);

    const onClose = () => setAnchorEl(null);

    return (
        <Fragment>
            <Button onClick={onOpen}>
                Menu
                <MenuIcon className={classes.rightIcon} />
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                transitionDuration={duration}
                // @ts-ignore
                TransitionComponent={{
                    collapse: Collapse,
                    fade: Fade,
                    grow: Grow,
                    slide: Slide
                }[transition]
                }>
                <MenuItem onClick={onClose}>Profile</MenuItem>
                <MenuItem onClick={onClose}>My account</MenuItem>
                <MenuItem onClick={onClose}>Logout</MenuItem>
            </Menu>
        </Fragment>
    );
}
