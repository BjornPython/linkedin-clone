import MainButtons from 'src/components/MainButtons/MainButtons'
import Search from 'src/components/Search/Search'

type NavbarLayoutProps = {
  children?: React.ReactNode
}

const NavbarLayout = ({ children }: NavbarLayoutProps) => {
  return (
    <div className="rootDiv">
      <div className="navbar">
        <div className="nav-contents">
          <Search />
          <MainButtons />
        </div>
      </div>
      {children}
    </div>
  )
}

export default NavbarLayout
