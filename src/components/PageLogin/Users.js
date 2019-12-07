import React from 'react'
import Store from 'store'

Store.set('user', { name:'Lau' })
const getUser = () => {
  return Store.get('user')
} 

function Users() {
  return (
    <>
      {getUser().name}
    </>
  )
}

export default Users
