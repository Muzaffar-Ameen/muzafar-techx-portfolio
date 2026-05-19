import { useState } from "react";

interface SubmitData {
  type: "general" | "project";

  name: string;

  email: string;

  message: string;

  subject?: string;

  projectType?: string;

  budget?: string;

  timeline?: string;
}

export default function useContactForm() {
  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState("");

  const [error, setError] = useState("");

  const submitForm = async (data: SubmitData) => {
    try {
      setLoading(true);

      setSuccess("");

      setError("");

      const response = await fetch(
        "/.netlify/functions/send-email",

        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(data),
        },
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong");
      }

      setSuccess("Message sent successfully!");

      return true;
    } catch (err: any) {
      setError(err.message || "Failed to send message");

      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,

    success,

    error,

    submitForm,
  };
}
