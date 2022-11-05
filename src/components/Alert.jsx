import React from 'react'

const Alert = ({type, message}) => {
  return (
    <div class={`alert alert-${type} d-flex align-items-center`} role="alert">
    <h6><b>{message}</b></h6>
    </div>
  );
}

export default Alert
