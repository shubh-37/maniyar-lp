import { motion } from 'framer-motion';
import {
  ShoppingCart,
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Tag,
  Gift,
  MailIcon
} from 'lucide-react';

import offer1 from './assets/offer-1.jpeg';
import offer3 from './assets/offer3.jpeg';
import logo from './assets/logo.jpeg';
const valueProps = [
  {
    id: 1,
    title: 'Wholesale Pricing',
    description:
      'Get the best prices in town with our wholesale rates that make bulk shopping more affordable than ever',
    icon: ShoppingCart
  },
  {
    id: 2,
    title: 'Quality Assurance',
    description:
      'Every product in our inventory undergoes strict quality checks to ensure you get nothing but the best',
    icon: MapPin
  },
  {
    id: 3,
    title: 'Wide Selection',
    description: 'From daily essentials to specialty items, find everything you need under one roof',
    icon: Clock
  }
];

const stores = [
  {
    id: 1,
    location: 'Bhusaval Road',
    address: 'Next To Hotel Gaurav, Bhusaval Road, Near Kalika Mata Mandir, Jalgaon - 425003',
    phone: '+91 9158884902',
    timings: '9:30 AM - 8:30 PM',
    email: 'ppp@maniyars.com'
  },
  {
    id: 2,
    location: 'Gandhinagar',
    address: '16, Gandhinagar, Opp Stadium, Near New Bus Stand, Jalgaon - 425001',
    phone: '+91 9923009364',
    timings: '9:30 AM - 8:30 PM',
    email: 'ppp@maniyars.com'
  },
  {
    id: 3,
    location: 'Mahabal',
    address: 'Aditya Plaza Building, Gadgebaba Chowk, Jalgaon - 425001',
    phone: '+91 7397979398',
    timings: '9:30 AM - 8:30 PM',
    email: 'ppp@maniyars.com'
  }
];

const offers = [
  {
    id: 1,
    title: 'Sale that stays all year around',
    description: 'All groceries available at discounted prices',
    icon: Tag,
    color: 'bg-red-100 text-red-600',
    validTill: 'All year around',
    image: offer1
  },
  {
    id: 3,
    title: 'Groceries discount',
    description: 'Shop the best pulses in whole Jalgaon at our store!',
    icon: Gift,
    discount: 'Special Discounts',
    color: 'bg-green-100 text-green-600',
    validTill: 'All time',
    image: offer3
  }
];

const fadeInVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Page() {
  return (
    <div className="font-sans text-gray-900">
      {/* Hero Section with Header */}
      <section className="relative bg-[#0B4619] text-white min-h-[600px]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B4619]/90 to-[#0B4619]" />

        {/* Header */}
        <header className="relative z-10 container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <motion.img
              src={logo}
              alt="Maniyar Wholesale Supermarket"
              className="h-30 md:h-28 w-44"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </header>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 pt-16 pb-24 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Best quality groceries in retail quantity at wholesale prices
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Serving Jalgaon with love and dedication, since 125 years.
          </motion.p>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center text-[#0B4619] mb-16"
            variants={fadeInVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Why Choose Maniyar Wholesale
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valueProps.map((prop, index) => (
              <motion.div
                key={prop.id}
                className="text-center p-6"
                variants={fadeInVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#0B4619] text-white flex items-center justify-center">
                  <prop.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#0B4619]">{prop.title}</h3>
                <p className="text-gray-600">{prop.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center text-[#0B4619] mb-6"
            variants={fadeInVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Exclusive Offers
          </motion.h2>
          <motion.p
            className="text-gray-600 text-center mb-12 max-w-2xl mx-auto"
            variants={fadeInVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Discover unbeatable deals and savings on our premium wholesale products. Don't miss out on these
            limited-time offers!
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offers.map((offer, index) => (
              <motion.div
                key={offer.id}
                className="bg-white rounded-lg shadow-lg"
                variants={fadeInVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative">
                  <img src={offer.image} alt={offer.title} className="w-full h-full object-contain" />
                </div>
                <div className={`p-6 ${offer.color}`}>
                  <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
                  <p className="text-sm mb-4">{offer.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Valid till: {offer.validTill}</span>
                    <offer.icon className="w-6 h-6" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-3xl font-bold text-[#0B4619] mb-6"
              variants={fadeInVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              About Maniyar Wholesale
            </motion.h2>
            <motion.p
              className="text-gray-600 mb-8"
              variants={fadeInVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {/* Founded in 1990, Maniyar Wholesale Supermarket has been serving the Jalgaon community with quality
              products at wholesale prices. Our commitment to customer satisfaction and quality assurance has made us
              the preferred choice for bulk purchases in the region. */}
              Tracing its roots in the wholesale business circa 1900... Maniyar Group ventured into Retail Supermarkets
              in 2003, in Jalgaon and Aurangabad. Our deep knowledge of the grocery domain, coupled with our commitment
              to customer satisfaction, quality assurance and above all Ethical Business, has made us the preferred
              choice for Customers in the region.
            </motion.p>
            <motion.p
              className="text-gray-600"
              variants={fadeInVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              With 4 strategic locations across Jalgaon and Ch. Sambhajinagar, we ensure convenient access to our wide
              range of products for all our valued customers.
            </motion.p>
            <motion.p
              className="text-gray-600"
              variants={fadeInVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Unlike most of the retail industry which gives offers on certain days only, OUR most Unique advantage is
              our policy of giving the best lowest prices and offers 365 DAYS a year.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stores Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center text-[#0B4619] mb-16"
            variants={fadeInVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Visit Our Stores
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stores.map((store, index) => (
              <motion.div
                key={store.id}
                className="bg-white p-6 rounded-lg shadow-lg"
                variants={fadeInVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-[#0B4619]">{store.location}</h3>
                <div className="space-y-3 text-gray-600">
                  <p className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 shrink-0 mt-1" />
                    <span>{store.address}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    <span>{store.phone}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <MailIcon className="w-5 h-5" />
                    <span>{store.email}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>{store.timings}</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0B4619] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0">
              <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
              <div className="flex space-x-6">
                <a
                  href="https://www.facebook.com/maniyarwholesale"
                  className="hover:text-gray-300 transition-colors"
                  target="_blank"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com/maniyarwholesale/" className="hover:text-gray-300 transition-colors">
                  <Instagram className="w-6 h-6" target="_blank" />
                </a>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-300">© 2025 Maniyar Wholesale Supermarket</p>
              <p className="text-sm text-gray-300 mt-2">All rights reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
