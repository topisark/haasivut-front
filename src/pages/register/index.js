import React, { useCallback, useState } from 'react'
import { withStyles, Snackbar, Button, Typography, TextField } from '@material-ui/core'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { withRouter } from 'react-router-dom'
import { addRegistration } from '../../services/registrations'

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
  },
  doneIcon: {
    width: 200,
    height: 200
  }
})

const Register = ({ classes, history }) => {
  const [name, setName] = useState('')
  const [specials, setSpecials] = useState('')
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const [showDialog, setShowDialog] = useState(false)

  const sendRegistration = useCallback(async () => {
    if (loading) return
    setLoading(true)
    await addRegistration({ name, specials })
    setLoading(false)
    setDone(true)
    setShowDialog(true)
  }, [loading, name, specials])

  const clearForm = () => {
    setName('')
    setSpecials('')
    setDone(false)
    setShowDialog(false)
  }

  const allDone = () => {
    setShowDialog(false)
    setTimeout(() => {
      history.push('/')
    }, 400)
  }

  return (
    <div className={ classes.root }>
      { done &&
        <CheckCircleOutlineIcon color="secondary" className={classes.doneIcon} />
      }
      { !done &&
        <React.Fragment>
          <Typography className={classes.instructions} variant="h5" color="textPrimary">
            Ilmoitathan jokaisen vieraan erikseen
          </Typography>
          <TextField
            disabled={loading}
            required
            className={ classes.inputField }
            color="secondary"
            label="Nimi"
            variant="outlined"
            value={name}
            onChange={event => setName(event.target.value)}
          />
          <TextField
            disabled={loading}
            multiline
            rows="2"
            className={ classes.inputField }
            color="secondary"
            label="Erityisruokavaliot"
            variant="outlined"
            value={specials}
            onChange={event => setSpecials(event.target.value)}
          />
          <Button
            disabled={loading || name.length < 3}
            className={ classes.inputField }
            variant="outlined"
            onClick={sendRegistration}
          >
            Ilmoittaudu
          </Button>
        </React.Fragment>
      }
      <Snackbar
        open={showDialog}
        message={
          <Typography>
            Kiitos! Haluatko ilmoittaa toisen henkilön?
          </Typography>
        }
        action={[
          <Button key="yes" color="primary" size="small" onClick={clearForm}>
            <Typography>
              Kyllä
            </Typography>
          </Button>,
          <Button key="no" color="primary" size="small" onClick={allDone}>
            <Typography>
              Ei
            </Typography>
          </Button>,
        ]}
      />
    </div>
  )
}

export default withStyles(styles)(withRouter(Register))