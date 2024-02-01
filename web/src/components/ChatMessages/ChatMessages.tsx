import sampleChatDp from 'public/images/user2.jpg'

import { sampleConvo } from 'src/lib/data'

const DisplayMessage = ({ messageInfo }) => {
  const { sender, message, dp } = messageInfo
  console.log(dp)

  return (
    <div className="chatMessage">
      <div className="imageName">
        <img src={dp} alt="" className="chatMessageDp" />
        <p>{sender}</p>
      </div>
      <div className="messageText">
        <p>{message}</p>
      </div>
    </div>
  )
}

const ChatMessages = () => {
  return (
    <div className="chatMessages">
      <div className="displayChatUser">
        <img src={sampleChatDp} className="chatDpSample" alt="" />
        <div className="chatUserInfo">
          <p>Maximo Guzman</p>
          <p>Senior Data Scientist at a Tech Startup</p>
        </div>
      </div>

      <div className="allMessageContents">
        <div className="borderTop">
          <hr />
          <p>MONDAY</p>
          <hr />
        </div>

        {sampleConvo.map((message, i) => {
          return <DisplayMessage key={i} messageInfo={message} />
        })}
      </div>
    </div>
  )
}

export default ChatMessages
