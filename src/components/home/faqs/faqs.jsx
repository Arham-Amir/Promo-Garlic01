'use client'
import React, { useState } from 'react';

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqArray = [
    ["Can I visit your Farm or Seed Storage facility before purchasing seed?", "Yes you can visit our farms and storage facility any time before purchasing our seed."],
    ["How can I locate your farm or storage facility?", "You can contact our team on given phone numbers and our representative will guide you to our farm location."],
    ["Do you offer Consultancy service?", "Yes, you can consult with our experts any time."],
    ["Do you charge for Consultancy Service?", "No, we do not charge any fee for consultancy service."],
    ["How can I calculate the estimated price of G1 Seed?", "You can calculate the price on our Seed price calculator [Link]. You can calculate price by both land or weight."],
    ["Do you offer any discount?", "Yes we do offer discounts to our customers. You can find the details on our price calculator."],
    ["Do I have to make an advance payment to confirm my pre-order?", "Yes, you will have to make an advance 25% payment of the total amount to confirm your order."],
    ["What is The Price of G1 Garlic in Pakistan 2023?", "The price of G1 garlic in Pakistan in 2023 may vary depending on the market conditions and the supplier’s pricing strategy. However, SeedsPk is proud to offer genuine and authorized fresh G1 garlic seed at a competitive price."],
    ["Is G1 Garlic Seed Available in Pakistan?", "Yes, G1 garlic seed is available in Pakistan. However, it’s important to ensure that you are getting genuine and authentic seed to achieve the best results. At SeedsPk, we offer high-quality G1 garlic seed. To learn more, please visit our website or contact us directly."],
    ["How Much G1 Garlic Seed Per acre?", "For G1 garlic seed, a general guideline is to plant 800 kilograms or 20 Mun fresh seed per acre. This is the recommended amount to ensure adequate seed coverage and optimal yield for your garlic crop. Please contact us to discuss your requirements and how we can help you achieve your desired results."],
    ["What is the Price of G1 Garlic Seed in Pakistan 2022 today?", "The latest price range of G1 garlic seed in Pakistan in 2022 is around 1800 to 2000 per KG for fresh garlic seeds on advance booking. However, it’s important to note that prices may vary depending on factors such as market demand and supply availability."],
    ["What is the Price of G1 Garlic Seed per KG?", "The price can vary depending on the demand and supply of garlic seeds."]
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
