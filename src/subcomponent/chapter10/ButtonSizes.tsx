import {Button} from "@material-ui/core";

export default function ButtonSizes({ size, color }: Record<string, any>) {
    return (
        <Button variant={"contained"} size={size} color={color}>
            Add
        </Button>
    );
}
