import React, {useState} from "react";
import {createStyles} from "@material-ui/core/styles";
import {Tab, Tabs, withStyles, withWidth} from "@material-ui/core";
import {compose} from "recompose";

const styles = (theme: any) => createStyles({
   root: {
       flexGrow: 1,
       backgroundColor: theme.palette.background.paper
   }
});

/* with centered layout */
function TabAlignment({ classes, width }: Record<string, any>) {
    const [value, setValue] = useState(0);

    const onChange = (e: any, value: number) => {
        setValue(value);
    }

    return (
      <div className={classes.root}>
          <Tabs
              value={value}
              onChange={onChange}
              centered
              // @ts-ignore
              variant={['xs', 'sm'].includes(width) ? null : 'fullWidth'}>
              <Tab label={"Item One"} />
              <Tab label={"Item Two"} />
              <Tab label={"Item Three"}/>
          </Tabs>
      </div>
    );
}

export default compose(
    withWidth(),
    withStyles(styles)
)(TabAlignment);
