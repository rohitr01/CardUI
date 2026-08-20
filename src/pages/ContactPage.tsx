import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (name && email && message) {
      setSubmitted(true);
    }
  }

  return (
    <div className="bg-[#f7f9fb] min-h-screen">
      <div className="max-w-[600px] mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14">
        <h1 className="font-bold text-[28px] sm:text-[36px] text-[#191c1e] mb-3 tracking-[-0.5px]">Contact Us</h1>
        <p className="text-[14px] sm:text-[16px] text-[#45464d] mb-8">
          Have a question, feedback, or need help? Send us a message and we'll get back to you.
        </p>

        {submitted ? (
          <div className="bg-white rounded-2xl border border-[#e5e7eb] p-8 sm:p-10 text-center">
            <div className="text-4xl mb-4">✅</div>
            <h2 className="font-bold text-[20px] text-[#191c1e] mb-2">Message Sent!</h2>
            <p className="text-[14px] text-[#45464d] mb-6">Thanks for reaching out. We'll respond within 24–48 hours.</p>
            <button
              onClick={() => { setSubmitted(false); setName(""); setEmail(""); setMessage(""); }}
              className="bg-[#006c49] hover:bg-[#00583b] text-white font-semibold text-[14px] px-6 py-3 rounded-xl transition-colors"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-[#e5e7eb] p-6 sm:p-8 flex flex-col gap-5">
            <div>
              <label className="block font-semibold text-[13px] tracking-[0.7px] text-[#45464d] mb-2">Name</label>
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-[#c6c6cd] rounded-xl px-4 py-3 text-[15px] text-[#191c1e] focus:outline-none focus:border-[#006c49] focus:ring-1 focus:ring-[#006c49] transition-colors"
              />
            </div>
            <div>
              <label className="block font-semibold text-[13px] tracking-[0.7px] text-[#45464d] mb-2">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-[#c6c6cd] rounded-xl px-4 py-3 text-[15px] text-[#191c1e] focus:outline-none focus:border-[#006c49] focus:ring-1 focus:ring-[#006c49] transition-colors"
              />
            </div>
            <div>
              <label className="block font-semibold text-[13px] tracking-[0.7px] text-[#45464d] mb-2">Message</label>
              <textarea
                placeholder="How can we help?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="w-full border border-[#c6c6cd] rounded-xl px-4 py-3 text-[15px] text-[#191c1e] focus:outline-none focus:border-[#006c49] focus:ring-1 focus:ring-[#006c49] transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={!name || !email || !message}
              className="w-full bg-[#006c49] hover:bg-[#00583b] text-white font-semibold text-[14px] tracking-[0.7px] py-4 rounded-xl disabled:opacity-40 transition-colors"
            >
              Send Message →
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
