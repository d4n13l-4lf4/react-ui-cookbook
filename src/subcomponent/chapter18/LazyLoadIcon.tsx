import {lazy, Suspense} from "react";
import {createStyles, Theme} from "@material-ui/core/styles";
import {CircularProgress, withStyles} from "@material-ui/core";

/**
 * There are themed icons imported by shape inside paths.
 * For example, material-ui/core/AccessibilityRounded.
 */

const categories = {
    Action: [
        lazy(() => import("@material-ui/icons/ThreeDRotation")),
        lazy(() => import("@material-ui/icons/Accessibility"))
    ],
    Alert: [
        lazy(() => import('@material-ui/icons/AddAlert')),
    ]
}

const styles = (theme: Theme) => createStyles({
    icon: { margin: theme.spacing(3) },
});

const LazyLoadIcon = withStyles(styles)(
    ({ category, classes }: Record<string, any>) => (
        <Suspense fallback={<CircularProgress />}>
            {
                // @ts-ignore
                categories[category].map((Icon: any, index: number) => (
                    <Icon key={index} className={classes.icon} />
                ))
            }
        </Suspense>
    )
);


export default LazyLoadIcon;
