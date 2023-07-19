const CButton = ({ id, className, onClick, value }) => {
  return (
    // <div>
    <button id={id} className={className} onClick={onClick}>
      {value}
    </button>
    // </div>
  )
}
export default CButton
