import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function Ventas(props) {
    return (
        <Typography
            style={{ paddingTop: 50, textAlign: 'left' }}
            variant="body1"
            align="center"
            color="textSecondary"
            component="p"
        >
            {props.text}
        </Typography>
    );
}
