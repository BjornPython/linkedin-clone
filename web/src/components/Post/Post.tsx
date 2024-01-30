import { postsInfo, usersInfo } from 'src/lib/data'
import Circle from 'src/svgs/Circle'

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
      {/* <PostActions /> */}
    </div>
  )
}

export default Post
