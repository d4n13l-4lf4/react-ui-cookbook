import React, { useState } from "react";
import { Grid, Drawer, List, ListItem, ListItemText, Button } from "@material-ui/core";

export default function DrawerTypes({ classes, variant }: Record<string, any>) {
    const [open, setOpen] = useState(false);

    return (
        <Grid container justify={"space-between"}>
            <Grid item>
                <Drawer
                    variant={variant}
                    open={open}
                    onClose={() => setOpen(false)}
                >
                    <List>
                        <ListItem
                            button
                            onClick={() => setOpen(false)}
                        >
                            <ListItemText>Home</ListItemText>
                        </ListItem>
                        <ListItem
                            button
                            onClick={() => setOpen(false)}
                        >
                            <ListItemText>Page 7</ListItemText>
                        </ListItem>
                    </List>
                </Drawer>
            </Grid>
            <Grid item>
                <Button onClick={() => setOpen(!open)}>
                    { open ? 'Hide' : 'Show' } Drawer
                </Button>
            </Grid>
        </Grid>
);
}
