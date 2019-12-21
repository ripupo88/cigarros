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
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
//imports
import { cigarList } from '../assets/info/cigar';

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
      }
   })
);

export default function NestedList() {
   const classes = useStyles();
   const [open, setOpen] = React.useState(cigarList);
   console.log(open);
   const handleClick = e => {
      setOpen(!open);
   };

   return (
      <div>
         <List
            style={{ paddingTop: 25 }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.root}
         >
            {cigarList.map((value, i) => {
               return (
                  <Fragment key={i}>
                     <ListItem
                        button
                        onClick={() => {
                           let newOpen = open;
                           newOpen[i].open = !newOpen[i].open;
                           setOpen(newOpen);
                        }}
                     >
                        <ListItemIcon>
                           <Avatar
                              variant="rounded"
                              alt="4"
                              src="assets/img/benson24.jpg"
                              //style={{ width: 50 }}
                           />
                        </ListItemIcon>
                        <ListItemText primary={value.marca} />
                        {open[i].open ? <ExpandLess /> : <ExpandMore />}
                     </ListItem>
                     <Collapse in={open[i].open} timeout="auto" unmountOnExit>
                        {value.variantes.map((value2, i2) => {
                           return (
                              <List key={i2} component="div" disablePadding>
                                 <ListItem button className={classes.nested}>
                                    <ListItemIcon>
                                       <Badge
                                          anchorOrigin={{
                                             vertical: 'top',
                                             horizontal: 'left'
                                          }}
                                          badgeContent={2}
                                          color="primary"
                                       >
                                          <Avatar
                                             variant="square"
                                             alt={value.marca}
                                             src={value2.img}
                                             style={{
                                                width: 100,
                                                paddingRight: 10
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
