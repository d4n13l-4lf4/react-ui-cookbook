import {makeStyles} from "@material-ui/core/styles";
import {useState} from "react";
import {Grid, TextField} from "@material-ui/core";

const useStyles = makeStyles((theme: any) => ({
    container: { margin: theme.spacing(2) },
}));

export default function AutocompleteField() {
    const classes = useStyles();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Grid container spacing={4} className={classes.container}>
            <Grid item>
                <TextField
                    id={"username"}
                    label={"Username"}
                    autoComplete={"username"}
                    InputProps={{name: 'username'}}
                    value={username}
                    onChange={e => setUsername(e.target.value)}/>
            </Grid>
            <Grid item>
                <TextField
                id={"password"}
                type={"password"}
                label={"Password"}
                autoComplete={"current-password"}
                value={password}
                onChange={e => setPassword(e.target.value)}/>
            </Grid>
        </Grid>
    );
}
