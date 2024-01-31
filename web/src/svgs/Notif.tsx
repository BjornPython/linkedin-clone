const Notif = ({ fill = null }) => {
  console.log(fill)

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill={fill || 'rgba(0, 0, 0, 0.6)'}
      className="mercado-match"
      data-supported-dps="24x24"
    >
      <path
        fill={fill || 'currentColor'}
        d="M22 19h-8.28a2 2 0 1 1-3.44 0H2v-1a4.52 4.52 0 0 1 1.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0 1 22 18zM18.21 7.44A6.27 6.27 0 0 0 12 2a6.27 6.27 0 0 0-6.21 5.44L5 13h14z"
      />
    </svg>
  )
}

export default Notif
