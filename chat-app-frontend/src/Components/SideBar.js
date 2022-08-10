import React, { useContext } from 'react'
import { ListGroup } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { AppContext } from '../Context/appContext'



function SideBar() {

  const rooms =["firstroom" , "secondroom" , "thirdroom"]
  const user = useSelector((state) => state.user)

  const {socket} = useContext(AppContext)
  socket.off('new-user').on( 'new-user' , (payload)=>{
       console.log(payload)
  })

  if(!user){
  
     return <div></div>

  }

  return (
    <>
    <h2>Avaliable Rooms</h2>
    
    <ListGroup>

     {rooms.map((room , idx )=>
     
        <ListGroup.Item key={idx}>
            {room}
        </ListGroup.Item>

     )}

    </ListGroup>

    <h2>Members</h2>
    
    </>
  )
}

export default SideBar