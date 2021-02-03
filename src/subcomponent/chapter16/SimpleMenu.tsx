import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Fragment, useState} from "react";
import {Button, Menu, MenuItem} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme: Theme) => createStyles({
    rightIcon: {
        marginLeft: theme.spacing(1),
    }
}));

export default function SimpleMenu() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const onOpen = (e: any) => setAnchorEl(e.currentTarget);
    const onClose = (e: any) => setAnchorEl(null);
    const [items, setItems] = useState([
        { name: 'First', onClick: onClose },
        { name: 'Second', onClick: onClose },
        { name: 'Third', onClick: onClose },
        { name: 'Fourth', onClick: onClose, disabled: true }
    ]);

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
                {
                    items
                        .map((item: Record<string, any>, index: number) => (
                            <MenuItem
                                key={index}
                                onClick={item.onClick}
                                disabled={item.disabled}>
                                {item.name}
                            </MenuItem>
                        ))
                }
            </Menu>
        </Fragment>
    );
}
