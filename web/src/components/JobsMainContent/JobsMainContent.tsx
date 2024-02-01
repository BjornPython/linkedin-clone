import { jobs } from 'src/lib/data'

import RecommendedJob from '../RecommendedJob/RecommendedJob'

const RecommendedJobs = ['job4', 'job5', 'job6']

const JobsMainContent = () => {
  return (
    <div className="mainContent">
      <div className="recent">
        <div className="recentContents">
          <div className="jobSearches">
            <p>Recent job searches</p>
            <p>clear</p>
          </div>
          <br />

          {Object.entries(jobs).map(([k, v]) => {
            return (
              <div key={k} className="jobs">
                <p>{v.title}</p>
                <p>{v.location}</p>
              </div>
            )
          })}
        </div>
      </div>
      <div className="recent">
        <div className="recentContents">
          <div className="recommend">
            <p>Recommended for you</p>
            <p>Based on your profile and search history</p>
          </div>
          <br />
          {RecommendedJobs.map((jobId) => {
            return <RecommendedJob key={jobId} info={jobs[jobId]} />
          })}
        </div>
      </div>
    </div>
  )
}

export default JobsMainContent
