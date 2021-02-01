import {makeStyles} from "@material-ui/core/styles";
import {useState} from "react";
import {Grid, TextField} from "@material-ui/core";

const useStyles = makeStyles((theme: any) => ({
    container: { margin: theme.spacing(2), }
}));

const phone_regex: RegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
const email_regex: RegExp = /\S+@\S+\.\S+/;

export default function ValidationErrorDisplay() {
    const classes = useStyles();
    const [inputs, setInputs] = useState([
        {
            id: 'phone',
            label: 'Phone',
            placeholder: '999-999-9999',
            value: '',
            error: false,
            helperText: 'Any valid phone number will do',
            getHelperText: (error: any) =>
                error
                    ? 'Woops. Not a valid phone number'
                    : 'Any valid phone number will do',
            isValid: (phone: string) => phone_regex.test(phone),
        },
        {
            id: 'email',
            label: 'Email',
            placeholder: 'john@acme.com',
            value: '',
            error: false,
            helperText: 'Any valid email address will do',
            getHelperText: (error: any) =>
                error
                    ? 'Woops. Not a valid email address'
                    : 'Any valid email address will do',
            isValid: (email: string) => email_regex.test(email),
        }
    ]);

    const onChange = ({ target: { id, value }}: Record<string, any>) => {
        const newInputs = [...inputs];
        const index = inputs.findIndex(input => input.id === id);
        const input = inputs[index];
        const isValid = input.isValid(value);

        newInputs[index] = {
            ...input,
            value,
            error: !isValid,
            helperText: input.getHelperText(!isValid),
        }

        setInputs(newInputs);
    }

    return (
        <Grid container spacing={4} className={classes.container}>
            {
                inputs.map((input: Record<string, any>) => (
                    <Grid item key={input.id}>
                        <TextField
                            id={input.id}
                            label={input.label}
                            placeholder={input.placeholder}
                            helperText={input.helperText}
                            value={input.value}
                            onChange={onChange}
                            error={input.error}/>
                    </Grid>
                ))
            }
        </Grid>
    );
}
