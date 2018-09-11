import React from 'react'
import {Link} from 'react-router-dom'

const Nav = ({users,managers}) => {
  return (
    <ul>
      <Link to='/users'><li>Users ({users.length})</li></Link>
      <li>Managers ({managers.length})</li>
      <li>Create User</li>
    </ul>
  )
}

export default Nav
