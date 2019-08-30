import React from 'react'
import { Avatar, Typography, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  root: {},
  profiles: {
    marginTop: '1em',
    display: 'flex',
    justifyContent: 'start',
  },
  profile: {
    width: '25%',
  },
})

function Profiles() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography gutterBottom color="secondary" variant="h6">
        <b>PROFILES</b>
      </Typography>
      <div className={classes.profiles}>
        <div className={classes.profile}>
          <Avatar />
        </div>
        <div className={classes.profile}>
          <Avatar />
        </div>
        <div className={classes.profile}>
          <Avatar />
        </div>
      </div>
    </div>
  )
}

export default Profiles
