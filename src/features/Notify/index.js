import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function Notify() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return (
        <div>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="h2">
                        Project overview
                    </Typography>
                    <Typography color="textSecondary">
                        1: Home Page
                    </Typography>
                    <Typography variant="body2" component="p">
                        Banner: Carousel <br></br>
                        Show Product by Category <br></br>
                        Like Button change background color <br></br>
                    </Typography>
                    <Typography color="textSecondary">
                        2: Cart
                    </Typography>
                    <Typography variant="body2" component="p">
                        Show item <br></br>
                        Increase or decrease the amount <br></br>
                        Delete Item <br></br>
                        Mini Cart<br></br>
                        Save date in Redux <br></br>
                        Total cart
                    </Typography>
                    <Typography color="textSecondary">
                        3: Sign-up Login
                    </Typography>
                    <Typography variant="body2" component="p">
                        Validate Form (required, username and password not match, username already exists) <br></br>
                        SignUp <br></br>
                        Login <br></br>
                        Login with Google<br></br>
                        Save username in Redux <br></br>
                        Save token in Local Storage
                    </Typography>
                    <Typography color="textSecondary">
                        3: API
                    </Typography>
                    <Typography variant="body2" component="p">
                        Rest-full API By Node JS<br></br>
                        Hash password <br></br>
                        Token <br></br>
                    </Typography>
                </CardContent>
            </Card>
        </div >
    )
}
