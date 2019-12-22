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
    const [cigList, setCigList] = React.useState(() => {
        let open = [];
        for (let i = 0; i < cigarList.obj.length; i++) {
            open.push(false);
        }
        return open;
    });
    const [pedidoState, setPedidoState] = React.useState(() => {
        let ped = [];
        for (let i = 0; i < cigarList.obj.length; i++) {
            ped.push([]);
            for (let n = 0; n < cigarList.obj[i].variantes.length; n++) {
                ped[i].push(0);
            }
        }
        return ped;
    });

    return (
        <div>
            <List
                style={{ paddingTop: 25 }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                className={classes.root}
            >
                {cigarList.obj.map((value, i) => {
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
                                        src="assets/img/benson24.jpg"
                                        //style={{ width: 50 }}
                                    />
                                </ListItemIcon>
                                <ListItemText primary={value.marca} />
                                {cigList[i] ? <ExpandLess /> : <ExpandMore />}
                            </ListItem>
                            <Collapse
                                in={cigList[i]}
                                timeout="auto"
                                unmountOnExit
                            >
                                {cigarList.obj[i].variantes.map(
                                    (value2, i2) => {
                                        return (
                                            <List
                                                key={i2}
                                                component="div"
                                                disablePadding
                                            >
                                                <ListItem
                                                    button
                                                    className={classes.nested}
                                                >
                                                    <ListItemIcon
                                                        onClick={() => {
                                                            cigarList.obj[i]
                                                                .variantes[i2]
                                                                .pedido++;
                                                            let num =
                                                                cigarList.obj[i]
                                                                    .variantes[
                                                                    i2
                                                                ].pedido;
                                                            setPedidoState({
                                                                ...pedidoState,
                                                                [[i][i2]]: num
                                                            });
                                                            console.log(
                                                                num,
                                                                cigarList.obj[i]
                                                                    .variantes[
                                                                    i2
                                                                ].pedido
                                                            );
                                                        }}
                                                    >
                                                        <Badge
                                                            anchorOrigin={{
                                                                vertical: 'top',
                                                                horizontal:
                                                                    'left'
                                                            }}
                                                            badgeContent={
                                                                pedidoState[i][
                                                                    i2
                                                                ]
                                                            }
                                                            color="primary"
                                                        >
                                                            <Avatar
                                                                variant="square"
                                                                alt={
                                                                    value.marca
                                                                }
                                                                src={value2.img}
                                                                style={{
                                                                    width: 100,
                                                                    paddingRight: 10
                                                                }}
                                                            />
                                                        </Badge>
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primary={value2.nombre}
                                                    />
                                                </ListItem>
                                            </List>
                                        );
                                    }
                                )}
                            </Collapse>
                        </Fragment>
                    );
                })}
            </List>
        </div>
    );
}
