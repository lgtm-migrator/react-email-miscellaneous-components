import React from 'react';
import Link from '../Link/Link.jsx';

const EmailLink = ({href, label}) => (
  <Link href="mailto: "+{href}>
    {label}
  </Link>
);

export default EmailLink;