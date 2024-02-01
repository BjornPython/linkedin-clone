const Gif = ({ fill = null }) => {
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
        d="M10 11v6H8.5l-.15-1.05C7.94 16.56 7.25 17 6 17h-.5C3.57 17 2 15.43 2 13.5v-3C2 8.57 3.57 7 5.5 7H9v2H5.5C4.67 9 4 9.67 4 10.5v3c0 .83.67 1.5 1.5 1.5h1c.83 0 1.5-.67 1.5-1.5V13H6v-2h4zm13-2V7h-7v10h2v-4h4v-2h-4V9h5zm-11 8h2V7h-2v10z"
        fill={fill || 'currentColor'}
      ></path>
    </svg>
  )
}

export default Gif
