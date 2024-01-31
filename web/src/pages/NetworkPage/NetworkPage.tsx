import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const NetworkPage = () => {
  return (
    <>
      <Metadata title="Network" description="Network page" />

      <h1>NetworkPage</h1>
      <p>
        Find me in <code>./web/src/pages/NetworkPage/NetworkPage.tsx</code>
      </p>
      <p>
        My default route is named <code>network</code>, link to me with `
        <Link to={routes.network()}>Network</Link>`
      </p>
    </>
  )
}

export default NetworkPage
