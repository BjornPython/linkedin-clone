const Prep = ({ fill = null }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      data-supported-dps="24x24"
      fill={fill || 'currentColor'}
      className="mercado-match"
      width="24"
      height="24"
      focusable="false"
    >
      <path
        d="M3 3v15a3 3 0 003 3h9v-6h6V3zm9 8H6v-1h6zm6-3H6V7h12zm-2 8h5l-5 5z"
        fill={fill || 'currentColor'}
      ></path>
    </svg>
  )
}

export default Prep