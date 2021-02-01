import {
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    List,
    ListItem, ListItemText,
    Typography
} from "@material-ui/core";
import {Fragment, useState} from "react";

const CheckboxGroup = ({ values, label, onChange}: Record<string, any>) => (
    <FormControl component={"fieldset"}>
        <FormLabel component={"legend"}>{label}</FormLabel>
        <FormGroup>
            {
                values
                    .map((value: any, index: number) => (
                        <FormControlLabel
                            key={index}
                            control={
                                <Checkbox
                                    checked={value.checked}
                                    onChange={onChange(index)
                                    }/>
                            }
                            label={value.label}
                        />
                    ))
            }
        </FormGroup>
    </FormControl>
);

export default function CheckboxAbstraction() {
    const [values, setValues] = useState([
        { label: 'First', checked: false },
        { label: 'Second', checked: false },
        { label: 'Third', checked: false }
    ]);

    const onChange = (index: number) => ({ target: { checked }}: Record<string, any>) => {
        const newValues = [...values];
        const value = values[index];

        newValues[index] = {...value, checked};

        setValues(newValues);
    }

    return (
        <Fragment>
            <CheckboxGroup
                label={"Choices"}
                values={values}
                onChange={onChange}
            />
            <Typography variant={"h6"}>Selection</Typography>
            <List>
                {
                    values
                        .filter((value: any) => value.checked)
                        .map((value: any, index: number) => (
                            <ListItem key={index}>
                                <ListItemText>{value.label}</ListItemText>
                            </ListItem>
                        ))
                }
            </List>
        </Fragment>
    );
}
