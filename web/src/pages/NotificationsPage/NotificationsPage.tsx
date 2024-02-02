import Notifications from 'src/components/Notifications/Notifications'
import NotifLeftBanner from 'src/components/NotifLeftBanner/NotifLeftBanner'

const NotificationsPage = () => {
  return (
    <div className="notifsPage">
      <div className="notifsContents">
        <NotifLeftBanner />
        <Notifications />
        {/* <RightAd /> */}
      </div>
    </div>
  )
}

export default NotificationsPage
