import Dots from 'src/svgs/Dots'
import New from 'src/svgs/New'

import MessageContents from '../MessageContents/MessageContents'
import MessageSearch from '../MessageSearch/MessageSearch'

const Chats = () => {
  return (
    <div className="chatsContainer">
      <div className="messageHeader">
        <p>Messaging</p>
        <div className="chatIcons">
          <div className="chatHeaderIcn">
            <Dots />
          </div>
          <div className="chatHeaderIcn">
            <New />
          </div>
        </div>
      </div>
      <MessageSearch />
      <MessageContents height="100%" />
    </div>
  )
}

export default Chats
