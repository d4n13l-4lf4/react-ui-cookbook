import {Fragment, useState} from "react";
import {
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary, LinearProgress,
    Typography
} from "@material-ui/core";
import { ExpandMore} from "@material-ui/icons";
import {createStyles, withStyles} from "@material-ui/core/styles";

const styles = (theme: any) => createStyles({
    panelDetails: { flexDirection: 'column' },
});

const fetchPanelContent = (index: number) => new Promise<string>(((resolve) => {
    setTimeout(() => resolve([
        'First panel content...',
        'Second panel content...',
        'Third panel content...',
        'Fourth panel content...',
    ][index]), 2000)
}));

const MaybeProgress = ({ loading }: Record<string, any>) => loading ? <LinearProgress /> : null;

function LazyLoadingPanelContent({ classes }: Record<string, any>) {
    const [panels, setPanels] = useState([
        {
            title: 'First Panel Title',
        },
        {
            title: 'Second Panel Title',
        },
        {
            title: 'Third Panel Title',
        },
        {
            title: 'Fourth Panel Title',
        }
    ]);
    const [loading, setLoading] = useState(false);

    const onChange = (index: number) => async (e: any, expanded: boolean) => {
        // @ts-ignore
        if (!panels[index]['content'] && expanded) {
            setLoading(true);
            const content = await fetchPanelContent(index);
            const newPanels = [...panels];
            // @ts-ignore
            newPanels[index] = {...newPanels[index], content};
            setPanels(newPanels);
            setLoading(false);
        }
    }

    return (
        <Fragment>
            {
                panels.map((panel: Record<string, any>, index: number) => (
                    <ExpansionPanel key={index} onChange={onChange(index)}>
                        <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                            <Typography>{panel.title}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className={classes.panelDetails}>
                            <MaybeProgress loading={!panel.content}/>
                            <Typography>{ panel.content }</Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                ))
            }
        </Fragment>
    );
}

export default withStyles(styles)(LazyLoadingPanelContent);
