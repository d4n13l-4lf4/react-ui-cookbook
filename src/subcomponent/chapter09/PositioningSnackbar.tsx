import {makeStyles} from "@material-ui/core/styles";
import {Fragment, useState} from "react";
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Snackbar} from "@material-ui/core";

const useStyles = makeStyles((theme: any) => ({
    formControl: {
        margin: theme.spacing(3),
    },
    group: {

    }
}));

export default function PositioningSnackbars() {
    const classes = useStyles();
    const [vertical, setVertical] = useState('bottom');
    const [horizontal, setHorizontal] = useState('left');

    const onVerticalChange = (e: any) => {
        setVertical(e.target.value);
    };

    const onHorizontalChange = (e: any) => {
        setHorizontal(e.target.value);
    };

    return (
        <Fragment>
            <FormControl
                component={"fieldset"}
                className={classes.formControl}>
                <FormLabel component={"legend"}>Vertical</FormLabel>
                <RadioGroup
                    name={"vertical"}
                    className={classes.group}
                    value={vertical}
                    onChange={onVerticalChange} >
                    <FormControlLabel
                        value={"top"}
                        control={<Radio />}
                        label={"Top"} />
                    <FormControlLabel
                        value={"bottom"}
                        control={<Radio />}
                        label={"Bottom"}/>
                </RadioGroup>
            </FormControl>
            <FormControl
                component={"fieldset"}
                className={classes.formControl}>
                <FormLabel component={"legend"}>Horizontal</FormLabel>
                <RadioGroup
                    name={"horizontal"}
                    className={classes.group}
                    value={horizontal}
                    onChange={onHorizontalChange}>
                    <FormControlLabel
                        value={"left"}
                        control={<Radio />}
                        label={"Left"}/>
                    <FormControlLabel
                        value={"center"}
                        control={<Radio />}
                        label={"Center"}/>
                    <FormControlLabel
                        value={"right"}
                        control={<Radio />}
                        label={"Right"}/>
                </RadioGroup>
            </FormControl>
            <Snackbar
                // @ts-ignore
                anchorOrigin={{vertical, horizontal}}
                open={true}
                message={"Positioned Snackbar"}/>
        </Fragment>
    );
}
