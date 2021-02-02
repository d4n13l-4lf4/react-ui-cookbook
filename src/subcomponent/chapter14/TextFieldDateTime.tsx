import {createStyles, makeStyles} from "@material-ui/core/styles";
import {TextField} from "@material-ui/core";
import {useState} from "react";

const useStyles = makeStyles((theme: any) => createStyles({
    textField: { margin: theme.spacing(1) },
}));

const formatDate = (date: Date) => date
    .toISOString()
    .split(':')
    .slice(0, 2)
    .join(':');

const DateTimePicker = ({date, ...props}: Record<string, any>) => (
    <TextField
        value={date instanceof Date ? date.toISOString().replace('Z', '') : date}
        type={"datetime-local"}
        InputLabelProps={{
            shrink: true,
        }}
        {...props}/>
);

export default function TextFieldDateTime() {
    const classes = useStyles();
    const [datetime, setDateTime] = useState(new Date());

    const onChangeDate = (e: any) => setDateTime(new Date(`${e.target.value}Z`));

    return (
        <DateTimePicker
            date={formatDate(datetime)}
            onChange={onChangeDate}
            label={"My Date/Time"}
            className={classes.textField}
        />
    );
}
