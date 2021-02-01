import {InputAdornment, TextField} from "@material-ui/core";
import {CheckCircle, Error} from "@material-ui/icons";

export const ValidationField = (props: Record<string, any>) => {
    const {isValid, ...rest} = props;
    const empty = props.value === '';
    const valid = isValid(props.value);
    let startAdornment;

    if (empty) {
        startAdornment = null;
    } else if (valid) {
        startAdornment = (
            <InputAdornment position={"start"}>
                <CheckCircle color={"primary"} />
            </InputAdornment>
        )
    } else {
        startAdornment = (
            <InputAdornment position={"start"}>
                <Error color={"error"} />
            </InputAdornment>
        )
    }

    return (
        <TextField
            {...rest}
            error={!empty && !valid}
            InputProps={{ startAdornment }}/>
    );
}
