'use client'
import React from 'react';
import { SiTruenas } from "react-icons/si";
import { TiTickOutline } from "react-icons/ti";
import { FaChevronDown } from "react-icons/fa";
import Slider from '@/components/base/slider/slider';
import { Link } from 'react-scroll';


const Intro = () => {
  const data = [
    "Good for blood pressure and cholesterol levels.",
    "It's cheaper and lasts longer when stored properly.",
    "It is rich in vitamins and minerals, including vitamin C, B vitamins, manganese, and selenium. Garlic is also a good source of fibre.",
    "It has many health benefits due to its high nutrient content. Garlic can help boost your immune system, fight off infections, and lower cholesterol levels. Garlic can also help improve circulation and prevent blood clots.",
  ]
  const d = [
    "Add More flavor to dishes",
    "No Additives or Preservatives ",
    "Incredibly Easy to use ",
    "Stores So well! ",
    "Health benefits",
  ]
  const data1 = [
    "/images/homegal1.jpg",
    "/images/homegal2.jpg",
    "/images/homegal3.jpg",
    "/images/homegal4.jpg",
    "/images/homegal5.jpg",
    "/images/homegal6.jpg",
    "/images/homegal1.jpg",
    "/images/homegal2.jpg",
    "/images/homegal3.jpg",
    "/images/homegal4.jpg",
    "/images/homegal5.jpg",
    "/images/homegal6.jpg",
  ]
  return (
    <section className='flex flex-col gap-10 justify-center items-center py-5'>
      <section className='flex flex-col items-center gap-5'>
        <h1>Garlic Clove</h1>
        <p className='text-center w-[80%] md:w-[60%]'>
          Remove the outer papery layer, and you’ll see that one bulb is made up of many individual lobes that are also covered in papery skin. Each of these lobes is called a clove of garlic.
        </p>
        <p className='text-center w-[80%] md:w-[60%]'>
          Fresh garlic is sold in bulbs, this is an entire head of garlic that is covered in a paper like coating. The entire bulb is made up of separate pieces, each with its own paper-like coating. Each of those individual wedges or pieces is a clove of garlic.
        </p>
      </section>
      <section className='w-4/5 flex flex-row flex-wrap gap-4 items-center justify-center'>
        {data.map((e, i) => (
          <section key={i} className={`w-auto flex`}>
            <section className='p-4 w-fit flex flex-row bg-themeColor/30 gap-4 items-center rounded-xl'>
              <SiTruenas className='min-w-[25px] min-h-[25px]' />
              <p className=''>{e}</p>
            </section>
          </section>
        ))}

      </section>
      <section className='pt-16 pb-8 h-auto bg-themeColor text-white w-full flex flex-col justify-center items-center gap-5'>
        <section className='h-max text-white w-full  flex flex-col md:flex-row justify-center items-center md:items-start gap-1'>
          <section className='w-11/12 md:w-3/6 p-5 flex flex-col gap-5'>
            <h2 className='border-t-4 w-fit pt-4 border-green-600'>
              Use of Garlic Clove
            </h2>
            <p className='md:w-4/5'>Garlic Clove is one of those versatile meal prep hacks that can be used whenever finely chopped, minced or grated garlic is called for in a recipe. It makes a savory addition to dressings, marinades and sauces, too. We can make many dishes with use of garlic cloves. For e.g., Garlic Butter, Garlic Chicken, Garlic Rice, Garlic butter with bread and many more.</p>
          </section>
          <section className='w-11/12 md:w-2/6 p-5 flex flex-col gap-5'>
            <h2 className='border-t-4 w-fit pt-4 border-green-600'>
              Why You’ll Love It
            </h2>
            {d.map((e, i) => (
              <section className='flex gap-2 items-center hover:scale-110 transition duration-100 hover:font-bold' key={i}>
                <TiTickOutline className='text-green-600' />
                <p>
                  {e}
                </p>
              </section>
            ))}
          </section>
        </section>
        <section className='flex justify-center w-full'>
          <Link to='gallery' smooth={true} offset={-20} duration={500}><FaChevronDown className='text-4xl' /></Link>
        </section>
      </section>
      <section id='gallery' className='w-full flex flex-col items-center gap-10'>
        <h1>Gallery</h1>
        <section className='w-full px-5'>
          <Slider data = {data1}/>
        </section>
      </section>
    </section>
  );
}

export default Intro;
