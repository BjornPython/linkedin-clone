type NavbarLayoutProps = {
  children?: React.ReactNode
}

const NavbarLayout = ({ children }: NavbarLayoutProps) => {
  return (
    <div>
      <div className="navbar">
        <div className="nav-contents">
          {/* <Search />
          <MainButtons /> */}
        </div>
      </div>
      {children}
    </div>
  )
}

export default NavbarLayout
