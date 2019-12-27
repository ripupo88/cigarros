import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function Ventas(props) {
   return (
      <Typography
         style={{ paddingTop: 25 }}
         variant="body1"
         align="center"
         color="textSecondary"
         component="p"
      >
         Ventas actuales/promedio
      </Typography>
   );
}
