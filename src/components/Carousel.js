import React from 'react';
import { Carousel } from '@trendyol-js/react-carousel';



const SliderImage = () => {
    return (
<Carousel>
<div>
      <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-14.jpg" />
      <p className="legend">Legend 14</p>
    </div>
	</Carousel>
    );
}

export default SliderImage;