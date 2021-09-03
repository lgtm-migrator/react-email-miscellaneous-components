import React from 'react';

import Link from '../Link/Link.jsx';
import Image from '../Image/Image.jsx'


let linkProps = {
    href: ,
    target: ,
    style: ,
    data-testid: "tableLeftHrefTest"
};

let imageProps = {
    src: ,
    alt: ,
    style: ,
    height: ,
    width: ,
    className: ,
    data-testid: "tableLeftImgTest"
};




const ImageLink = ({}) => (

export here stuff for links, 
export here stuff for images

    <Link>
        <Image />
    </Link>

  <a href={href} target="_blank" style={styles.followSocial} data-testid="tableLeftHrefTest">
    <img
      src={src}
      alt={alt}
      style={styles.followSocialImg}
      height={24}
      width={24}
      className=''
      data-testid="tableLeftImgTest"
    />
  </a>
);

export default ImageLink;