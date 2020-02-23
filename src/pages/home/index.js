import { withStyles, Divider } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import kukka from '../../assets/kukka.png'
import React from 'react'

const styles = theme => ({
  root: {
    paddingTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  headerContainer: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  header: {
    fontFamily: 'Caveat, cursive'
  },
  caption: {
    fontSize: 14
  },
  infoSection: {
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2),
    width: '50%',
  },
  infoText: {
    paddingBottom: theme.spacing(1),
    textAlign: 'center',
  }
})

const Home = ({ classes }) => (
  <div className={classes.root}>
    <img src={kukka} style={{ width: 80 }}/>
    <div className={classes.headerContainer}>
      <Typography variant="h2" className={classes.header} color="textPrimary">
        Anniina & Topi
      </Typography>
      <Typography variant="caption" color="textPrimary" className={classes.caption}>
        9.5.2020, Kulosaari
      </Typography>
    </div>
    <Divider className={classes.divider} />
    <div className={classes.infoSection}>
      <Typography variant="body2" color="textPrimary" className={classes.infoText}>
        Tervetuloa juhlimaan häitämme 9.5.2020 klo 15 Kulosaaren kirkkoon.
      </Typography>
      <Typography variant="body2" color="textPrimary" className={classes.infoText}>
        Vihkimisen jälkeen suuntaamme juhlapaikalle Kulosaaren Casinolle lyhyen kävelymatkan päähän.
      </Typography>
    </div>
  </div>
)

export default withStyles(styles)(Home)