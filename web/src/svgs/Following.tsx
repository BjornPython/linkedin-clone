const Following = ({ fill = null }) => {
  return (
    <svg
      role="none"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      data-supported-dps="24x24"
      data-test-icon="person-medium"
    >
      <defs>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="person-medium"
          data-supported-dps="24x24"
          fill={fill || 'currentColor'}
        >
          <path
            d="M7 7a5 5 0 115 5 5 5 0 01-5-5zm7 7h-4a3 3 0 00-3 3v5h10v-5a3 3 0 00-3-3z"
            fillOpacity="0.9"
          ></path>
        </svg>
      </defs>

      <use
        href="#person-medium"
        width="24"
        height="24"
        strokeOpacity="0"
        stroke="#000000"
        fill={fill || 'currentColor'}
      ></use>
    </svg>
  )
}

export default Following
