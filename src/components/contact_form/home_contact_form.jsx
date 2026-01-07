import React, { useState, useRef, useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { ArrowUpRight, ChevronDown } from "lucide-react";

const servicesList = [
  "AI & Data Science",
  "Cyber Security",
  "Game Development",
  "Multi-Cloud & AWS Services",
  "App Development",
  "Web Development",
  "Digital Marketing Services",
];

const HomeContactForm = () => {
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


  const dropdownRef = useRef(null);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

 
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServiceOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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
    <section className="w-full bg-white py-16 px-6 md:px-20">
      <div className="max-w-8xl mx-auto font-poppins">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between mb-12 gap-8">
          <div className="flex-1">
            <p className="text-sm text-gray-700 mb-2">Get Started</p>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
              Get in touch with us.
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              We&apos;re here to assist you.
            </h2>
          </div>

          <div className="flex md:flex-col gap-4 md:gap-6">
            {socialLinks.map(({ icon: Icon, link }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Name */}
            <div className="flex flex-col">
              <label className="text-sm mb-2 text-gray-600">
                Your Name / Company Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Ex: Cognitec Private Limited"
                onChange={handleChange}
                className="border-b border-gray-300 focus:border-black outline-none py-2"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-sm mb-2 text-gray-600">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Ex: info@cognitec.com"
                onChange={handleChange}
                className="border-b border-gray-300 focus:border-black outline-none py-2"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <label className="text-sm mb-2 text-gray-600">
                Phone Number (optional)
              </label>
              <input
                type="tel"
                name="mobile_number"
                value={formData.mobile_number}
                onChange={handleChange}
                placeholder="+91 99999 00000"
                className="border-b border-gray-300 focus:border-black outline-none py-2"
              />
            </div>

            {/* Custom Services Dropdown */}
            <div className="flex flex-col relative" ref={dropdownRef}>
              <label className="text-sm mb-2 text-gray-600">Services</label>

              <button
                type="button"
                onClick={() => setServiceOpen((prev) => !prev)}
                className="flex items-center justify-between border-b border-gray-300 py-2 text-gray-800"
              >
                <span className={!selectedService ? "text-gray-400" : ""}>
                  {selectedService || "Select a service"}
                </span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    serviceOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {serviceOpen && (
                <ul className="absolute top-full left-0 w-full bg-white shadow-lg rounded-md mt-2 z-30 overflow-hidden">
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
                      className="px-4 py-3 text-sm cursor-pointer hover:bg-[#195a7d] hover:text-white transition"
                    >
                      {service}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label className="text-sm mb-2 text-gray-600">Message</label>
            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message here.."
              className="border-b border-gray-300 focus:border-black outline-none py-2 resize-none"
            />
          </div>

          {/* Status */}
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

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="group flex items-center border-2 border-[#ec372d] bg-[#ec372d] text-white text-sm px-6 py-3 rounded-lg transition-all duration-300 hover:bg-[#c72a22]"
          >
            {loading ? "Sending..." : "Leave Us a Message"}
            <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default HomeContactForm;
