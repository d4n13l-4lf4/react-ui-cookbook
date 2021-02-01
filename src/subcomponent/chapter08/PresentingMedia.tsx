import {createStyles, withStyles} from "@material-ui/core/styles";
import {Card, CardContent, CardHeader, CardMedia, Typography} from "@material-ui/core";

const styles = (theme: any) => createStyles({
    card: {
        maxWidth: 322,
    },
    media: {
        width: 322,
        height: 322,
    },
    header: {
        textAlign: 'center',
    }
});

const PresentingMedia = withStyles(styles)(
    ({ classes }: Record<string, any>) => (
        <Card className={classes.card}>
            <CardHeader className={classes.header} title={"Graperfruit"} subheader={"Red"} />
                <CardMedia
                    className={classes.media}
                    image={"graperfruit-slice-332-332.jpg"}
                    title={"Graperfruit"}
                />
                <CardContent>
                    <Typography>Mmmm. Grapefruit.</Typography>
                </CardContent>
        </Card>
    )
);

export default PresentingMedia;
