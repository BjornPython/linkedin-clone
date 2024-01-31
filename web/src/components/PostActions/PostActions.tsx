import Comment from 'src/svgs/Comment'
import Like from 'src/svgs/Like'
import Repost from 'src/svgs/Repost'
import Send from 'src/svgs/Send'

const PostActions = () => {
  return (
    <div className="post-actions-container">
      <div className="action-btn">
        <div className="action-icn">
          <Like />
        </div>
        <p>Like</p>
      </div>
      <div className="action-btn">
        <div className="action-icn">
          <Comment />
        </div>
        <p>Comment</p>
      </div>
      <div className="action-btn">
        <div className="action-icn">
          <Repost />
        </div>

        <p>Repost</p>
      </div>
      <div className="action-btn">
        <Send />
        <p>Send</p>
      </div>
    </div>
  )
}

export default PostActions
