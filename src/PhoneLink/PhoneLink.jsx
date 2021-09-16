import React from 'react';
import Link from '../Link/Link.jsx';
const PhoneLink = ({href, label}) => (
  <Link href="tel:"+href>{label}</Link>
);

export default PhoneLink;