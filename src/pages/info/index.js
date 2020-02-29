import { withStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import React from 'react'

const styles = theme => ({
  root: {
    paddingTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  infoItem: {
    maxWidth: 600,
    paddingTop: theme.spacing(2)
  },
  title: {
    fontSize: 15
  },
  smallText: {
    fontSize: 13
  }
})

const InfoItem = withStyles(styles)(({ classes, title, text }) => (
  <div className={classes.infoItem}>
    <Typography color="textPrimary" className={classes.title}>
      {title}
    </Typography>
    <Typography color="textPrimary" className={classes.smallText}>
      {text}
    </Typography>
  </div>
))

const Info = ({ classes }) => (
  <div className={classes.root}>
    <div>
      <InfoItem
        title="Saapuminen juhlapaikalle"
        text="Jos saavut juhliin autolla, suosittelemme jättämään auton suoraan Kulosaaren Casinon ilmaiselle parkkipaikalle (Hopeasalmenpolku 1, Helsinki), josta on n. 5 minuutin kävelymatka kirkolle."
      />
      <InfoItem
        title="Pukukoodi"
        text="Juhlava pukeutuminen. Toivoisimme vieraiden välttävän räikeitä värejä ja suuria, arkisia kuvioita."
      />
    </div>
  </div>
)

export default withStyles(styles)(Info)