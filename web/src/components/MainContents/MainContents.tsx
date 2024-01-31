import { usersInfo } from 'src/lib/data'

import Suggestion from '../Suggestion/Suggestion'

const MainContents = () => {
  return (
    <div className={'contentContainer'}>
      <div className={'contentOne'}>
        <p>No Pending Invitations</p>
        <p style={{ cursor: 'pointer' }}>Manage</p>
      </div>
      <div className={'contentOne'}>
        <p>Celebrations</p>
        <p style={{ cursor: 'pointer' }}>See all</p>
      </div>
      <div className={'suggestionsContainer'}>
        <p style={{ cursor: 'pointer', margin: '20px 0 20px 20px' }}>
          Suggestions
        </p>
        <div className={'allSuggestions'}>
          {Object.entries(usersInfo).map(([userId, userInfo]) => {
            return <Suggestion key={userId} userInfo={userInfo} />
          })}
        </div>
      </div>
    </div>
  )
}

export default MainContents
