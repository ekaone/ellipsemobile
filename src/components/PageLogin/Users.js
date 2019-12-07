import React from 'react'
import Store from 'store'

Store.set('user', { name:'Lau' })
// Store.remove('user')
const getUser = () => {
  return Store.get('user')
} 

function Users() {
  return (
    <>
      {!getUser() ? 'Empty' : getUser().name}
    </>
  )
}

export default Users
