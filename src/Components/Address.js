//React Hooks
import { useEffect, useState, useRef } from 'react';

//Components
import { DropdownButton, Dropdown, Form } from 'react-bootstrap';



function Address(props) {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        
        fetch('https://countriesnow.space/api/v0.1/countries/flag/images') 
            .then(response => response.json())
            .then(setCountries);

   }, []);

    return (
        <div>
            <Form.Group className="mb-3">
                <Form.Label className='text-white'>Street</Form.Label>
                <Form.Control type="text" placeholder="Enter your Street name" ref={props.street} required />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label className='text-white'>City</Form.Label>
                <Form.Control type="text" placeholder="Enter your City name" ref={props.city} required />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label className='text-white'>Zip Code</Form.Label>
                <Form.Control type="text" placeholder="Enter your Country Zip Code" ref={props.zipCode} required />
            </Form.Group>
            <DropdownButton id="dropdown-item-button" title="Address">
                <Dropdown.ItemText>Select Your Country</Dropdown.ItemText>
                {countries.map(data =>
                    <Dropdown.Item key={data.id}>{data.name}</Dropdown.Item>)}
            </DropdownButton>
        </div>
    );
}

export default Address;