import React from "react";
import TypesOfTypography from "../subcomponent/chapter17/TypoVariants";
import UsingThemeColors from "../subcomponent/chapter17/ThemeColors";
import AligningText from "../subcomponent/chapter17/TextAlign";
import WrappingText from "../subcomponent/chapter17/WrappingText";

class Chapter17 extends React.Component<any, any> {

    public render() {

        return (
            <div>
                <TypesOfTypography />
                <UsingThemeColors color={"textSecondary"} />
                <AligningText justify={"center"} alignContent={"flex-end"} />
                <WrappingText />
            </div>
        )
    }
}

export default Chapter17
