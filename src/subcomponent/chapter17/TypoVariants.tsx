import {Typography} from "@material-ui/core";
import {Fragment} from "react";

const MyTypography = ({ variant, ...props }: Record<string, any>) => (
    <Typography variant={variant || "inherit"} {...props} />
);

const TypesOfTypography = () => (
    <Fragment>
        <Typography variant={"h1"}>h1 variant</Typography>
        <Typography variant={"h2"}>h2 variant</Typography>
        <Typography variant={"h3"}>h3 variant</Typography>
        <Typography variant={"h4"}>h4 variant</Typography>
        <Typography variant={"h5"}>h5 variant</Typography>
        <Typography variant={"h6"}>h6 variant</Typography>
        <Typography variant={"subtitle1"}>subtitle1 variant</Typography>
        <Typography variant={"subtitle2"}>subtitle2 variant</Typography>
        <Typography variant={"body1"}>body1 variant</Typography>
        <Typography variant={"body2"}>body2 variant</Typography>
        <Typography variant={"subtitle1"}>subtitle1 variant</Typography>
        <Typography variant={"caption"}>caption variant</Typography>
        <Typography variant={"button"}>button variant</Typography>
        <Typography variant={"overline"}>overline variant</Typography>
        <Typography variant={"overline"} component={"div"}>
            <Typography variant={"inherit"}>
                inherited title variant (title does not exists as variant)
            </Typography>
            <Typography variant={"caption"}>
                overridden caption variant
            </Typography>
        </Typography>
        <MyTypography variant={"overline"} component={"div"}>
            <MyTypography>inherited title (title does not exists as variant)</MyTypography>
            <MyTypography variant={"caption"}>
                overridden caption variant
            </MyTypography>
        </MyTypography>
    </Fragment>
);

export default TypesOfTypography;
