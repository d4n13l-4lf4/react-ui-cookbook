import {useState} from "react";
import {IconButton, InputAdornment, TextField} from "@material-ui/core";
import {Visibility, VisibilityOff} from "@material-ui/icons";

function PasswordField(props: Record<string, any>) {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        setVisible(!visible);
    };

    return (
        <TextField
            type={visible ? 'text' : 'password'}
            InputProps={{
                endAdornment: (
                    <InputAdornment position={"end"}>
                        <IconButton onClick={toggleVisibility}>
                            {visible ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                )
            }}
            {...props}
        />
    );
}

export default function InputAdornments() {
    const [password, setPassword] = useState('');

    return (
        <PasswordField
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}/>
    );
}
