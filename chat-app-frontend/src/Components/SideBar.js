import React, { useContext, useEffect } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { AppContext } from '../Context/appContext'



function SideBar() {

  const user = useSelector((state) => state.user)
  const {
    socket,
    setMembers,
    members,
    setCurrentRoom,
    setRooms,
    rooms,
    setPrivateMemberMsg,
    privateMemberMsg,
    currentRoom,
  } = useContext(AppContext);

  useEffect(() => {
    if (user) {
      setCurrentRoom("general");
      getRooms();
      socket.emit("join-room", "general");
      socket.emit("new-user");
    }
  }, []);
  

  socket.off('new-user').on( 'new-user' , (payload)=>{
       //console.log(payload)
       setMembers(payload)
      
  })

  
  function getRooms() {
    fetch("http://localhost:3002/rooms").then((res)=> res.json()).then((data)=> setRooms(data));
  }

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

    <ListGroup>
    {members.map((member)=>( 
      <ListGroup.Item key={member.id} style={{cursor:"pointer"}}>
        {member.name}
      </ListGroup.Item>))}

    </ListGroup> 
    
    </>
  )
}

export default SideBar