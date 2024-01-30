import myDp from 'public/images/dp.jpg'
import Dots from 'public/svgs/dots.svg'
import Home from 'public/svgs/home.svg'
import InactiveHome from 'public/svgs/in-home.svg'

import { NavLink } from '@redwoodjs/router'

import ActiveJobs from 'src/svgs/ActiveJobs'
import ActiveMessage from 'src/svgs/ActiveMessage'
import Jobs from 'src/svgs/Jobs'
import Msg from 'src/svgs/Msg'
import Network from 'src/svgs/Network'
import Notif from 'src/svgs/Notif'

const MainButtons = () => {
  const home = false
  const jobs = false
  const messages = false
  const notifications = false

  return (
    <div className="main-btns">
      <NavLink to={'/'} activeClassName="nav-btn-active">
        <div className="nav-btn">
          {home ? (
            <img src={Home} alt="" className="nav-btn-icn" />
          ) : (
            <img src={InactiveHome} alt="" className="nav-btn-icn" />
          )}
          <p>Home</p>
          <span className={`nav-target-icn ${home && 'nav-active'}`}></span>
        </div>
      </NavLink>

      <NavLink to={'/network'} activeClassName="nav-btn-active">
        <div className="nav-btn">
          <Network />
          <p>My Network</p>
          <span className={`nav-target-icn`}></span>
        </div>
      </NavLink>

      <NavLink to={'/jobs'} activeClassName="nav-btn-active">
        <div className="nav-btn">
          {jobs ? <ActiveJobs /> : <Jobs />}
          <p>Jobs</p>
          <span className={`nav-target-icn  ${jobs && 'nav-active'}`}></span>
        </div>
      </NavLink>

      <NavLink to={'/messages'} activeClassName="nav-btn-active">
        <div className="nav-btn">
          {messages ? <ActiveMessage fill={'black'} /> : <Msg />}
          <p>Messaging</p>
          <span className={`nav-target-icn ${messages && 'nav-active'}`}></span>
        </div>
      </NavLink>

      <NavLink to={'/notifications'} activeClassName="nav-btn-active">
        <div className="nav-btn">
          <Notif fill={notifications && 'black'} />

          <p>Notifications</p>
          <span
            className={`nav-target-icn ${notifications && 'nav-active'}`}
          ></span>
        </div>
      </NavLink>

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
        <span className={`nav-target-icn`}></span>
      </div>

      <div className="prem-txt">
        <p>Try Premium for free</p>
      </div>
    </div>
  )
}

export default MainButtons
