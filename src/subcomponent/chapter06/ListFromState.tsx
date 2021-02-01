import {useState} from "react";
import {List, ListItem, ListItemText} from "@material-ui/core";

export default function ListFromstate() {
    const [items, setItems] = useState([
        { name: 'First Item', timestamp: new Date(), selected: false, },
        { name: 'Second Item', timestamp: new Date(), selected: false, },
        { name: 'Third Item', timestamp: new Date(), selected: false, },
    ]);

    const onClick = (index: number) => () => {
      const item = items[index];
      const newItems = [...items];

      newItems[index] = { ...item, selected: !item.selected };
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
                          dense
                          selected={item.selected}
                          onClick={onClick(index)}
                      >
                          <ListItemText
                              primary={item.name}
                              secondary={item.timestamp.toLocaleString()}
                              primaryTypographyProps={{
                                  color: item.selected ? 'primary' : undefined
                              }}
                          />
                      </ListItem>
                    ))
            }
        </List>
    );
}
