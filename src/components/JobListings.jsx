import React from 'react'
import jobs from '../jobs.json'
import { useState } from 'react'
import { useEffect } from 'react' 
import JobListing from './JobListing'   

const JobListings = ({isHome = false}) => {


  const [jobs, setJobs]= useState([])
  const [loading, setLoading]=useState(true)

  useEffect(()=>{
    const fetchJobs = async () => {
      try {
        const res = await fetch("/api/jobs")
      const data = await res.json();
      setJobs(data)
      } catch (error){
        console.log("Error fetching jobs:", error)
      } finally {
        setLoading(false)
      }
      
    }
    fetchJobs()
  }, [])

  // const jobListings = isHome ? jobs.slice(0,3) : jobs; // Get the first 3 jobs from the jobs array

  return (
    <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            Browse Jobs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {loading ? (<h2>Loading...</h2>):
              jobs.map((job) => (
                <JobListing key={job.id} job={job} />
              ))
            }

        </div>  
        </div>  
    </section>
  )
}

export default JobListings