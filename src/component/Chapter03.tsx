import React from "react";
import Drawers from "./../subcomponent/chapter03/Drawers";
import DrawerItemState from "./../subcomponent/chapter03/DrawerItemState";

class Chapter03 extends React.Component {

    public render() {
        return (
            <div>
                { /* <Drawers variant={"persistent"} /> */ }
                <DrawerItemState />
            </div>
        )
    }
}

export default Chapter03
