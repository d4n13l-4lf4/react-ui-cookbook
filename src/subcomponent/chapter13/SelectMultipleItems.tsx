import {makeStyles} from "@material-ui/core/styles";
import {useState} from "react";
import {Chip, FormControl, Input, InputLabel, MenuItem, Select} from "@material-ui/core";

const options = [
    { id: 1, label: 'First' },
    { id: 2, label: 'Second' },
    { id: 3, label: 'Third' },
    { id: 4, label: 'Fourth' },
    { id: 5, label: 'Fifth' }
];

const useStyles = makeStyles((theme: any) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 100,
        maxWidth: 280,
    },
    chip: {

    },
}));

function Selected({ selected }: Record<string, any>) {
    const classes = useStyles();

    return selected
        .map((value: any) => (
            <Chip
                key={value}
                // @ts-ignore
                label={options.find((option: any) => option.id === value).label}
                className={classes.chip}/>
        ));
}

export default function SelectingMultipleItems() {
    const classes = useStyles();
    const [selected, setSelected] = useState([]);

    const onChange = (e: any) => {
        setSelected(e.target.value);
    };

    return (
        <FormControl className={classes.formControl}>
            <InputLabel htmlFor={"multi"}>Value</InputLabel>
            <Select
                multiple
                value={selected}
                onChange={onChange}
                input={<Input id={"multi"} />}
                renderValue={(selected: any) => <Selected selected={selected} />}
            >
                {
                    options
                        .map((option: any) => (
                            <MenuItem key={option.id} value={option.id}>
                                {option.label}
                            </MenuItem>
                        ))
                }
            </Select>
        </FormControl>
    );
}
