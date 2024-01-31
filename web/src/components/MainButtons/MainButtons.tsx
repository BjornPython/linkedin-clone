import myDp from 'public/images/dp.jpg'
import Dots from 'public/svgs/dots.svg'

import { NavLink, routes, useMatch } from '@redwoodjs/router'

import ActiveJobs from 'src/svgs/ActiveJobs'
import ActiveMessage from 'src/svgs/ActiveMessage'
import Home from 'src/svgs/Home'
import InactiveHome from 'src/svgs/InactiveHome'
import Jobs from 'src/svgs/Jobs'
import Msg from 'src/svgs/Msg'
import Network from 'src/svgs/Network'
import Notif from 'src/svgs/Notif'

const DynamicIcon = ({ to, ActiveIcon, InactiveIcon, fill = null }) => {
  const matchInfo = useMatch(to)

  return matchInfo.match ? (
    <ActiveIcon fill={fill} />
  ) : (
    <InactiveIcon fill={fill} />
  )
}

const MainButtons = () => {
  return (
    <div className="main-btns">
      <NavLink to={'/'} activeClassName="nav-btn-active">
        <div className="nav-btn">
          <DynamicIcon
            to={routes.home()}
            ActiveIcon={Home}
            InactiveIcon={InactiveHome}
          />
          <p>Home</p>
          <span className="nav-target-icn"></span>
        </div>
      </NavLink>

      <NavLink to={'/network'} activeClassName="nav-btn-active">
        <div className="nav-btn">
          <div className="network-active">
            <Network />
          </div>
          <p>My Network</p>
          <span className={`nav-target-icn`}></span>
        </div>
      </NavLink>

      <NavLink to={'/jobs'} activeClassName="nav-btn-active">
        <div className="nav-btn">
          <DynamicIcon
            to={routes.jobs()}
            ActiveIcon={ActiveJobs}
            InactiveIcon={Jobs}
          />
          <p>Jobs</p>
          <span className="nav-target-icn"></span>
        </div>
      </NavLink>

      <NavLink to={'/messages'} activeClassName="nav-btn-active">
        <div className="nav-btn">
          <DynamicIcon
            to={routes.messages()}
            ActiveIcon={ActiveMessage}
            InactiveIcon={Msg}
          />
          <p>Messaging</p>
          <span className="nav-target-icn"></span>
        </div>
      </NavLink>

      <NavLink to={'/notifications'} activeClassName="nav-btn-active">
        <div className="nav-btn">
          <div className="active-notifs">
            <Notif />
          </div>

          <p>Notifications</p>
          <span className="nav-target-icn"></span>
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
