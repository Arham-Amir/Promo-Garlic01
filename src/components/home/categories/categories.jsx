import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'
export default function Categories() {
  const content = [
    ['#EC6839', 'Garlic Bulb', "Building Bricks are rectangular blocks of baked clay used to form parts of buildings, typically walls. which are usually red or brown in color.", '/garlic-clove', '/images/cat1.jpeg'],
    ['#9BD3C4', 'Garlic Clove', "Brick slips are specially manufactured tiles from facing bricks,when they are installed, they have the appearance, color and texture of a real clay brick wall.", '/garlic-bulb', '/images/cat2.jpeg'],
    ['#F2A644', 'Garlic Peeled', "Clay Tiles are usually thin, square or rectangular in shape, manufactured from baked clay, they are generally used to cover roofs and floors.", '/garlic-peeled', '/images/cat3.jpg'],
    ['#EC6839', 'Garlic Powder', "Clay Tiles are usually thin, square or rectangular in shape, manufactured from baked clay, they are generally used to cover roofs and floors.", '/garlic-powder', '/images/cat2.jpeg'],
    ['#9BD3C4', 'Garlic Paste', "Clay Tiles are usually thin, square or rectangular in shape, manufactured from baked clay, they are generally used to cover roofs and floors.", '/garlic-paste', '/images/cat1.jpeg'],
  ]
  return (
    <div className='max-w-screen relative bg-themeColor font-text z-20 py-4'>
      <div className=" text-white flex flex-wrap items-center justify-center w-11/12 mx-auto p-5 min-h-max">
        {content.map((item, index) => (
          <div className="md:w-1/3 md:mb-5 xl:mb-0 -translate-y-1/3 w-4/5 xl:w-1/5 group lg:hover:-translate-y-1/2 min-h-fit transition duration-200 ease-in-out" key={index}>
            <div style={{'backgroundImage': `url(${item[4]})`}} className="bg-cover min-h-fit">
              <Link href= {item[3]}>
                <div className="transparent border-t-8 px-3 pb-1 bg-gray-800/[0.7] hover:cursor-pointer group-hover:bg-transparent group-hover:bg-gradient-to-b from-transparent via-gray-800/[0.3] to-gray-800/[0.7]" style={{ borderColor: item[0] }}>
                  <div className="flex flex-col justify-evenly">
                    <div className="font-bold text-2xl my-3 group-hover:translate-y-48 font-heading tracking-wider">{item[1]}</div>
                    <hr className="mr-5 border-t-4 group-hover:translate-y-48" style={{ borderColor: item[0] }} />
                    <div className="text-sm font-text h-36 group-hover:invisible my-9">
                      <p className='line-clamp-3'>{item[2]}</p>
                      </div>
                    <div className="flex justify-between mr-5 mb-5">
                      <div>Find Out More</div>
                      <div className="mr-9"><IoIosArrowForward style={{ color: item[0], width: '1em', height: '1em' }} /></div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
