import React from 'react';
import Intro from '@/components/base/intro/intro';

const ChildComp = () => {
  const data = {
    "name": "Garlic Powder",
    "bg": "/powder/3.jpg",
    "bg-style":"bg-center",
    "description": [
      "A fine powder known as garlic powder is created by drying and grinding garlic cloves. The medical benefits of garlic have been recognized for a very long time, and its distinctive, pungent flavor is well-known. All the advantages of fresh garlic are there in garlic powder, but it is easier to use and won't give you foul breath.",
      "Any meal can benefit from the flavor of garlic when using garlic powder. In most recipes, it can be used in place of fresh garlic. Another practical method for obtaining the advantages of garlic without the overpowering smell is garlic powder.",
    ],
    "benefits": [
      "Vitamin C, B vitamins, manganese, and selenium are just a few of the vitamins and minerals that are abundant in it. A good source of fiber is garlic.",
      "Due to its high vitamin content, it has numerous health advantages. Your immune system can be strengthened by garlic, which can also help you prevent infections and lower cholesterol. Additionally, garlic powder can aid in boosting circulation and preventing blood clots.",
      "It dissolves and infuses when mixed with liquids, making powdered garlic the perfect flavoring for marinades, salad dressings, and brines.",
      "Garlic powder can also be used as a condiment to add taste to a variety of foods, including pizza, popcorn, soups, meats, and vegetables. It can also be used to enhance the flavor of other foods.",
      "The best way to flavor ground meat: In quickly cooked ground meats like meatballs, burgers, and sausage, chopped garlic will not soften. Instead, sprinkle the ground pork mixture with garlic powder to add flavor.",
      "Ideal for flavoring ground meats: When cooked briefly, like in meatballs, burgers, and sausage, chunks of chopped garlic will not soften.",
      "You can substitute 8 fresh garlic cloves for one teaspoon of garlic powder if your recipe calls for it and you don't have any on hand or would prefer to use fresh garlic.",
    ],
    "uses": ["Use Of Garlic Powder", [
      "You can use garlic powder in a variety of ways. Soups, stews, sauces, veggies, and meat meals can all benefit from its flavor.",
      "Additionally, a spice mixture made with garlic powder can be used to season beef, fish, or chicken.",
      "Additionally, you can sprinkle meats with garlic powder before grilling or roasting them. To make a great rub, just combine garlic powder, olive oil, and your favorite herbs and spices.",
      "Additionally, popcorn and roasted nuts can be flavored with garlic powder. Simply top popcorn or almonds with garlic powder to enjoy!",
    ],],
    "why": ["Why You'll Love It", [
      "More Flavour",
      "Incredibly Easy",
      "Health benefits",

    ],],
    "images": [
      "/powder/3.jpg",
      "/powder/4.jpg",
      "/powder/5.jpg",
      "/powder/6.jpg",
      "/powder/7.jpg",
      "/powder/8.jpg",
      "/powder/9.jpg",
    ]
  }

  return (
    <section>
      <Intro data={data} />
    </section>
  );
}

export default ChildComp;
