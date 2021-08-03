import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { updateUserName } from './LoginSlice';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function LogIn() {
    const classes = useStyles();
    const dispatch = useDispatch()
    const history = useHistory()
    const {
        register,
        handleSubmit,
        formState: {
            errors
        },
        setError,
        reset
    } = useForm()

    const onSubmit = async (data) => {
        let url = 'http://localhost:3500/users/login';
        const response = await fetch(url, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        const jsonResponse = await response.json()
        if (response.status === 401) {
            setError("userName", { type: "string", message: jsonResponse.message })
        } else if (response.status === 402) {
            setError("password", { type: "string", message: jsonResponse.message })
        } else {
            const action = updateUserName({
                name: jsonResponse.userName
            })
            dispatch(action)

            localStorage.setItem("token", jsonResponse.token)
            alert("Login Succesfully")
            reset()
            history.push("/")
        }
    }


    return (
        <Container component="main" maxWidth="xs" style={{ marginTop: '100px', marginBottom: '110px' }}>
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Log-in
                </Typography>
                <form
                    className={classes.form}
                    noValidate
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="userName"
                        label="User Name"
                        name="userName"
                        autoComplete="userName"
                        autoFocus
                        {...register("userName", { required: "User Name is Required" })}
                    />
                    {
                        errors.userName &&
                        <p
                            style={{
                                color: 'red',
                                margin: 0
                            }}
                        >{errors.userName.message}
                        </p>
                    }
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        {...register("password", { required: "Password is Required" })}
                    />
                    {
                        errors.password &&
                        <p
                            style={{
                                color: 'red',
                                margin: '0'
                            }}>
                            {errors.password.message}
                        </p>
                    }
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <NavLink to="/signUp">
                                "Don't have an account? Sign Up"
                            </NavLink>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}
