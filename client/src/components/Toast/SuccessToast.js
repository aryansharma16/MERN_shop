import React, { useEffect } from 'react'

const SuccessToast = ({ show, setShow, message }) => {
console.log(show)
  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setShow(false);
      }, 2000);
    }
  }, [show])
  
  return (
    <div className={`successToast ToastWrap  ${show && "active"}`}>
      <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.4998 32.0832C25.5207 32.0832 32.0832 25.5207 32.0832 17.4998C32.0832 9.479 25.5207 2.9165 17.4998 2.9165C9.479 2.9165 2.9165 9.479 2.9165 17.4998C2.9165 25.5207 9.479 32.0832 17.4998 32.0832Z" stroke="#7BC896" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M11.3022 17.5001L15.4293 21.6272L23.6981 13.373" stroke="#7BC896" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      {message}
    </div>
  )
}

export default SuccessToast