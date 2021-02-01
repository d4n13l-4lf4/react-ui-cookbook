import {createStyles, IconButton, MenuItem, Paper, Select, TextField, Typography} from "@material-ui/core";
import { ArrowDropDown, Cancel} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";
import {useState} from "react";

const useStyles = makeStyles((theme: any) => createStyles({
    root: {
        flexGrow: 1,
        height: 250,
    },
    input: {
        display: 'flex',
        padding: 0,
    },
    valueContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        flex: 1,
        alignItems: 'center',
        overflow: 'hidden',
    },
    noOptionsMessage: {
        padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`
    },
    singleValue: {
        fontSize: 16,
    },
    placeholder: {
        position: 'absolute',
        left: 2,
        fontSize: 16,
    },
    paper: {
        position: 'absolute',
        zIndex: 1,
        marginTop: theme.spacing(1),
        left: 0,
        right: 0,
    }
}));

const InputComponent = ({ inputRef, ...props }: Record<string, any>) => (
    <div ref={inputRef} {...props} />
);

const Control = (props: Record<string, any>) => (
    <TextField
        fullWidth
        InputProps={{
            InputComponent,
            inputProps: {
                className: props.selectProps.classes.input,
                inputRef: props.innerRef,
                children: props.children,
                ...props.innerProps,
            }
        }}
        {...props.selectProps.textFieldProps}
    />
);

const Menu = (props: Record<string, any>) => (
    <Paper
        square
        className={props.selectProps.classes.paper}
        {...props.innerProps}>
        {props.children}
    </Paper>
);

const NoOptionsMessage = (props: Record<string, any>) => (
    <Typography
        color={"textSecondary"}
        className={props.selectProps.classes.noOptionsMessage}
        {...props.innerProps}>
        {props.children}
    </Typography>
);

const Option = (props: Record<string, any>) => (
    <MenuItem
        buttonRef={props.innerRef}
        selected={props.isFocused}
        component={"div"}
        style={{
            fontWeight: props.isSelected ? 500 : 400,
        }}
        {...props.innerProps}>
        {props.children}
    </MenuItem>
);

const Placeholder = (props: Record<string, any>) => (
    <Typography
        color={"textSecondary"}
        className={props.selectProps.classes.placeholder}
        {...props.innerProps}>
        {props.children}
    </Typography>
);

const SingleValue = (props: Record<string, any>) => (
    <Typography
        className={props.selectedProps.classes.singleValue}
        {...props.innerProps}>
        {props.children}
    </Typography>
);

const ValueContainer = (props: Record<string, any>) => (
    <div className={props.selectProps.classes.valueContainer}>
        {props.children}
    </div>
);

const IndicatorSeparator = () => null;

const ClearIndicator = (props: Record<string, any>) => (
    <IconButton {...props.innerProps}>
        <Cancel />
    </IconButton>
);

const DropdownIndicator = (props: Record<string, any>) => (
    <IconButton {...props.innerProps}>
        <ArrowDropDown />
    </IconButton>
);

export default function Autocomplete(props: Record<string, any>) {
    const classes = useStyles();
    const [value, setValue] = useState(null);

    return (
        <div className={classes.root}>
            <Select
                value={value}
                // @ts-ignore
                textFieldProps={{
                    label: 'Team',
                    InputLabelProps: {
                        shrink: true,
                    },
                }}
                {...{ ...props, classes }}
            />
        </div>
    );
}

Autocomplete.defaultProps = {
    isClearable: true,
    components: {
        Control,
        Menu,
        NoOptionsMessage,
        Option,
        Placeholder,
        SingleValue,
        ValueContainer,
        IndicatorSeparator,
        ClearIndicator,
        DropdownIndicator,
    },
    options: [
        { label: 'Boston Bruins', value: 'BOS' },
        { label: 'Buffalo Sabres', value: 'BUF' },
        { label: 'Detroit Red Wings', value: 'DET' },
        { label: 'Florida Panthers', value: 'FLA' },
        { label: 'Montreal Canadiens', value: 'MTL' },
        { label: 'Ottawa Senators', value: 'OTT' },
        { label: 'Tampa Bay Lightning', value: 'TBL' },
        { label: 'Toronto Maple Leafs', value: 'TOR' },
        { label: 'Carolina Hurricanes', value: 'CAR' },
        { label: 'Columbus Blue Jackets', value: 'CBJ' },
        { label: 'New Jersey Devils', value: 'NJD' },
        { label: 'New York Islanders', value: 'NYI' },
        { label: 'New York Rangers', value: 'NYR' },
        { label: 'Philadelphia Flyers', value: 'PHI' },
        { label: 'Pittsburgh Penguins', value: 'PIT' },
        { label: 'Washington Capitals', value: 'WSH' },
        { label: 'Chicago Blackhawks', value: 'CHI' },
        { label: 'Colorado Avalanche', value: 'COL' },
        { label: 'Dallas Stars', value: 'DAL' },
        { label: 'Minnesota Wild', value: 'MIN' },
        { label: 'Nashville Predators', value: 'NSH' },
        { label: 'St. Louis Blues', value: 'STL' },
        { label: 'Winnipeg Jets', value: 'WPG' },
        { label: 'Anaheim Ducks', value: 'ANA' },
        { label: 'Arizona Coyotes', value: 'ARI' },
        { label: 'Calgary Flames', value: 'CGY' },
        { label: 'Edmonton Oilers', value: 'EDM' },
        { label: 'Los Angeles Kings', value: 'LAK' },
        { label: 'San Jose Sharks', value: 'SJS' },
        { label: 'Vancouver Canucks', value: 'VAN' }, { label: 'Vegas Golden Knights', value: 'VGK' }
    ]
};
