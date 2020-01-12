import React from 'react';
import * as classnames from 'classnames'

import { withStyles, Paper, Typography } from '@material-ui/core'

const styles = theme => ({
  infoBox: {
    opacity: 0.85,
    cursor: 'pointer',
    position: 'relative',
    left: '20px',
    bottom: '27px',
    padding: '3px 7px 3px 7px',
    whiteSpace: 'nowrap',
    display: 'flex',
    borderRadius: '4px',
    alignItems: 'center',
  },
  address: {
    alignSelf: 'center',
    fontSize: '12px'
  }
})

const PlaceMarker = ( { address, classes }) => (
  <Paper className={classnames(classes.infoBox, 'PlaceMarker')} >
    <div className={classes.address}>
      <Typography>
        {address}
      </Typography>
    </div>
  </Paper>
)

export default withStyles(styles)(PlaceMarker)
