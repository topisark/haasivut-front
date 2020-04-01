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
        title="Hääjuhla"
        text="Huomioittehan, että juhlimme aikuisten kesken. Olemme myös palkanneet ammattikuvaajan ikuistamaan hääpäivämme, joten vieraat voivat keskittyä nauttimaan juhlasta kanssamme. Kuvat julkaistaan sivuilla häiden jälkeen. Juhlassa tarjoillaan alkudrinkit sekä ruokailun yhteydessä ruokajuomat. Ruokailun jälkeen baari tarjoilee omakustanteisia virvokkeita."
      />
      <InfoItem
        title="Saapuminen juhlapaikalle"
        text="Jos saavut juhliin autolla, suosittelemme jättämään auton suoraan Kulosaaren Casinon ilmaiselle parkkipaikalle (Hopeasalmenpolku 1, Helsinki), josta on n. 5 minuutin kävelymatka kirkolle. Kirkolla on rajoitetusti parkkipaikkoja."
      />
      <InfoItem
        title="Pukukoodi"
        text="Juhlava pukeutuminen. Toivoisimme vieraiden välttävän räikeitä värejä ja suuria, arkisia kuvioita."
      />
      <InfoItem
        title="Häälahjat"
        text="Tärkeintä meille on, että saavutte juhlistamaan rakkauttamme. Lisäksi toivomme käsinkirjoitettuja kortteja, joissa on persoonallisia onnentoivotuksia juhlapäivänämme. Jos kuitenkin myös haluatte muistaa meitä jotenkin muuten, niin voitte osallistua häämatkakassan kartuttamiseen mieleisellänne summalla (FI52 5800 1320 4150 77). Toiveemme on, että emme saisi tavaralahjoja."
      />
{/*      <InfoItem
        title="Kysyttävää?"
        text="Askarruttaako jokin mieltä? Kerkesitkö jo ilmoittautumaan, mutta haluaisit sittenkin pitää puheen tai esityksen? Ota yhteyttä kaasoon: Saara, 050-3561664."
      />*/}
    </div>
  </div>
)

export default withStyles(styles)(Info)