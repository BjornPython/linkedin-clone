import Check from 'src/svgs/Check'
import Notif from 'src/svgs/Notif'
import Prep from 'src/svgs/Prep'
import Resume from 'src/svgs/Resume'
import Save from 'src/svgs/Save'
import Setting from 'src/svgs/Setting'
import Yt from 'src/svgs/Yt'

const DisplayLeftBannerRow = ({ Icon, title }) => {
  return (
    <div className="leftBannerContent">
      <div className="leftBannerIcon">
        <Icon />
      </div>
      <p>{title}</p>
    </div>
  )
}

const JobsLeftBanner = () => {
  return (
    <div className="leftBanner">
      <DisplayLeftBannerRow Icon={Save} title={'My jobs'} />
      <DisplayLeftBannerRow Icon={Notif} title={'Job alerts'} />
      <DisplayLeftBannerRow Icon={Check} title={'Demonstrate skills'} />
      <DisplayLeftBannerRow Icon={Prep} title={'Interview prep'} />
      <DisplayLeftBannerRow Icon={Resume} title={'Resume builder'} />
      <DisplayLeftBannerRow Icon={Yt} title={'Job seeker guidance'} />
      <DisplayLeftBannerRow Icon={Setting} title={'Application settings'} />
    </div>
  )
}

export default JobsLeftBanner
