import React from "react";
import StatefulExpansionPanels from "../subcomponent/chapter05/StatefulExpansionPanels";
import FormattingPanelHeaders from "../subcomponent/chapter05/FormattingPanelHeaders";
import ScrollablePanelContent from "../subcomponent/chapter05/ScrollablePanel";
import LazyLoadingPanelContent from "../subcomponent/chapter05/LazyLoadingPanel";

class Chapter05 extends React.Component {

    public render() {
        return (
            <div>
                <StatefulExpansionPanels />
                <FormattingPanelHeaders />
                <ScrollablePanelContent />
                <LazyLoadingPanelContent />
            </div>
        )
    }
}

export default Chapter05
