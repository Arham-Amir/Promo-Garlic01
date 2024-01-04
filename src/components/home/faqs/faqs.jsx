'use client'
import React, { useState } from 'react';

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqArray = [
    ["Can I visit your Farm or Seed Storage facility before purchasing seed?", "Yes, you can visit our farms and storage facility any time before purchasing seed from us."],
    ["How can I locate your farm or storage facility?", "You can contact us for the exact pin location of our farm."],
    ["Do you offer Consultancy service?", "Yes, you can consult with us anytime after purchasing seed."],
    ["Do you charge for Consultancy Service?", "No, we do not charge any fee for consultancy service if you purchase seed from us."],
    ["Can we do investment with you?", "Yes, you can invest with us. Contact us for further details."],
    ["Where are farms located?", "They are located in Manga Mandi."],
    ["Do you have any other products related to Garlic?", "Yes, we do have Garlic Bulb, Garlic Clove, Garlic peeled, Garlic Paste, and Garlic Powder."],
    ["Do you export these items?", "Yes, we can export these items."],
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <section className='w-full h-auto p-5 flex flex-col gap-8 justify-center items-center'>
      <h1>FAQS</h1>
      <div className="join join-vertical w-4/5">
        {faqArray.map((e, i) => (
          <div key={i} className={`collapse collapse-arrow join-item border border-base-300 bg-themeColor/10 shadow-sm shadow-gray-400 ${activeIndex === i ? 'collapse-open' : ''}`} onClick={() => toggleFAQ(i)}>
            <input type="radio" name="my-accordion-4" checked={activeIndex === i} readOnly />
            <div className="collapse-title text-xl font-medium">
              <p>{e[0]}</p>
            </div>
            <div className="collapse-content">
              <p>{e[1]}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Faqs;
