import InfoLeft from 'src/components/InfoLeft/InfoLeft'
import InfoRight from 'src/components/InfoRight/InfoRight'
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
        <InfoRight />
      </div>
    </div>
  )
}

export default HomePage
