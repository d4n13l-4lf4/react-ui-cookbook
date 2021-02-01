import {useState} from "react";
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@material-ui/core";
import {CardTravel, CardTravelOutlined} from "@material-ui/icons";

export default function RadioButtonTypes() {
    const [value, setValue] = useState('train');

    const onChange = (e: any) => {
        setValue(e.target.value);
    };

    return (
        <FormControl component={"fieldset"}>
            <FormLabel component={"label"}>Travel Mode</FormLabel>
            <RadioGroup name={"travel"} value={value} onChange={onChange} row>
                <FormControlLabel
                    value={"car"}
                    control={
                        <Radio
                            color={"primary"}
                            icon={<CardTravelOutlined />}
                            checkedIcon={<CardTravel />}/>
                    }
                    label={"Car"}
                    labelPlacement={"bottom"}
                />
            </RadioGroup>
        </FormControl>
    );
}
