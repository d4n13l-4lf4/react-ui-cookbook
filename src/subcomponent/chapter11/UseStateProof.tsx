import {Fragment, useState} from "react";
import {Button, Typography} from "@material-ui/core";

const useCount: () => [number, (i: number) => void, () => void] = () => {
    const [count, setCount] = useState(0);

    const doSomething = () => {
        console.log(count);
    }

    return [count, setCount, doSomething];
}

export default function UseStateProof() {
    const [count, setCount, doSomething] = useCount();


    return (
        <Fragment>
            <Typography>Count: {count}</Typography>
            <Button onClick={() => setCount(count + 1)}>Add count</Button>
            <Button onClick={() => doSomething()}>Do something!</Button>
        </Fragment>
    );
}
