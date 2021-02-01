import {Snackbar} from "@material-ui/core";

const SimpleSnackBar = () => <Snackbar open={true} message={"Test"} ContentProps={{ variant: 'outlined' }} />;

export default SimpleSnackBar;
