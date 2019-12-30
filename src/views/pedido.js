import React, { Fragment } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
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
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import SendIcon from "@material-ui/icons/Send";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import ExpandMore from "@material-ui/icons/ExpandMore";
import AssignmentIcon from "@material-ui/icons/Assignment";
//imports
import { cigarList } from "../assets/info/cigar";

let miCigarList = JSON.parse(
  JSON.stringify(
    (() => {
      // var result = [];
      // cigarList.map(elem => {
      //    for (var i = 0; i < elem.variantes.length; i++) {
      //       if (elem.variantes[i].pedido > 0) {
      //          result.push(elem.variantes[i]);
      //       }
      //    }
      // });
      //return result;
      console.log(cigarList.sort(compare));
      return cigarList.sort(compare);
    })()
  )
);

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
      width: "100%",
      maxWidth: 500,
      backgroundColor: theme.palette.background.paper
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
      backgroundColor: "blue"
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
  let ped = [];
  for (let i = 0; i < miCigarList.length; i++) {
    ped.push([]);
    for (let n = 0; n < miCigarList[i].variantes.length; n++) {
      ped[i].push(miCigarList[i].variantes[n].pedido);
    }
  }
  return ped;
};

export default function NestedList() {
  const classes = useStyles();

  const [pedidoState, setPedidoState] = React.useState(newSetPedido());
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    miCigarList = JSON.parse(JSON.stringify(cigarList));
    setAnchorEl(null);
  };

  const handlePedidoClick = (i, i2) => {
    let num = miCigarList[i].variantes[i2].pedido;
    if (miCigarList[i].variantes[i2].pedido > 1) {
      miCigarList[i].variantes[i2].pedido--;
      num--;
    } else {
      miCigarList[i].variantes.splice(i2, 1);
    }
    setPedidoState(newSetPedido());
    console.log("pedidoState", pedidoState);
  };

  return (
    <div>
      <AppBar position="fixed" color="inherit">
        <Toolbar style={{ width: "100%" }}>
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
        <ListItem button>
          <ListItemIcon>
            <Avatar style={{ backgroundColor: "#000000" }}>
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
          <ExpandMore />
        </ListItem>
        <Collapse in={true} timeout="auto" unmountOnExit>
          {miCigarList.map((value, i) => {
            return (
              <Fragment key={i}>
                {miCigarList[i].variantes.map((value2, i2) => {
                  if (value2.pedido > 0) {
                    return (
                      <List key={i2} component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                          <ListItemIcon
                            onClick={() => {
                              handlePedidoClick(i, i2);
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
                                src={value2.img}
                                style={{
                                  width: 100,
                                  marginRight: 10
                                }}
                              />
                            </Badge>
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <Typography variant="button" component="h4">
                                {value2.nombre}
                              </Typography>
                            }
                          />
                        </ListItem>
                      </List>
                    );
                  }
                })}
              </Fragment>
            );
          })}
        </Collapse>
      </List>
    </div>
  );
}
