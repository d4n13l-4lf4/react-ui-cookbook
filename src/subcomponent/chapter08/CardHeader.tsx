import {createStyles, withStyles} from "@material-ui/core/styles";
import {Avatar, Card, CardContent, CardHeader, Typography} from "@material-ui/core";
import {Person} from "@material-ui/icons";

const styles = (theme: any) => createStyles({
    card: {
        maxWidth: 400,
    }
});

const Cardheader = withStyles(styles)(({ classes }: Record<string, any>) => (
    <Card className={classes.card}>
        <CardHeader
            title={"Ron Swanson"}
            subheader={"Legend"}
            avatar={<Avatar><Person /></Avatar>} />
        <CardContent>
            <Typography variant={"caption"}>Joined 2009</Typography>
            <Typography>
                Some filler text about the user. There doesn't have to be a lot - just enough so that the text spans at least two lines.
            </Typography>
        </CardContent>
    </Card>
));


export default Cardheader;
