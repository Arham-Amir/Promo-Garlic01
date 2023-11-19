import React from 'react';
import Intro from '@/components/base/intro/intro';

const ChildComp = () => {
  const data = {
    "name": "Garlic Peeled",
    "description": [
      "Whether you're preparing pizza, pesto, or pasta, using freshly peeled garlic is always worthwhile. Instead of purchasing the jar of pre-chopped garlic, take the time to separate those strong cloves from their papery coverings. This will drastically improve the flavor of your dish. However, garlic can be difficult to remove from its peels since it is aware of how good it is.",
      "Peeled garlic is a practical and time-saving pre-peeled, ready-to-use product.",
    ],
    "benefits": [
      "It has been demonstrated that eating peeled garlic cloves will lower blood pressure, which can lower your risk of acquiring certain illnesses. Garlic contains chemicals that can ease blood vessel tension and enhance blood flow, easing the strain on your heart.",
      "Vitamin C, B vitamins, manganese, and selenium are just a few of the vitamins and minerals that are abundant in it. A good source of fiber is garlic.",
    ],
    "uses": ["Use Of Garlic Peeled", [
      "Peeled garlic is one of those handy meal-prep tricks that may be used whenever a recipe calls for finely chopped, minced, or grated garlic. Additionally, it adds flavor to sauces, marinades, and salads.",
    ],],
    "why": ["Why You'll Love It", [
      "Easy to use",
      "No Additives or Preservatives",
      "Time saving",
      "Stores so well ",
    ],],
    "images": [
      "/peeled/1.jpg",
      "/peeled/2.jpg",
      "/peeled/3.jpg",
      "/peeled/4.jpg",
      "/peeled/5.jpg",
      "/peeled/6.jpg",
      "/peeled/7.jpg",
      "/peeled/8.jpg",
      "/peeled/9.jpg",
      "/peeled/10.jpg",
      "/peeled/11.jpg",
    ]
  }

  return (
    <section>
      <Intro data={data}/>
    </section>
  );
}

export default ChildComp;
