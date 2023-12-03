import React from 'react';
import Video from './video/video';
import Slider from '../base/slider/slider';

const ChildComp = () => {
  const bulb = [
    "/bulb/1.jpeg",
    "/bulb/2.jpeg",
    "/bulb/3.jpeg",
    "/bulb/4.jpeg",
    "/bulb/5.jpeg",
    "/bulb/6.jpeg",
    "/bulb/7.jpeg",
    "/bulb/8.jpeg",
    "/bulb/9.jpeg",
    "/bulb/10.jpeg",
    "/bulb/11.jpeg",
  ]
  const clove = [
    "/clove/1.jpeg",
    "/clove/2.jpeg",
    "/clove/3.jpeg",
    "/clove/4.jpeg",
    "/clove/5.jpeg",
    "/clove/6.jpeg",
    "/clove/7.jpeg",
    "/clove/8.jpeg",
    "/clove/9.jpeg",
    "/clove/12.jpeg",
    "/clove/13.jpeg",
    "/clove/15.jpeg",
    "/clove/16.jpeg",
    "/clove/17.jpeg",
  ]
  const peeled = [
    "/peeled/1.jpg",
    "/peeled/2.jpg",
    "/peeled/3.jpg",
    "/peeled/4.jpg",
    "/peeled/5.jpg",
    "/peeled/6.jpg",
    "/peeled/7.jpg",
    "/peeled/8.jpg",
    "/peeled/9.jpg",
    "/peeled/10.jpg",
    "/peeled/11.jpg",
  ]
  const powder = [
    "/powder/3.jpg",
    "/powder/4.jpg",
    "/powder/5.jpg",
    "/powder/6.jpg",
    "/powder/7.jpg",
    "/powder/8.jpg",
    "/powder/9.jpg",
  ]
  const paste = [
    "/paste/1.png",
    "/paste/2.png",
    "/paste/3.png",
  ]

  return (
    <section >
      <section className='mb-10 flex flex-col gap-10'>
        <Video />
        <section className='w-full flex flex-col items-center gap-10'>
          <h1 className='w-4/5 border text-center mt-5 p-5 mx-auto font-heading'>Garlic Clove</h1>
          <section className='w-11/12 px-5'>
            <Slider data={clove} />
          </section>
        </section>
        <section className='w-full flex flex-col items-center gap-10'>
          <h1 className='w-4/5 border text-center mt-5 p-5 mx-auto font-heading'>Garlic Bulb</h1>
          <section className='w-11/12 px-5'>
            <Slider data={bulb} />
          </section>
        </section>
        <section className='w-full flex flex-col items-center gap-10'>
          <h1 className='w-4/5 border text-center mt-5 p-5 mx-auto font-heading'>Garlic Peeled</h1>
          <section className='w-11/12 px-5'>
            <Slider data={peeled} />
          </section>
        </section>
        <section className='w-full flex flex-col items-center gap-10'>
          <h1 className='w-4/5 border text-center mt-5 p-5 mx-auto font-heading'>Garlic Powder</h1>
          <section className='w-11/12 px-5'>
            <Slider data={powder} />
          </section>
        </section>
      </section>
      <section className='w-full flex flex-col items-center gap-10'>
        <h1 className='w-4/5 border text-center mt-5 p-5 mx-auto font-heading'>Garlic Paste</h1>
        <section className='w-11/12 px-5'>
          <Slider data={paste} />
        </section>
      </section>
    </section>
  );
}

export default ChildComp;

