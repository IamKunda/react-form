import {useState, useRef} from 'react';
//Component Imports
import { Form, Button } from 'react-bootstrap';
import Address from './Address';

function Inputs() {

    //Variables
    const firstName = useRef();
    const lastName = useRef();
    const phoneNumber = useRef();
    const street = useRef();
    const city = useRef();
    const zipCode = useRef();
    const country = useRef();
    const province = useRef();

    //Function for Form Validation
    function btnSubmitHandler(event) {
        event.preventDefault();//Prevent the Default Behaviour of onSubmit Click
        //get user Inputs
        const finalFirstName = firstName.current.value;
        const finalLastName = lastName.current.value;
        const finalPhoneNumber = phoneNumber.current.value;
        
        

        alert('Entered details: '+finalFirstName+","+finalLastName+", "+finalPhoneNumber);
    }
    return (
        <div className='container'>
            <Form onSubmit={btnSubmitHandler}>
                <Form.Group className="mb-3">
                    <Form.Label className='text-white'>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your First Name" ref={firstName} required/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className='text-white'>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your Last Name" ref={lastName} required/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label className='text-white'>Phone</Form.Label>
                    <Form.Control type="phone number" placeholder="Enter your Phone Number" ref={phoneNumber} required/>
                </Form.Group>
                <Address
                street={street}
                city={city}
                zipCode={zipCode}
                />
                <Button variant="primary" type="submit" >
                    Submit
                </Button>
            </Form>
        </div>
    )
}



export default Inputs;