import React, {useState} from "react";
import {List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import {AccountCircle, CheckCircleOutlineOutlined} from "@material-ui/icons";

const MaybeSelectedIcon = ({ selected, Icon }: Record<string, any>) =>
    selected ? <CheckCircleOutlineOutlined /> : <Icon />;

export default function ListIcons() {
    const [items, setItems] = useState([
        { name: 'First User', selected: false, },
        { name: 'Second User', selected: false, },
        { name: 'Third User', selected: false, },
    ]);

    const onClick = (index: number) => () => {
      const item = items[index];
      const newItems = [...items];

      newItems[index] = { ...item, selected: !item.selected }
      setItems(newItems);
    };

    return (
        <List>
            {
                items
                    .map((item: Record<string, any>, index: number) => (
                        <ListItem
                            key={index}
                            button
                            selected={item.selected}
                            onClick={onClick(index)}
                        >
                            <ListItemIcon>
                                <MaybeSelectedIcon
                                    selected={item.selected}
                                    Icon={AccountCircle}
                                />
                            </ListItemIcon>
                            <ListItemText primary={item.name} />
                        </ListItem>
                    ))
            }
        </List>
    );
}
