import React from 'react';
import Video from './video/video';
import GalleryImages from './galleryImages.jsx/galleryImages';

const ChildComp = () => {
  return (
    <section >
      {/* <section className={`hero h-[50vh] max-w-screen`}>
        <h1 className='text-white tracking-widest'>Gallery</h1>
      </section> */}
      <section className='mb-10'>
        <h1 className='w-4/5 border text-center mt-5 p-5 text-5xl mx-auto font-heading font-bold heading-bg'>Garlic Bulb</h1>
        <section>
          <GalleryImages />
        </section>
      </section>
      <Video />
    </section>
  );
}

export default ChildComp;
