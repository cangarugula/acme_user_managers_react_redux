import React from 'react'

const Nav = ({users,managers}) => {
  return (
    <ul>
      <li>Users ({users.length})</li>
      <li>Managers ({managers.length})</li>
      <li>Create User</li>
    </ul>
  )
}

export default Nav
