import RightBannerInfo from '../RightBannerInfo/RightBannerInfo'

const RightBanner = () => {
  return (
    <div className="rightBanner">
      <RightBannerInfo />
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
  )
}

export default RightBanner
