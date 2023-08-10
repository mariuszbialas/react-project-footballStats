import React from 'react';

const CountryFlag = (props) => {
  return <img
    src={props.url}
    alt={props.alt}
    style={{ width: `${props.size}px` }} 
    className={props.className}
    />;
};

export default CountryFlag;
