import React from "react";
import SimpleSnackBar from "../subcomponent/chapter09/SimpleSnackBar";
import ControllingVisibility from "../subcomponent/chapter09/ControllingVisibility";
import SnackbarTransitions from "../subcomponent/chapter09/SnackbarTransition";
import PositioningSnackbars from "../subcomponent/chapter09/PositioningSnackbar";
import ErrorBoundaries from "../subcomponent/chapter09/ErrorBoundaries";
import SnackbarWithActions from "../subcomponent/chapter09/SnackbarWithActions";
import QueueingSnackbars from "../subcomponent/chapter09/QueueingSnackbars";

class Chapter09 extends React.Component {

    public render() {
        return (
            <div>
                { /* <SimpleSnackBar /> */ }
                { /* <ControllingVisibility /> */ }
                { /* <SnackbarTransitions /> */ }
                { /* <PositioningSnackbars /> */ }
                { /* <ErrorBoundaries /> */ }
                { /* <SnackbarWithActions /> */ }
                <QueueingSnackbars />
            </div>
        )
    }
}

export default Chapter09
