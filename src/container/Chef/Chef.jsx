import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt='chef' />
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word" />
      <h1 className='headtext__cormorant'>What we believe in</h1>
    
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt='quote' />
          <p className='p__opensans'>Et no sit sit ea nonumy takimata.Rebum amet no ipsum sit stet.</p>
        </div>
        <p className='p__opensans'>Stet dolores et ut vero sed eirmod. Lorem justo justo et et dolores, eos rebum et accusam at et tempor, rebum ut est elitr erat, no est dolores rebum stet clita ut amet ipsum takimata. Dolor stet vero diam aliquyam accusam at rebum, diam sed ea kasd duo kasd stet.</p>
      </div>

      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt='sign' />
      </div>
    
    </div>
  </div>
);

export default Chef;
