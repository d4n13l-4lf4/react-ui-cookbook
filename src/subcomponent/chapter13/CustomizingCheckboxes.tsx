import {AccountBalance, AccountBalanceOutlined, Backup, BackupOutlined, Build, BuildOutlined} from "@material-ui/icons";
import {useEffect, useState} from "react";
import {Checkbox, FormControlLabel, FormGroup} from "@material-ui/core";

const initialItems = [
    { name: 'AccountBalance', Icon: AccountBalanceOutlined, CheckedIcon: AccountBalance },
    { name: 'Backup', Icon: BackupOutlined, CheckedIcon: Backup },
    { name: 'Build', Icon: BuildOutlined, CheckedIcon: Build }
];

export default function CustomizingCheckboxItems() {
    const [items, setItems] = useState({});

    useEffect(() => {
        setItems(
            initialItems
                .reduce((state, item) => ({...state, [item.name]: false}), {})
        );
    }, []);

    const onChange = (e: any) => {
        setItems({ [e.target.name]: e.target.checked });
    };

    return (
        <FormGroup>
            {
                initialItems
                    .map(({name, Icon, CheckedIcon}: Record<string, any>, index: number) => (
                        <FormControlLabel
                            color={"primary"}
                            key={index}
                            control={
                                <Checkbox
                                    // @ts-ignore
                                    checked={items[name]}
                                    onChange={onChange}
                                    inputProps={{ name }}
                                    icon={<Icon fontSize={"small"} />}
                                    checkedIcon={<CheckedIcon fontSize={"small"}/>}/>
                            }
                            label={name}
                        />
                    ))
            }
        </FormGroup>
    );
}
