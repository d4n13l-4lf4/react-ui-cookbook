import React, { useState } from "react";
import HomeIcon from "@material-ui/icons/Home";
import WebIcon from "@material-ui/icons/Web";
import { Drawer, Grid, Button, Typography, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

export default function DrawerItemState() {
    const [open, setOpen] = useState(false);
    const [content, setContent] = useState('Home');
    const [items] = useState([
        {label: 'Home', Icon: HomeIcon,},
        { label: 'Page 2', Icon: WebIcon },
        { label: 'Page 3', Icon: WebIcon, disabled: true },
        { label: 'Page 4', Icon: WebIcon },
        { label: 'Page 5', Icon: WebIcon, hidden: true }
    ]);

    const onClick = (content: any) => () => {
        setOpen(false);
        setContent(content);
    }

    return (
        <Grid container justify={"space-between"}>
            <Grid item>
                <Typography>{content}</Typography>
            </Grid>
            <Grid item>
                <Drawer open={open} onClose={() => setOpen(false)}>
                    <List>
                        {
                            items
                                .filter(({hidden}) => !hidden)
                                .map(({ label, disabled, Icon}, i) => (
                                    <ListItem
                                        button
                                        key={i}
                                        disabled={disabled}
                                        onClick={onClick(label)}
                                    >
                                        <ListItemIcon><Icon /></ListItemIcon>
                                        <ListItemText>{label}</ListItemText>
                                    </ListItem>
                                ))
                        }
                    </List>
                </Drawer>
            </Grid>

            <Grid item>
                <Button onClick={() => setOpen(!open)}>
                    {open ? 'Hide' : 'Show' } Drawer
                </Button>
            </Grid>
        </Grid>
    )
}
