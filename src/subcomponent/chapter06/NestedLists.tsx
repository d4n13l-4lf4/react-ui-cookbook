import {ContactMail, Contacts, ExpandLess, ExpandMore, Inbox, Mail} from "@material-ui/icons";
import {useState, Fragment} from "react";
import {Collapse, createStyles, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles";

const styles = (theme: any) => createStyles({
   subItem: { paddingLeft: theme.spacing(3) },
});

const ExpandIcon = ({ expanded }: Record<string, any>) => expanded ? <ExpandLess /> : <ExpandMore />

function NestedLists({ classes }: Record<string, any>) {
    const [items, setItems] = useState([
        { name: 'Messages',
            Icon: Inbox,
            expanded: false,
            children: [
                { name: 'First Message', Icon: Mail },
                { name: 'Second Message', Icon: Mail},
            ]
        },
        {
            name: 'Contacts',
            Icon: Contacts,
            expanded: false,
            children: [
                { name: 'First Contact', Icon: ContactMail },
                { name: 'Second Contact', Icon: ContactMail },
            ]
        }
    ]);

    const onClick = (index: number) => () => {
      const newItems = [...items];
      const item = items[index];

      newItems[index] = { ...item, expanded: !item.expanded };
      setItems(newItems);
    };

    return (
        <List>
            {
                items.map(({ Icon, ...item }: Record<string, any>, index: number) => (
                    <Fragment key={index}>
                        <ListItem button onClick={onClick(index)}>
                            <ListItemIcon>
                                <Icon />
                            </ListItemIcon>
                            <ListItemText primary={item.name} />
                            <ExpandIcon expanded={item.expanded} />
                        </ListItem>
                        <Collapse in={item.expanded}>
                            {
                                item.children
                                    .map((child: Record<string, any>, index: number) => (
                                        <ListItem
                                            key={index}
                                            className={classes.subItem}
                                            button
                                            dense
                                        >
                                            <ListItemIcon>
                                                <child.Icon />
                                            </ListItemIcon>
                                            <ListItemText primary={child.name} />
                                        </ListItem>
                                    ))
                            }
                        </Collapse>
                    </Fragment>
                ))
            }
        </List>
    );
}

export default withStyles(styles)(NestedLists);
