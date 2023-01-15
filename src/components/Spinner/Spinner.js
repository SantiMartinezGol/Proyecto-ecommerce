import React from 'react'
import './spinner.css'

export const Spinner = () => {
  return (
    <div className='cont' style={{marginTop:'30vh'}}>
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div> 
    </div>
    
  )
}
export default Spinner