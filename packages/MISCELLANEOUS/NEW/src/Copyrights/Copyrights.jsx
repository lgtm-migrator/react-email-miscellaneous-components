import React from 'react';

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
