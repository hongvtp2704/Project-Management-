import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyle = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '50px',
        background: 'lightgray',
        fontSize: '1.2rem',
        lineHeight: '3rem',
        textAlign: 'center',
        marginTop: '3rem'
    }
}))

export default function Footer() {
    const classes = useStyle()
    return (
        <Paper className={classes.root}>
            PS13430 - Võ Thị Phương Hồng
        </Paper>
    )
}
