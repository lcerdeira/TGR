import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextInput, Row } from 'react-materialize';
import { filterLocations, clearFilter } from '../../actions/location';

const LocationFilter = () => {
  const filtered = useSelector((state) => state.location.filtered);

  const text = useRef('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (!filtered) {
      text.current.value = '';
    }
  });

  const onChange = (e) => {
    if (text.current.value !== '') {
      dispatch(filterLocations(e.target.value));
    } else {
      dispatch(clearFilter());
    }
  };

  return (
    <Row className="row-grid filter">
      <TextInput ref={text} placeholder="Filter" onChange={onChange} />
    </Row>
  );
};

export default LocationFilter;
