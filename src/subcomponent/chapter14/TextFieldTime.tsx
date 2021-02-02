import {createStyles, makeStyles} from "@material-ui/core/styles";
import {TextField} from "@material-ui/core";
import {Fragment, useState} from "react";

const useStyles = makeStyles((theme: any) => createStyles({
    textField: { margin: theme.spacing(1) },
}));

const TimePicker = ({time, ...props}: Record<string, any>) => (
    <TextField
        value={time}
        type={"time"}
        InputLabelProps={{
            shrink: true,
        }}
        inputProps={{
            step: 300,
        }}
        {...props}/>
);

export default function TextFieldTime() {
    const classes = useStyles();
    const [time, setTime] = useState('');

    const onChange = (e: any) => setTime(e.target.value);

    return (
        <Fragment>
            <TimePicker
                time={time}
                onChange={onChange}
                label={"My Time"}
                className={classes.textField}
            />
            <TextField
                value={time}
                label={"Updated Time Value"}
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
                InputProps={{
                    readOnly: true
                }}/>
        </Fragment>
    );
}
