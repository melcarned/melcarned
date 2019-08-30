import React from 'react'
import { Avatar, Typography, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  root: {},
  experience: {
    marginBottom: '2em',
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
    position: 'Software Engineer',
    company: 'Lab49',
    location: 'New York, NY',
    startDate: 'Sept 2018',
    endDate: 'Present',
    details: '',
  },
  {
    position: 'Application Developer',
    company: 'Lifion by ADP',
    location: 'New York, NY',
    startDate: 'June 2016',
    endDate: 'Feb 2018',
    details:
      'Lifion (by ADP) is a proprietary software platform that empowers developers to rapidly deploy global HR applications and enables clients to customize their HR application suite with low overhead. My team developed a suite of dynamic user facing applications that helps our client 1) manage and track time and 2) issue precise payroll reports. I collaborated with the UX team to develop Lifion’s UI component library used to improve the client experience across Lifion’s entire app suite.',
  },
  {
    position: 'Application Developer',
    company: 'Incentive Technology Group, LLC',
    location: 'Arlington, VA',
    startDate: 'Oct 2014',
    endDate: 'June 2016',
    details:
      'The ITG greenfield product team worked with stakeholders to deliver an MVP for a real-time energy cost monitoring platform to help clients improve energy usage behavior and reduce home energy costs. My deliverables included mobile UX design iterations, usability research findings and MEAN stack development. I architected and developed our eventing engine that provides real-time actionable alerts about a users energy consumption.',
  },
  {
    position: 'Co-Founder',
    company: 'Waiders',
    location: 'College Park, MD',
    startDate: 'December 2012',
    endDate: 'June 2015',
    details:
      "I collaborated with alumni of the Hinman CEOs & Technology Entrepreneurship program to establish an e-commerce apparel company aimed to provide innovative and customizable apparel. Our team developed relations with international manufacturers and established reoccurring wholesale and licensing agreements with Route-One Apparel, Lax World, and Bookholders. My primary role was in the strategy/design of our products and the development/maintenance of our E-commerce store. Waider's trademark, product rights and product stock were acquired by Route-One Apparel in 2015.",
  },
  {
    position: 'Web Developer',
    company: 'Paradyme Management Inc.',
    location: 'Greenbelt, MD',
    startDate: 'Sept 2012',
    endDate: 'Oct 2014',
    details:
      'HRMIS (US Courts Support Center) is 900-page government website that provides technical assistance for US Courts employees, managers, and human resource staff. Our team worked with the US courts to enhance the usability and design of the HRMIS site - reducing the sites size by 90%.',
  },
]
