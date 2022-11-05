import React from 'react'
import Spinner from "./Spinner.gif"

const Loader = () => {
  return (
    <div className='loader'>
      <img src={Spinner} alt="loading..."/>
    </div>
  )
}

export default Loader
