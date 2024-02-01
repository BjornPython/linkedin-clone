import JobsLeftBanner from 'src/components/JobsLeftBanner/JobsLeftBanner'
import JobsMainContent from 'src/components/JobsMainContent/JobsMainContent'

const JobsPage = () => {
  return (
    <div className="jobPage">
      <div className="jobContents">
        <JobsLeftBanner />
        <JobsMainContent />
        {/* <RightBanner /> */}
      </div>
    </div>
  )
}

export default JobsPage
