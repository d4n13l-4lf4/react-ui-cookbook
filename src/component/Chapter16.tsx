import React from "react";
import SimpleMenu from "../subcomponent/chapter16/SimpleMenu";
import MenuAbstraction from "../subcomponent/chapter16/MenuAbstraction";
import MenuScrollingOptions from "../subcomponent/chapter16/MenuScrolling";
import MenuTransition from "../subcomponent/chapter16/MenuTransition";
import CustomizingMenuItems from "../subcomponent/chapter16/CustomizingMenu";

class Chapter16 extends React.Component<any, any> {

    public render() {

        return (
            <div>
                <SimpleMenu />
                <MenuAbstraction />
                <MenuScrollingOptions />
                <MenuTransition transition={"slide"} />
                <CustomizingMenuItems />
            </div>
        )
    }
}

export default Chapter16
