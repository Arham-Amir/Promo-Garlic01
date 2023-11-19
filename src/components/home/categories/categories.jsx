import Image from 'next/image'
import Link from 'next/link'
export default function Categories() {
  const content = [
    ['#EC6839', 'Garlic Bulb', "Garlic is often sold as a whole bulb, covered with papery white skin. A garlic bulb, also known as a head of garlic, is made up of individual lobes that are attached to the main root. A clove of garlic is one of those individual lobes.", '/garlic-clove', '/bulb/4.jpeg'],
    ['#62A86B', 'Garlic Clove', "Fresh garlic is sold in bulbs, this is an entire head of garlic that is covered in a paper like coating. The entire bulb is made up of separate pieces, each with its own paper-like coating. Each of those individual wedges or pieces is a clove of garlic.", '/garlic-bulb', '/clove/1.jpeg'],
    ['#9BD3C4', 'Garlic Peeled', "Whether you're preparing pizza, pesto, or pasta, using freshly peeled garlic is always worthwhile. Instead of purchasing the jar of pre-chopped garlic, take the time to separate those strong cloves from their papery coverings.", '/garlic-peeled', '/peeled/1.jpg'],
    ['#F2A644', 'Garlic Powder', "A fine powder known as garlic powder is created by drying and grinding garlic cloves. The medical benefits of garlic have been recognized for a very long time, and its distinctive, pungent flavor is well-known.", '/garlic-powder', '/powder/3.jpg'],
    ['#AB8FE5', 'Garlic Paste', "Garlic paste is nothing more than garlic that has been combined with some oil or water, exactly as it is described. When your recipe calls for it, remove it from the freezer or refrigerator where you stored it.", '/garlic-paste', '/images/cat1.jpeg'],
  ]
  return (
    <div className='max-w-screen relative bg-themeColor font-text z-20 py-4'>
      <div className="text-white flex flex-wrap xl:flex-nowrap gap-16 xl:gap-3 items-center justify-center w-11/12 mx-auto p-5 min-h-max">
        {content.map((item, index) => (
          <div className="md:mb-5 xl:mb-0 -translate-y-1/3 w-4/5 md:w-1/3 xl:w-1/5 min-h-fit"  key={index}>
            <div style={{ borderColor: item[0] }} className={`bg-themeColor border-2 min-h-fit p-4 rounded-2xl shadow-lg hover:scale-105 transition-all duration-150`}>
              <Link className='flex flex-col gap-1 items-center' href={item[3]}>
                <Image style={{ borderColor: item[0] }} loading='lazy' width={1000} height={1000} className="object-fill object-center w-full h-[150px] scale-y-125 rounded-2xl -translate-y-1/3 drop-shadow-2xl border-2" src={item[4]}/>
                <h3 style={{ borderColor: item[0] }} className='border-b-2 w-fit text-center font-heading tracking-wider'>{item[1]}</h3>
                <p className="text-xs text-center my-3 line-clamp-3">{item[2]}</p>
              </Link>
            </div>
          </div>
        ))
        }
      </div >
    </div >
  )
}
