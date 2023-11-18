'use client'

import { MdLocationPin } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import { SiMinutemailer } from 'react-icons/si'
import { BiWorld } from 'react-icons/bi'
import ContactLeft from './contactLeft'
import ContactRight from './contactRight'
import ContactInfo from './contactInfo'

const ContactUs = () => {
  return (
    <section id='contactus' className='h-auto py-10 bg-bg'>
      <h1 className='text-black flex justify-center mb-4 font-heading'>Contact Us</h1>
      <section className='w-5/6 mx-auto py-5
      flex flex-col gap-x-4 md:flex-row md:gap-0'>
        <ContactLeft className='md:basis-3/5' />
        <ContactRight className='h-[250px] md:h-auto md:basis-2/5' />
      </section>
      <section className="mt-6 w-5/6 h-full mx-auto grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-6">
        <ContactInfo>
          <MdLocationPin size={54} className='bg-themeColor text-white rounded-full p-3' />
          <h2 className='text-sm w-fit text-center font-semibold  flex flex-col'>Address: <span className='font-normal'>60-J Block, DHA EME Sector, Multan Road, Lahore, Pakistan</span></h2>
        </ContactInfo>
        <ContactInfo>
          <BiWorld size={54} className='bg-themeColor text-white rounded-full p-3' />
          <h2 className='text-sm w-fit text-center font-semibold  flex flex-col'>Website: <span className='font-normal'>www.promodevelopers.com.pk</span></h2>
        </ContactInfo>
        <ContactInfo>
          <SiMinutemailer size={54} className='bg-themeColor text-white rounded-full p-3' />
          <h2 className='text-sm w-fit text-center font-semibold  flex flex-col'>Email: <span className='font-normal'>promodevelopers@gmail.com</span></h2>
        </ContactInfo>
        <ContactInfo>
          <FaPhoneAlt size={54} className='bg-themeColor text-white rounded-full p-3' />
          <h2 className='text-sm w-fit text-center font-semibold  flex flex-col'>Whatsapp: <span className='font-normal'>+92 300 4439445</span></h2>
        </ContactInfo>

      </section>
    </section>
  );
}

export default ContactUs;
