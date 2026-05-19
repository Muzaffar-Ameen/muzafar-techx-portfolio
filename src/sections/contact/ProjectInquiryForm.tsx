import { useState } from "react";

import useContactForm from "../../hooks/useContactForm";

import { budgetRanges, projectTypes } from "../../data/contact";

import ContactInput from "./ContactInput";

import ContactTextarea from "./ContactTextarea";

export default function ProjectInquiryForm() {
  const { loading, success, error, submitForm } = useContactForm();

  const [formData, setFormData] = useState({
    name: "",

    email: "",

    projectType: "",

    customProjectType: "",

    budget: "",

    customBudget: "",

    timeline: "",

    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const finalProjectType = formData.customProjectType || formData.projectType;

    const finalBudget = formData.customBudget || formData.budget;

    const success = await submitForm({
      type: "project",

      name: formData.name,

      email: formData.email,

      projectType: finalProjectType,

      budget: finalBudget,

      timeline: formData.timeline,

      message: formData.message,
    });

    if (success) {
      setFormData({
        name: "",

        email: "",

        projectType: "",

        customProjectType: "",

        budget: "",

        customBudget: "",

        timeline: "",

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

      {/* ROW */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* PROJECT TYPE */}
        <div className="space-y-4">
          <label
            className="
              block

              text-[12px]
              font-semibold
              uppercase
              tracking-[2px]

              text-purple-300

              light:text-black/50
            "
          >
            Project Type
          </label>

          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="
              h-[58px]
              w-full

              rounded-[18px]

              border
              border-purple-500/20

              bg-[rgba(12,18,35,0.7)]

              px-5

              text-[15px]
              text-white

              outline-none

              backdrop-blur-xl

              transition-all
              duration-300

              focus:border-purple-400/60

              light:border-black/10
              light:bg-white
              light:text-black
            "
          >
            <option value="">Select Project Type</option>

            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>

          {/* CUSTOM INPUT */}
          <ContactInput
            label=""
            type="text"
            name="customProjectType"
            value={formData.customProjectType}
            onChange={handleChange}
            placeholder="Or write custom project type..."
          />
        </div>

        {/* BUDGET */}
        <div className="space-y-4">
          <label
            className="
              block

              text-[12px]
              font-semibold
              uppercase
              tracking-[2px]

              text-purple-300

              light:text-black/50
            "
          >
            Budget Range
          </label>

          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="
              h-[58px]
              w-full

              rounded-[18px]

              border
              border-purple-500/20

              bg-[rgba(12,18,35,0.7)]

              px-5

              text-[15px]
              text-white

              outline-none

              backdrop-blur-xl

              transition-all
              duration-300

              focus:border-purple-400/60

              light:border-black/10
              light:bg-white
              light:text-black
            "
          >
            <option value="">Select Budget</option>

            {budgetRanges.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>

          {/* CUSTOM INPUT */}
          <ContactInput
            label=""
            type="text"
            name="customBudget"
            value={formData.customBudget}
            onChange={handleChange}
            placeholder="Or enter custom budget..."
          />
        </div>
      </div>

      {/* TIMELINE */}
      <ContactInput
        label="Timeline"
        type="text"
        name="timeline"
        value={formData.timeline}
        onChange={handleChange}
        placeholder="2 weeks / 1 month / flexible"
      />

      {/* MESSAGE */}
      <ContactTextarea
        label="Project Details"
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Tell me about your project..."
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
        {loading ? "Sending..." : "Send Project Inquiry"}

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
