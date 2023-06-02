import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../../redux/users/users'

function Users() {
  const users = useSelector(state => state.users.users)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUser())
  },[])
  return (
    <div>
      <h3>Users</h3>
      {users.length? users.map((user)=><p key={user.id}>{user.name}</p>): <h1>loading....</h1>}
  </div>
  )
}

export default Users
