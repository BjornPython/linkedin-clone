import NotificationRightAd from 'src/components/NotificationRightAd/NotificationRightAd'
import Notifications from 'src/components/Notifications'
import NotifLeftBanner from 'src/components/NotifLeftBanner'

const NotificationsPage = () => {
  return (
    <div className="notifsPage">
      <div className="notifsContents">
        <NotifLeftBanner />
        <Notifications />
        <NotificationRightAd />
      </div>
    </div>
  )
}

export default NotificationsPage
