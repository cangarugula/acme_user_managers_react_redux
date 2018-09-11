import React from 'react'
import User from './User'

const Users = ({users,getManager}) => {
  return (
    <ul>
      {users.map(user => (
        <User user={user} getManager={getManager}/>
      ))}
    </ul>
  )
}

export default Users
