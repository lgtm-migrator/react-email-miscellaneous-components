import React from 'react';

// import year from '../service.js';

const year = () => {
  return new Date().getFullYear();
}

const Sign = () => {
  <>
    ©
  </>
}

// TODO: create a layout, HOC style for this component

const Copyright = ({children}) => (
  <>
    {children}    
  </>
);

export default Copyright;
