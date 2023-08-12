import React from 'react';

const ShowFlag = (props) => {
  return <img
    src={props.url}
    alt={props.alt}
    style={{ width: props.size[0], height: props.size[1]}}
    className={props.className}
    />;
};

export default ShowFlag;
