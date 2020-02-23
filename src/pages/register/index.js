import React, { useCallback, useState } from 'react'
import { withStyles, Snackbar, Button, Typography, TextField, FormControlLabel, Checkbox, Switch, FormControl, FormLabel, RadioGroup, Radio } from '@material-ui/core'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'
import { withRouter } from 'react-router-dom'
import { addRegistration } from '../../services/registrations'

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  inputField: {
    marginTop: theme.spacing(3)
  },
  instructions: {
    padding: theme.spacing(4)
  },
  controlLabelRoot: {
    marginLeft: 0,
    marginRight: 0
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  }
})

const Register = ({ classes, history }) => {
  const [attending, setAttending] = useState(true)
  const [name, setName] = useState('')
  const [specials, setSpecials] = useState('')
  const [speech, setSpeech] = useState(false)
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const [showDialog, setShowDialog] = useState(false)

  const sendRegistration = useCallback(async () => {
    if (loading) return
    setLoading(true)
    await addRegistration({ name, specials, speech, attending })
    setLoading(false)
    setDone(true)
    setShowDialog(true)
  }, [loading, name, specials, speech, attending])

  const clearForm = () => {
    setAttending(true)
    setName('')
    setSpecials('')
    setSpeech(false)
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
        <div className={classes.form}>
          <Typography className={classes.instructions} variant="h5" color="textPrimary">
            Ilmoitathan jokaisen vieraan erikseen
          </Typography>
          <TextField
            disabled={loading}
            required
            className={ classes.inputField }
            color="primary"
            label="Nimi"
            variant="outlined"
            value={name}
            onChange={event => setName(event.target.value)}
          />
          <FormControl required component="fieldset" className={classes.inputField}>
            <FormLabel component="legend">Osallistun hääjuhlaan</FormLabel>
            <RadioGroup value={attending} onChange={e => setAttending(e.target.value === 'true' )}>
              <FormControlLabel value={true} control={<Radio color="primary" />} label="Kyllä" />
              <FormControlLabel value={false} control={<Radio color="primary" />} label="En" />
            </RadioGroup>
          </FormControl>
          <TextField
            disabled={loading || !attending}
            multiline
            rows="2"
            className={ classes.inputField }
            color="primary"
            label="Erityisruokavaliot"
            variant="outlined"
            value={specials}
            onChange={event => setSpecials(event.target.value)}
          />
          <FormControlLabel
            className={classes.inputField}
            control={
              <Checkbox
                disabled={loading || !attending}
                onChange={e => setSpeech(e.target.checked)}
                color="primary"
                checked={speech}
              />
            }
            label={<Typography color="textPrimary">Haluan pitää juhlassa puheen</Typography>}
          />
          <Button
            disabled={loading || name.length < 3}
            className={ classes.inputField }
            variant="outlined"
            onClick={sendRegistration}
          >
            Ilmoittaudu
          </Button>
        </div>
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