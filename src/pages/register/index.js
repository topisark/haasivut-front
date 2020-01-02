import React from 'react'
import { withStyles, Button, Typography, TextField } from '@material-ui/core'

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  inputField: {
    marginTop: theme.spacing(2)
  },
  instructions: {
    padding: theme.spacing(4)
  }
})

const Register = ({ classes }) => (
  <div className={ classes.root }>
    <Typography className={classes.instructions} variant="h5" color="textPrimary">
      Ilmoitathan jokaisen vieraan erikseen
    </Typography>
    <TextField
      required
      className={ classes.inputField }
      color="secondary"
      label="Nimi"
      variant="outlined"
    />
    <TextField
      multiline
      rows="2"
      className={ classes.inputField }
      color="secondary"
      label="Erityisruokavaliot"
      variant="outlined"
    />
    <Button
      className={ classes.inputField }
      variant="outlined">Ilmoittaudu
    </Button>
  </div>

)

export default withStyles(styles)(Register)