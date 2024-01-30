import InfoLeft from 'src/components/InfoLeft/InfoLeft'
import Post from 'src/components/Post/Post'
import { postIds } from 'src/lib/data'
import { userSuggestions } from 'src/lib/data'

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="newsfeed">
        <InfoLeft />
        <div>
          {postIds.map((postId) => {
            return <Post key={postId} postId={postId} />
          })}
        </div>
        <div className="infoRightContainer">
          <div className="addToFeed">
            <p className="addFeed">Add to your feed</p>
            {Object.entries(userSuggestions).map((userId) => {
              const { name, bio, dpURL } = userSuggestions[userId[0]]
              return (
                <div key={`sg-${name}`} className="user-suggestion">
                  <img src={dpURL} alt="" className="user-sg-icn" />
                  <div className="user-name-bio-follow">
                    <p className="name-sg">{name}</p>
                    <p className="bio-sg">{bio}</p>
                    <button className="follow-btn">+ Follow</button>
                  </div>
                </div>
              )
            })}
          </div>
          {/* <Advertisement scrollVal={scrollVal} /> */}
        </div>
      </div>
    </div>
  )
}

export default HomePage
