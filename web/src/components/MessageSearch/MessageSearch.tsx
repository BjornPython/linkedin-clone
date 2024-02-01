import Adjust from 'src/svgs/Adjust'
import SearchIcn from 'src/svgs/SearchIcn'
const MessageSearch = () => {
  return (
    <div className="msg-search-container">
      <div className="search-container-2">
        <div className="msg-search-icn">
          <SearchIcn />
        </div>
        <input type="text" className="msg-search-input" />
        <div className="adjust-icn">
          <Adjust />
        </div>
      </div>
    </div>
  )
}

export default MessageSearch
