import { postsInfo, usersInfo } from 'src/lib/data'
import Circle from 'src/svgs/Circle'
import Comment from 'src/svgs/Comment'
import Like from 'src/svgs/Like'
import Repost from 'src/svgs/Repost'
import Send from 'src/svgs/Send'

const Post = ({ postId }) => {
  const postInfo = postsInfo[postId]
  const { caption, imageURL, userId } = postInfo

  const userInfo = usersInfo[userId]

  const { dpURL, name, bio } = userInfo

  return (
    <div className="post-container">
      <div className="post-user-container">
        {dpURL ? (
          <img src={dpURL} className="post-user-pic" alt="" />
        ) : (
          <div className="post-user-icon">
            <Circle />
          </div>
        )}

        <div className="user-info-div">
          <p>{name}</p>
          <p>{bio}</p>
          <p>1w</p>
        </div>
      </div>
      <div className="post-caption">
        <p>{caption}</p>
      </div>
      <img src={imageURL} className="post-img" alt="" />
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
    </div>
  )
}

export default Post
