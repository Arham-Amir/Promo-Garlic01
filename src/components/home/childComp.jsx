import React from 'react';
import Categories from './categories/categories';
import SideBySide from './sideBySide/sideBySide';
import Divider1 from './divider1/divider1';
import Divider2 from './divider2/divider2';
import HomeGallery from './homeGallery/homeGallery';
import Faqs from './faqs/faqs';

const ChildComp = () => {
  return (
    <section>
      <section className={`hero h-[70vh] xl:h-screen max-w-screen`}>
        <section className='w-3/5 mx-auto'>
          <section className='flex flex-col items-center justify-center gap-5 xl:gap-8 text-white'>
            <h1 className='text-3xl md:text-5xl lg:text-7xl'>PROMO GARLIC</h1>
            <p className='w-40 border-y p-[1px]'></p>
            <p className='text-center'>
              We are offering Genuine NARC G1 garlic seeds for pre-booking of 2023 crop and providing FREE consultancy to farmers. Schedule a video call or visit our farms before purchasing with satisfaction. Our bookings are limited and will be served on a ‘first-come first-served’ basis.</p>
          </section>
        </section>
      </section>
      <Categories />
      <Divider1 />
      <SideBySide />
      <Divider2 />
      <Faqs />
      <HomeGallery />
    </section>
  );
}

export default ChildComp;
