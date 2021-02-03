import React from "react";
import CollectingFormInput from "../subcomponent/chapter15/CollectingFormInput";
import ConfirmingActions from "../subcomponent/chapter15/ConfirmingActions";
import ApiIntegration from "../subcomponent/chapter15/ApiIntegration";
import FullScreenDialog from "../subcomponent/chapter15/FullscreenDialog";
import ScrollingDialogContent from "../subcomponent/chapter15/ScrollingDialogContent";

class Chapter15 extends React.Component<any, any> {

    public render() {

        return (
            <div>
                <CollectingFormInput />
                <ConfirmingActions />
                <ApiIntegration />
                <FullScreenDialog />
                <ScrollingDialogContent />
            </div>
        )
    }
}

export default Chapter15
