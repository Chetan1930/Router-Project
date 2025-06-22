import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
     <div className='content'>
    <div>404! Page NotFound</div>
    <h4>Back to <Link to='/' style={{color:'blue'}}>Home Page</Link></h4>
    
    </div>
  )
}

export default NotFound