
import { motion } from "framer-motion";
import logo from "./assets/logo.png";

const App = () => {
  const offers = [
    {
      id: 1,
      title: "Mega Sale",
      description: "Flat 30% off on all essentials!",
      discount: "30% OFF",
      image: "/api/placeholder/300/200",
    },
    {
      id: 2,
      title: "Buy More Save More",
      description: "Up to 50% off on bulk purchases",
      discount: "Up to 50% OFF",
      image: "/api/placeholder/300/200",
    },
    {
      id: 3,
      title: "Weekly Specials",
      description: "Exclusive discounts every week!",
      discount: "Special Discounts",
      image: "/api/placeholder/300/200",
    },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Fresh Vegetables",
      price: 99,
      image: "/api/placeholder/200/200",
    },
    {
      id: 2,
      name: "Organic Fruits",
      price: 149,
      image: "/api/placeholder/200/200",
    },
    {
      id: 3,
      name: "Daily Dairy",
      price: 49,
      image: "/api/placeholder/200/200",
    },
    {
      id: 4,
      name: "Bakery Items",
      price: 199,
      image: "/api/placeholder/200/200",
    },
  ];

  const stores = [
    {
      id: 1,
      location: "Mumbai Central",
      address: "123 Main Street, Mumbai - 400001",
      phone: "+91 9876543210",
      timings: "9 AM - 9 PM",
    },
    {
      id: 2,
      location: "Pune City",
      address: "456 MG Road, Pune - 411001",
      phone: "+91 9876543211",
      timings: "9 AM - 9 PM",
    },
    {
      id: 3,
      location: "Nashik",
      address: "789 College Road, Nashik - 422001",
      phone: "+91 9876543212",
      timings: "9 AM - 9 PM",
    },
  ];

  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="font-sans text-gray-800 bg-gradient-to-r from-purple-100 via-white to-purple-100">
      {/* Header */}
      <header className="bg-purple-800 text-white py-6 shadow-lg">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <motion.img
            src={logo}
            alt="Maniyar Wholesale Supermarket"
            className="h-24 rounded-full border-4 border-white shadow-md"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="text-center md:text-right mt-4 md:mt-0">
            <p className="flex items-center justify-center md:justify-end text-lg font-medium">
              📞 +91 9876543210
            </p>
            <p className="flex items-center justify-center md:justify-end text-lg font-medium">
              ✉️ contact@maniyarsupermarket.com
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-10">
        {/* Offers Section */}
        <motion.section
          className="mb-16"
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center text-purple-700 mb-8 underline decoration-wavy">
            Special Offers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {offers.map((offer) => (
              <motion.div
                key={offer.id}
                className="p-6 bg-white shadow-lg rounded-lg text-center hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-40 object-cover rounded-md mb-4 border border-purple-200"
                />
                <h3 className="text-lg font-semibold mb-3 text-purple-800">{offer.title}</h3>
                <p className="text-gray-600 mb-4">{offer.description}</p>
                <span className="inline-block bg-purple-600 text-white py-2 px-4 rounded-full text-sm shadow-md">
                  {offer.discount}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Featured Products Section */}
        <motion.section
          className="mb-16"
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-center text-purple-700 mb-8 underline decoration-dotted">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <motion.div
                key={product.id}
                className="p-6 bg-white shadow-lg rounded-lg text-center hover:shadow-xl transition-shadow duration-300"
                whileHover={{ y: -10 }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-md mb-4 border border-purple-200"
                />
                <h3 className="text-lg font-semibold mb-3 text-purple-800">{product.name}</h3>
                <p className="text-purple-600 font-bold text-md mb-4">₹{product.price}</p>
                <button className="bg-purple-700 text-white py-2 px-6 rounded-full hover:bg-purple-600 shadow-lg transition-colors duration-300">
                  Add to Cart
                </button>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Stores Section */}
        <motion.section
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center text-purple-700 mb-8 underline decoration-double">
            Our Stores
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {stores.map((store) => (
              <motion.div
                key={store.id}
                className="p-6 bg-white shadow-lg rounded-lg text-center hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-lg font-semibold text-purple-800 mb-2">
                  {store.location}
                </h3>
                <p className="text-gray-600 text-sm mb-1">{store.address}</p>
                <p className="text-gray-600 text-sm mb-1">📞 {store.phone}</p>
                <p className="text-gray-600 text-sm">⏰ {store.timings}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="bg-purple-800 text-white py-10 shadow-lg">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-gray-300 transition-colors">Facebook</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Instagram</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Twitter</a>
            </div>
          </div>
          <p className="mt-6 md:mt-0">© 2025 Maniyar Supermarket</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
