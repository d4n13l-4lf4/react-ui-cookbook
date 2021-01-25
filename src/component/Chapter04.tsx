import React from "react";
import AppBarTab from "../subcomponent/chapter04/AppBarTab";
import TabAlignment from "../subcomponent/chapter04/TabAlignment";
import TabBasedOnState from "../subcomponent/chapter04/TabBasedOnState";

class Chapter04 extends React.Component {

    public render() {
        return (
            <div>
                { /* <AppBarTab /> */}
                { /*<TabAlignment /> */}
                <TabBasedOnState />
            </div>
        )
    }
}

export default Chapter04
