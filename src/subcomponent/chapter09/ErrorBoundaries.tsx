import React, {Fragment} from "react";
import {createStyles, withStyles} from "@material-ui/core/styles";
import {Button, Snackbar} from "@material-ui/core";

const styles = (theme: any) => createStyles({
    error: {
        backgroundColor: theme.palette.error.main,
        color: theme.palette.error.contrastText,
    },
});

const ErrorBoundary = withStyles(styles)(
    class extends React.Component<any, any> {
        state = { error: null };

        onClose = () => {
            this.setState({ error: null });
        }

        componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
            this.setState({ error });
        }

        render() {
            const { classes } = this.props;

            return (
                <Fragment>
                    {this.state.error === null && this.props.children}
                    <Snackbar
                        open={Boolean(this.state.error)}
                        message={
                            // @ts-ignore
                            this.state.error != null && this.state.error.toString()
                        }
                        ContentProps={{ classes: { root: classes.error }}}
                    />
                </Fragment>
            );
        }
    }
);

const MyButton = ({ label, throwError }: Record<string, any>) => {
    if (throwError)
        throw new Error("Random error");
    return <Button>{label}</Button>
}

export default () => (
    <Fragment>
        <ErrorBoundary>
            <MyButton label={"First Button"} />
        </ErrorBoundary>
        <ErrorBoundary>
            <MyButton label={"Second Button"} throwError />
        </ErrorBoundary>
    </Fragment>
);
