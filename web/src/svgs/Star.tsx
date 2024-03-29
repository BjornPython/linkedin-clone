const Star = ({ fill = null }) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 16 16"
      fill={fill || 'currentColor'}
    >
      <path
        d="M8,2.77,9.6,6l3.59.53-2.6,2.54.61,3.58L8,11,4.8,12.67l.61-3.58L2.81,6.55,6.4,6,8,2.77M8,.5,5.73,5.11.67,5.85,4.33,9.43,3.47,14.5,8,12.11l4.53,2.39-.86-5.07,3.66-3.58-5.06-.74L8,.5Z"
        fill={fill || 'currentColor'}
      ></path>
    </svg>
  )
}

export default Star
