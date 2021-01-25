import {
    Button, Collapse,
    Drawer,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListSubheader,
    Typography
} from "@material-ui/core";
import {createStyles, withStyles} from "@material-ui/core/styles";
import {useState} from "react";
import {Add, Remove, ShowChart} from "@material-ui/icons";

const styles = (theme: any) => createStyles({
    alignContent: {
        alignSelf: 'center'
    },
    listSubheader: {
        padding: 0,
        minWidth: 0,
        color: 'inherit',
        '&:hover': {
            background: 'inherit'
        }
    }
});

const ListItems = ({ items, visible, onClick }: Record<string, any>) => (
  <Collapse in={visible}>
      {
          items
              .filter(({ hidden }: Record<string, boolean>) => !hidden)
              .map(({ label, disabled, Icon }: Record<string, any>, i: number) => (
                  <ListItem
                  button
                  key={i}
                  disabled={disabled}
                  onClick={onClick(label)}>
                      <ListItemIcon>
                          <Icon />
                      </ListItemIcon>
                      <ListItemText>{label}</ListItemText>
                  </ListItem>
              ))
      }
  </Collapse>
);

const DrawerSections = withStyles(styles)(({ classes }: Record<string, any>) => {
    const [open, setOpen] = useState(false);
    const [content, setContent] = useState('Home');
    const [sections, setSections] = useState({
        cpu: true,
        memory: false,
        storage: false,
        network: false,
    });
    const [items] = useState({
        cpu: [
            { label: 'Add CPU', Icon: Add },
            { label: 'Remove CPU', Icon: Remove},
            { label: 'Usage', Icon: ShowChart}
        ],
        memory: [
            { label: 'Add Memory', Icon: Add },
            { label: 'Usage', Icon: ShowChart },
        ],
        storage: [
            { label: 'Add Storage', Icon: Add },
            { label: 'Usage', Icon: ShowChart },
        ],
        network: [
            { label: 'Add Network', Icon: Add, disabled: true },
            { label: 'Usage', Icon: ShowChart },
        ]
    });

    const onClick = (content: any) => () => {
        setOpen(false);
        setContent(content);
    };

    const toggleSection = (name: string) => () => {
        // @ts-ignore
        setSections({...sections, [name]: !sections[name]});
    }

    return (
        <Grid container justify={"space-between"}>
            <Grid item className={classes.alignContent}>
                <Typography>{content}</Typography>
            </Grid>
            <Grid item>
                <Drawer open={open} onClose={() => setOpen(false)}>
                    <List>
                        <ListSubheader>
                            <Button disableRipple
                                    classes={{root: classes.listSubheader}}
                                    onClick={toggleSection('cpu')}>
                                CPU
                            </Button>
                        </ListSubheader>
                        <ListItems visible={sections.cpu} items={items.cpu} onClick={onClick}/>
                        <ListSubheader>Memory</ListSubheader>
                        <ListItems visiable={sections.memory} items={items.memory} onClick={onClick} />
                        <ListSubheader>Storage</ListSubheader>
                        <ListItems visible={items.storage} items={items.storage} onClick={onClick} />
                        <ListSubheader>Network</ListSubheader>
                        <ListItems visiable={items.network} items={items.network} onClick={onClick} />
                    </List>
                </Drawer>
            </Grid>
            <Grid item>
                <Button onClick={() => setOpen(!open)}>
                    {open ? 'Hide' : 'Show'} Drawer
                </Button>
            </Grid>
        </Grid>
    );
});


export default DrawerSections;
