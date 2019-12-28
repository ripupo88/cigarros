import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
//iconos
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

//components propios
import SecText from '../components/typography/stock';
import Ventas from '../components/typography/ventas';

const useStyles = makeStyles({
    card: {
        maxWidth: 345
    },
    media: {
        height: 100,
        width: 'auto',
        textAlign: 'center',
        // Handle non-square image. The property isn't supported by IE 11.
        objectFit: 'contain',
        backgroundSize: 'contain',
        borderBottomStyle: 'solid',
        borderWidth: 1
    },
    tableMid: {
        display: 'inline-block',
        minWidth: '32%',
        textAlign: 'left'
    },
    divMind: {
        width: '100%',
        marginTop: 10
    }
});

export default function MediaCard() {
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="/assets/img/marlboroMix.jpg"
                            title="Marlboro Mix"
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                            >
                                Marlboro Mix
                            </Typography>
                            <Grid container spacing={3}>
                                <Grid item xs={9}>
                                    <div>
                                        <Typography
                                            display="inline"
                                            variant="body1"
                                            component="p"
                                        >
                                            12
                                        </Typography>
                                        <SecText text="Stock actual" />
                                    </div>
                                    <div>
                                        <Typography
                                            display="inline"
                                            variant="body1"
                                            component="p"
                                        >
                                            5
                                        </Typography>
                                        <SecText text="Mínimo recomendado" />
                                    </div>
                                </Grid>
                                <Grid item xs={3}>
                                    <CheckCircleOutlineIcon fontSize="large" />
                                </Grid>
                            </Grid>
                            <Ventas text="Ventas  actuales/promedio" />
                            <Divider variant="middle" />
                            <div className={classes.divMind}>
                                <div className={classes.tableMid}>
                                    <SecText text="Semana " />
                                    15 / 12
                                </div>
                                <div className={classes.tableMid}>
                                    <SecText text="Mes     " />
                                    23 / 18
                                </div>
                            </div>
                            <Ventas text="Ventas últimos 3 meses" />
                            <Divider variant="middle" />
                            <div className={classes.divMind}>
                                <div className={classes.tableMid}>
                                    <SecText text="enero " />
                                    12
                                </div>
                                <div className={classes.tableMid}>
                                    <SecText text="diciembre     " />
                                    23
                                </div>
                                <div className={classes.tableMid}>
                                    <SecText text="noviembre     " />
                                    23
                                </div>
                            </div>
                        </CardContent>
                    </CardActionArea>
                </Grid>
            </Grid>
        </div>
    );
}
