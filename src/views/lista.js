import React, { Fragment } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
//iconos
//appbar
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
//menuOptions
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
//icons
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import SendIcon from '@material-ui/icons/Send';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
//imports
import { cigarList } from '../assets/info/cigar';
let miCigarList = JSON.parse(JSON.stringify(cigarList));
const useStyles = makeStyles(theme =>
   createStyles({
      root: {
         width: '100%',
         maxWidth: 500,
         backgroundColor: theme.palette.background.paper
      },
      small: {
         // padding: 3,
         width: theme.spacing(3),
         height: theme.spacing(3),
         backgroundColor: 'blue'
      },
      nested: {
         paddingLeft: theme.spacing(4)
      },
      title: {
         flexGrow: 1
      },
      menuButton: {
         marginRight: theme.spacing(3)
      }
   })
);

const newSetPedido = () => {
   console.log('pedido');
   let ped = [];
   for (let i = 0; i < miCigarList.length; i++) {
      ped.push([]);
      for (let n = 0; n < miCigarList[i].variantes.length; n++) {
         ped[i].push(0);
      }
   }
   return ped;
};

export default function NestedList() {
   const classes = useStyles();
   const [cigList, setCigList] = React.useState(() => {
      let open = [];
      for (let i = 0; i < miCigarList.length; i++) {
         open.push(false);
      }
      return open;
   });

   const [pedidoState, setPedidoState] = React.useState(newSetPedido());
   const [anchorEl, setAnchorEl] = React.useState(null);
   const open = Boolean(anchorEl);

   const handleClick = event => {
      setAnchorEl(event.currentTarget);
   };

   const handleClose = () => {
      miCigarList = JSON.parse(JSON.stringify(cigarList));
      setPedidoState(newSetPedido());
      console.log(miCigarList, cigarList);
      setAnchorEl(null);
   };

   return (
      <div>
         <div style={{ width: '100%' }}>
            <AppBar
               className={classes.appBarUp}
               position="fixed"
               color="inherit"
            >
               <Toolbar style={{ width: '100%' }}>
                  <Typography variant="h6" className={classes.title}>
                     Listado de cigarros
                  </Typography>
                  <IconButton
                     onClick={handleClick}
                     edge="start"
                     className={classes.menuButton}
                     color="inherit"
                     aria-label="menu"
                  >
                     <MenuIcon />
                  </IconButton>
                  <Menu
                     id="fade-menu"
                     anchorEl={anchorEl}
                     keepMounted
                     open={open}
                     onClose={handleClose}
                     TransitionComponent={Fade}
                  >
                     <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                           <SendIcon fontSize="small" />
                        </ListItemIcon>
                        Enviar pedido
                     </MenuItem>
                     <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                           <DeleteForeverOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        Cancelar pedido
                     </MenuItem>
                     <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                           <SettingsOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        Ajustes
                     </MenuItem>
                  </Menu>
               </Toolbar>
            </AppBar>
         </div>

         <List
            style={{ paddingTop: 25 }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.root}
         >
            {miCigarList.map((value, i) => {
               return (
                  <Fragment key={i}>
                     <ListItem
                        button
                        onClick={e => {
                           let newList = !cigList[i];
                           setCigList({
                              ...cigList,
                              [i]: newList
                           });
                           console.log('open', cigList[i]);
                        }}
                     >
                        <ListItemIcon>
                           <Avatar
                              variant="rounded"
                              alt="4"
                              src={'/assets/img/' + value.variantes[0].img}
                              //style={{ width: 50 }}
                           />
                        </ListItemIcon>
                        <ListItemText primary={value.marca} />
                        {cigList[i] ? <ExpandLess /> : <ExpandMore />}
                     </ListItem>
                     <Collapse in={cigList[i]} timeout="auto" unmountOnExit>
                        {miCigarList[i].variantes.map((value2, i2) => {
                           return (
                              <List key={i2} component="div" disablePadding>
                                 <ListItem button className={classes.nested}>
                                    <ListItemIcon
                                       onClick={() => {
                                          miCigarList[i].variantes[i2].pedido++;
                                          let num =
                                             miCigarList[i].variantes[i2]
                                                .pedido;
                                          setPedidoState({
                                             ...pedidoState,
                                             [i]: {
                                                ...pedidoState[i],
                                                [i2]: num
                                             }
                                          });
                                       }}
                                    >
                                       <Badge
                                          anchorOrigin={{
                                             vertical: 'top',
                                             horizontal: 'left'
                                          }}
                                          badgeContent={pedidoState[i][i2]}
                                          color="primary"
                                       >
                                          <Avatar
                                             variant="square"
                                             alt={value.marca}
                                             src={'/assets/img/' + value2.img}
                                             style={{
                                                width: 100,
                                                marginRight: 10
                                             }}
                                          />
                                       </Badge>
                                    </ListItemIcon>
                                    <ListItemText primary={value2.nombre} />
                                 </ListItem>
                              </List>
                           );
                        })}
                     </Collapse>
                  </Fragment>
               );
            })}
         </List>
      </div>
   );
}
