import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {Button, MuiThemeProvider} from "@material-ui/core";

const defaultTheme = createMuiTheme();

const theme = createMuiTheme({
    overrides: {
        MuiButton: {
            root: {
                margin: 16,
            },
            contained: {
                paddingTop: defaultTheme.spacing(2),
                paddingBottom: defaultTheme.spacing(2),
            },
            containedPrimary: {
                paddingLeft: defaultTheme.spacing(4),
                paddingRight: defaultTheme.spacing(4),
            }
        }
    }
});


const StylesTheme = ({ classes }: Record<string, any>) => (
  <MuiThemeProvider theme={theme}>
      <Button>My Default Button</Button>
      <Button variant={"contained"}>My Contained Button</Button>
      <Button variant={"contained"} color={"primary"}>
          My Contained Primary Button
      </Button>
  </MuiThemeProvider>
);

export default StylesTheme;
