import React from "react";
import {createStyles, withStyles} from "@material-ui/core/styles";
import {ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Typography} from "@material-ui/core";
import { lorem } from "faker";
import {ExpandMore} from "@material-ui/icons";

const styles = (theme: any) => createStyles({
    panelDetails: {
        flexDirection: 'column',
        height: 150,
        overflow: 'auto'
    },
});

const IpsumContent = () => (
    <React.Fragment>
        <Typography paragraph>
            {lorem.paragraph(50)}
        </Typography>
        <Typography paragraph>
            {lorem.paragraph(50)}
        </Typography>
        <Typography paragraph>
            {lorem.paragraph(50)}
        </Typography>
    </React.Fragment>
);

const ScrollablePanelContent = withStyles(styles)(
    ({ classes }: Record<string, any>) => (
            <React.Fragment>
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMore/>}>
                        <Typography>First</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.panelDetails}>
                        <IpsumContent />
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMore/>}>
                        <Typography>Second</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.panelDetails}>
                        <IpsumContent />
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMore/>}>
                        <Typography>Third</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.panelDetails}>
                        <IpsumContent />
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </React.Fragment>
        )
);

export default ScrollablePanelContent;
