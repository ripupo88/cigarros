import React, { useState } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

//icons
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
//button
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
//iconos
import SmokingRoomsIcon from '@material-ui/icons/SmokingRooms';
//views
import Lista from '../views/lista';

//import routes from 'routes.js';
import styles from '../assets/styles/adminStyle';

const useStyles = makeStyles(styles);

export default function Admin({ ...rest }) {
   const [loged, setLoged] = useState(localStorage.getItem('token') || '');
   const classes = useStyles();
   const [value, setValue] = React.useState('pedir');

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };
   if (loged === '') return <Redirect to="/login" />;
   return (
      <div>
         <div
            style={{
               //textAlign: 'center',
               //maxWith: '50%',
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
         <div>
            <BottomNavigation
               value={value}
               onChange={handleChange}
               className={classes.appBar}
            >
               <BottomNavigationAction
                  label="Pedir"
                  value="pedir"
                  icon={<ShoppingCartOutlinedIcon />}
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
