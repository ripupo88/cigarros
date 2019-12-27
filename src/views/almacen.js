import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
//modal
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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
//imports
import { cigarList } from '../assets/info/cigar';

let miCigarList = JSON.parse(JSON.stringify(cigarList.sort(compare)));

function compare(a, b) {
   const bandA = a.marca.toUpperCase();
   const bandB = b.marca.toUpperCase();

   let comparison = 0;
   if (bandA > bandB) {
      comparison = 1;
   } else if (bandA < bandB) {
      comparison = -1;
   }
   return comparison;
}

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
         paddingTop: theme.spacing(0),
         paddingBottom: theme.spacing(0),
         paddingLeft: theme.spacing(4)
      },
      title: {
         flexGrow: 1
      },
      menuButton: {
         marginRight: theme.spacing(3)
      },
      modal: {
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'center'
      },
      paper: {
         backgroundColor: theme.palette.background.paper,
         padding: theme.spacing(2, 4, 3)
      },
      button: {
         margin: theme.spacing(1)
      }
   })
);

export default function NestedList() {
   const classes = useStyles();
   const [openModal, setOpenModal] = React.useState(false);
   const [anchorEl, setAnchorEl] = React.useState(null);
   const open = Boolean(anchorEl);
   const [nameCig, setNameCig] = React.useState(null);

   const handleClick = event => {
      setAnchorEl(event.currentTarget);
      setOpenModal(false);
   };

   const handleModalClick = () => {
      setOpenModal(false);
   };

   const handleClose = () => {
      setOpenModal(false);
      miCigarList = JSON.parse(JSON.stringify(cigarList));
      setAnchorEl(null);
   };

   const handlePedidoClick = (i, i2, item) => {
      setNameCig(item.nombre);
      setOpenModal(true);
   };

   return (
      <div>
         <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={openModal}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
               timeout: 500
            }}
         >
            <Fade in={openModal}>
               <div className={classes.paper}>
                  <h2 id="transition-modal-title">{nameCig}</h2>
                  <p id="transition-modal-description">Entrada en almacén.</p>
                  <TextField
                     autoFocus
                     type="Number"
                     label="Cantidad"
                     id="margin-none"
                     className={classes.textField}
                     helperText="Número de cartones"
                  />
                  <Button
                     onClick={handleModalClick}
                     variant="contained"
                     color="primary"
                     className={classes.button}
                     //endIcon={<Icon>send</Icon>}
                  >
                     Send
                  </Button>
               </div>
            </Fade>
         </Modal>
         <AppBar position="fixed" color="inherit">
            <Toolbar style={{ width: '100%' }}>
               <Typography variant="h6" className={classes.title}>
                  Almacén
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
            {miCigarList.map((value, i) => {
               return (
                  <Fragment key={i}>
                     {miCigarList[i].variantes.map((value2, i2) => {
                        return (
                           <List key={i2} component="div" disablePadding>
                              <ListItem button className={classes.nested}>
                                 <ListItemIcon
                                    onClick={() => {
                                       handlePedidoClick(i, i2, value2);
                                    }}
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
                                 </ListItemIcon>
                                 <Link
                                    style={{
                                       textDecoration: 'none',
                                       color: 'black'
                                    }}
                                    to="almacen/informe"
                                 >
                                    <ListItemText
                                       primary={
                                          <Typography
                                             variant="button"
                                             component="h4"
                                          >
                                             {value2.nombre}
                                          </Typography>
                                       }
                                       secondary={`Stock: ${value2.stock}`}
                                    />
                                 </Link>
                              </ListItem>
                           </List>
                        );
                     })}
                  </Fragment>
               );
            })}
         </List>
      </div>
   );
}
