import React from 'react';

const Img = (props) => {
  return (
    <div
      style={{
        backgroundImage: `url(${props.url})`,
        height: "100%",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className='rounded'
    />
  );
};

export default Img;
