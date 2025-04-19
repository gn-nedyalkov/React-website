import React from 'react'
import Hero from '../components/Hero'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage = () => {
  return <>
  <Hero title="React Developer"/>
  <JobListings isHome={true}/>
  <ViewAllJobs />
  </>
}

export default HomePage