import LeftAdvertisement from 'src/components/LeftAdvertisement/LeftAdvertisement'
import Contacts from 'src/svgs/Contacts'
import Events from 'src/svgs/Events'
import Following from 'src/svgs/Following'
import Hashtag from 'src/svgs/Hashtag'
import Network from 'src/svgs/Network'
import Newsletter from 'src/svgs/Newsletter'
import Pages from 'src/svgs/Pages'

const LeftBanner = () => {
  return (
    <div className={'networkLeftBanner'}>
      <p className={'mngNetwork'}>Manage my Network</p>
      <div className={'networkInfo'}>
        <div className="icon">
          <Network />
        </div>
        <p>Connections</p>
      </div>
      <div className={'networkInfo'}>
        <div className="icon">
          <Contacts />
        </div>
        <p>Connections</p>
      </div>

      <div className={'networkInfo'}>
        <div className="icon">
          <Following />
        </div>
        <p>Following & followers</p>
      </div>
      <div className={'networkInfo'}>
        <div className="icon">
          <Network />
        </div>
        <p>Groups</p>
      </div>
      <div className={'networkInfo'}>
        <div className="icon">
          <Events />
        </div>
        <p>Events</p>
      </div>
      <div className={'networkInfo'}>
        <div className="icon">
          <Pages />
        </div>
        <p>Pages</p>
      </div>
      <div className={'networkInfo'}>
        <div className="icon">
          <Newsletter />
        </div>
        <p>Newsletter</p>
      </div>
      <div className={'networkInfo'}>
        <div className="icon">
          <Hashtag />
        </div>
        <p>Hashtags</p>
      </div>
      <LeftAdvertisement />
    </div>
  )
}

export default LeftBanner
