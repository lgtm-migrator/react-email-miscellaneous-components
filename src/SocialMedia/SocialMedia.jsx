import React from 'react';

import Link from '../Link/Link.jsx';

import { ImageLink } from '../ImageLink/ImageLink.jsx';

const SocialMedia = ({ components, something }) => (
  {components.map((Component, key) => (
    <Component key={key} />))
  }
);

export default SocialMedia;
