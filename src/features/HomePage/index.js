import { makeStyles } from '@material-ui/core'
import React from 'react'
import Banner from '../../components/Banner'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ProductByCatalog from './ProductByCatalog';

const useStyle = makeStyles((theme) => ({
    root: {
        "& .MuiTabs-root": {
            flexGrow: 1,
            background: 'lightgray',
            margin: '1rem 0'
        },
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

export default function HomePage() {
    const classes = useStyle()
    const [value, setValue] = React.useState(0);
    const [cataName, setCataName] = React.useState('man');

    const handleChange = (event, newValue) => {
        setValue(newValue);
        if (newValue === 0) {
            setCataName('man')
        } else if (newValue === 1) {
            setCataName('woman')
        } else {
            setCataName('design')
        }
    };
    return (
        <div className={classes.root}>
            <Banner />
            <Paper>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="Man" />
                    <Tab label="Woman" />
                    <Tab label="Design" />
                </Tabs>
            </Paper>
            <Paper className={classes.boxLarger}>
                <ProductByCatalog nameCata={cataName} />
            </Paper>
        </div >
    )
}
