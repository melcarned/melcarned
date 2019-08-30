import React from 'react'
import { Avatar, Typography, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  root: {},
  education: {
    marginTop: '1em',
  },
})

function Education() {
  const classes = useStyles()
  const {
    major,
    minor,
    college,
    location,
    dateGraduated,
    fraternity,
  } = EDUCATION_DATA

  return (
    <div className={classes.root}>
      <Typography gutterBottom color="secondary" variant="h6">
        <b>EDUCATION</b>
      </Typography>
      <div className={classes.education}>
        <Typography gutterBottom variant="body1">
          <b>{major}</b>, minor in <b>{minor}</b>
        </Typography>
        <Typography gutterBottom color="textSecondary" variant="body1">
          <i>
            {college}, {location} ({dateGraduated}),
          </i>{' '}
          {fraternity}
        </Typography>
      </div>
    </div>
  )
}

export default Education

const EDUCATION_DATA = {
  major: 'B.S. Computer Science',
  minor: 'Technology Entrepreneurship',
  college: 'University of Maryland',
  location: 'College Park',
  dateGraduated: 'May 2015',
  fraternity: 'Delta Sigma Phi',
}
