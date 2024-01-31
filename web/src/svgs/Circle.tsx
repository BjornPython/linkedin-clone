const Circle = ({ fill = null }) => {
  return (
    <svg
      fill={fill || 'currentColor'}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle fill={fill || 'currentColor'} cx="50" cy="50" r="50" />
    </svg>
  )
}
export default Circle
