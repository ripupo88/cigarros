import React, { Fragment } from "react";
import { Link } from "react-router-dom";
//material core
import { makeStyles, createStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
//modal
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
//appbar
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
//menuOptions
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
//icons
import SortByAlphaIcon from "@material-ui/icons/SortByAlpha";
import EuroIcon from "@material-ui/icons/Euro";
import StoreIcon from "@material-ui/icons/Store";
//style
import styles from "./almacen.css";
//imports
import { cigarList } from "../assets/info/cigar";

let cigArray = [];

cigarList.map(item => {
  cigArray = [...cigArray, ...item.variantes];
});

console.log("cigArray :", cigArray);

let miCigarList = JSON.parse(JSON.stringify(cigArray.sort(letrasOrden)));

function letrasOrden(a, b) {
  const bandA = a.nombre.toUpperCase();
  const bandB = b.nombre.toUpperCase();

  let comparison = 0;
  if (bandA > bandB) {
    comparison = 1;
  } else if (bandA < bandB) {
    comparison = -1;
  }
  return comparison;
}

function stockOrden(a, b) {
  const bandA = a.stock;
  const bandB = b.stock;

  let comparison = 0;
  if (bandA > bandB) {
    comparison = 1;
  } else if (bandA < bandB) {
    comparison = -1;
  }
  return comparison;
}

function ventasOrden(a, b) {
  const bandA = a.ventas;
  const bandB = b.ventas;

  let comparison = 0;
  if (bandA > bandB) {
    comparison = -1;
  } else if (bandA < bandB) {
    comparison = 1;
  }
  return comparison;
}

const useStyles = makeStyles(styles);

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
    setAnchorEl(null);
  };

  const handlePedidoClick = (i2, item) => {
    setNameCig(item.nombre);
    setOpenModal(true);
  };

  const handleSort = sort => {
    if (sort === "name") {
      miCigarList = miCigarList.sort(letrasOrden);
    } else if (sort === "stock") {
      miCigarList = miCigarList.sort(stockOrden);
    } else if (sort === "ventas") {
      miCigarList = miCigarList.sort(ventasOrden);
    }
    setAnchorEl(null);
    console.log("sort :", sort);
  };

  return (
    <Fragment>
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
              Enviar
            </Button>
          </div>
        </Fade>
      </Modal>
      <AppBar position="fixed" color="inherit">
        <Toolbar style={{ width: "100%" }}>
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
            <MenuItem onClick={() => handleSort("name")}>
              <ListItemIcon>
                <SortByAlphaIcon fontSize="small" />
              </ListItemIcon>
              por nombre
            </MenuItem>
            <MenuItem onClick={() => handleSort("stock")}>
              <ListItemIcon>
                <StoreIcon fontSize="small" />
              </ListItemIcon>
              por stock
            </MenuItem>
            <MenuItem onClick={() => handleSort("ventas")}>
              <ListItemIcon>
                <EuroIcon fontSize="small" />
              </ListItemIcon>
              por ventas
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.root}
      >
        {miCigarList.map((value2, i2) => {
          return (
            <List key={i2} component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon
                  onClick={() => {
                    handlePedidoClick(i2, value2);
                  }}
                >
                  <Avatar
                    variant="square"
                    src={"/assets/img/" + value2.img}
                    style={{
                      width: 100,
                      marginRight: 10
                    }}
                  />
                </ListItemIcon>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "black"
                  }}
                  to="almacen/informe"
                >
                  <ListItemText
                    primary={
                      <Typography variant="button" component="h4">
                        {value2.nombre}
                      </Typography>
                    }
                    secondary={`Stock: ${value2.stock}  Ventas: ${value2.ventas}`}
                  />
                </Link>
              </ListItem>
            </List>
          );
        })}
      </List>
    </Fragment>
  );
}
