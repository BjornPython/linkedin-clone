import Save from 'src/svgs/Save'
import Seen from 'src/svgs/Seen'

const RecommendedJob = ({ info }) => {
  return (
    <div className="recommendJobs">
      <img src={info.DpURL} alt="" className="sampleURL" />

      <div className="JobsTxt">
        <p>{info.title}</p>
        <p>{info.company}</p>
        <p>{info.location}</p>
      </div>

      <div className="seenIcnCter">
        <Seen />
      </div>

      <div className="emptyIcnCter">
        <div className="emptySaveIcn">
          <Save />
        </div>
      </div>
    </div>
  )
}

export default RecommendedJob
