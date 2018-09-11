import React from 'react'

const User = ({user,getManager}) => {
  return (
    <div>
    {
      user.managerId ?
      <div>
      <li>{user.name} managed by {getManager(user)}</li>
      <button>x</button>
      </div> :
      <div>
      <li>{user.name}</li>
      <button>x</button>
      </div>
    }
    </div>
  )
}

export default User
