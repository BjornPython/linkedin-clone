const Suggestion = ({ userInfo }) => {
  const { name, bio, dpURL, bannerURL } = userInfo

  return (
    <div className={'suggestionDiv'}>
      <img src={bannerURL} alt="" className={'suggestionBanner'} />

      <div className={'suggestionInfo'}>
        <img src={dpURL} className={'sgUserIcn'} alt="" />
        <p>{name}</p>
        <p>{bio}</p>

        <div className={'followBtn'}>
          <p>+ Follow</p>
        </div>
      </div>
    </div>
  )
}

export default Suggestion
