import React from 'react'
import Carousel from 'react-elastic-carousel';
import { makeStyles } from '@material-ui/core'

const useStyle = makeStyles((theme) => ({
    banner: {
        maxHeight: '90vh'
    },
    '& .dTGAUq': {
        margin: 0
    },
    carousel: {
        '&& .dTGAUq': {
            margin: 0
        },
        // '&& .xzcEF': {
        //     marginTop: 0
        // }
    }
}))


export default function Banner() {
    const classes = useStyle()
    const srcBanner = ['BN 2.png', 'bn 3-01.png', 'BN.png'];
    return (
        <div>
            <Carousel
                enableAutoPlay
                autoPlaySpeed={3000}
                showArrows={false}
                className={classes.carousel}
            >
                {
                    srcBanner.map((src, index) =>
                        <img
                            key={index}
                            className={classes.banner}
                            src={`images/${src}`} alt="banner"
                        />
                    )
                }
            </Carousel>
        </div>
    )
}
