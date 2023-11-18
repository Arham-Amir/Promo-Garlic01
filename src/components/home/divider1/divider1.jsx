import React from 'react';

const Divider1 = () => {
  return (
    <section className={`bg-[url('/images/dividerBg.jpeg')] bg-fixed mt-4 bg-cover bg-center h-auto p-8`}>
      <section className='mx-auto w-4/5 h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
        <Card src="/images/sow.png" h="Sowing Time" p= "October to November is sowing time."/>
        <Card src="/images/harvester.png" h="Harvest Time" p= "The harvest of G1 garlic is from May to June."/>
        <Card src="/images/weight-machine.png" h="Average Bulb Weight" p= "The bulb weight of fresh G1 Garlic is 200 to 500 grams."/>
        <Card src="/images/pakistan.png" h="Grow in all Pakistan" p= "In Pakistan, you can grow G1 Garlic."/>
      </section>
    </section>
  );
}

export default Divider1;

function Card({src, h, p}) {
  return (
    <section className={`bg-slate-300 rounded-3xl h-full flex flex-col gap-2 p-8`}>
      <img className='h-20 mx-auto' src={src} alt="" />
      <h6 className='text-sm text-center font-bold uppercase'>{h}</h6>
      <p className='text-xs text-center'>{p}</p>
    </section>

  )
}
