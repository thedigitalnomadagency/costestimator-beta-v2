import React from 'react';
import usePlacesAutocomplete from 'use-places-autocomplete';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from '@reach/combobox';
import '@reach/combobox/styles.css';

//styling
import { SearchWrapper } from './Search.styles';

export default ({ setAddress, placeholder }) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 5.603717, lng: () => -0.186964 },
      radius: 100 * 1000,
    },
  });

  const handleInput = (e) => {
    const { value } = e.target;
    if (value.includes('https://maps.google.com')) {
      const coords1 = value.match(/q=(-?[\d]*\.[\d]*)%2C(-?[\d]*\.[\d]*)/);
      const coords2 = value.match(/q=(-?[\d]*\.[\d]*),(-?[\d]*\.[\d]*)/);

      if (coords1) {
        setValue(`${coords1[1]}, ${coords1[2]}`);
        setAddress(`${coords1[1]}, ${coords1[2]}`);

        return;
      }

      if (coords2) {
        setValue(`${coords2[1]}, ${coords2[2]}`);
        setAddress(`${coords2[1]}, ${coords2[2]}`);

        return;
      }
    } else {
      setValue(value);
      setAddress(value);
    }
  };

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    setAddress(address);
  };

  return (
    <SearchWrapper>
      <Combobox onSelect={handleSelect}>
        <ComboboxInput
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder={placeholder}
        />
        <ComboboxPopover style={{ zIndex: 60 }}>
          <ComboboxList>
            {status === 'OK' &&
              data.map(({ description }, idx) => (
                <ComboboxOption key={idx} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </SearchWrapper>
  );
};
