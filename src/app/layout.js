import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/base/navbar'
import Footer from '@/components/base/footer/footer.jsx'
import ContactUs from '@/components/base/contactUs/contactUs'
import UpComingEvent from '@/components/base/upComingEvent'
import ContactPopUpBtn from '@/components/base/contactPopUpBtn'
import ShowEvent from '@/components/base/showEvent'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Promo Garlic',
  author: "Umar Latif",
  description: 'Promo garlic offering Genuine NARC G1 garlic seeds for pre-booking of 2023 crop and providing FREE consultancy to farmers. Schedule a video call or visit our farms before purchasing with satisfaction. Our bookings are limited and will be served on a ‘first-come first-served’ basis.',
  keyWords: "PromoGroup, RealEstate, Construction, Garlic, Bricks, Farms, Promo Garlic, Promo Farms, Promo Developers, Developers, Promo Bricks, Garlic Clove, Garlic Bulb, Garlic Peeled, Garlic Powder, Garlic Paste, G1 Garlic",
  openGraph: {
    title: "Promo Garlic",
    site_name: "Promo Garlic",
    url: "https://promogroup.com.pk/",
    description: "Promo garlic offering Genuine NARC G1 garlic seeds for pre-booking of 2023 crop and providing FREE consultancy to farmers. Schedule a video call or visit our farms before purchasing with satisfaction. Our bookings are limited and will be served on a ‘first-come first-served’ basis.",
    image: "/images/nav_logo.gif",
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} scrollbar`}>
        <ShowEvent />
        <ContactPopUpBtn />
        <UpComingEvent />
        <Navbar />
        {children}
        <ContactUs />
        <Footer />
      </body>
    </html>
  )
}
