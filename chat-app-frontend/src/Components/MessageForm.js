import React from 'react'
import {Form , Row , Col , Button} from 'react-bootstrap'
import './MessageForm.css'

function MessageForm() {


    function handleSubmit(e){

        e.preventDefault()
    }


  return (
   <div> 
    <div className="messages-output"></div>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={11}>

          <Form.Group>
            <Form.Control type='text' placeholder='your message'></Form.Control>
          </Form.Group>

          </Col>

          <Col md={1}>
            
            <Button variant="primary"type="submit"style={{width:"100%",backgroundColor:"orange"}}>

                <i className='fa fa-paper-plane'></i>
            </Button>
                                                             
          </Col>
                                                                                       

        </Row>
      </Form>
    </div>
  );
}

export default MessageForm