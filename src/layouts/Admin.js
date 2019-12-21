import React, { useState } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

// @material-ui/core components
// core components
//appbarjikk
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
//icons
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
//button
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
//iconos
import SmokingRoomsIcon from '@material-ui/icons/SmokingRooms';
//views
import Lista from '../views/lista';

import GridItem from '../components/Grid/GridItem';
import GridContainer from '../components/Grid/GridContainer';

//import routes from 'routes.js';
import styles from '../assets/styles/adminStyle';

const useStyles = makeStyles(styles);

export default function Admin({ ...rest }) {
    const [loged, setLoged] = useState(localStorage.getItem('token') || '');
    const classes = useStyles();
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    if (loged === '') return <Redirect to="/login" />;
    return (
        <div>
            <div>
                <AppBar
                    className={classes.appBarUp}
                    position="fixed"
                    color="inherit"
                    position="static"
                >
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            Listado de cigarros
                        </Typography>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="menu"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </div>
            <div
                style={{
                    textAlign: 'center',
                    maxWith: '50%',
                    paddingTop: '10%',
                    paddingBottom: '50px'
                }}
            >
                <Switch>
                    <Route exact path="/admin">
                        <Lista />
                    </Route>
                    {/* <Route path="/admin/:id">
                        <Info />
                    </Route> */}
                </Switch>
            </div>
            <div className={classes.appBar}>
                <BottomNavigation
                    value={value}
                    onChange={handleChange}
                    className={classes.root}
                >
                    <BottomNavigationAction
                        label="Recents"
                        value="recents"
                        icon={<RestoreIcon />}
                    />
                    <BottomNavigationAction
                        label="Favorites"
                        value="favorites"
                        icon={<FavoriteIcon />}
                    />
                    <BottomNavigationAction
                        label="Nearby"
                        value="nearby"
                        icon={<LocationOnIcon />}
                    />
                    <BottomNavigationAction
                        label="Folder"
                        value="folder"
                        icon={<FolderIcon />}
                    />
                </BottomNavigation>
            </div>
        </div>
    );
}
