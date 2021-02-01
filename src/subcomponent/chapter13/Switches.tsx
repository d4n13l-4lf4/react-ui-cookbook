import {FormControl, FormControlLabel, FormGroup, FormLabel, Switch} from "@material-ui/core";
import {useState} from "react";

/**
 * Could be enhanced if it acccepts a checkbox parameter
 * to switch between a Switch component or a Radio component
 */
const SwitchGroup = ({ values, label, onChange }: Record<string, any>) => (
    <FormControl component={"fieldset"}>
        <FormLabel component={"legend"}>{label}</FormLabel>
        <FormGroup>
            {
                values
                    .map((value: any, index: number) => (
                        <FormControlLabel
                            key={index}
                            control={
                                <Switch
                                    checked={value.checked}
                                    onChange={onChange(index)}
                                />
                            }
                            label={value.label}
                        />
                    ))
            }
        </FormGroup>
    </FormControl>
);

export default function ReplacingCheckboxesWithSwitches() {
    const [values, setValues] = useState<Record<string, any>[]>([
        { label: 'First', checked: false },
        { label: 'Second', checked: false },
        { label: 'Third', checked: false }
    ]);

    const onChange = (index: number) => ({ target: { checked }}: Record<string, any>) => {
        const newValues = [...values];
        const value = values[index];

        newValues[index] = {...value, checked};
        setValues(newValues);
    };

    return (
        <SwitchGroup
            label={"Choices"}
            values={values}
            onChange={onChange}/>
    );
}
