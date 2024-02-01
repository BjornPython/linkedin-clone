import Dots from 'src/svgs/Dots'
import New from 'src/svgs/New'

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
      {/* <MessageSearch /> */}
      {/* <MessageContents height={'590px'} ENDPOINT={process.env.API_ENDPOINT} /> */}
    </div>
  )
}

export default Chats
