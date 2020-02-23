import { withStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import React from 'react'

const styles = theme => ({
  root: {
    paddingTop: 40,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
})

const Schedule = ({ classes }) => (
  <div className={classes.root}>
    <Typography variant="caption" color="textPrimary" className={classes.caption}>
      Aikataulu
    </Typography>
  </div>
)

export default withStyles(styles)(Schedule)