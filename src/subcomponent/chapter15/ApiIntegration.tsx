import {createStyles, makeStyles} from "@material-ui/core/styles";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    LinearProgress,
    MenuItem,
    Select
} from "@material-ui/core";
import {Fragment, useState} from "react";

const useStyles = makeStyles((theme: any) => createStyles({
    dialog: { minHeight: 200 },
    select: { width: '100%' },
}));

const fetchItems = () => new Promise<Record<string, any>[]>((resolve => {
    setTimeout(() => {
        resolve([
            { id: 1, name: 'Item 1' },
            { id: 2, name: 'Item 2' },
            { id: 3, name: 'Item 3' }
        ])
    }, 2000);
}));

const MaybeLinearProgress = ({loading, ...props}: Record<string, any>) =>
    loading ? <LinearProgress {...props} /> : null;

const MaybeSelect = ({loading, ...props}: Record<string, any>) =>
    loading ? null : <Select {...props} />;

export default function ApiIntegration() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState<Record<string, any>[]>([]);
    const [selected, setSelected] = useState('');

    const onShowItems = async () => {
        setOpen(true);
        setLoading(true);

        const items = await fetchItems();

        setLoading(false);
        setItems(items);
    };

    const onClose = () => setOpen(false);

    const onSelect = (e: any) => setSelected(e.target.value);

    return (
        <Fragment>
            <Button color={"primary"} onClick={onShowItems}>
                Select Item
            </Button>
            <Dialog
                open={open}
                classes={{paper: classes.dialog}}
                maxWidth={"xs"}
                fullWidth>
                <DialogTitle>Select Item</DialogTitle>
                <DialogContent>
                    <MaybeLinearProgress loading={loading} />
                    <MaybeSelect
                        value={selected}
                        onChange={onSelect}
                        className={classes.select}
                        loading={loading}/>
                    <MenuItem value={""}>
                        <em>None</em>
                    </MenuItem>
                    {
                        items
                            .map((item: Record<string, any>) => (
                                <MenuItem key={item.id} value={item.id}>
                                    {item.name}
                                </MenuItem>
                            ))
                    }
                </DialogContent>
                <DialogActions>
                    <Button
                        disabled={loading}
                        onClick={onClose}
                        color={"primary"}>
                        Cancel
                    </Button>
                    <Button
                        disabled={loading}
                        variant={"contained"}
                        onClick={onClose}
                        color={"primary"}>
                        Select
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    );
}
