import React, { Fragment } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
//apollo
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
//material
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
//otros
import { SnackbarProvider, useSnackbar } from "notistack";
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
import ClearIcon from "@material-ui/icons/Clear";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import SendIcon from "@material-ui/icons/Send";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
//imports
//style
import styles from "./lista.css";
//import { cigarList } from "../assets/info/cigar";
let miCigarList;
const LISTA_CIGARROS = gql`
  {
    PedirCigarros {
      id
      marca
      nombre
      img
      pedido
      stock
    }
  }
`;

const useStyles = makeStyles(styles);

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

const newSetPedido = () => {
  console.log("miCigarList :", miCigarList);
  let ped = [];
  for (let i = 0; i < miCigarList.length; i++) {
    ped.push([]);
    for (let n = 0; n < miCigarList[i].variantes.length; n++) {
      ped[i].push(miCigarList[i].variantes[n].pedido);
    }
  }
  return ped;
};

export default function ListaWiew() {
  const { loading, error, data } = useQuery(LISTA_CIGARROS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return <NestedList data={data} />;
}

function NestedList(props) {
  const classes = useStyles();
  let newList = [];
  let cont = -1;
  props.data.PedirCigarros.map((item, i) => {
    if (i === 0 || item.marca !== newList[cont].marca) {
      cont++;
      newList.push({
        open: false,
        marca: item.marca,
        variantes: [
          {
            nombre: item.nombre,
            img: item.img,
            pedido: item.pedido,
            stock: item.stock
          }
        ]
      });
    } else {
      newList[cont].variantes.push({
        nombre: item.nombre,
        img: item.img,
        pedido: item.pedido,
        stock: item.stock
      });
    }
  });

  const [cigList, setCigList] = React.useState(() => {
    miCigarList = JSON.parse(JSON.stringify(newList.sort(compare)));
    let open = [];
    for (let i = 0; i < miCigarList.length; i++) {
      open.push(false);
    }
    return open;
  });

  const [pedidoState, setPedidoState] = React.useState(newSetPedido);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const open = Boolean(anchorEl);
  console.log("pedidoState :", pedidoState);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleEnviar = () => {
    enqueueSnackbar("Enviando pedido", { variant: "info" });
    setTimeout(() => {
      enqueueSnackbar("Pedido enviado¡¡¡", { variant: "success" });
    }, 2000);
    miCigarList = JSON.parse(JSON.stringify(newList));
    setPedidoState(newSetPedido());
    setAnchorEl(null);
  };
  const handleClose = () => {
    miCigarList = JSON.parse(JSON.stringify(newList));
    setPedidoState(newSetPedido());
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position="fixed" color="inherit">
        <Toolbar style={{ width: "100%" }}>
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
            <MenuItem onClick={handleEnviar}>
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
              <ListItem
                button
                onClick={e => {
                  let newList = !cigList[i];
                  setCigList({
                    ...cigList,
                    [i]: newList
                  });
                }}
              >
                <ListItemIcon>
                  <Avatar
                    variant="rounded"
                    alt="4"
                    src={"https://i.imgur.com/h3IRgxj.jpg"}
                    //style={{ width: 50 }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="h6" component="h6">
                      {value.marca.toUpperCase()}
                    </Typography>
                  }
                />
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
                            let num = miCigarList[i].variantes[i2].pedido;
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
                              vertical: "top",
                              horizontal: "left"
                            }}
                            badgeContent={pedidoState[i][i2]}
                            color="primary"
                          >
                            <Avatar
                              variant="square"
                              alt={value.marca}
                              src={"https://i.imgur.com/keNCxeg.jpg"}
                              style={{
                                width: 100,
                                marginRight: 10
                              }}
                            />
                          </Badge>
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Typography variant="body1" component="h4">
                              {value2.nombre}
                            </Typography>
                          }
                        />
                        <ClearIcon
                          onClick={() => {
                            miCigarList[i].variantes[i2].pedido = 0;
                            setPedidoState({
                              ...pedidoState,
                              [i]: {
                                ...pedidoState[i],
                                [i2]: 0
                              }
                            });
                          }}
                        />
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
