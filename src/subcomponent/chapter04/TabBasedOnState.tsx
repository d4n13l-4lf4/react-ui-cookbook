import { makeStyles} from "@material-ui/core/styles";
import {useState} from "react";
import {Tab, Tabs, Typography} from "@material-ui/core";
import {Home, Search, Settings} from "@material-ui/icons";

const useStyles = makeStyles((theme: any) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    },
    tabContent: {
        padding: theme.spacing(2)
    }
}));

export default function TabBasedOnState() {
    const classes = useStyles();
    const [tabs, setTabs] = useState([
        {
            active: true,
            label: 'Item One',
            content: 'Item One Content',
            icon: <Home/>,
            hidden: true,
        },
        {
            active: false,
            label: 'Item Two',
            content: 'Item Two Content',
            icon: <Settings />
        },
        {
            active: false,
            disabled: true,
            label: 'Item Three',
            content: 'Item Three Content',
            icon: <Search />
        }
    ]);

    const onChange = (e: any, value: number) => {
      setTabs(
          tabs
              .map(tab => ({...tab, active: false}))
              .map((tab, index) => ({
                  ...tab,
                  active: index === value
              }))
      )
    };

    const active = tabs.findIndex(tab => tab.active);
    const content = tabs[active].content;

    return (
      <div className={classes.root}>
          <Tabs value={active} onChange={onChange}>
              {
                  tabs
                      .filter(tab => !tab.hidden)
                      .map(tab => (
                          <Tab
                              key={tab.label}
                              label={tab.label}
                              disabled={tab.disabled}
                              icon={tab.icon} />
                      ))
              }
          </Tabs>
          <Typography component={"div"} className={classes.tabContent}>
              { content }
          </Typography>
      </div>
    );
}
