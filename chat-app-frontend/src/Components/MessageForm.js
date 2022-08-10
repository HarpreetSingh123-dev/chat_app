import React from 'react'
import {Form , Row , Col , Button} from 'react-bootstrap'
import { useSelector } from 'react-redux'

import './MessageForm.css'

function MessageForm() {

    const user = useSelector( (state) => state.user )

    function handleSubmit(e){

        e.preventDefault()
    }


  return (
   <div> 
    <div className="messages-output">{!user && <div className='alert alert-danger'>Please Login</div>}</div>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={11}>

          <Form.Group>
            <Form.Control type='text' placeholder='your message' disabled={!user}></Form.Control>
          </Form.Group>

          </Col>

          <Col md={1}>
            
            <Button variant="primary"type="submit"style={{width:"100%",backgroundColor:"orange"}} disabled={!user} >

                <i className='fa fa-paper-plane'></i>
            </Button>
                                                             
          </Col>
                                                                                       

        </Row>
      </Form>
    </div>
  );
}

export default MessageForm