const Check = ({ fill = null }) => {
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
        d="M21 4L10 20l-6-6 1.41-1.41 4.3 4.3L18.57 4z"
        fill={fill || 'currentColor'}
      ></path>
    </svg>
  )
}

export default Check
