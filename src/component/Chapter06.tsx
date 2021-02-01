import React from "react";
import ListFromstate from "../subcomponent/chapter06/ListFromState";
import ListIcons from "../subcomponent/chapter06/ListIcons";
import ListAvatarText from "../subcomponent/chapter06/ListAvatarText";
import ListSections from "../subcomponent/chapter06/ListSections";
import NestedLists from "../subcomponent/chapter06/NestedLists";
import ListControls from "../subcomponent/chapter06/ListControls";
import ScrollingList from "../subcomponent/chapter06/ScrollingList";

class Chapter06 extends React.Component {

    public render() {
        return (
            <div>
                <ListFromstate />
                <ListIcons />
                <ListAvatarText />
                <ListSections />
                <NestedLists />
                <ListControls />
                <ScrollingList />
            </div>
        )
    }
}

export default Chapter06
