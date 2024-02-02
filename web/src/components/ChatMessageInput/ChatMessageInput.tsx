import Down from 'src/svgs/Down'

const ChatMessageInput = () => {
  return (
    <div className="chatMessageInputContainer">
      <textarea placeholder="Write a message..." />
      <div className="msgArrowIcn">
        <Down />
      </div>
    </div>
  )
}

export default ChatMessageInput
