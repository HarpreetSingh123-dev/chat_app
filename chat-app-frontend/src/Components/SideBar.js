import React from 'react'
import { ListGroup } from 'react-bootstrap'

const rooms =["firstroom" , "secondroom" , "thirdroom"]

function SideBar() {
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