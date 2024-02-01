const Clip = ({ fill = null }) => {
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
        d="M20.54 10.53L14.12 17A3 3 0 019 14.84a3 3 0 01.88-2.13L15.61 7 17 8.41l-5.71 5.71a1 1 0 00.71 1.71 1 1 0 00.71-.29l6.41-6.42a3 3 0 10-4.24-4.24l-10 10a3 3 0 104.24 4.24l.71-.7 1.41 1.41-.71.71a5 5 0 01-7.07-7.07l10-10a5 5 0 017.07 7.07z"
        fill={fill || 'currentColor'}
      ></path>
    </svg>
  )
}

export default Clip
