import React, { useState, useEffect } from 'react'
import Product from '../../../components/Product'
import { makeStyles } from '@material-ui/core'

const useStyle = makeStyles((theme) => ({
    root: {
        "& .MuiCard-root": {
            margin: '1rem',
            width: '25%'
        }
    },
    boxLarger: {
        display: 'flex',
        flexWrap: 'wrap',
    }
}))

export default function ProductByCatalog(props) {
    const classes = useStyle()
    const nameCata = props.nameCata
    const [listProduct, setListProduct] = useState([]);

    useEffect(() => {
        let url = 'http://localhost:3500/products/cate/';
        fetch(url + nameCata)
            .then(res => res.json())
            .then(data => setListProduct(data))
            .catch(err => console.log(err))
    }, [nameCata])

    return (
        <div className={classes.boxLarger}>
            {
                listProduct &&
                listProduct?.map((item, index) => (
                    <Product product={item} key={index} />
                ))
            }
        </div>
    )
}
