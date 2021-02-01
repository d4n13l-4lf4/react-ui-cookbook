import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@material-ui/core";
import {useState} from "react";

const options = [
    { label: 'First', value: 'first' },
    { label: 'Second', value: 'second' },
    { label: 'Third', value: 'third' }
];

const MyRadioGroup = ({value, options, name, label, onChange}: Record<string, any>) => (
    <FormControl component={"fieldset"} disabled>
        <FormLabel component={"legend"}>{label}</FormLabel>
        <RadioGroup
            name={name}
            value={value}
            onChange={onChange}
        >
            {
                options
                    .map((option: any, index: number) => (
                        <FormControlLabel
                            key={index}
                            control={<Radio />}
                            value={option.value}
                            label={option.label}/>
                    ))
            }
        </RadioGroup>
    </FormControl>
);

export default function AbstractingRadioButtonGroups() {
    const [value, setValue] = useState('first');

    const onChange = (e: any) => {
        setValue(e.target.value);
    };

    return (
        <MyRadioGroup
            value={value}
            options={options}
            name={"radio1"}
            label={"Pick one"}
            onChange={onChange}
        />
    );
}
