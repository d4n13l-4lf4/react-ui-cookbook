import {createStyles, List, ListItem, ListItemText, Paper} from "@material-ui/core";
import {useState} from "react";
import {List as VirtualList, AutoSizer} from "react-virtualized";
import {withStyles} from "@material-ui/core/styles";

const styles = (theme: any) => createStyles({
    list: {
        height: 300,
    },
    paper: {
        margin: theme.spacing(3),
    },
});

function* genItems() {
    for (let i = 1; i <= 1000; i++) {
        yield `Item ${i}`;
    }
}

function ScrollingList({ classes }: Record<string, any>) {
    // @ts-ignore
    const [items] = useState([...genItems()]);

    const rowRendered = ({ index, isScrolling, key, style }: Record<string, any>) => {
        const item = items[index];

        return (
            <ListItem
                button
                key={key}
                style={style}>
                <ListItemText primary={isScrolling ? '...' : item} />
            </ListItem>
        );
    };

    return (
        <Paper className={classes.paper}>
            <List className={classes.list}>
                <AutoSizer disableHeight>
                    {({ width }: Record<string, any>) => (
                        <VirtualList
                            width={width}
                            height={300}
                            rowHeight={50}
                            rowCount={items.length}
                            rowRenderer={rowRendered} />
                    )}
                </AutoSizer>
            </List>
        </Paper>
    );
}


export default withStyles(styles)(ScrollingList);
