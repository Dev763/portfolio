import React from "react";

function Connect() {
  return (
    <section className="min-h-[50vh] py-16 px-6 flex flex-col items-center bg-[#0a0a0a] text-white font-sans">
      <h2 className="text-4xl font-bold mb-12 tracking-tight">Connect Now</h2>

      <div className="grid md:grid-cols-2 gap-16 max-w-5xl w-full">
        {/* Left Side: Socials & Info */}
        <div className="flex flex-col space-y-6">
          <h3 className="text-2xl font-semibold text-blue-500">Let's build something together.</h3>
          <p className="text-gray-400 max-w-sm leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
          </p>
          
          <div className="flex gap-6 pt-4">
            {/* LinkedIn SVG */}
            <a href="https://linkedin.com/in/YOUR_USERNAME" target="_blank" rel="noreferrer" className="transition-transform hover:-translate-y-1">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            {/* GitHub SVG */}
            <a href="https://github.com/YOUR_USERNAME" target="_blank" rel="noreferrer" className="transition-transform hover:-translate-y-1">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            {/* Mail SVG */}
            <a href="mailto:your@email.com" className="transition-transform hover:-translate-y-1">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </a>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <form action="https://formspree.io/f/your_form_id" method="POST" className="flex flex-col space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <input 
              type="text" name="name" placeholder="Name" required 
              className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input 
              type="email" name="email" placeholder="Email" required 
              className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <textarea 
            name="message" placeholder="Project details..." rows="5" required
            className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
          ></textarea>
          <button 
            type="submit" 
            className="bg-white text-black font-bold py-4 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Connect;