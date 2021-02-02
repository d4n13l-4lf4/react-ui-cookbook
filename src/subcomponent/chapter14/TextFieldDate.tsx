import {makeStyles} from "@material-ui/core/styles";
import {Fragment, useState} from "react";
import {TextField} from "@material-ui/core";

const useStyles = makeStyles((theme: any) => ({
    textField: { margin: theme.spacing(1) },
}));

function formatDate(date: Date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return [
        year,
        month < 10 ? `0${month}` : month,
        day < 10 ? `0${day}` : day
    ].join('-');
}

const DatePicker = ({date, ...props}: Record<string, any>) => (
    <TextField
        value={date instanceof Date ? formatDate(date) : date}
        type={"date"}
        InputLabelProps={{
            shrink: true,
        }}
        {...props}
    />
);

export default function TextFieldDate() {
    const classes = useStyles();
    const [date, setDate] = useState('');

    const onChange = (e: any) => setDate(e.target.value);

    const dateFormatted = date ? new Date(`${date}T00:00:00`).toLocaleDateString() : null;

    return (
        <Fragment>
            <TextField
                value={date}
                onChange={onChange}
                label={"My Date"}
                type={"date"}
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}/>
            <TextField
                value={dateFormatted}
                label={"Updated Date Value"}
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
                InputProps={{
                    readOnly: true,
                }}
            />
        </Fragment>
    );
}
