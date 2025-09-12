import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("https://portfolio-1-fgj8.onrender.com/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error Sending message:",error);
      setStatus("⚠️ Error connecting to server.");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-white dark:bg-gray-800 p-8 flex flex-col items-center"
    >
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
        Contact Me
      </h2>

      <form
        onSubmit={onSubmit}
        className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 w-full max-w-md"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 rounded-lg border dark:border-gray-700"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 rounded-lg border dark:border-gray-700"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 rounded-lg border dark:border-gray-700"
          rows="4"
          required
        ></textarea>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 rounded-lg transition duration-300"
        >
          Send
        </button>
      </form>

      {status && (
        <p className="mt-4 text-gray-700 dark:text-gray-300">{status}</p>
      )}
    </section>
  );
};

export default Contact;
