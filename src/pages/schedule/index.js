import { withStyles, ListItemText } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import React from 'react'

const styles = theme => ({
  root: {
    paddingTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  schedule: {
    display: 'flex',
    flexDirection: 'column'
  },
  scheduleItemContainer: {
    paddingTop: theme.spacing(3),
    display: 'flex',
  },
  time: {
    paddingTop: 6,
    paddingRight: theme.spacing(4)
  },
  title: {
    fontFamily: 'Caveat, cursive',
  },
  scheduleItemText: {
    fontFamily: 'Caveat, cursive',
    fontSize: 22
  },
})

// const ScheduleItem = withStyles(styles)(({ classes, time, primary, secondary }) => (
//   <div className={classes.scheduleItemContainer}>
//     <Typography color="textPrimary" className={classes.time}>
//       {time}
//     </Typography>
//     <ListItemText
//       primary={
//         <Typography color="textPrimary" className={classes.scheduleItemText}>
//           {primary}
//         </Typography>
//       }
//       secondary={secondary}
//     />
//   </div>
// ))

const ScheduleItem = withStyles(styles)(({ classes, children }) => (
  <div className={classes.scheduleItemContainer}>
    <Typography color="textPrimary" className={classes.scheduleItemText}>
      {children}
    </Typography>
  </div>
))

const Schedule = ({ classes }) => (
  <div className={classes.root}>
    <Typography color="textPrimary" variant="h5" className={classes.title}>
      Hääpäivän aikataulu
    </Typography>
    <div className={classes.schedule}>
      <ScheduleItem>15:00 - Vihkiminen</ScheduleItem>
      <ScheduleItem>15:30 - Siirtyminen juhlapaikalle</ScheduleItem>
      <ScheduleItem>16:30 - Alkumalja & yhteiskuva</ScheduleItem>
      <ScheduleItem>17:00 - Ruokailu</ScheduleItem>
      <ScheduleItem>20:00 - Hääkakun leikkaus</ScheduleItem>
      <ScheduleItem>21:00 - Häävalssi</ScheduleItem>
      <ScheduleItem>00:00 - Jatkot</ScheduleItem>
    </div>
  </div>
)

export default withStyles(styles)(Schedule)