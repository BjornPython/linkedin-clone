import ChatHeader from '../ChatHeader/ChatHeader'
import ChatMessages from '../ChatMessages/ChatMessages'

const UserChat = () => {
  return (
    <div className="userChatContainer">
      <ChatHeader />
      <ChatMessages />
      {/* <ChatMessageInput />
    <ChatActions /> */}
    </div>
  )
}

export default UserChat
