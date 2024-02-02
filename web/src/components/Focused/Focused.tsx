import { usersInfo } from 'src/lib/data'

import Chat from '../Chat/Chat'
const Focused = () => {
  return (
    <div className="focused-container">
      {Object.entries(usersInfo).map(([userId, userInfo]) => {
        console.log('in here')

        return <Chat key={userId} userInfo={userInfo} />
      })}
      {Object.entries(usersInfo).map(([userId, userInfo]) => {
        return <Chat key={userId} userInfo={userInfo} />
      })}
    </div>
  )
}

export default Focused
