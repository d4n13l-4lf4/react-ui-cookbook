import {makeStyles} from "@material-ui/core/styles";
import MaskedInput from "react-text-mask";
import {Fragment, useState} from "react";
import {TextField} from "@material-ui/core";

const useStyles = makeStyles((theme: any) => ({
    input: { margin: theme.spacing.unit * 3 },
}));

const PhoneInput = ({ inputRef, ...props }: Record<string, any>) => (
    <MaskedInput
        {...props}
        ref={ref => { inputRef(ref ? ref.inputElement : null);
        }}
        mask={[
            '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/
        ]}
        placeholderChar={'\u2000'}
    />
)

export default function InputMasking() {
    const classes = useStyles();
    const [phone, setPhone] = useState('');

    return (
        <Fragment>
            <TextField
            label={"Phone"}
            className={classes.input}
            value={phone}
            onChange={e => setPhone(e.target.value)}
            InputProps={{ inputComponent: PhoneInput }}/>
        </Fragment>
    );
}
