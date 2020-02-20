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
  header: {
    fontFamily: 'Caveat, cursive'
  },
  caption: {
    fontSize: 14
  }
})

const Home = ({ classes }) => (
  <div className={classes.root}>
    <Typography variant="h2" className={classes.header} color="textPrimary">
      Anniina & Topi
    </Typography>
    <Typography variant="caption" color="textPrimary" className={classes.caption}>
      9.5.2020, Kulosaari
    </Typography>
  </div>
)

export default withStyles(styles)(Home)