import { withStyles, Divider } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import kukka from '../../assets/kukkaset.png'
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
    padding: theme.spacing(2),
    maxWidth: 375
  },
  divider: {
    margin: theme.spacing(2),
    width: '50%',
    maxWidth: 500,
  },
  infoText: {
    paddingBottom: theme.spacing(1),
    textAlign: 'center',
  }
})

const Home = ({ classes }) => (
  <div className={classes.root}>
    <img alt="" src={kukka} style={{ width: 250 }}/>
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
        Vihkimisen jälkeen suuntaamme juhlapaikalle Kulosaaren Casinon Sun Marine -saliin lyhyen kävelymatkan päähän.
      </Typography>
      <Typography variant="body2" color="textPrimary" className={classes.infoText}>
        V.p. 19.4.
      </Typography>
    </div>
  </div>
)

export default withStyles(styles)(Home)