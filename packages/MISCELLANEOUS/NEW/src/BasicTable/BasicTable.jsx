import React from 'react';

import { Table } from 'react-emails-components-miscellaneous';


// TODO: add styles as props from the outside
const BasicTable = ({children}) => (

  <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
    <tbody>

      {children}

    </tbody>
  </table>

);

export default BasicTable;