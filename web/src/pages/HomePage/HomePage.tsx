import InfoLeft from 'src/components/InfoLeft/InfoLeft'

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="newsfeed">
        <InfoLeft />

        {/* <Posts postIds={postIds} ENDPOINT={process.env.API_ENDPOINT} /> */}
      </div>
    </div>
  )
}

export default HomePage
