import React, { useState } from 'react';

//components
import InputField from '../../components/InputField/InputField';
import Map from '../../components/Map/Map';

//styling
import { HomeWrapper } from './HomePage.styles';

export default () => {
  const [points, setPoints] = useState({
    pickup: '',
    destination: '',
  });

  const { pickup, destination } = points;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPoints({
      ...points,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    if (pickup === '' && destination === '') {
      console.log('Fields cannot be empty. Try Again');
      return;
    }

    console.log(points);
  };

  return (
    <>
      <HomeWrapper>
        <div className="form-area">
          <form>
            <InputField
              label="Pickup Point"
              type="text"
              name="pickup"
              id="pickup"
              placeholder="Eg. Spintex Road, Junction"
              handleChange={handleChange}
              value={pickup}
            />

            <InputField
              label="Destination"
              type="text"
              name="destination"
              id="destination"
              placeholder="Eg. Ashongman Estates, F line"
              handleChange={handleChange}
              value={destination}
            />
          </form>
          <button className="btn" onClick={handleSubmit}>
            GET DETAILS
          </button>
        </div>
        <div className="map-area">
          <Map />
        </div>
      </HomeWrapper>
    </>
  );
};
