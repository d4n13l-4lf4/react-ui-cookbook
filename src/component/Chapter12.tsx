import React from "react";
import Autocomplete from "../subcomponent/chapter12/AutocompleteExample";
import StandaloneChip from "../subcomponent/chapter12/StandaloneChip";

class Chapter12 extends React.Component<any, any> {

    public render() {

        return (
            <div>
                <Autocomplete />
                <StandaloneChip/>
            </div>
        )
    }
}

export default Chapter12
