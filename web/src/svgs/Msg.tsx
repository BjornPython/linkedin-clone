const Msg = ({ fill = null }) => {
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
        d="M16 4H8a7 7 0 0 0 0 14h4v4l8.16-5.39A6.78 6.78 0 0 0 23 11a7 7 0 0 0-7-7zm-8 8.25A1.25 1.25 0 1 1 9.25 11 1.25 1.25 0 0 1 8 12.25zm4 0A1.25 1.25 0 1 1 13.25 11 1.25 1.25 0 0 1 12 12.25zm4 0A1.25 1.25 0 1 1 17.25 11 1.25 1.25 0 0 1 16 12.25z"
      />
    </svg>
  )
}

export default Msg
