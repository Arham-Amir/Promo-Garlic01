import ChildComp from "@/components/garlicPaste/childComp.jsx";

export const metadata = {
  title: 'Garlic Paste - Promo Garlic',
  author: "Umar Latif",
  description: 'Garlic paste is nothing more than garlic that has been combined with some oil or water, exactly as it is described. When your recipe calls for it, remove it from the freezer or refrigerator where you stored it.',
  keyWords: "PromoGroup, RealEstate, Construction, Garlic, Bricks, Farms, Promo Garlic, Promo Farms, Promo Developers, Developers, Promo Bricks, Garlic Clove, Garlic Bulb, Garlic Peeled, Garlic Powder, Garlic Paste, G1 Garlic",
}

const Page = () => {
  return (
    <section>
      <ChildComp />
    </section>
  );
}

export default Page;
