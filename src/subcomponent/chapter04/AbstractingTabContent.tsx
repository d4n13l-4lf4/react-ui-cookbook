import {createStyles, withStyles} from "@material-ui/core/styles";
import {Children, Fragment, useState} from "react";
import {Tab, Tabs, Typography} from "@material-ui/core";

const styles = (theme: any) => createStyles({
   root: {
       flexGrow: 1,
       backgroundColor: theme.palette.background.paper,
   },
    tabContent: {
       padding: theme.spacing(2),
    }
});

function TabContainer({ children, value: valueProp }: Record<string, any>) {
    const [value, setValue] = useState();

    const onChange = (e: any, value: any) => {
        setValue(value);
    };

    if (value === undefined)
        setValue(valueProp);

    return (
        <Fragment>
            <Tabs value={value} onChange={onChange}>
                {Children.map(children, child => (
                    <Tab label={child.props.label}/>
                ))}
            </Tabs>
            {
                Children.map(children, (child, index) => index === value ? child : null)
            }
        </Fragment>
    );
}

TabContainer.defaultProps = {
  value: 0,
};

const TabContent = withStyles(styles)(
    ({ classes, children }: Record<string, any>) => (
   <Typography component={"div"} className={classes.tabContent}>
       {children}
   </Typography>
));

const AbstractingTabContent = withStyles(styles)(
    ({ classes }: Record<string, any>) => (
        <div className={classes.root}>
            <TabContainer value={1}>
                <TabContent label={"Item One"}>Item One Content</TabContent>
                <TabContent label={"Item Two"}>Item Two Content</TabContent>
                <TabContent label={"Item Three"}>Item Three Content</TabContent>
            </TabContainer>
        </div>
    )
);

export default AbstractingTabContent;
