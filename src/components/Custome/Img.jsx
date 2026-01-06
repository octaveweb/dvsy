import React from 'react';

const Img = (props) => {
  return (
    <div
      style={{
        backgroundImage: `url(${props.url})`,
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius:".25rem"
      }}
    />
  );
};

export default Img;
