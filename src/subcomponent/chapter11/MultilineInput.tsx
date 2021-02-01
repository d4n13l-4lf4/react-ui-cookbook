import {useState} from "react";
import {TextField} from "@material-ui/core";

export default function MultilineInput() {
    const [multiline, setMultiline] = useState('');

    return (
        <TextField
            label={"Address"}
            multiline
            value={multiline}
            rows={5}
            onChange={e => setMultiline(e.target.value)}
        />
    );
}
