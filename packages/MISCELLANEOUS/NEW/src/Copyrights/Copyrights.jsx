import React from 'react';


// TODO: create a layout, HOC style for this component
const Copyright = ({companyName}) => (
  <em data-testid="copyTest">
    Copyright ©
    {new Date().getFullYear()}
    {' '}
    {companyName}. 
    All rights reserved.
  </em>
);

export default Copyright;
