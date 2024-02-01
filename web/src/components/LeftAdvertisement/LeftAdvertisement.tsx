import ad from 'public/images/ad.png'

const LeftAdvertisement = () => {
  return (
    <div className={'adContainer'}>
      <img src={ad} alt="" className={'adImage'} />
      <p className={'growNetwork'}>Grow your Network</p>

      <div className={'siteInfos'}>
        <div className={'block'}>
          <p>About</p>
          <p>Accesibility</p>
          <p>Help Center</p>
        </div>
        <div className={'block'}>
          <p>Privacy & Terms</p>
          <p>Ad Choices</p>
        </div>
        <div className={'block'}>
          <p>Advertising</p>
          <p>Business Services</p>
        </div>
        <div className={'block'}>
          <p>Get the Linkedin App</p>
          <p>More</p>
        </div>
      </div>
    </div>
  )
}

export default LeftAdvertisement
