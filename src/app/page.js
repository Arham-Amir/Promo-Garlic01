import ChildComp from "@/components/home/childComp.jsx";

export const metadata = {
  title: 'Promo Garlic',
  author: "Umar Latif",
  description: 'Promo garlic offering Genuine NARC G1 garlic seeds for pre-booking of 2023 crop and providing FREE consultancy to farmers. Schedule a video call or visit our farms before purchasing with satisfaction. Our bookings are limited and will be served on a ‘first-come first-served’ basis.',
  keyWords: "PromoGroup, RealEstate, Construction, Garlic, Bricks, Farms, Promo Garlic, Promo Farms, Promo Developers, Developers, Promo Bricks, Garlic Clove, Garlic Bulb, Garlic Peeled, Garlic Powder, Garlic Paste, G1 Garlic",
}

export default function Home() {
  return (
   <section>
      <ChildComp />
   </section>
  )
}
