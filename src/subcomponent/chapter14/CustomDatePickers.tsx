import {makeStyles} from "@material-ui/core/styles";
import {useState} from "react";
import {DatePicker, MuiPickersUtilsProvider, TimePicker} from "material-ui-pickers";
import DateFnsUtils from "@date-io/date-fns";
import {Grid} from "@material-ui/core";

const useStyles = makeStyles((theme: any) => ({
    grid: {
        width: '65%'
    }
}));

export default function CustomDatePickers() {
    const classes = useStyles();
    const [datetime, setDatetime] = useState(new Date());

    const onChange = (datetime: any) => setDatetime(datetime);

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container className={classes.grid} justify={"space-around"}>
                <DatePicker
                    margin={"normal"}
                    label={"Date picker"}
                    value={datetime}
                    onChange={onChange}/>
                <TimePicker
                    margin={"normal"}
                    label={"Time picker"}
                    value={datetime}
                    onChange={onChange}/>
            </Grid>
        </MuiPickersUtilsProvider>
    );
}
