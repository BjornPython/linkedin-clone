import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const JobsPage = () => {
  return (
    <>
      <Metadata title="Jobs" description="Jobs page" />

      <h1>JobsPage</h1>
      <p>
        Find me in <code>./web/src/pages/JobsPage/JobsPage.tsx</code>
      </p>
      <p>
        My default route is named <code>jobs</code>, link to me with `
        <Link to={routes.jobs()}>Jobs</Link>`
      </p>
    </>
  )
}

export default JobsPage
