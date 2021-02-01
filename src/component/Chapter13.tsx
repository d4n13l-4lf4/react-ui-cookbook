import React from "react";
import CheckboxAbstraction from "../subcomponent/chapter13/CheckboxAbstraction";
import CustomizingCheckboxItems from "../subcomponent/chapter13/CustomizingCheckboxes";
import AbstractingRadioButtonGroups from "../subcomponent/chapter13/AbstractingRadioButton";
import RadioButtonTypes from "../subcomponent/chapter13/RadioButtonTypes";
import ReplacingCheckboxesWithSwitches from "../subcomponent/chapter13/Switches";

class Chapter13 extends React.Component<any, any> {

    public render() {

        return (
            <div>
                <CheckboxAbstraction />
                <CustomizingCheckboxItems />
                <AbstractingRadioButtonGroups />
                <RadioButtonTypes />
                <ReplacingCheckboxesWithSwitches />
            </div>
        )
    }
}

export default Chapter13
