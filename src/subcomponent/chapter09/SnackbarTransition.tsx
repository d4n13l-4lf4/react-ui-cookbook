import {Button, Fade, Grid, Grow, Slide, Snackbar} from "@material-ui/core";
import {Fragment, useState} from "react";

const MySnackbar = ({ transition, direction, ...rest }: Record<string, any>) => (
    <Snackbar
        TransitionComponent={
            // @ts-ignore
            {
                slide: Slide, grow: Grow, fade: Fade
            }[transition]
        }
        // @ts-ignore
        TransitionProps={{ direction }}
        {...rest}
    />
);

export default function SnackbarTransitions() {
    const [first, setFirst] = useState(false);
    const [second, setSecond] = useState(false);
    const [third, setThird] = useState(false);
    const [fourth, setFourth] = useState(false);

    return (
        <Fragment>
            <Grid container spacing={8}>
                <Grid item>
                    <Button variant={"contained"} onClick={() => setFirst(true)}>
                        Slide Down
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant={"contained"} onClick={() => setSecond(true)}>
                        Slide up
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant={"contained"} onClick={() => setThird(true)}>
                        Grow
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant={"contained"} onClick={() => setFourth(true)}>
                        Fade
                    </Button>
                </Grid>
            </Grid>
            <MySnackbar
                open={first}
                onClose={setFirst(false)}
                autoHideDuration={2000}
                message={"Slide Down"}
                transition={"slide"}
                direction={"down"}/>
            <MySnackbar
                open={second}
                onClose={setSecond(false)}
                autoHideDuration={2000}
                message={"Slide Up"}
                transition={"slide"}
                direction={"up"}/>
            <MySnackbar
                open={third}
                onClose={setThird(false)}
                autoHideDuration={2000}
                message={"Grow"}
                transition={"grow"}
            />
            <MySnackbar
                open={fourth}
                onClose={setFourth(false)}
                autoHideDuration={2000}
                message={"Fade"}
                transition={"fade"}
            />
        </Fragment>
    );
}
