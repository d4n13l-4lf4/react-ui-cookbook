import React, {Fragment, useState} from "react";
import {Button, Snackbar} from "@material-ui/core";

const withMessage = (Wrapped: any) => {
    return function WithMessage(props: Record<string, any>) {
        const [queue, setQueue] = useState([]);
        const [open, setOpen] = useState(false);
        const [message, setMessage] = useState('');

        const sendMessage = (msg: string) => {
            const newQueue = [...queue, msg];
            if (newQueue.length === 1) {
                setOpen(true);
                setMessage(msg)
            }
        };

        const onClose = () => setOpen(false);

        const onExit = () => {
            const [msg, ...rest] = queue;
            if (msg) {
                setQueue(rest);
                setOpen(true);
                setMessage(msg);
            }
        }

        return (
            <Fragment>
                <Wrapped message={sendMessage} {...props} />
                <Snackbar
                    key={message}
                    open={open}
                    autoHideDuration={4000}
                    onClose={onClose}
                    onExit={onExit}/>
            </Fragment>
        );
    };
}

const QueuingSnackbars = withMessage(({ message }: Record<string, any>) => {
   const [counter, setCounter] = useState(0);

   const onClick = () => {
     const newCounter = counter + 1;
     setCounter(newCounter);
     message(`Message ${newCounter}`);
   };

    return <Button onClick={onClick}>Message</Button>
});

export default QueuingSnackbars;
