import { useEffect, useState } from 'react'

import InfoLeft from 'src/components/InfoLeft/InfoLeft'
import InfoRight from 'src/components/InfoRight/InfoRight'
import Post from 'src/components/Post/Post'
import { postIds } from 'src/lib/data'

const HomePage = () => {
  const [scrollVal, setSCrollVal] = useState(0)

  useEffect(() => {
    document.addEventListener('scroll', () => {
      setSCrollVal(window.scrollY)
    })
  }, [])

  return (
    <div className="homepage">
      <div className="newsfeed">
        <InfoLeft scrollVal={scrollVal} />
        <div>
          {postIds.map((postId) => {
            return <Post key={postId} postId={postId} />
          })}
        </div>
        <InfoRight scrollVal={scrollVal} />
      </div>
    </div>
  )
}

export default HomePage
