import React, { useEffect } from 'react'
const ErrorToast = ({ show, setShow, message }) => {

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setShow();
      }, 2000);
    }
  }, [show])

  return (
    <div className={`errorToast ToastWrap ${show && "active"}`}>
      <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.4998 32.0832C25.5207 32.0832 32.0832 25.5207 32.0832 17.4998C32.0832 9.479 25.5207 2.9165 17.4998 2.9165C9.479 2.9165 2.9165 9.479 2.9165 17.4998C2.9165 25.5207 9.479 32.0832 17.4998 32.0832Z" stroke="#EF5350" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M13.373 21.6272L21.6272 13.373" stroke="#EF5350" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M21.6272 21.6272L13.373 13.373" stroke="#EF5350" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      {message}
    </div>
  )
}

export default ErrorToast