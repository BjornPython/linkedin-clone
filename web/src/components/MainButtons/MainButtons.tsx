import myDp from 'public/images/dp.jpg'
import Dots from 'public/svgs/dots.svg'
import Home from 'public/svgs/home.svg'
import InactiveHome from 'public/svgs/in-home.svg'
import ActiveJobs from 'public/svgs/jobs-active.svg'
import Jobs from 'public/svgs/jobs.svg'
import ActiveMessage from 'public/svgs/message-active.svg'
import Msg from 'public/svgs/msg.svg'
import Network from 'public/svgs/network.svg'
import Notif from 'public/svgs/notif.svg'

import { Link } from '@redwoodjs/router'

const MainButtons = () => {
  const home = true
  const network = false
  const jobs = false
  const messages = false
  const notifications = true

  return (
    <div className="main-btns">
      <Link to={'/'}>
        <div className="nav-btn">
          {home ? (
            <img src={Home} alt="" className="nav-btn-icn" />
          ) : (
            <img src={InactiveHome} alt="" className="nav-btn-icn" />
          )}
          <p>Home</p>
          <span className={`nav-target-icn ${home && 'nav-active'}`}></span>
        </div>
      </Link>

      <Link to={'/network'}>
        <div className="nav-btn">
          <img
            src={Network}
            alt=""
            // className={`"nav-btn-icn" ${network && 'network-active'}`}
            className={`nav-btn-icn`}
          />
          <p>My Network</p>
          <span className={`nav-target-icn ${network && 'nav-active'}`}></span>
        </div>
      </Link>

      <Link to={'/jobs'}>
        <div className="nav-btn">
          {jobs ? (
            <img src={ActiveJobs} alt="" className="nav-btn-icn" />
          ) : (
            <img src={Jobs} alt="" className="nav-btn-icn" />
          )}
          <p>Jobs</p>
          <span className={`nav-target-icn ${jobs && 'nav-active'}`}></span>
        </div>
      </Link>

      <Link to={'/messages'}>
        <div className="nav-btn">
          {messages ? (
            <img src={ActiveMessage} alt="" className="nav-btn-icn" />
          ) : (
            <img src={Msg} alt="" className="nav-btn-icn" />
          )}
          <p>Messaging</p>
          <span className={`nav-target-icn ${messages && 'nav-active'}`}></span>
        </div>
      </Link>

      <Link to={'/notifications'}>
        <div className="nav-btn">
          <img
            src={Notif}
            alt=""
            className={`"nav-btn-icn" ${notifications && 'active-notifs'}`}
          />

          <p>Notifications</p>
          <span
            className={`nav-target-icn ${notifications && 'nav-active'}`}
          ></span>
        </div>
      </Link>

      <div
        className="nav-btn"
        style={{ borderRight: '1px solid rgba(0, 0, 0, 0.1)' }}
      >
        <img src={myDp} alt="" className="nav-btn-icn" />
        <p>Me</p>
        <span className={`nav-target-icn `}></span>
      </div>

      <div className="nav-btn">
        <img src={Dots} alt="" className="nav-btn-icn" />
        <p>Work</p>
        <span className={`nav-target-icn `}></span>
      </div>

      <div className="prem-txt">
        <p>Try Premium for free</p>
      </div>
    </div>
  )
}

export default MainButtons
