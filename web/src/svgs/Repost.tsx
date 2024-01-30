const Comment = ({ fill = null }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      id="repost-medium"
      data-supported-dps="24x24"
      fill={fill || 'currentColor'}
      fillOpacity="0.9"
      width="24"
      height="24"
    >
      <path
        fill={fill || 'currentColor'}
        d="M13.96 5H6c-.55 0-1 .45-1 1v10H3V6c0-1.66 1.34-3 3-3h7.96L12 0h2.37L17 4l-2.63 4H12l1.96-3zm5.54 3H19v10c0 .55-.45 1-1 1h-7.96L12 16H9.63L7 20l2.63 4H12l-1.96-3H18c1.66 0 3-1.34 3-3V8h-1.5z"
        fillOpacity="0.9"
      ></path>
    </svg>
  )
}
export default Comment
