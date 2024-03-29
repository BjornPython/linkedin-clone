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
        d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 0 1-2.84 5.61L12 22v-4H8A7 7 0 0 1 8 4h8a7 7 0 0 1 7 7zm-2 0a5 5 0 0 0-5-5H8a5 5 0 0 0 0 10h6v2.28L19 15a4.79 4.79 0 0 0 2-4z"
      />
    </svg>
  )
}
export default Comment
