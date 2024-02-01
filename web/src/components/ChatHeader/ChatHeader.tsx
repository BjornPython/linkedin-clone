import Call from 'src/svgs/Call'
import Dots from 'src/svgs/Dots'
import Star from 'src/svgs/Star'

const ChatHeader = () => {
  return (
    <div className="chatHeader">
      <div className="nameStatus">
        <p>Maximo Guzman</p>
        <p>Available on mobile</p>
      </div>

      <div className="chatHeaderIcons">
        <div className="chatHeaderIcn">
          <Dots />
        </div>
        <div className="chatHeaderIcn">
          <Call />
        </div>
        <div className="chatHeaderIcn">
          <Star />
        </div>
      </div>
    </div>
  )
}

export default ChatHeader
