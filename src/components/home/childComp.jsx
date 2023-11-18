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
      <section className={`hero h-[70vh] xl:h-screen max-w-screen`}></section>
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
