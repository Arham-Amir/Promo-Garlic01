import React from 'react';
import Intro from '@/components/base/intro/intro';

const ChildComp = () => {
  const data = {
    "name": "Garlic Clove",
    "description": [
      "Remove the outer papery layer, and you'll see that one bulb is made up of many individual lobes that are also covered in papery skin. Each of these lobes is called a clove of garlic.",
      "Fresh garlic is sold in bulbs, this is an entire head of garlic that is covered in a paper like coating. The entire bulb is made up of separate pieces, each with its own paper-like coating. Each of those individual wedges or pieces is a clove of garlic.",
    ],
    "benefits": [
      "Good for blood pressure and cholesterol levels.",
      "It's cheaper and lasts longer when stored properly.",
      "It is rich in vitamins and minerals, including vitamin C, B vitamins, manganese, and selenium. Garlic is also a good source of fibre.",
      "It has many health benefits due to its high nutrient content. Garlic can help boost your immune system, fight off infections, and lower cholesterol levels. Garlic can also help improve circulation and prevent blood clots.",
    ],
    "uses": ["Use Of Garlic Clove", [
      "Garlic Clove is one of those versatile meal prep hacks that can be used whenever finely chopped, minced or grated garlic is called for in a recipe. It makes a savory addition to dressings, marinades and sauces, too. We can make many dishes with use of garlic cloves. For e.g., Garlic Butter, Garlic Chicken, Garlic Rice, Garlic butter with bread and many more.",
    ],],
    "why": ["Why You'll Love It", [
      "Add More flavor to dishes",
      "No Additives or Preservatives ",
      "Incredibly Easy to use ",
      "Stores So well! ",
      "Health benefits",
    ],],
    "images": [
      "/clove/1.jpeg",
      "/clove/2.jpeg",
      "/clove/3.jpeg",
      "/clove/4.jpeg",
      "/clove/5.jpeg",
      "/clove/6.jpeg",
      "/clove/7.jpeg",
      "/clove/8.jpeg",
      "/clove/9.jpeg",
      "/clove/10.jpeg",
      "/clove/11.jpeg",
      "/clove/12.jpeg",
      "/clove/13.jpeg",
      "/clove/14.jpeg",
      "/clove/15.jpeg",
      "/clove/16.jpeg",
      "/clove/17.jpeg",
    ]
  }

  return (
    <section>
      <Intro data={data}/>
    </section>
  );
}

export default ChildComp;
