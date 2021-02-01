import React from "react";
import {Button, Grid, IconButton} from "@material-ui/core";
import {Add} from "@material-ui/icons";

const MyButton = ({ fab, ...props }: Record<string, any>) => {
    const [child] = React.Children.toArray(props.children);
    let ButtonComponent: any;

    if (React.isValidElement(child) && fab) {
        ButtonComponent = IconButton;
    } else if (React.isValidElement(child)) {
        ButtonComponent = IconButton;
    } else {
        ButtonComponent = Button;
    }

    return <ButtonComponent {...props} />
}

export default function ButtonResizeIcon({ size, color }: Record<string, any>) {
    return (
        <Grid container spacing={2} alignItems={"center"}>
            <Grid item>
                <MyButton variant={"contained"} size={size} color={color}>
                    Add
                </MyButton>
            </Grid>
            <Grid item>
                <MyButton size={size} color={color}>
                    <Add />
                </MyButton>
            </Grid>
            <Grid item>
                <MyButton fab size={size} color={color}>
                    <Add />
                </MyButton>
            </Grid>
        </Grid>
    );
}
