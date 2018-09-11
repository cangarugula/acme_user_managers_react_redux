import React from 'react'
import {Link} from 'react-router-dom'

const Nav = ({users}) => {
  return (
    <ul>
      <Link to='/users'><li>Users ({users.length})</li></Link>
      <li>Managers ()</li>
      <li>Create User</li>
    </ul>
  )
}

export default Nav
