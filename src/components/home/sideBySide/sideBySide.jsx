import LazyImage from '@/components/base/lazyImage';
import React from 'react';

const SideBySide = () => {
  return (
    <section className='py-8 bg-[url("/images/sbsbg.jpg")]'>
      <section className='mx-auto w-full md:w-[94%] xl:w-[75%] flex flex-col md:flex-row justify-center items-center'>
        <Left />
        <Right />
      </section>
    </section>
  );
}

export default SideBySide;

function Left(params) {
  return (
    <section className='w-full px-6 md:px-0 md:w-[50%] h-[300px] md:h-screen'>
      <LazyImage className="h-full w-full object-cover" src="/images/sys.jpeg" />
    </section>
  )
}
function Right(params) {
  return (
    <section className='w-full md:w-[50%] p-1'>
      <section className='border-2 py-14 mx-5 px-5 md:px-8 flex flex-col gap-5'>
        <h3 className='text-center'>WHY YOU SHOULD GROW NARC G1 GARLIC</h3>
        <p className='text-center xl:px-5'>Farming is profitable in Pakistan. There is more production per acre. It is very easy from garlic farming. The best garlic farming is done by NARC G1. The seed should be according to the atmosphere. Farmers can get G1 garlic, a high yield variety. An estimated yield of 200 mun to 350 mun per acre. We can do more than fulfill our garlic. We can help our by exporting it to other countries. The economy is growing. NARC G1 has more nutritions and health benefits as compared to traditional garlic. Nutritionists prefer Pakistani G1 Garlic because It is an excellent source of vitamin E, C, and A. It also contains allicin, which has been known for its antibacterial properties. Pakistan’s NARC G1 garlic Garlic contains all of the essential amino acids, saponins, vitamins and minerals that are necessary for human health.</p>
      </section>
    </section>
  )
}
