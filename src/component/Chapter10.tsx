import React from "react";
import ButtonVariants from "../subcomponent/chapter10/ButtonVariants";
import ButtonEmphasis from "../subcomponent/chapter10/ButtonEmphasis";
import LinkButtons from "../subcomponent/chapter10/LinkButtons";
import FloatingActions from "../subcomponent/chapter10/FloatingActions";
import IconButtons from "../subcomponent/chapter10/IconButtons";
import ButtonSizes from "../subcomponent/chapter10/ButtonSizes";
import ButtonResizeIcon from "../subcomponent/chapter10/ButtonResizeIcon";

class Chapter10 extends React.Component {

    public render() {
        return (
            <div>
                <ButtonVariants />
                <ButtonEmphasis />
                <LinkButtons />
                <FloatingActions />
                <IconButtons iconColor={"primary"} />
                <ButtonSizes size={"medium"}  />
                <ButtonResizeIcon size={"large"} />
            </div>
        )
    }
}

export default Chapter10
