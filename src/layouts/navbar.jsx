import { useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import Logo from "../assets/Images/logo/cogniitec-logo.png";
import { servicesMenu } from "../data/servicesMenu";
import ContactModal from "../components/Model/ContactModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [openServiceMobile, setOpenServiceMobile] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubItem, setActiveSubItem] = useState(null);

  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const isServiceActive = location.pathname.startsWith("/services");
  const isProductActive = location.pathname.startsWith("/products");

  return (
    <nav className="bg-white fixed w-full z-20 top-0 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-3 sm:px-5 lg:px-10 py-3">
        <Link to="/" className="flex items-center space-x-2">
          <img src={Logo} alt="COGNIITEC Logo" className="h-7 sm:h-8 md:h-9" />
        </Link>

        <div className="hidden lg:flex items-center space-x-8 font-poppins text-sm font-medium">
          <Link
            to="/"
            className={`${
              isActive("/")
                ? "text-[#ec372d]"
                : "text-gray-800 hover:text-[#ec372d]"
            } transition`}
          >
            Home
          </Link>

          <Link
            to="/about"
            className={`${
              isActive("/about")
                ? "text-[#ec372d]"
                : "text-gray-800 hover:text-[#ec372d]"
            } transition`}
          >
            About
          </Link>

          <div className="relative group">
            <button
              className={`flex items-center transition text-sm font-medium ${
                isServiceActive
                  ? "text-[#ec372d]"
                  : "text-gray-800 group-hover:text-[#ec372d]"
              }`}
            >
              <button className="cursor-pointer">Services</button>
              <ChevronDown className="w-4 h-4 ml-1 cursor-pointer" />
            </button>

            <div
              className="
      absolute -left-96 hidden group-hover:flex 
      bg-white 
      border border-gray-300 
      shadow-[0_4px_20px_rgba(0,0,0,0.08)]
      rounded-xl p-8 mt-0 -ms-20 
      w-[780px] z-50
      transition-all duration-200
    "
            >
              <div className="grid grid-cols-3 gap-6">
                {servicesMenu.map((cat, index) => (
                  <div key={index} className="relative group/item">
                    <div className="flex items-center justify-between cursor-pointer">
                      {cat.to ? (
                        <Link
                          to={cat.to}
                          onClick={() => {
                            setActiveCategory(cat.title);
                            setActiveSubItem(null);
                          }}
                          className={`font-semibold text-sm transition ${
                            activeCategory === cat.title
                              ? "text-[#ec372d]"
                              : "text-gray-800 hover:text-[#ec372d]"
                          }`}
                        >
                          {cat.title}
                        </Link>
                      ) : (
                        <p
                          className={`font-semibold text-sm transition ${
                            activeCategory === cat.title
                              ? "text-[#ec372d]"
                              : "text-gray-800 hover:text-[#ec372d]"
                          }`}
                        >
                          {cat.title}
                        </p>
                      )}

                      {cat.items && (
                        <ArrowUpRight
                          className={`
    w-4 h-4 transition-transform duration-300 
    ${
      activeCategory === cat.title
        ? "text-[#ec372d] rotate-45"
        : "text-gray-600 group-hover/item:text-[#ec372d] group-hover/item:rotate-45"
    }
  `}
                        />
                      )}
                    </div>

                    {cat.items && (
                      <div
                        className="
                absolute left-full top-0 bg-white
                border border-gray-300
                shadow-lg rounded-lg
                p-4 ml-3 min-w-[210px]
                opacity-0 invisible translate-y-2
                group-hover/item:opacity-100 
                group-hover/item:visible 
                group-hover/item:translate-y-0
                transition-all duration-300
                z-50 
              "
                      >
                        {cat.items.map((sub, i) => (
                          <Link
                            key={i}
                            to={sub.to}
                            onClick={() => {
                              setActiveCategory(cat.title);
                              setActiveSubItem(sub.title);
                            }}
                            className={`block text-[14px] py-2 px-2 transition ${
                              activeSubItem === sub.title
                                ? "text-[#ec372d] font-semibold"
                                : "text-gray-700 hover:text-[#ec372d]"
                            }`}
                          >
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* <div className="relative group">
            <button
              className={`flex items-center transition text-sm font-medium ${
                isProductActive
                  ? "text-[#ec372d]"
                  : "text-gray-800 group-hover:text-[#ec372d]"
              }`}
            >
              Products
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>

            <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 rounded-lg min-w-[180px]">
              <Link
                to="/products/ai-platform"
                className="block px-4 py-2 hover:bg-gray-100 text-sm font-medium"
              >
                AI Platform
              </Link>
              <Link
                to="/products/analytics"
                className="block px-4 py-2 hover:bg-gray-100 text-sm font-medium"
              >
                Analytics Suite
              </Link>
            </div>
          </div> */}

          <Link
            to="/blog"
            className={`${
              isActive("/blog")
                ? "text-[#ec372d]"
                : "text-gray-800 hover:text-[#ec372d]"
            } transition`}
          >
            Blog
          </Link>

          <Link
            to="/contact-us"
            className={`${
              isActive("/contact-us")
                ? "text-[#ec372d]"
                : "text-gray-800 hover:text-[#ec372d]"
            } transition`}
          >
            Contact
          </Link>

          <button className="cursor-pointer group flex items-center border-2 border-[#ec372d] bg-[#fef5f4] text-[#ec372d] font-medium text-sm px-5 py-2 rounded-xl transition-all duration-300"   onClick={() => setOpen(true)}>
            Let’s Talk
            <div className="ml-2 relative w-6 h-6 rounded-full bg-[#ec372d] text-white flex items-center justify-center">
              <ArrowUpRight className="absolute w-4 h-4 opacity-100 transition-all duration-300 group-hover:-translate-y-2 group-hover:opacity-0" />
              <ArrowUpRight className="absolute w-4 h-4 opacity-0 translate-y-2 transition-all duration-300 delay-150 group-hover:opacity-100 group-hover:translate-y-0" />
            </div>
          </button>
        </div>

        <div className=" flex-row gap-3 flex lg:hidden">
          <button
            className="  cursor-pointer group flex  items-center border-2 border-[#ec372d] bg-[#fef5f4] text-[#ec372d] font-medium text-sm px-5 py-2 rounded-xl transition-all duration-300"
            onClick={() => setOpen(true)}
          >
            Let’s Talk
            <div className="ml-2 relative w-6 h-6 rounded-full bg-[#ec372d] text-white flex items-center justify-center">
              <ArrowUpRight className="absolute w-4 h-4 opacity-100 transition-all duration-300 group-hover:-translate-y-2 group-hover:opacity-0" />
              <ArrowUpRight className="absolute w-4 h-4 opacity-0 translate-y-2 transition-all duration-300 delay-150 group-hover:opacity-100 group-hover:translate-y-0" />
            </div>
          </button>
          <button
            className="lg:hidden text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t px-5 py-4 space-y-4">
          <Link to="/" className="block text-gray-700 text-sm">
            Home
          </Link>
          <Link to="/about" className="block text-gray-700 text-sm">
            About
          </Link>

          <div>
            <button
              onClick={() => setOpenServiceMobile(!openServiceMobile)}
              className="w-full flex items-center justify-between text-gray-700 text-sm font-medium"
            >
              Services
              <ChevronDown
                className={`${
                  openServiceMobile ? "rotate-180" : ""
                } transition`}
              />
            </button>

            {openServiceMobile && (
              <div className="mt-3 ml-3 space-y-4 max-h-64 overflow-y-auto pr-2">
                {servicesMenu.map((cat, index) => (
                  <div key={index}>
                    <p className="text-gray-800 font-semibold text-sm">
                      {cat.title}
                    </p>

                    {cat.items && (
                      <div className="ml-3 mt-2 space-y-2">
                        {cat.items.map((sub, i) => (
                          <Link
                            key={i}
                            to={sub.to}
                            className="block text-gray-600 text-xs"
                          >
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/products/ai-platform"
            className="block text-gray-700 text-sm"
          >
            Products
          </Link>
          <Link to="/blog" className="block text-gray-700 text-sm">
            Blog
          </Link>
          <Link to="/contact-us" className="block text-gray-700 text-sm">
            Contact
          </Link>
        </div>
      )}
      <ContactModal isOpen={open} onClose={() => setOpen(false)} />
    </nav>
  );
};

export default Navbar;
