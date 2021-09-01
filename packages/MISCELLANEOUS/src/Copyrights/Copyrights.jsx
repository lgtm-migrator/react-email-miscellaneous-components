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
const Copyright = ({companyName}) => (



  <em data-testid="copyTest">
    Copyright ©
    {year()}
    {' '}
    {companyName}. 
    All rights reserved.
  </em>


);

export default Copyright;


//<em data-testid="copyTest">
//    Copyright ©
//    {new Date().getFullYear()}
//    {' '}
//    {companyName}. 
//    All rights reserved.
//  </em>

// <td align="left" class="body text-secondary">
//   © Company, Inc. All Rights Reserved.
//   <br>
//   <span class="address">101 King St, San Francisco, CA 94107</span>
// </td>