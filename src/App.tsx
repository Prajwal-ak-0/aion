import { useState } from "react";
import { X, AlignJustify } from "lucide-react";
import Button from "./components/ui/button";
import { Separator } from "./components/ui/separator";
import bg2 from "./assets/bg-2.jpg";
import { Twitter } from "lucide-react";
import { Instagram } from "lucide-react";
import { Facebook } from "lucide-react";
import { Linkedin } from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const dummyProducts = [
    {
      name: "Apple AirPods Pro",
      description:
        "AirPods Pro are the only in-ear headphones with Active Noise Cancellation.",
      image: "src/assets/p1.jpg",
    },
    {
      name: "Apple iPhone",
      description:
        "Exceptional materials. The most durable glass ever in a smartphone.",
      image: "src/assets/p2.jpg",
    },
    {
      name: "Apple iPad",
      description:
        "The most popular iPad features a larger 10.2-inch Retina display.",
      image: "src/assets/p3.jpg",
    },
  ];

  return (
    <div className="flex flex-col">
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center py-4 px-6 sm:px-10 md:px-28 bg-transparent z-50">
        <div onClick={toggleMenu} className="cursor-pointer">
          {isMenuOpen ? (
            <X size={35} className="text-white" />
          ) : (
            <AlignJustify size={35} className="text-white" />
          )}
        </div>
        <div className="text-3xl sm:text-4xl md:text-5xl text-white font-bold cursor-pointer hover:text-[#FFC400]">
          Aion<span className="text-[#FFC400]">.</span>
        </div>
      </nav>

      <div
        className={`w-screen h-screen bg-macbook bg-cover bg-center transform transition-transform duration-500 ${
          isMenuOpen ? "blur-md translate-x-full" : ""
        }`}
      >
        <div className="flex flex-col w-full sm:w-3/4 md:w-1/2 h-screen flex justify-center px-6 sm:px-16 md:px-28 pt-[300px] sm:pt-[350px]">
          <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl">
            Welcome to Aion<span className="text-[#FFC400]">.</span>
          </h1>
          <Separator className="w-full sm:w-[355px] my-2 bg-gray-100/30" />
          <p className="py-4 text-xl sm:text-2xl text-white">
            Using a combination of Gatsby and Contentful, Barcadia is ready to
            deploy and simple to use.
          </p>
          <Button>Learn More</Button>
        </div>
      </div>

      <div
        className={`w-screen bg-black min-h-screen fixed top-0 left-0 transform transition-transform duration-500 z-40 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="px-6 sm:px-16 md:px-24 flex flex-col h-full text-2xl sm:text-3xl gap-y-6 mt-32 sm:mt-64">
          <a
            href="#"
            className="text-white w-fit font-semibold hover:text-[#FFC400]"
          >
            Home<span className="text-[#FFC400]">.</span>
          </a>
          <a
            href="#"
            className="text-white w-fit font-semibold hover:text-[#FFC400]"
          >
            About<span className="text-[#FFC400]">.</span>
          </a>
          <a
            href="#"
            className="text-white w-fit font-semibold hover:text-[#FFC400]"
          >
            Services<span className="text-[#FFC400]">.</span>
          </a>
          <a
            href="#"
            className="text-white w-fit font-semibold hover:text-[#FFC400]"
          >
            Contact<span className="text-[#FFC400]">.</span>
          </a>
        </div>
      </div>

      <div className="w-screen h-3/4 bg-[#1B1B1B] px-6 sm:px-16 md:pl-28 py-24 sm:py-36">
        <div className="flex flex-col sm:w-3/4 md:w-1/2 flex justify-center">
          <p className="py-4 text-2xl sm:text-3xl md:text-4xl text-white font-bold">
            A super-fast theme that is easy to get started, using the power of
            GatsbyJS
          </p>
          <p className="py-6 text-white text-lg sm:text-xl">
            Using modern CSS properties such as grid, this theme is optimised
            for speed and mobile devices. Giving users an excellent experience
            on any device. Future-proofing your product.
          </p>
          <Button>View Products</Button>
        </div>
      </div>

      <div
        className="w-screen bg-cover bg-center h-[500px] sm:h-[600px] md:h-[700px]"
        style={{ backgroundImage: `url(${bg2})` }}
      >
        <div className="container mx-auto h-full">
          <div className="flex flex-wrap items-center justify-center gap-8 h-full px-4 sm:px-16">
            <div className="flex flex-col w-full sm:w-1/2 md:w-[400px] items-center text-center">
              <div className="flex items-center gap-4 justify-center">
                <img src="src/assets/l1.png" alt="Gatsby logo" width={50} />
                <span className="text-4xl sm:text-5xl font-bold text-white">
                  Gatsby
                </span>
              </div>
              <p className="pt-6 pb-2 text-2xl sm:text-3xl text-white font-bold">
                Built For Speed
              </p>
              <Separator className="w-[250px] sm:w-[300px] my-1 bg-gray-100/30" />
              <p className="py-4 text-lg sm:text-xl text-blue-200 max-w-[300px] mx-auto">
                By using GatsbyJS, the Barcadia site is super-fast out of the
                box.
              </p>
            </div>

            <div className="flex flex-col w-full sm:w-1/2 md:w-[400px] items-center text-center">
              <div className="flex items-center gap-4 justify-center">
                <img src="src/assets/l2.png" alt="Contentful logo" width={50} />
                <span className="text-4xl sm:text-5xl font-bold text-white">
                  Contentful
                </span>
              </div>
              <p className="pt-6 pb-2 text-2xl sm:text-3xl text-white font-bold">
                Built For Content
              </p>
              <Separator className="w-[250px] sm:w-[300px] my-1 bg-gray-100/30" />
              <p className="py-4 text-lg sm:text-xl text-blue-200 max-w-[300px] mx-auto">
                Contentful helps you edit your application with ease as your
                business expands.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row bg-[#1B1B1B] flex-wrap justify-between items-center px-6 sm:px-16 md:px-28 py-24 sm:py-36">
        {dummyProducts.map((product, index) => (
          <div
            key={index}
            className="relative w-full sm:w-1/2 lg:w-[380px] h-[550px] bg-cover bg-center transition-transform transform hover:scale-105 hover:shadow-lg hover:border-4 hover:border-[#FFC400] hover:opacity-80 mb-8 sm:mb-0"
            style={{ backgroundImage: `url(${product.image})` }}
          >
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 py-6">
              <p className="text-xl sm:text-2xl md:text-4xl py-2 text-white font-bold">
                {product.name}
              </p>
              <p className="text-white">{product.description}</p>
              <Button>Read More</Button>
            </div>
          </div>
        ))}
      </div>

      <footer className="bg-[#1B1B1B] text-white py-16">
        <div className="container mx-auto px-6 sm:px-16 md:px-28">
          <div className="flex flex-col sm:flex-row justify-between">
            <div className="flex flex-col mb-8 sm:mb-0">
              <h1 className="text-2xl font-bold mb-4">Links</h1>
              <Separator className="bg-gray-600 mb-4 -mt-3" />
              <a
                href="#"
                className="hover:text-[#FFC400] mb-2 text-blue-200 text-xl"
              >
                Home
              </a>
              <a
                href="#"
                className="hover:text-[#FFC400] mb-2 text-blue-200 text-xl"
              >
                About
              </a>
              <a
                href="#"
                className="hover:text-[#FFC400] mb-2 text-blue-200 text-xl"
              >
                Services
              </a>
              <a
                href="#"
                className="hover:text-[#FFC400] mb-2 text-blue-200 text-xl"
              >
                Contact
              </a>
            </div>
            <div className="flex flex-col mb-8 sm:mb-0">
              <h1 className="text-2xl font-bold mb-4">Services</h1>
              <Separator className="bg-gray-600 mb-4 -mt-3" />

              <a
                href="#"
                className="hover:text-[#FFC400] mb-2 text-blue-200 text-xl"
              >
                Web Development
              </a>
              <a
                href="#"
                className="hover:text-[#FFC400] mb-2 text-blue-200 text-xl"
              >
                Mobile Development
              </a>
              <a
                href="#"
                className="hover:text-[#FFC400] mb-2 text-blue-200 text-xl"
              >
                SEO
              </a>
              <a
                href="#"
                className="hover:text-[#FFC400] mb-2 text-blue-200 text-xl"
              >
                Marketing
              </a>
            </div>
            <div className="flex flex-col">
              <p className="text-2xl font-bold mb-4">Follow Barcadia</p>
              <Separator className="bg-gray-600 mb-4 -mt-3" />

              <div className="flex space-x-4">
                <Twitter size={25} className="hover:text-[#FFC400]" />
                <Instagram size={25} className="hover:text-[#FFC400]" />
                <Facebook size={25} className="hover:text-[#FFC400]" />
                <Linkedin size={25} className="hover:text-[#FFC400]" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
