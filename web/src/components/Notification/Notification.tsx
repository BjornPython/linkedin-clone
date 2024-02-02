import Dots from 'src/svgs/Dots'

const Notification = ({ notifInfo }) => {
  const { imageURL, name, time, text } = notifInfo
  return (
    <div className="notificationContainer">
      <img src={imageURL} alt="" className="notifImage" />
      <div className="notifInfo">
        <p>
          <b style={{ color: 'black' }}>{name}</b> {text}
        </p>
      </div>
      <div className="settingsContainer">
        <p>{time}</p>
        <div className="icnContainer">
          <div className="settingsIcon">
            <Dots />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notification
