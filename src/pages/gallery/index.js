import { withStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import React from 'react'

const styles = theme => ({
  root: {
    paddingTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
})

const Gallery = ({ classes }) => (
  <div className={classes.root}>
    <Typography color="textPrimary" className={classes.caption}>
      Kuvat päivittyvät sivulle häiden jälkeen!
    </Typography>
  </div>
)

export default withStyles(styles)(Gallery)