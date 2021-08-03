import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import SendIcon from '@material-ui/icons/Send';


const useStyle = makeStyles((theme) => ({
    root: {
        margin: 'auto',
        width: '90%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    card: {
        width: 600,
        margin: '3rem 0',
    },
    media: {
        height: 140,
        width: '30%',
        margin: 'auto'
    },
    boxComment: {
        width: '100%'
    },
    button: {
        margin: theme.spacing(1),
        width: '6rem'
    },
    textField: {
        height: 'rem'
    }
}))

export default function ProductDetail(props) {
    const classes = useStyle()
    const id = props.match.params.id
    const [product, setProduct] = useState({})

    useEffect(() => {
        let url = 'http://localhost:3500/products/';
        fetch(url + id)
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={product.image}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {product.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Category: {product.idCata}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Description: {product.description}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Price: {product.price}.00$
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            {/* <Card className={classes.boxComment}>
                <Typography variant="h5" component="h2">Comment</Typography>
                <form
                    className={classes.form}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="outlined-basic"
                        label="Comment"
                        variant="outlined"
                        className={classes.textField}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        endIcon={<SendIcon />}
                    >
                        Send
                    </Button>
                </form>
            </Card> */}
        </div>
    )
}
