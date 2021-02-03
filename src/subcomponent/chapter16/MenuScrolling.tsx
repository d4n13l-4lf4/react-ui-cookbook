import {makeStyles, Theme} from "@material-ui/core/styles";
import {Fragment, useState} from "react";
import {IconButton, Menu, MenuItem} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const items = [
    'None',
    'Atria',
    'Callisto',
    'Dione',
    'Ganymede',
    'Hangouts Call',
    'Luna',
    'Oberon',
    'Phobos',
    'Pyxis',
    'Sedna',
    'Titania',
    'Triton',
    'Umbriel'
];

const ITEM_HEIGHT = 48;

const useStyles = makeStyles((theme: Theme) => ({
    menuPaper: { maxHeight: ITEM_HEIGHT * 4.5, width: 200 },
}));

export default function MenuScrollingOptions() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [selected, setSelected] = useState('');

    const onOpen = (e: any) => setAnchorEl(e.currentTarget);

    const onClose = () => setAnchorEl(null);

    const onSelect = (selected: any) => {
        setSelected(selected);
        setAnchorEl(null);
    };

    return (
        <Fragment>
            <IconButton onClick={onOpen}>
                <MenuIcon />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={onClose}
                PaperProps={{
                    classes: {elevation8: classes.menuPaper }
                }}>
                {
                    items
                        .map((item: any, index: number) => (
                            <MenuItem
                                key={index}
                                // @ts-ignore
                                selected={index === selected}
                                onClick={() => onSelect(index)}>
                                {item}
                            </MenuItem>
                        ))
                }
            </Menu>
        </Fragment>
    );
}
