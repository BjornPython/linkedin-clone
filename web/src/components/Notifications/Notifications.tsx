import { notifications } from 'src/lib/data'

import Notification from '../Notification/Notification'

const Notifications = () => {
  return (
    <div className="notifsContainer">
      {notifications.map((notifInfo, index) => {
        return <Notification key={`notif-${index}`} notifInfo={notifInfo} />
      })}
    </div>
  )
}

export default Notifications
