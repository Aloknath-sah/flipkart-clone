import { Grid } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'
import styles from './Footer.module.css'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor:'#212121',
        padding: '2%',
        marginTop:'15%'
    },
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}spacing={4} >
            <Grid item xs={3} md={3} lg={2}  className={styles.root1} >
            <div className={styles.heading} >About</div>
                <Link>Contact Us</Link>
                <Link>About Us</Link>
                <Link>Careers</Link>
                <Link>Flipkart Stories</Link>
                <Link>Press</Link>
                <Link>Flipkart Wholesale</Link>
            </Grid>
            <Grid item xs={3} md={3} lg={2} className={styles.root1}  spacing={2}>
            <div className={styles.heading} >Help</div>
                <Link>Payments</Link>
                <Link>Shipping</Link>
                <Link>Cancellation and returns</Link>
                <Link>Faq</Link>
                <Link>Report infrigment</Link>
            </Grid>
            <Grid item xs={3} md={3} lg={2} className={styles.root1}  spacing={2}>
            <div className={styles.heading} >Policy</div>
                <Link>Return Policy</Link>
                <Link>Terms of Use</Link>
                <Link>Security</Link>
                <Link>Privacy</Link>
                <Link>Sitemap</Link>
                <Link>EPR Complaince</Link>
            </Grid>
            <Grid item xs={3} md={3} lg={2} className={styles.root1}  spacing={2}>
            <div className={styles.heading} >Social</div>
                <Link>Facebook</Link>
                <Link>Twitter</Link>
                <Link>Youtube</Link>
            </Grid>
            <Grid item xs={3} md={3} lg={2} className={styles.root1}  spacing={2}>
            <div className={styles.heading} >Mail Us</div>
                <div>Flipkart Internet Private Limited,
                    Buildings Alyssa, Begonia &
                    Clove Embassy Tech Village,
                    Outer Ring Road, Devarabeesanahalli Village,
                    Bengaluru, 560103,
                    Karnataka, India
                </div>
            </Grid>
            <Grid item xs={3} md={3} lg={2} className={styles.root1}  spacing={2}>
                <div className={styles.heading} >Registered Office Address</div>
                <div>Flipkart Internet Private Limited,
                    Buildings Alyssa, Begonia &
                    Clove Embassy Tech Village,
                    Outer Ring Road, Devarabeesanahalli Village,
                    Bengaluru, 560103,
                    Karnataka, India
                    CIN : U51109KA2012PTC066107
                    Telephone: 1800 202 9898
                </div>
            </Grid>
        </Grid>
    );
}

export default Footer;
