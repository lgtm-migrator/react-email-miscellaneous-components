import React from 'react';

import { Img } from 'react-image';
// const myComponent = () => <Img src="https://www.example.com/foo.jpg" />



const Logo = () => (
    <img
        align="center"
        alt=""
        src={config.imgLink}
        width={600}
        style={styles.img}
        className="mcnImage"
    />

);

export default Logo;


// import React, {Suspense} from 'react'
// import {useImage} from 'react-image'
 
// function MyImageComponent() {
//   const {src} = useImage({
//     srcList: 'https://www.example.com/foo.jpg',
//   })
 
//   return <img src={src} />
// }
 
// export default function MyComponent() {
//   return (
//     <Suspense>
//       <MyImageComponent />
//     </Suspense>
//   )
// }