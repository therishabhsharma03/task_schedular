import React from 'react';
import { HashLoader } from 'react-spinners';

const Spinner = () => {
  return (
    <HashLoader
      color="#367ed6"
      size={70}
      speedMultiplier={1}
    />
  );
};

export default Spinner;