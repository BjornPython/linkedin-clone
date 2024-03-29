const Call = ({ fill = null }) => {
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
        d="M2 8v8a3 3 0 003 3h13V5H5a3 3 0 00-3 3zm4 3h3V8h2v3h3v2h-3v3H9v-3H6zm17-4v10h-2l-2-1V8l2-1z"
        fill={fill || 'currentColor'}
      ></path>
    </svg>
  )
}

export default Call
