import React, { useState } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

//icons
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import FormatListNumberedRoundedIcon from '@material-ui/icons/FormatListNumberedRounded';
import BarChartIcon from '@material-ui/icons/BarChart';
//button
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
//iconos
import SmokingRoomsIcon from '@material-ui/icons/SmokingRooms';
//views
import Lista from '../views/lista';
import Pedido from '../views/pedido';
//import routes from 'routes.js';
import styles from '../assets/styles/adminStyle';

const useStyles = makeStyles(styles);

export default function Admin({ ...rest }) {
   const [loged, setLoged] = useState(localStorage.getItem('token') || '');
   const classes = useStyles();
   const [value, setValue] = React.useState('pedir');
   const history = useHistory();

   const handleChange = (event, newValue) => {
      setValue(newValue);
      history.push(`/admin/${newValue}`);
   };
   if (loged === '') return <Redirect to="/login" />;
   return (
      <div>
         <div
            style={
               {
                  // paddingTop: '40px',
                  // paddingBottom: '50px'
               }
            }
         >
            <Switch>
               <Route path="/admin/pedir">
                  <Lista />
               </Route>
               <Route path="/admin/pedidos">
                  <Pedido />
               </Route>
               {/* <Route path="/admin/:id">
                        <Info />
                    </Route> */}
            </Switch>
         </div>

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
               label="Pedidos"
               value="pedidos"
               icon={<FormatListNumberedRoundedIcon />}
            />
            <BottomNavigationAction
               label="Existencias"
               value="nearby"
               icon={<BarChartIcon />}
            />
            <BottomNavigationAction
               label="Informe"
               value="informe"
               icon={<SmokingRoomsIcon />}
            />
         </BottomNavigation>
      </div>
   );
}
