import {makeStyles} from "@material-ui/core/styles";
import {useState} from "react";
import ChipInput from "material-ui-chip-input";

const useStyles = makeStyles((theme: any) => ({
    chipInput: { minWidth: 300, }
}));

export default function StandaloneChip() {
    const classes = useStyles();
    const [values, setValues] = useState([]);

    // @ts-ignore
    const onAdd = (chip: any) => setValues([...values, chip]);

    const onDelete = (chip: any, index: number) => setValues(values.slice(0, index).concat(values.slice(index + 1)));

    return (<ChipInput
        className={classes.chipInput}
        helperText={"Type name, hit enter to type another"}
        value={values}
        onAdd={onAdd}
        onDelete={onDelete}
    />);
}
