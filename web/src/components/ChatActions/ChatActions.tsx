import Clip from 'src/svgs/Clip'
import Dots from 'src/svgs/Dots'
import Emoji from 'src/svgs/Emoji'
import Gif from 'src/svgs/Gif'
import Image from 'src/svgs/Image'

const ChatActions = () => {
  return (
    <div className="chatActions">
      <div className="chatActionIcns">
        <div className="chatHeaderIcn">
          <Image />
        </div>
        <div className="chatHeaderIcn">
          <Gif />
        </div>
        <div className="chatHeaderIcn">
          <Clip />
        </div>
        <div className="chatHeaderIcn">
          <Emoji />
        </div>
      </div>

      <div className="chatActionIcns">
        <button>Send</button>
        <div className="chatHeaderIcn">
          <div className="chatActionDots">
            <Dots />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatActions
