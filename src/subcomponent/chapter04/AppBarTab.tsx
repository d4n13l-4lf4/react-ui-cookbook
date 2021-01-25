import React from "react";
import {createStyles} from "@material-ui/core/styles";
import {useState} from "react";
import {AppBar, Tab, Tabs, Typography, withStyles} from "@material-ui/core";

const styles = (theme: any) => createStyles({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    tabContent: {
        padding: theme.spacing.unit * 2,
    }
});

function AppBarTab({ classes }: Record<string, any>) {
    const [ value, setValue ] = useState(0);

    const onChange = (e: any, value: number) => {
        setValue(value);
    }

    return (
        <div className={classes.root}>
            <AppBar position={"static"}>
                <Tabs value={value} onChange={onChange}>
                    <Tab label={"Item One"}/>
                    <Tab label={"Item Two"}/>
                    <Tab label={"Item Three"}/>
                </Tabs>
            </AppBar>
            {
                value === 0 && (
                    <Typography component={"div"} className={classes.tabContent}>
                        Item One
                    </Typography>
                )
            }
            {
                value === 1 && (
                    <Typography component={"div"} className={classes.tabContent}>
                        Item Two
                    </Typography>
                )
            }
            {
                value === 2 && (
                    <Typography component={"div"} className={classes.tabContent}>
                        Item Three
                    </Typography>
                )
            }
        </div>
    );
}

export default withStyles(styles)(AppBarTab);
