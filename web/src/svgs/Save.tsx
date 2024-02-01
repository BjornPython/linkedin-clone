const Save = ({ fill = null }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      id="bookmark-fill-small"
      data-supported-dps="16x16"
      fill={fill || 'currentColor'}
      width="20"
      height="20"
    >
      <path
        d="M13 4a3 3 0 00-3-3H3v14l5-4.5 5 4.5z"
        fill={fill || 'currentColor'}
      ></path>
    </svg>
  )
}

export default Save
