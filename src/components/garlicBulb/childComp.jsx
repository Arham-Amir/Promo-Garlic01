import React from 'react';
import Intro from '@/components/base/intro/intro';

const ChildComp = () => {
  const data = {
    "name": "Garlic Bulb",
    "bg": "/bulb/1.jpeg",
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
    "uses": ["Use Of Garlic Bulb", [
      "Garlic is commonly used in salad dressings, vinaigrettes, marinades, sauces, vegetables, meats, soups, and stews. And, of course, there's garlic bread and in all its variations — garlic toast, bruschetta, crostini, canapé — which simply apply garlic to different kinds of bread, usually in a medium of butter or oil.",
    ],],
    "why": ["Why You'll Love It", [
      "More Flavour",
      "Incredibly Easy",
      "Health benefits",

    ],],
    "images": [
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
  }

  return (
    <section>
      <Intro data={data}/>
    </section>
  );
}

export default ChildComp;
