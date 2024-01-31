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
      {/* <Suggestions styles={styles} /> */}
    </div>
  )
}

export default MainContents
