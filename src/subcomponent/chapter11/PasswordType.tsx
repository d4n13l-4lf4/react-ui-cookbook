import {useState} from "react";
import {TextField} from "@material-ui/core";

export default function PasswordType() {
    const [password, setPassword] = useState('12345');

    const onChange = (e: any) => {
      setPassword(e.target.value);
    };

    return (
        <TextField
            type={"password"}
            label={"Password"}
            value={password}
            onChange={onChange}
        />
    );
}
