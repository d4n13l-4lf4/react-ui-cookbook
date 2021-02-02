import React from "react";
import TextFieldDate from "../subcomponent/chapter14/TextFieldDate";
import TextFieldTime from "../subcomponent/chapter14/TextFieldTime";
import TextFieldDateTime from "../subcomponent/chapter14/TextFieldDateTime";
import CustomDatePickers from "../subcomponent/chapter14/CustomDatePickers";

class Chapter14 extends React.Component<any, any> {

    public render() {

        return (
            <div>
                <TextFieldDate />
                <TextFieldTime />
                <TextFieldDateTime />
                <CustomDatePickers />
            </div>
        )
    }
}

export default Chapter14
