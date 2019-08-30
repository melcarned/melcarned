import React from 'react'
import { Avatar, Typography, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  root: {},
  experience: {
    marginBottom: '6em',
    marginTop: '2em',
  },
})

function Experience() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography gutterBottom color="secondary" variant="h6">
        <b>EXPERIENCE</b>
      </Typography>
      <div>
        {EXPERIENCE_DATA.map(experienceDetails => {
          const {
            position,
            company,
            location,
            startDate,
            endDate,
            details,
          } = experienceDetails

          return (
            <div className={classes.experience}>
              <Typography gutterBottom variant="h6">
                <b>{position}</b>
              </Typography>
              <Typography
                color="textSecondary"
                gutterBottom
                variant="subtitle1"
              >
                <i>
                  {company}, {location} ({startDate} - {endDate})
                </i>
              </Typography>
              <Typography gutterBottom variant="body1">
                {details}
              </Typography>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Experience

const EXPERIENCE_DATA = [
  {
    position: 'APPLICATION DEVELOPER',
    company: 'Lifion by ADP',
    location: 'New York NY',
    startDate: 'June 2016',
    endDate: 'Feb 2018',
    details:
      'Developed Beacon UI - Lifion’s UI component library used to maintain consistent UX patterns to improve client experience and company brand recognition across Lifion’s entire app suite.' +
      'Streamlined our implementation team’s deployment process by building 4 dynamic user facing applications driven by client specific requirements.' +
      'Developed a core application layer that stores client timesheet data and executes business logic to issue precise payroll reports.' +
      'Built an integrations dashboard that supports 3rd party timesheet APIs to seamlessly transition clients to the Lifion suite.',
  },
  {
    position: 'APPLICATION DEVELOPER',
    company: 'Lifion by ADP',
    location: 'New York NY',
    startDate: 'June 2016',
    endDate: 'Feb 2018',
    details:
      'Developed Beacon UI - Lifion’s UI component library used to maintain consistent UX patterns to improve client experience and company brand recognition across Lifion’s entire app suite.' +
      'Streamlined our implementation team’s deployment process by building 4 dynamic user facing applications driven by client specific requirements.' +
      'Developed a core application layer that stores client timesheet data and executes business logic to issue precise payroll reports.' +
      'Built an integrations dashboard that supports 3rd party timesheet APIs to seamlessly transition clients to the Lifion suite.',
  },
  {
    position: 'APPLICATION DEVELOPER',
    company: 'Lifion by ADP',
    location: 'New York NY',
    startDate: 'June 2016',
    endDate: 'Feb 2018',
    details:
      'Developed Beacon UI - Lifion’s UI component library used to maintain consistent UX patterns to improve client experience and company brand recognition across Lifion’s entire app suite.' +
      'Streamlined our implementation team’s deployment process by building 4 dynamic user facing applications driven by client specific requirements.' +
      'Developed a core application layer that stores client timesheet data and executes business logic to issue precise payroll reports.' +
      'Built an integrations dashboard that supports 3rd party timesheet APIs to seamlessly transition clients to the Lifion suite.',
  },
  {
    position: 'APPLICATION DEVELOPER',
    company: 'Lifion by ADP',
    location: 'New York NY',
    startDate: 'June 2016',
    endDate: 'Feb 2018',
    details:
      'Developed Beacon UI - Lifion’s UI component library used to maintain consistent UX patterns to improve client experience and company brand recognition across Lifion’s entire app suite.' +
      'Streamlined our implementation team’s deployment process by building 4 dynamic user facing applications driven by client specific requirements.' +
      'Developed a core application layer that stores client timesheet data and executes business logic to issue precise payroll reports.' +
      'Built an integrations dashboard that supports 3rd party timesheet APIs to seamlessly transition clients to the Lifion suite.',
  },
]
