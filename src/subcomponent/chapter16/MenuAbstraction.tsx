import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {Button, Menu, MenuItem} from "@material-ui/core";
import {useEffect, useState, Fragment} from "react";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme: Theme) => createStyles({
    rightIcon: {
        // @ts-ignore
        marginLeft: theme.spacing.unit,
    }
}));

const MyMenu = ({ items, onClose, anchorEl }: Record<string, any>) => (
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
);

export default function MenuAbstraction() {

    const onOpen = (e: any) => setAnchorEl(e.currentTarget);
    const onClose = () => setAnchorEl(null);

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [items, setItems] = useState<Record<string, any>[]>([
        { name: 'Enable Fourth' },
        { name: 'Second', onClick: onClose },
        { name: 'Third', onClick: onClose },
        { name: 'Fourth', onClick: onClose, disabled: true }
    ]);

    useEffect(() => {
        const toggleFourth = () => {
            console.log("Clicked");
            let newItems: Record<string, any>[] = [...items];
            newItems[3] = { ...items[3], disabled: !items[3].disabled };
            newItems[0] = {
                ...items[0],
                name: newItems[3].disabled ? 'Enable Fourth' : 'Disabled Fourth',
            };
            setItems(newItems);
        };

        const newItems = [...items];
        newItems[0] = { ...items[0], onClick: toggleFourth };
        setItems(newItems);
    }, []);

    return (
        <Fragment>
            <Button onClick={onOpen}>
                Menu
                <MenuIcon className={classes.rightIcon} />
            </Button>
            <MyMenu items={items} onClose={onClose} anchorEl={anchorEl} />
        </Fragment>
    );
}

