import banner from 'public/images/banner.png'
import dp from 'public/images/dp.jpg'

import { Link } from '@redwoodjs/router'

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="newsfeed">
        <div className="infoLeftContainer">
          <div className="leftProfileContainer">
            <img src={banner} alt="" className="userBanner" />
            <div className="left-info">
              <Link to={''}>
                <img src={dp} className="newsfeed-dp" alt="" />
              </Link>

              <p className="newsfeed-username">Nathan Flores</p>

              <p className="newsfeed-bio">
                Web Developer | React | JavaScript | NodeJS | ExpressJS |
                MongoDB | Firebase
              </p>

              <div className="connection-container">
                <p className="connections">Connections</p>
                <p className="grow-ur-network">Grow your network</p>
              </div>

              <div className="access-container">
                <p className="access-one">Access exlusive tools & insights</p>
                <p className="access-two">Grow your network</p>
              </div>

              <div className="my-items-div">
                <p>My items</p>
              </div>
            </div>
          </div>
        </div>

        {/* <Posts postIds={postIds} ENDPOINT={process.env.API_ENDPOINT} /> */}
      </div>
    </div>
  )
}

export default HomePage
