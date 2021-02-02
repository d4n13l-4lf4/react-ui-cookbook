import {makeStyles} from "@material-ui/core/styles";
import {Fragment, useState} from "react";
import { FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";

const useStyles = makeStyles((theme: any) => ({
    control: { margin: theme.spacing(2), minWidth: 200, }
}));

export default function ControllingSelectWithState() {
    const classes = useStyles();

    const [categories, setCategories] = useState([
        { label: 'Category 1', id: 1 },
        { label: 'Category 2', id: 2 },
        { label: 'Category 3', id: 3 }
    ]);

    const [products, setProducts] = useState([
        { label: 'Product 1', id: 1, category: 1 },
        { label: 'Product 2', id: 2, category: 1 },
        { label: 'Product 3', id: 3, category: 1 },
        { label: 'Product 4', id: 4, category: 2 },
        { label: 'Product 5', id: 5, category: 2 },
        { label: 'Product 6', id: 6, category: 2 },
        { label: 'Product 7', id: 7, category: 3 },
        { label: 'Product 8', id: 8, category: 3 },
        { label: 'Product 9', id: 9, category: 3 }
    ]);

    const setters = {
        categories: setCategories,
        products: setProducts,
    };

    const collections = { categories, products };

    const onChange = (e: any) => {
        // @ts-ignore
        const setCollection = setters[e.target.name];
        // @ts-ignore
        const collection = collections[e.target.name].map((item: Record<string, any>) => ({
            ...item,
            selected: false,
        }));

        const index = collection.findIndex(
            (item: Record<string, any>) => item.id === e.target.value
        );
        collection[index] = { ...collection[index], selected: true, }
        setCollection(collection);
    };

    const category = categories.find((category:Record<string, any>) => category.selected) || {
        id: ''
    };

    const product = products.find((product: any) => product.selected) || {
        id: '',
    };

    return (
        <Fragment>
            <FormControl className={classes.control}>
                <InputLabel htmlFor={"categories"}>Category</InputLabel>
                <Select
                    value={category.id}
                    onChange={onChange}
                    inputProps={{
                        name: 'categories',
                        id: 'categories'
                    }}>
                    <MenuItem value={""}>
                        <em>None</em>
                    </MenuItem>
                    {
                        categories
                            .map((category: any) => (
                                <MenuItem key={category.id} value={category.id}>
                                    {category.label}
                                </MenuItem>
                            ))
                    }
                </Select>
            </FormControl>
            <FormControl
                className={classes.control}
                disabled={category.id === ''}
            >
                <InputLabel htmlFor={"Products"}>Product</InputLabel>
                <Select
                    value={product.id}
                    onChange={onChange}
                    inputProps={{
                        name: 'products',
                        id: 'values',
                    }}>
                    <MenuItem value={""}>
                        <em>None</em>
                    </MenuItem>
                    {
                        products
                            .filter((product: any) => product.category === category.id)
                            .map((product: any) => (
                                <MenuItem key={product.id} value={product.id}>
                                    {product.label}
                                </MenuItem>
                            ))
                    }
                </Select>
            </FormControl>
        </Fragment>
    );
}
