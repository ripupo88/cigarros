import React, { useState } from "react";
import { Link } from "react-router-dom";
//material
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Fab from "@material-ui/core/Fab";
import Divider from "@material-ui/core/Divider";
import LocalBarIcon from "@material-ui/icons/LocalBar";
import GradeIcon from "@material-ui/icons/Grade";
import StoreIcon from "@material-ui/icons/Store";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import PostAddIcon from "@material-ui/icons/PostAdd";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  margin: {
    marginTop: theme.spacing(5),
    width: theme.spacing(30),
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  },
  center: {
    textAlign: "center"
  },
  typo: {
    textAlign: "center",
    marginTop: theme.spacing(4)
  }
}));

export default function ButtonSizes() {
  const classes = useStyles();

  const [caja, setCaja] = useState(false);
  const handleClose = () => {
    setCaja(false);
  };
  return (
    <div className={classes.center}>
      <Typography className={classes.typo} variant="h4">
        Menu Principal
      </Typography>
      <div>
        <Fab
          component={Link}
          to="/admin/pedir"
          variant="extended"
          color="primary"
          aria-label="add"
          className={classes.margin}
        >
          Cigarros
        </Fab>
      </div>
      <div>
        <Fab
          variant="extended"
          color="primary"
          aria-label="add"
          className={classes.margin}
        >
          Bebidas
        </Fab>
      </div>
      <div>
        <Fab
          variant="extended"
          color="primary"
          aria-label="add"
          className={classes.margin}
        >
          Otros productos
        </Fab>
      </div>
      <div>
        <Fab
          onClick={() => setCaja(true)}
          variant="extended"
          color="primary"
          aria-label="add"
          className={classes.margin}
        >
          <GradeIcon className={classes.extendedIcon} />
          Administrador
        </Fab>
      </div>
      <SwipeableDrawer
        anchor="bottom"
        open={caja}
        onClose={handleClose}
        onOpen={null}
      >
        <div
          className={classes.fullList}
          role="presentation"
          onClick={handleClose}
          onKeyDown={null}
        >
          <List>
            <ListItem button>
              <ListItemIcon>
                <PersonAddIcon />
              </ListItemIcon>
              <ListItemText primary={"Crear Usuario"} />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemIcon>
                <PostAddIcon />
              </ListItemIcon>
              <ListItemText primary={"Crear Categoría"} />
            </ListItem>
          </List>
        </div>
      </SwipeableDrawer>
    </div>
  );
}
