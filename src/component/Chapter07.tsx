import React from "react";
import StatefulTable from "../subcomponent/chapter07/StatefulTable";
import SortableColumn from "../subcomponent/chapter07/SortableColumn";
import FilteringRows from "../subcomponent/chapter07/FilteringRows";
import SelectingRows from "../subcomponent/chapter07/SelectingRows";
import RowActions from "../subcomponent/chapter07/RowActions";

class Chapter07 extends React.Component {

    public render() {
        return (
            <div>
                <StatefulTable />
                <SortableColumn />
                <FilteringRows />
                <SelectingRows />
                <RowActions />
            </div>
        )
    }
}

export default Chapter07
