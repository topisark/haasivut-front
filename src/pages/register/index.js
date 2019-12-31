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
  }
})

const Register = ({ classes }) => (
  <div className={ classes.root }>
    <Typography variant="body1" color="textPrimary">
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
      label="Erityisruokavalio"
      variant="outlined"
    />
    <Button
      className={ classes.inputField }
      variant="outlined">Ilmoittaudu
    </Button>
  </div>

)

export default withStyles(styles)(Register)