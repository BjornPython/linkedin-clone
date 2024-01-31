import LinkedIn from 'public/svgs/linkedin.svg'
import SearchIcon from 'public/svgs/search.svg'

const Search = () => {
  return (
    <div className="search-container">
      <img src={LinkedIn} alt="" className="search-input-icn" />
      <div className="input-container">
        <div className="search-div">
          <img src={SearchIcon} alt="" className="search-input-icn" />
        </div>

        <input type="text" placeholder="Search" />
      </div>

      <div className="nav-btn hide-search">
        <img src={SearchIcon} alt="" className="search-input-icn" />
        <p>Search</p>
      </div>
    </div>
  )
}

export default Search
