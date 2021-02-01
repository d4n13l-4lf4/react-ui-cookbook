import React from "react";
import MainContent from "../subcomponent/chapter08/FirstCard";
import Cardheader from "../subcomponent/chapter08/CardHeader";
import {Divider} from "@material-ui/core";
import PerformingActions from "../subcomponent/chapter08/PerformingActions";
import PresentingMedia from "../subcomponent/chapter08/PresentingMedia";
import ExpandableCards from "../subcomponent/chapter08/ExpandableCard";

class Chapter08 extends React.Component {

    public render() {
        return (
            <div>
                <MainContent />
                <Divider />
                <Cardheader />
                <Divider />
                <PerformingActions />
                <PresentingMedia />
                <ExpandableCards />
            </div>
        )
    }
}

export default Chapter08
