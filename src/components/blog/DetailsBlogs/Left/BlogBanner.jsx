import React from "react";
import { motion } from "framer-motion";
import BlogHeader1 from "../../../../assets/Images/blog/blogheader1.svg";
import {Link} from "react-router-dom"

const BlogBanner = () => {
  const sections = [
        {
            title: "Exploring Generative AI in Content Creation",
            highlight:
                "always reflect",
            content: [

                "Generative AI has transformed the way we produce content, especially for rapidly scaling industries. Google recognizes high-quality blogs that reflect genuine expertise. Relying entirely on AI-generated content harms SEO performance.",
                "This is why human oversight has become the quality-defining factor behind AI-enhanced content.",
                "AI can help writers speed up workflows, organize ideas, and improve structure—but the final output must always reflect human creativity and knowledge.",
            ],
        },
        {
            title: "Steering Clear of Common AI Writing Pitfalls",
            highlight:
                "",
            content: [
                "Jumping straight into AI without direction often leads to generic output that fails to build credibility. Avoid filler text, repetitive phrases, or surface-level explanations—Google easily detects these patterns.",
                "Human input is necessary for accuracy, real-case examples, tone consistency, and deeper insights.",
                "Remember, AI should enhance your writing—not create it entirely from scratch.",
            ],
        },
        {
            title: "Understanding ChatGPT Capabilities – Define Your Style",
            highlight:
                "ensures consistency",
            content: [
                "ChatGPT can mimic your writing style if it understands your tone clearly. Give ChatGPT a few samples of your style and ask it to follow that pattern across all content.",
                "Specify tone instructions such as professional, conversational, or educational.",
                "Providing clarity reduces revision time and ensures consistency in long-form content.",
            ],
        },
        {
            title: "Understand Your Readers",
            highlight:
                "human writer",
            content: [
                "Every powerful blog speaks directly to the audience’s core pain points. It’s not about what you know—it's about what they need. Before writing, identify your reader’s problems and goals.",
                "AI can help brainstorm ideas, but the human writer must decide relevance and direction.",
            ],
        },
        {
            title: "Understand Your Niche—Creating Quality AI-powered Blogs",
            highlight:
                "valuable blogs—not",
            content: [
                "Quality AI content stands out when it's backed with real-world insights, examples, and expertise. Use AI for structuring, outlining, and optimizing content. But the real depth must come from your knowledge.",
                "Search engines reward informative, unique, and valuable blogs—not generic AI text.",
            ],
        },
        {
            title: "Exploring Generative AI in Content Creation",
            highlight:
                "Generative AI",
            content: [
                "Generative AI has transformed the way we produce content, especially for rapidly scaling industries. Google recognizes high-quality blogs that reflect genuine expertise. Relying entirely on AI-generated content harms SEO performance.",
                "This is why human oversight has become the quality-defining factor behind AI-enhanced content.",
                "AI can help writers speed up workflows, organize ideas, and improve structure—but the final output must always reflect human creativity and knowledge.",
            ],
        },
        {
            title: "Exploring Generative AI in Content Creation",
            highlight:
                "Relying entirely",
            content: [
                "Generative AI has transformed the way we produce content, especially for rapidly scaling industries. Google recognizes high-quality blogs that reflect genuine expertise. Relying entirely on AI-generated content harms SEO performance.",
                "This is why human oversight has become the quality-defining factor behind AI-enhanced content.",
                "AI can help writers speed up workflows, organize ideas, and improve structure—but the final output must always reflect human creativity and knowledge.",
            ],
        },
        {
            title: "Exploring Generative AI in Content Creation",
            highlight:
                "quality-defining",
            content: [
                "Generative AI has transformed the way we produce content, especially for rapidly scaling industries. Google recognizes high-quality blogs that reflect genuine expertise. Relying entirely on AI-generated content harms SEO performance.",
                "This is why human oversight has become the quality-defining factor behind AI-enhanced content.",
                "AI can help writers speed up workflows, organize ideas, and improve structure—but the final output must always reflect human creativity and knowledge.",
            ],
        },
        {
            title: "Exploring Generative AI in Content Creation",
            highlight:
                "oversight has become",
            content: [
                "Generative AI has transformed the way we produce content, especially for rapidly scaling industries. Google recognizes high-quality blogs that reflect genuine expertise. Relying entirely on AI-generated content harms SEO performance.",
                "This is why human oversight has become the quality-defining factor behind AI-enhanced content.",
                "AI can help writers speed up workflows, organize ideas, and improve structure—but the final output must always reflect human creativity and knowledge.",
            ],
        },
    ];

  // Animation Variants ----------------------

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeDelay = (i) => ({
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6 },
    },
  });

  return (
    <div className="w-full overflow-hidden bg-white p-4 pb-0">
      {/* Breadcrumb */}
      <motion.div
        className="px-5 py-3 text-sm text-gray-400 flex gap-2 font-poppins"
        variants={fadeUp}
        initial="hidden"
        animate="show"
      >
        <Link className="hover:text-black cursor-pointer" to="/">Home</Link> &gt;
        <Link className="hover:text-black cursor-pointer" to="/blog">Blog</Link> &gt;
        <Link className="text-red-500 font-medium" to="/blogdetials">You are here</Link>
      </motion.div>

      {/* Banner Section */}
      <motion.div
        className="relative w-full h-[260px] md:h-[380px] lg:h-[450px] font-poppins"
        variants={fadeUp}
        initial="hidden"
        animate="show"
      >
        <img
          src={BlogHeader1}
          alt="Blog Banner"
          className="w-full h-full object-cover rounded-xl"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-xl"></div>

        {/* Overlay Content */}
        <div className="absolute bottom-5 left-5 md:left-10 text-white font-poppins">
          {/* Badge */}
          <motion.div
            className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs md:text-sm font-semibold"
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            Artificial Intelligence
          </motion.div>

          {/* Title */}
          <motion.h2
            className="mt-3 text-xl md:text-2xl lg:text-4xl font-semibold leading-snug max-w-3xl"
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            Mastering ChatGPT Blog Creation: Dos and Don'ts for SaaS Marketing
            Managers
          </motion.h2>

          {/* Meta Info */}
          <motion.p
            className="mt-2 text-sm opacity-80"
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            Oct 19 • 10 min read
          </motion.p>
        </div>
      </motion.div>

      {/* Sections */}
      <div className="max-w-6xl mx-auto py-8 px-0">
        {sections.map((sec, idx) => (
          <motion.div
            key={idx}
            className="mb-5 lg:mb-10 font-poppins"
            variants={fadeDelay(idx)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-xl font-semibold text-black mb-2">
              {sec.title}
            </h2>

            {sec.content.map((para, pIdx) => (
              <motion.p
                key={pIdx}
                className="text-gray-700 leading-relaxed mb-2 font-poppins"
                variants={fadeDelay(pIdx)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {para}
                <span className="text-red-600 font-medium">
                  {sec.highlight}
                </span>
              </motion.p>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BlogBanner;
