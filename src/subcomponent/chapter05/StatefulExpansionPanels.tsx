import {Fragment, useState} from "react";
import {ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Typography} from "@material-ui/core";
import {ExpandMore} from "@material-ui/icons";


export default function StatefulExpansionPanels() {
    const [expanded, setExpanded] = useState(0);
    const [panels] = useState([
        {
            title: 'First Panel Title',
            content: 'First panel content...',
        },
        {
            title: 'Second Panel Title',
            content: 'Second panel content...',
        },
        {
            title: 'Third Panel Title',
            content: 'Third panel content...',
        },
        {
            title: 'Fourth Panel Title',
            content: 'Fourth panel content...',
            disabled: true,
        }
    ]);

    const onChange = (expanded: number) => () => {
      setExpanded(expanded);
    };

    return (
        <Fragment>
            {
                panels
                    .filter((panel: any) => !panel.hidden)
                    .map((panel: Record<string, any>, index: number) => (
                        <ExpansionPanel
                            key={index}
                            disabled={panel.disabled}
                            expanded={index === expanded}
                            onChange={onChange(index)}
                        >
                            <ExpansionPanelSummary expandIcon={<ExpandMore/>}>
                                <Typography>{panel.title}</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>{panel.content}</Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    ))
            }
        </Fragment>
    );
}
