import {Bluetooth, BluetoothDisabled, Devices, PowerSettingsNew} from "@material-ui/icons";
import {useState} from "react";
import {IconButton, List, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText} from "@material-ui/core";

const MaybeBluetoothIcon = ({ bluetooth }: Record<string, any>) =>
    bluetooth ? <Bluetooth /> : <BluetoothDisabled />;

function ListControls({ classes }: Record<string, any>) {
    const [items, setItems] = useState([
        { name: 'Device 1', bluetooth: true, Icon: Devices, power: true, },
        { name: 'Device 2', bluetooth: true, Icon: Devices, power: true, },
        { name: 'Device 3', bluetooth: true, Icon: Devices, power: false, },
    ]);

    const onToggleClick = (index: number, prop: string) => () => {
        const newItems = [...items];
        const item = items[index];

        // @ts-ignore
        newItems[index] = { ...item, [prop]: !item[prop] };
        setItems(newItems);
    };

    return (
        <List>
            {
                items
                    .map(({Icon, ...item}: Record<string, any>, index: number) => (
                        <ListItem
                            key={index}
                            button
                            disabled={!item.power}
                        >
                            <ListItemIcon>
                                <Icon />
                            </ListItemIcon>
                            <ListItemText primary={item.name} />
                            <ListItemSecondaryAction>
                                <IconButton
                                    onClick={onToggleClick(index, 'bluetooth')}
                                    disabled={!item.power}
                                >
                                    <MaybeBluetoothIcon bluetooth={item.bluetooth}/>
                                </IconButton>
                                <IconButton onClick={onToggleClick(index, 'power')}>
                                    <PowerSettingsNew />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))
            }
        </List>
    );
}

export default ListControls;
