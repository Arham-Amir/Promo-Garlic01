import React from 'react';
import Intro from '@/components/base/intro/introForGarlicBulb';

const ChildComp = () => {
  const data = {
    "name": "Garlic Bulb",
    "bg": "/bulb/1.jpeg",
    "bg-style": "bg-center",
    "description": [
      "Garlic is often sold as a whole bulb, covered with papery white skin. A garlic bulb, also known as a head of garlic, is made up of individual lobes that are attached to the main root. A clove of garlic is one of those individual lobes.",
    ],
    "benefits": [
      "Wards Off Cough and Cold.",
      "Good for Cardiac Health.",
      "Improves Brain Functioning.",
      "Improves Digestion.",
      "Balances Blood Sugar.",
      "Boosts Immunity.",
      "Improves Skin Health.",
      "Prevents Cancer and Peptic Ulcer.",

    ],
    "uses": ["Garlic Bulb Details", [
      "Product Size: 3/4/5/6 cm",
      "Packing Size: 3 and 20 Kg (Can be Customized)",
      "Type of Packing: Mesh Bag",
      "Availability: May/December"
    ],],
    "why": ["Why You'll Love It", [
      "More Flavour",
      "Incredibly easy to use",
      "Health benefits",

    ],],
    "images": [
      "/bulb/1.jpeg",
      "/bulb/4.jpeg",
      "/bulb/8.jpeg",
      "/bulb/9.jpeg",
      "/bulb/11.jpeg",
      "/bulb/12.jpg",
      "/bulb/13.jpg",
    ]
  }

  return (
    <section>
      <Intro data={data} />
    </section>
  );
}

export default ChildComp;
