const Chat = ({ userInfo }) => {
  const { dpURL, name } = userInfo
  return (
    <div className="chat-container">
      <img src={dpURL} alt="" className="chat-dp" />
      <div className="chat-texts">
        <p>{name}</p>
        <p>{name}: Lorem ipsum dolor sit amet, consect adipiscing elit.</p>
      </div>
    </div>
  )
}

export default Chat
