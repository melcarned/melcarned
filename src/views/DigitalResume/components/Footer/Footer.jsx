import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '3em 0',
    size: '8px',
  },
  signature: {
    fontFamily: 'Pacifico',
    marginLeft: '0.25em',
  },
})

function Footer() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      &copy; {new Date().getFullYear()}
      <Typography color="secondary" variant="body1">
        <span className={classes.signature}>melcarned</span>
      </Typography>
    </div>
  )
}

export default Footer
