import ad from 'public/images/ad.png'

import { userSuggestions } from 'src/lib/data'

const InfoRight = () => {
  return (
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
      <div className={`ad-container`}>
        <img src={ad} alt="" className="ad-img" />
        <div className="site-infos">
          <div className="block">
            <p>About</p>
            <p>Accesibility</p>
            <p>Help Center</p>
          </div>
          <div className="block">
            <p>Privacy & Terms</p>
            <p>Ad Choices</p>
          </div>
          <div className="block">
            <p>Advertising</p>
            <p>Business Services</p>
          </div>
          <div className="block">
            <p>Get the Linkedin App</p>
            <p>More</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoRight
