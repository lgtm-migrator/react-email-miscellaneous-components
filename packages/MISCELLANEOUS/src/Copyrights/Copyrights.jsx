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

const Copyrights = ({companyName}) => (

  <em data-testid="copyTest">
    Copyright ©
    {year()}
    {' '}
    {companyName}. 
    All rights reserved.
  </em>


);

export default Copyright;


const Copyright = ({children}) => (
  <>
    {children}    
  </>
);

export default Copyright;



const companyName = () => {
  return 'xxx';
}


const CopyrightLayout1 = () => (

  <Copyright>
    <em data-testid="copyTest">
      Copyright <Sign />

      {year()}
      {' '}
      {companyName()}. 
    All rights reserved.
  </em>   
  </Copyright>
 
);


const CopyrightLayout2 = () => (
  <Copyright>
    <td align="left" class="body text-secondary">
      <Sign /> {companyName()}. All Rights Reserved.
      <br>

      <span class="address">101 King St, San Francisco, CA 94107</span>

    </td>
  </Copyright> 
);