import React from "react";
import IconColorAndState from "../subcomponent/chapter18/ColoringIcon";
import LazyLoadIcon from "../subcomponent/chapter18/LazyLoadIcon";
import MdiIcons from "../subcomponent/chapter18/MdiIcons";

class Chapter18 extends React.Component<any, any> {

    public render() {

        return (
            <div>
                <IconColorAndState color={"primary"} fontSize={"large"} />
                <LazyLoadIcon category={"Action"} />
                <MdiIcons />
            </div>
        )
    }
}

export default Chapter18
