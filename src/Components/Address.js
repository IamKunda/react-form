//React Hooks
import { useEffect, useState, useRef } from 'react';

//Components
import { DropdownButton, Dropdown, Form } from 'react-bootstrap';



function Address(props) {
    const [countries, setCountries] = useState([]);//Manage fetched data
    const [provinces, setProvinces] = useState([]);


    const [selectedCountry, setSelectedCountry] = useState('Choose a Country');
    const [selectedProvince, setSelectedProvince] = useState('');
    //For Select Field
    const [value, setValue]=useState('My Value')
    useEffect(() => {

        fetch('https://countriesnow.space/api/v0.1/countries')
            .then(response=>{
                return response.json()
            }).then(data=>{
                //data is an object that needs to be converted to an arrays
                const myArray = data.data;//temporal array

                setCountries(myArray);
            });

    }, []);
    function fetchCityData() {
        //Data is already Stored in countries variable
        //Get Cities of Particular Country
        
        
    }

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
            {//Get Country
            }
            <div className='container'>
                <select
                    title={selectedCountry}
                    id="dropdown-menu-align-right"
                    value={value}
                    onChange={e => {
                        setValue(e.currentTarget.value);//Change Value being Displayed

                        setSelectedCountry(e.currentTarget.value);//Change the Country Selected
                        fetchCityData();
                    }
                    }
                >
                    {countries.map(country =>
                        <option key={country.id} value={country.country}>{country.country}</option>)}
                </select>
                {
                    //Get Province
                }
                <select
                    title={selectedProvince}
                    id="dropdown-menu-align-right"
                    value={selectedProvince}
                    onChange={fetchCityData}
                >
                    {provinces.map(province =>
                        <option key={province.id} value={province.city}>{province.city}</option>)}
                </select>
            </div>
            <h4>You selected {selectedCountry}</h4>
            {/*<DropdownButton id="dropdown-item-button" title="Address" onSelect={handleSelect}>
                <Dropdown.ItemText>Select Your Country</Dropdown.ItemText>
               
                </DropdownButton>*/}
        </div>
    );
}

export default Address;
