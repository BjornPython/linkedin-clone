const ActiveMessage = ({ fill = null }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      id="overflow-web-ios-small"
      data-supported-dps="16x16"
      fill={fill || 'currentColor'}
      width="20"
      height="20"
    >
      <path
        d="M3 9.5A1.5 1.5 0 114.5 8 1.5 1.5 0 013 9.5zM11.5 8A1.5 1.5 0 1013 6.5 1.5 1.5 0 0011.5 8zm-5 0A1.5 1.5 0 108 6.5 1.5 1.5 0 006.5 8z"
        fill={fill || 'currentColor'}
      ></path>
    </svg>
  )
}

export default ActiveMessage
