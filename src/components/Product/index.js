import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { addToCart } from '../../features/Cart/CartSlice'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
        width: 170,
        margin: 'auto'
    },
});

export default function Product(props) {
    const classes = useStyles();
    const product = props.product;
    const [like, setLike] = useState(true)
    const dispatch = useDispatch()
    const history = useHistory()
    const handleClickLike = () => {
        setLike(!like)
    }
    const handleAddToCart = () => {
        const action = addToCart({
            _id: product._id,
            product,
            quantity: 1
        })
        dispatch(action)
    }
    const handleNavigateToDetail = () => {
        history.push(`/detail/${product._id}`)
    }
    return (
        <Card className={classes.root}>
            <CardActionArea
                onClick={handleNavigateToDetail}
            >
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
                        {product.description}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {product.price}.00$
                    </Typography>
                </CardContent>
            </CardActionArea>
            {
                like ?
                    <CardActions>
                        <Button size="medium" color="default" style={{ background: '#3498db' }} onClick={handleClickLike}>
                            Like
                        </Button>
                        <Button
                            size="medium"
                            color="primary"
                            style={{ background: 'lightgray' }}
                            onClick={handleAddToCart}
                        >
                            Add To Cart
                        </Button>
                    </CardActions>
                    :
                    <CardActions style={{
                        background: 'orange'
                    }}>
                        <Button size="medium" color="primary" style={{ background: 'lightblue' }} onClick={handleClickLike}>
                            UnLike
                        </Button>
                        <Button
                            size="medium"
                            color="primary"
                            style={{ background: 'lightgray' }}
                            onClick={handleAddToCart}
                        >
                            Add To Cart
                        </Button>
                    </CardActions>

            }

        </Card>
    )
}
