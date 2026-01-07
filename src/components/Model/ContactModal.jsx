import React, { useState, useRef, useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { ArrowUpRight, ChevronDown, X } from "lucide-react";

const servicesList = [
  "AI & Data Science",
  "Cyber Security",
  "Game Development",
  "Multi-Cloud & AWS Services",
  "App Development",
  "Web Development",
  "Digital Marketing Services",
];

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile_number: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  /* 🔽 Custom dropdown */
  const dropdownRef = useRef(null);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  /* Close dropdown on outside click */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServiceOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    /* Validation */
    if (!formData.name.trim()) {
      setStatus("Name is required");
      return;
    }

    if (!formData.email.trim()) {
      setStatus("Email is required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("Please enter a valid email address");
      return;
    }

    if (!formData.service) {
      setStatus("Please select a service");
      return;
    }

    if (!formData.message.trim()) {
      setStatus("Message is required");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${API_BASE_URL}api/contact/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Server Error");

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        mobile_number: "",
        service: "",
        message: "",
      });
      setSelectedService("");
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const socialLinks = [
    { icon: FaFacebookF, link: "https://www.facebook.com/cogniitec" },
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/bnr_cogniitec_private_limited/",
    },
    { icon: FaTwitter, link: "https://x.com/bnr_cogniitec" },
    { icon: FaYoutube, link: "https://www.youtube.com/@cogniitec" },
    {
      icon: FaLinkedinIn,
      link: "https://www.linkedin.com/company/bnr-cogniitec-private-limited/",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      <div className="bg-white w-full max-w-5xl rounded-2xl p-6 md:p-10 relative font-poppins">
        
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black cursor-pointer"
        >
          <X size={22} />
        </button>

       
        <div className="flex flex-col md:flex-row justify-between mb-10 gap-8">
          <div>
            <p className="text-sm text-gray-700 mb-2">Get Started</p>
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Get in touch with us.
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              We&apos;re here to assist you.
            </h2>
          </div>

          <div className="flex md:flex-col gap-4">
            {socialLinks.map(({ icon: Icon, link }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition"
              >
                <Icon size={13} />
              </a>
            ))}
          </div>
        </div>

       
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           
            <div className="flex flex-col">
              <label className="text-sm mb-2 text-gray-600">
                Your Name 
              </label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border-b border-gray-300 focus:border-black outline-none py-2"
              />
            </div>

            
            <div className="flex flex-col text-sm">
              <label className="text-sm mb-2 text-gray-600">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border-b border-gray-300 focus:border-black outline-none py-2"
              />
            </div>

            
            <div className="flex flex-col text-sm">
              <label className="text-sm mb-2 text-gray-600">
                Phone Number 
              </label>
              <input
                name="mobile_number"
                value={formData.mobile_number}
                onChange={handleChange}
                className="border-b border-gray-300 focus:border-black outline-none py-2"
              />
            </div>

            {/* Services Dropdown */}
            <div className="flex flex-col relative text-sm" ref={dropdownRef}>
              <label className="text-sm mb-2 text-gray-600">Services</label>

              <button
                type="button"
                onClick={() => setServiceOpen((p) => !p)}
                className="flex items-center justify-between border-b border-gray-300 py-2 text-sm"
              >
                <span className={!selectedService ? "text-gray-400" : ""}>
                  {selectedService || "Select a service"}
                </span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform cursor-pointer ${
                    serviceOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {serviceOpen && (
                <ul className="absolute top-full left-0  w-full bg-white shadow-lg rounded-md mt-2 z-30">
                  {servicesList.map((service, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        setSelectedService(service);
                        setFormData((prev) => ({
                          ...prev,
                          service,
                        }));
                        setServiceOpen(false);
                      }}
                      className="px-3 py-2 text-sm cursor-pointer hover:bg-[#195a7d] hover:text-white transition"
                    >
                      {service}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

         
          <div className="flex flex-col">
            <label className="text-sm mb-2 text-gray-600">Message</label>
            <textarea
              rows="2"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="border-b border-gray-300 focus:border-black outline-none py-2 pb-0 resize-none"
            />
          </div>

          
          {status && status !== "success" && status !== "error" && (
            <p className="text-red-600 text-sm">{status}</p>
          )}
          {status === "success" && (
            <p className="text-green-600 text-sm">
              Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-sm">
              Server error. Please try again later.
            </p>
          )}

       
          <button
            type="submit"
            disabled={loading}
            className="group flex items-center border-2 border-[#ec372d] bg-[#ec372d] text-white text-sm px-6 py-3 rounded-lg transition-all duration-300 hover:bg-[#c72a22] mt-0"
          >
            {loading ? "Sending..." : "Leave Us a Message"}
            <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
