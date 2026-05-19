import { useState } from "react";

import useContactForm from "../../hooks/useContactForm";

import ContactInput from "./ContactInput";

import ContactTextarea from "./ContactTextarea";

export default function GeneralQueryForm() {
  const { loading, success, error, submitForm } = useContactForm();

  const [formData, setFormData] = useState({
    name: "",

    email: "",

    subject: "",

    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const success = await submitForm({
      type: "general",

      ...formData,
    });

    if (success) {
      setFormData({
        name: "",

        email: "",

        subject: "",

        message: "",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* ROW */}
      <div className="grid gap-6 md:grid-cols-2">
        <ContactInput
          label="Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          required
        />

        <ContactInput
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          required
        />
      </div>

      {/* SUBJECT */}
      <ContactInput
        label="Subject"
        type="text"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        placeholder="What's this about?"
      />

      {/* MESSAGE */}
      <ContactTextarea
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Tell me about your project or opportunity..."
        required
      />

      {/* STATUS */}
      {success && (
        <div
          className="
            rounded-[18px]

            border
            border-emerald-500/20

            bg-emerald-500/10

            px-4
            py-3

            text-[14px]
            font-medium

            text-emerald-300
          "
        >
          {success}
        </div>
      )}

      {error && (
        <div
          className="
            rounded-[18px]

            border
            border-red-500/20

            bg-red-500/10

            px-4
            py-3

            text-[14px]
            font-medium

            text-red-300
          "
        >
          {error}
        </div>
      )}

      {/* BUTTON */}
      <button
        type="submit"
        disabled={loading}
        className="
          group
          relative

          inline-flex
          items-center
          justify-center
          gap-3

          overflow-hidden

          rounded-[18px]

          bg-gradient-to-r
          from-purple-500
          to-blue-500

          px-8
          py-4

          text-[15px]
          font-semibold
          text-white

          transition-all
          duration-300

          hover:scale-[1.02]
          hover:shadow-[0_0_35px_rgba(168,85,247,0.35)]

          disabled:cursor-not-allowed
          disabled:opacity-60
        "
      >
        {loading ? "Sending..." : "Send Message"}

        {!loading && (
          <span
            className="
              transition-transform
              duration-300

              group-hover:translate-x-1
            "
          >
            →
          </span>
        )}
      </button>
    </form>
  );
}
