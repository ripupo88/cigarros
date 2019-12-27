import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function SecText(props) {
   return (
      <Typography
         display="inline"
         color="textSecondary"
         variant="body2"
         component="p"
      >
         {` ${props.text}`}
      </Typography>
   );
}
