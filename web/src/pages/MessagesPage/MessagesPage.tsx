import Chats from 'src/components/Chats/Chats'
import UserChat from 'src/components/UserChat/UserChat'

const MessagesPage = () => {
  return (
    <div className="messagePage">
      <div className="messageContent">
        <div className="messageContainer">
          <Chats />
          <UserChat />
        </div>

        <div className="messageAd">{/* <MessageAd /> */}</div>
      </div>
    </div>
  )
}

export default MessagesPage
