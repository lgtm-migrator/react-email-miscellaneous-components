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


// <td align="left" class="body text-secondary">
//   © Company, Inc. All Rights Reserved.
//   <br>
//   <span class="address">101 King St, San Francisco, CA 94107</span>
// </td>