import React from 'react'
import socketIOClient from "socket.io-client";

const socket = socketIOClient('http://localhost:5000/users-namespace');

socket.on("DataUsers", (dataUsers) => {
  console.log(dataUsers)
})

function SocketIO() {
  return (
    <>
      Socket IO
    </>
  )
}

export default SocketIO
