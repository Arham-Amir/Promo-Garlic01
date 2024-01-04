'use client'
import React from 'react';
import { SiTruenas } from "react-icons/si";
import { TiTickOutline } from "react-icons/ti";
import { FaChevronDown } from "react-icons/fa";
import Slider from '@/components/base/slider/slider';
import { Link } from 'react-scroll';


const Intro = ({ data }) => {

  return (
    <section className='flex flex-col gap-10 justify-center items-center pb-5'>
      <section style={{'backgroundImage': `url(${data["bg"]})`}} className={`relative min-h-[35vh] md:min-h-[50vh] py-14 bg-cover ${data["bg-style"]} text-white flex flex-col items-center justify-center gap-5`}>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50">
        </div>
        <h1 className='z-10'>{data["name"]}</h1>
        {data["description"].map((e, i) => (
          <p key={i} className='text-center w-[80%] md:w-[60%] z-10'>
            {e}
          </p>
        ))}
      </section>
      <h1>Benefits of {data["name"]}</h1>
      <section className='w-4/5 flex flex-col sm:flex-row flex-wrap gap-4 items-center justify-center'>
        {data["benefits"].map((e, i) => (
          <section key={i} className={`w-full sm:w-auto flex`}>
            <section className='p-4 w-full sm:w-fit flex flex-row bg-themeColor/30 gap-4 items-center rounded-xl'>
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
              {data["uses"][0]}
            </h2>
            {data["uses"][1].map((e, i) => (
              <p key={i} className='md:w-4/5'>{e}</p>
            ))}
          </section>
          <section className='w-11/12 md:w-2/6 p-5 flex flex-col gap-5'>
            <h2 className='border-t-4 w-fit pt-4 border-green-600'>
              {data["why"][0]}
            </h2>
            {data["why"][1].map((e, i) => (
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
          <Link to={data["name"]} smooth={true} offset={-20} duration={500}><FaChevronDown className='text-4xl cursor-pointer' /></Link>
        </section>
      </section>
      {data["images"] != "null" &&
        <section id={data["name"]} className='w-full flex flex-col items-center gap-10'>
          <h1>Gallery</h1>
          <section className='w-11/12 px-5'>
            <Slider data={data["images"]} />
          </section>
        </section>
      }
    </section>
  );
}

export default Intro;
