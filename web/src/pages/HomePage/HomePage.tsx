import InfoLeft from 'src/components/InfoLeft/InfoLeft'
import Post from 'src/components/Post/Post'
import { postIds } from 'src/lib/data'

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
      </div>
    </div>
  )
}

export default HomePage
