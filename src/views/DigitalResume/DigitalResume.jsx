import React from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import {
  Header,
  Profile,
  Specialization,
  Education,
  Experience,
  Profiles,
} from './components'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  root: {},
  paper: {
    padding: '3em',
  },
})

function DigitalResume() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={0} square>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Profile />
          </Grid>
          <Grid item xs={12}>
            <Specialization />
          </Grid>
          <Grid item xs={12}>
            <Experience />
          </Grid>
          <Grid item xs={8}>
            <Education />
            {/*<Footer />  */}
          </Grid>
          <Grid item xs={4}>
            <Profiles />
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default DigitalResume
