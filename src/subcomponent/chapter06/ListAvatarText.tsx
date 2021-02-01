import React, {useState} from "react";
import {Delete, LowPriority, Markunread, PriorityHigh} from "@material-ui/icons";
import {Avatar, Badge, createStyles, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles";
import clsx from "clsx";

const styles = (theme: any) => createStyles({
    activeAvatar: {
        backgroundColor: theme.palette.primary[theme.palette.type]
    }
});

function ListAvatarText({ classes }: Record<string, any>) {
    const [items] = useState([
        { name: 'Unread', updated: '2 minutes ago', Icon: Markunread, notifications: 1 },
        { name: 'High Priority', updated: '30 minutes ago', Icon: PriorityHigh },
        { name: 'Low Priority', updated: '3 hours ago', Icon: LowPriority },
        { name: 'Junk', updated: '6 days ago', Icon: Delete },
    ]);

    return (
        <List>
            {
                items
                    .map(({ Icon, ...item }, index) => (
                        <ListItem button>
                            <ListItemIcon>
                                <Badge
                                    color={item.notifications ? 'secondary' : undefined }
                                    badgeContent={item.notifications ? item.notifications : null}
                                >
                                    <Avatar
                                        className={clsx({
                                            [classes.activeAvatar]: item.notifications,
                                        })}>
                                        <Icon />
                                    </Avatar>
                                </Badge>
                            </ListItemIcon>
                            <ListItemText primary={item.name} secondary={item.updated} />
                        </ListItem>
                    ))
            }
        </List>
    );
}

export default withStyles(styles)(ListAvatarText);
