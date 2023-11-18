import React from 'react';

const Divider2 = () => {
  const data = [
    ["bg-[url('/images/seed.jpg')]", "SEEDS REQUIREMENTS", "800 KG PER ACRE"],
    ["bg-[url('/images/yield.jpg')]", "YIELD PER ACRE", "200-350 MUN"],
    ["bg-[url('/images/crop.jpeg')]", "CROP DURATION", "6-7 MONTHS"],
    ["bg-[url('/images/plantation.jpg')]", "NUMBER PLANTATION", "NUMBER PLANTATION"],
  ]
  return (
    <section className={`bg-themeColor mb-4 bg-cover bg-center h-auto p-8`}>
      <section className='mx-auto w-4/5 h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
        {data.map((e, i) => (
          <Card key={i} src={e[0]} h={e[1]} p={e[2]} />
        ))}
      </section>
    </section>
  );
}

export default Divider2;

function Card({ src, h, p }) {

  return (
    <section className={`${src} relative bg-cover bg-center text-white  rounded-3xl h-full flex flex-col items-center gap-2 py-14`}>
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 rounded-3xl"></div>
      <h3 className='text-base text-center font-bold w-fit z-10'>{h}</h3>
      <p className='text-center text-sm z-10'>{p}</p>
    </section>

  )
}
