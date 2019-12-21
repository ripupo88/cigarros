import React from 'react';
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
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.root}
        >
            <ListItem button>
                <ListItemIcon>
                    <Avatar
                        src="../assets/img/benson24.jpg"
                        className={classes.small}
                    ></Avatar>
                </ListItemIcon>
                <ListItemText primary="MARLBORO" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <Badge badgeContent={2} color="primary">
                        <ShoppingCartOutlinedIcon />
                    </Badge>
                </ListItemIcon>
                <ListItemText primary="L&M" />
            </ListItem>
            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <Badge badgeContent={0} color="primary">
                        <ShoppingCartOutlinedIcon />
                    </Badge>
                </ListItemIcon>
                <ListItemText primary="BENSON H" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                            <Badge badgeContent={0} color="primary">
                                <ShoppingCartOutlinedIcon />
                            </Badge>
                        </ListItemIcon>
                        <ListItemText primary="OPTION" />
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                            <Badge badgeContent={0} color="primary">
                                <ShoppingCartOutlinedIcon />
                            </Badge>
                        </ListItemIcon>
                        <ListItemText primary="24 (VEINTICUATRO)" />
                    </ListItem>
                </List>
            </Collapse>
            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <Badge badgeContent={1} color="primary">
                        <ShoppingCartOutlinedIcon />
                    </Badge>
                </ListItemIcon>
                <ListItemText primary="FORTUNA" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                            <Badge badgeContent={1} color="primary">
                                <ShoppingCartOutlinedIcon />
                            </Badge>
                        </ListItemIcon>
                        <ListItemText primary="NORMAL (RED LINE)" />
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                            <Badge badgeContent={0} color="primary">
                                <ShoppingCartOutlinedIcon />
                            </Badge>
                        </ListItemIcon>
                        <ListItemText primary="24 (VEINTICUATRO)" />
                    </ListItem>
                </List>
            </Collapse>
            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <Badge badgeContent={0} color="primary">
                        <ShoppingCartOutlinedIcon />
                    </Badge>
                </ListItemIcon>
                <ListItemText primary="BENSON H" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                            <Badge badgeContent={0} color="primary">
                                <ShoppingCartOutlinedIcon />
                            </Badge>
                        </ListItemIcon>
                        <ListItemText primary="OPTION" />
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                            <Badge badgeContent={0} color="primary">
                                <ShoppingCartOutlinedIcon />
                            </Badge>
                        </ListItemIcon>
                        <ListItemText primary="24 (VEINTICUATRO)" />
                    </ListItem>
                </List>
            </Collapse>
            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <Badge badgeContent={1} color="primary">
                        <ShoppingCartOutlinedIcon />
                    </Badge>
                </ListItemIcon>
                <ListItemText primary="FORTUNA" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                            <Badge badgeContent={1} color="primary">
                                <ShoppingCartOutlinedIcon />
                            </Badge>
                        </ListItemIcon>
                        <ListItemText primary="NORMAL (RED LINE)" />
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                            <Badge badgeContent={0} color="primary">
                                <ShoppingCartOutlinedIcon />
                            </Badge>
                        </ListItemIcon>
                        <ListItemText primary="24 (VEINTICUATRO)" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <Avatar className={classes.small}>0</Avatar>
                        </ListItemIcon>
                        <ListItemText primary="MARLBORO" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <Avatar className={classes.small}>0</Avatar>
                        </ListItemIcon>
                        <ListItemText primary="MARLBORO" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <Avatar className={classes.small}>0</Avatar>
                        </ListItemIcon>
                        <ListItemText primary="MARLBORO" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <Avatar className={classes.small}>0</Avatar>
                        </ListItemIcon>
                        <ListItemText primary="MARLBORO" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <Avatar className={classes.small}>0</Avatar>
                        </ListItemIcon>
                        <ListItemText primary="MARLBORO" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <Avatar className={classes.small}>0</Avatar>
                        </ListItemIcon>
                        <ListItemText primary="MARLBORO" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <Avatar className={classes.small}>0</Avatar>
                        </ListItemIcon>
                        <ListItemText primary="MARLBORO" />
                    </ListItem>
                </List>
            </Collapse>
        </List>
    );
}
