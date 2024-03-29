const Comment = ({ fill = null }) => {
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
        d="M21 3 0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"
      />
    </svg>
  )
}
export default Comment
