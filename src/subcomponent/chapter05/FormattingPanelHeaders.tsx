import {Fragment} from "react";
import {
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
    Typography
} from "@material-ui/core";
import {Devices, ExpandMore, NetworkWifi, Storage} from "@material-ui/icons";
import {withStyles} from "@material-ui/core/styles";

const styles = (theme: any) => ({
   icon: {
       marginRight: theme.spacing(1),
   }
});

const FormattingPanelHeaders = ({ classes }: Record<string, any>) => {
    return (
        <Fragment>
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMore/>}>
                    <Devices className={classes.icon} />
                    <Typography variant={"subtitle1"}>Devices</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>Devices content...</Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMore/>}>
                    <NetworkWifi className={classes.icon} />
                    <Typography variant={"subtitle1"}>Networks</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>Networks content...</Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMore/>}>
                    <Storage className={classes.icon} />
                    <Typography variant={"subtitle1"}>Storage</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>Storage content...</Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </Fragment>
    )
};

export default withStyles(styles)(FormattingPanelHeaders);
