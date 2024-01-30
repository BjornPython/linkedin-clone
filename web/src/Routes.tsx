// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import NavbarLayout from './layouts/NavbarLayout/NavbarLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={NavbarLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/network" page={NetworkPage} name="network" />
        <Route path="/notifications" page={NotificationsPage} name="notifications" />
        <Route path="/messages" page={MessagesPage} name="messages" />
        <Route path="/jobs" page={JobsPage} name="jobs" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
