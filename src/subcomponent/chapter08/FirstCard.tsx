import {createStyles, withStyles} from "@material-ui/core/styles";
import {Card, CardContent, Typography} from "@material-ui/core";


const styles = (theme: any) => createStyles({
   card: {
       maxWidth: 400,
   },
    content: {
       marginTop: theme.spacing(2),
    }
});

const MainContent = withStyles(styles)(({ classes }: Record<string, any>) => (
   <Card className={classes.card}>
       <CardContent>
           <Typography variant={"h4"}>Subject Title</Typography>
           <Typography variant={"subtitle1"}>A little more about subject</Typography>
           <Typography className={classes.content}>
               Even more information on the subject, contained within the card. You can fit a lot of information here, but don't try to overdo it.
           </Typography>
       </CardContent>
   </Card>
));


export default MainContent;
