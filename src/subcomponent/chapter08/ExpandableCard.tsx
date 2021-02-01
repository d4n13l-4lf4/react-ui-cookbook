import {makeStyles} from "@material-ui/core/styles";
import {ContactMail, ContactPhone, ExpandLess, ExpandMore, Person} from "@material-ui/icons";
import {useState} from "react";
import {Avatar, Card, CardActions, CardContent, CardHeader, Collapse, IconButton, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme: any) => ({
    card: {
        maxWidth: 400,
    },
    expand: {
        marginLeft: 'auto',
    },
}));

const ExpandIcon = ({ expanded }: Record<string, any>) =>
    expanded ? <ExpandLess /> : <ExpandMore />;

export default function ExpandableCards() {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.card}>
            <CardHeader
                title={"Ron Swanson"}
                subhecader={"Legend"}
                avatar={<Avatar><Person /></Avatar>}/>
            <CardContent>
                <Typography variant="caption">Joined 2009</Typography>
                <Typography> Some filler text about the user. There doesn't have to be a lot - just enough so that the text spans at least two lines.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton><ContactMail /></IconButton>
                <IconButton><ContactPhone /></IconButton>
                <IconButton
                    className={classes.expand}
                    onClick={toggleExpanded}>
                    <ExpandIcon expanded={expanded} />
                </IconButton>
            </CardActions>
            <Collapse in={expanded}>
                <CardContent>
                    <Typography> Even more filler text about the user. It doesn't fit in the main content area of the card, so this is what the user will see when they click the expand button.
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
