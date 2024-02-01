import resSample from 'public/gif/resSample.gif'

const RightBannerInfo = () => {
  return (
    <div className="rightBannerInfo">
      <div className="infoContent">
        <div className="seekerGuide">
          <p>Job seeker guidance</p>
          <p>Recommended based on your activity</p>
        </div>
        <div className="improveRes">
          <p>I want to improve my resume</p>
          <img src={resSample} className="img" alt="" />
        </div>
        <p className="explore">
          Explore our curated guide of expert-led courses, such as how to
          improve your resume and grow your network, to help you land your next
          opportunity.
        </p>
        <p className="showMore">Show more</p>
      </div>
    </div>
  )
}

export default RightBannerInfo
