import {makeStyles} from "@material-ui/core/styles";
import {useState} from "react";
import {Grid, TextField} from "@material-ui/core";

const useStyles = makeStyles((theme: any) => ({
    container: { margin: theme.spacing.unit * 2 }
}));

export default function ControllingInputWithState() {
    const classes = useStyles();
    const [inputs, setInputs] = useState([
        { id: 'first', label: 'First', value: '' },
        { id: 'second', label: 'Second', value: '' },
        { id: 'third', label: 'Third', value: '' },
    ]);

    const onChange = ({ target: {id, value} }: Record<string, any>) => {
      const newInputs = [...inputs];
      const index = inputs.findIndex(input => input.id === id);
      newInputs[index] = { ...inputs[index], value };

      setInputs(newInputs);
    };

    return (
        <Grid container spacing={4} className={classes.container}>
            {
                inputs
                    .map((input: Record<string, any>) => (
                        <Grid item key={input.id}>
                            <TextField
                            id={input.id}
                            label={input.label}
                            value={input.value}
                            onChange={onChange}/>
                        </Grid>
                    ))
            }
        </Grid>
    );
}
