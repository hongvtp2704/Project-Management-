import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { cartItemsCountSelector } from '../../features/Cart/selectors';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    active: {
        color: 'red'
    },
    inActive: {
        color: 'white',
        padding: '0.3rem 1rem',
    },
    logo: {
        maxWidth: "50px"
    }
}));

export default function Header() {
    const classes = useStyles();
    const cartItemsCount = useSelector(cartItemsCountSelector)
    const userName = useSelector(state => state.login.currentUserName)

    return (
        <div className={classes.root}>
            <AppBar position="sticky" color="transparent">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <NavLink to="/">
                            <img src="images/logo.png" className={classes.logo} alt="logo" />
                        </NavLink>
                    </Typography>
                    <Button
                        component={NavLink}
                        to="/signUp"
                        activeClassName={classes.active}
                    >
                        Sign Up
                    </Button>
                    <Button
                        component={NavLink}
                        to="/logIn"
                        activeClassName={classes.active}
                    >
                        Login
                    </Button>
                    <Button
                        component={NavLink}
                        to="/cart"
                        activeClassName={classes.active}
                    >
                        <Badge badgeContent={cartItemsCount} color="secondary">
                            <ShoppingCartIcon />
                        </Badge>
                    </Button>
                    {
                        userName &&
                        <Avatar>{userName}</Avatar>
                    }
                </Toolbar>
            </AppBar>
        </div>
    )
}
