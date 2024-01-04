import React from 'react';
import Intro from '@/components/base/intro/intro';

const ChildComp = () => {
  const data = {
    "name": "Garlic Paste",
    "bg": "/paste/1.png",
    "bg-style":"bg-bottom",
    "description": [
      "Garlic paste is nothing more than garlic that has been combined with some oil or water, exactly as it is described. When your recipe calls for it, remove it from the freezer or refrigerator where you stored it.",
      "Any recipe can benefit from the flavor of garlic paste. In most recipes, it can be used in place of fresh garlic. Another practical method for obtaining the advantages of garlic without the overpowering smell is garlic paste.",
    ],
    "benefits": [
      "Good for cholesterol and blood pressure..",
      "If stored properly, it is less expensive and lasts longer.",
      "Vitamin C, B vitamins, manganese, and selenium are just a few of the vitamins and minerals that are abundant in it. A good source of fiber is garlic.",
      "Due to its high vitamin content, it has numerous health advantages. Your immune system can be strengthened by garlic, which can also help you prevent infections and lower cholesterol. Additionally, garlic powder can aid in boosting circulation and preventing blood clots.",
    ],
    "uses": ["Use Of Garlic Paste", [
      "One of those useful meal preparation tricks is garlic paste, which may be used whenever a recipe calls for finely chopped, minced, or grated garlic. Additionally, it adds flavor to sauces, marinades, and salads.",
    ],],
    "why": ["Why You'll Love It", [
      "More Flavor No Preservatives or Additives Extremely Simple",
      "So Well Stored!",
    ],],
    "images": [
      "/paste/1.png",
      "/paste/2.png",
      "/paste/3.png",
    ],
  }

  return (
    <section>
      <Intro data={data} />
    </section>
  );
}

export default ChildComp;
