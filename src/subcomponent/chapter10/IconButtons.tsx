import {useState} from "react";
import {Grid, IconButton} from "@material-ui/core";
import {Mic, MicOff, VolumeOff, VolumeUp} from "@material-ui/icons";


export default function IconButtons({ iconColor }: Record<string, any>) {
    const [mic, setMic] = useState(true);
    const [volume, setVolume] = useState(true);

    return (
        <Grid container>
            <Grid item>
                <IconButton color={iconColor} onClick={() => setMic(mic)}>
                    {mic ? <Mic /> : <MicOff />}
                </IconButton>
            </Grid>
            <Grid item>
                <IconButton color={iconColor} onClick={() => setVolume(!volume)}>
                    {volume ? <VolumeUp /> : <VolumeOff />}
                </IconButton>
            </Grid>
        </Grid>
    );
}
