import React, { Fragment } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
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
import AssignmentIcon from '@material-ui/icons/Assignment';
//imports
import { cigarList } from '../assets/info/cigar';

let miCigarList = JSON.parse(
   JSON.stringify(cigarList.filter(variantes.pedido != 0))
);

const useStyles = makeStyles(theme =>
   createStyles({
      root: {
         paddingTop: theme.spacing(8),
         paddingBottom: theme.spacing(8),
         width: '100%',
         maxWidth: 500,
         backgroundColor: theme.palette.background.paper
      },
      small: {
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
   const [cigList, setCigList] = React.useState(false);

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
         <AppBar position="fixed" color="inherit">
            <Toolbar style={{ width: '100%' }}>
               <Typography variant="h6" className={classes.title}>
                  Lista de pedidos
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

         <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.root}
         >
            <ListItem button onClick={() => setCigList(!cigList)}>
               <ListItemIcon>
                  <Avatar style={{ backgroundColor: '#000000' }}>
                     <AssignmentIcon />
                  </Avatar>
               </ListItemIcon>
               <ListItemText
                  primary={
                     <Typography variant="h6" component="h6">
                        Pedido
                     </Typography>
                  }
               />
               {cigList ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={cigList} timeout="auto" unmountOnExit>
               {miCigarList.map((value, i) => {
                  return (
                     <Fragment key={i}>
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
                                    <ListItemText
                                       primary={
                                          <Typography
                                             variant="button"
                                             component="h4"
                                          >
                                             {value2.nombre}
                                          </Typography>
                                       }
                                    />
                                 </ListItem>
                              </List>
                           );
                        })}
                     </Fragment>
                  );
               })}
            </Collapse>
         </List>
      </div>
   );
}
