"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<{ type: "success" | "error" | null; text: string }>({ type: null, text: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate sending email (API delay)
    setTimeout(() => {
      setStatus({
        type: "success",
        text: `Thank you, ${formData.name}! Your message has been sent successfully. I will get back to you at ${formData.email} shortly.`,
      });
      setFormData({ name: "", email: "", message: "" });
      setLoading(false);

      // Auto-clear after 10s
      setTimeout(() => {
        setStatus({ type: null, text: "" });
      }, 10000);
    }, 1800);
  };

  return (
    <div className="bg-bg-card border border-border-light rounded-lg p-8 md:p-10 backdrop-blur-md shadow-2xl relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-gold/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. John Doe"
            className="w-full bg-[#0a0c12]/80 border border-border-light focus:border-gold rounded px-4 py-3 text-sm text-text-primary placeholder:text-gray-600 outline-none transition-all duration-300 focus:shadow-[0_0_15px_rgba(223,186,107,0.05)]"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. john@example.com"
            className="w-full bg-[#0a0c12]/80 border border-border-light focus:border-gold rounded px-4 py-3 text-sm text-text-primary placeholder:text-gray-600 outline-none transition-all duration-300 focus:shadow-[0_0_15px_rgba(223,186,107,0.05)]"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
            Your Message
          </label>
          <textarea
            id="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            className="w-full bg-[#0a0c12]/80 border border-border-light focus:border-gold rounded px-4 py-3 text-sm text-text-primary placeholder:text-gray-600 outline-none transition-all duration-300 focus:shadow-[0_0_15px_rgba(223,186,107,0.05)]"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full cursor-pointer bg-gold text-[#07090e] font-semibold text-xs uppercase tracking-widest py-4 px-6 rounded transition-all duration-300 hover:bg-gold-hover active:scale-[0.98] active:translate-y-[1px] disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed hover:shadow-[0_8px_24px_rgba(223,186,107,0.2)]"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {status.type && (
          <div
            className={`p-4 rounded text-sm mt-2 transition-all duration-300 border ${
              status.type === "success"
                ? "bg-green-950/40 border-green-500/30 text-green-400"
                : "bg-red-950/40 border-red-500/30 text-red-400"
            }`}
          >
            {status.text}
          </div>
        )}
      </form>
    </div>
  );
}
