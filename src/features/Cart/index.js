import React from 'react';
import { cartItemsCountSelector } from './selectors';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import IconButton from '@material-ui/core/IconButton';
import { cartTotalSelector } from './selectors';
import { removeFormCart, plusQuantity, minusQuantity } from './CartSlice';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';


const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    root: {
        width: '90%',
        margin: 'auto'
    },
    title: {
        margin: '1rem 0'
    },
    table: {
        minWidth: 700,
    },
    boxQuantity: {
        display: 'flex',
        justifyContent: 'center',
        maxWidth: '40%',
        alignItems: 'center',
        textAlign: 'center'
    }
});


export default function Cart() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const cartTotal = useSelector(cartTotalSelector)
    const cartItems = useSelector(state => state.cart.cartItems)
    const cartItemsCount = useSelector(cartItemsCountSelector)

    const handlePlusQuantity = (_id) => {
        const action = plusQuantity({
            _id,
            quantity: 1
        })
        dispatch(action)
    }
    const handleMinusQuantity = (_id) => {
        const action = minusQuantity({
            _id,
            quantity: 1
        })
        dispatch(action)
    }

    const handleDeleteItem = (_id) => {
        const action = removeFormCart({
            _id
        })
        dispatch(action)
    }
    return (
        <div className={classes.root}>
            <Typography variant="h4" className={classes.title}>Cart <Typography>({cartItemsCount} item)</Typography></Typography>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="left"></StyledTableCell>
                            <StyledTableCell>Index</StyledTableCell>
                            <StyledTableCell align="left">Name</StyledTableCell>
                            <StyledTableCell align="left">Price</StyledTableCell>
                            <StyledTableCell align="left">Image</StyledTableCell>
                            <StyledTableCell align="left">Quantity</StyledTableCell>
                            <StyledTableCell align="left">Total</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cartItems.map((item, index) => (
                            <StyledTableRow key={item._id}>
                                <StyledTableCell align="left" style={{ maxWidth: "50px" }}>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        className={classes.button}
                                        startIcon={<DeleteIcon />}
                                        onClick={() => handleDeleteItem(item._id)}
                                    >
                                    </Button>
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    {index + 1}
                                </StyledTableCell>
                                <StyledTableCell align="left">{item.product.name}</StyledTableCell>
                                <StyledTableCell align="left">{item.product.price}.00$</StyledTableCell>
                                <StyledTableCell align="left">
                                    <img src={item.product.image} width="100px" />
                                </StyledTableCell>
                                <StyledTableCell align="left">
                                    <Paper className={classes.boxQuantity}>
                                        <IconButton onClick={() => handleMinusQuantity(item._id)}>
                                            <RemoveIcon />
                                        </IconButton>
                                        <Typography>{item.quantity}</Typography>
                                        <IconButton onClick={() => handlePlusQuantity(item._id)}>
                                            <AddIcon />
                                        </IconButton>
                                    </Paper>
                                </StyledTableCell>
                                <StyledTableCell
                                    align="left"
                                    style={{
                                        fontSize: "1.1rem",
                                        fontWeight: "bolder"
                                    }}
                                >
                                    {item.product.price * item.quantity}.00$
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                        <StyledTableRow >
                            <StyledTableCell colSpan="5">
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row" align="right">
                                <Typography variant="h6">Into Money</Typography>
                            </StyledTableCell>
                            <StyledTableCell align="left">
                                <Typography variant="h6">{cartTotal}.00$</Typography>
                            </StyledTableCell>
                        </StyledTableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
