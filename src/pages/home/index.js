import { withStyles, Divider, Button } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'
import kukka from '../../assets/kukkaset.png'
import React from 'react'
import { isMobile } from '../../utils'

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
    fontFamily: 'Caveat, cursive',
    fontSize: isMobile() ? 50 : 60,
  },
  caption: {
    fontSize: 14
  },
  infoSection: {
    padding: theme.spacing(2),
    maxWidth: 500
  },
  divider: {
    margin: theme.spacing(2),
    width: '50%',
    maxWidth: 500,
  },
  infoText: {
    paddingBottom: theme.spacing(1),
    textAlign: 'center',
  },
  huom: {
    paddingBottom: theme.spacing(1),
    textAlign: 'center',
    fontWeight: 600
  }
})

const Home = ({ classes, navigation }) => (
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
      <Typography variant="body2" color="textPrimary" className={classes.huom}>
        Kuvat julkaistu!
      </Typography>
      <Typography variant="body2" color="textPrimary" className={classes.infoText}>
        Paljon kiitoksia kaikista saamistamme onnitteluista! Hääkuvat ja -video löytyvät nyt Kuvat-sivulta.
      </Typography>
      <Typography variant="body2" color="textPrimary" className={classes.infoText}>
        Kuvat: Marko Laukkarinen
        <br/>
        Video: Joni Alhonen / JA-Media
      </Typography>
    </div>
    <Button
      component={Link}
      to={'/kuvat'}
      variant="outlined"
      color="primary"
    >
      Kuviin
    </Button>
  </div>
)

export default withStyles(styles)(Home)