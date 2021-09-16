import React from 'react';

// import { styles } from './styles';
// import config from './config';

import { 
  ImageLink,
  imgProps,
  getLinkProps
} from '../ImageLink/ImageLink.jsx';


const Logo = ({href, imageLink, styles}) => {

  const imageProps = imgProps()
  const linkProps = getLinkProps()
  const imageLinkProps =  {...imageProps, ...linkProps }

  //   <ImageLink href={href} style={styles.title} src={src} width={600} style={styles.img} className="mcnImage" />
  return (
      <ImageLink {...imageLinkProps} />    
  )
}

export default Logo;

{/* <a href={href} 
title='' 
className='' 
target="_blank" 
style={styles.title}>

  <img
    align="center"
    alt=""
    src={imageLink}
    width={600}
    style={styles.img}
    className="mcnImage"
  />
</a> */}