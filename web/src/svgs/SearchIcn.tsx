const SearchIcn = ({ fill = null }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill={fill || 'currentColor'}
      className="mercado-match"
      data-supported-dps="24x24"
    >
      <path
        fill={fill || 'currentColor'}
        d="m21.41 18.59-5.27-5.28A6.83 6.83 0 0 0 17 10a7 7 0 1 0-7 7 6.83 6.83 0 0 0 3.31-.86l5.28 5.27a2 2 0 0 0 2.82-2.82zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z"
      />
    </svg>
  )
}

export default SearchIcn
