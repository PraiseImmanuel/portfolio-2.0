import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
import Header from "../../components/Header";
import { useState } from "react";
import { api } from "../../lib/api/request";
import { toast } from "react-toastify";

const Contact = () => {
  const [contactField, setContactField] = useState({
    subject: "",
    email: "",
    message: "",
    name: "",
  });

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    console.log(contactField);
    setContactField((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      contactField.email === "" ||
      contactField.message === "" ||
      contactField.subject === "" ||
      contactField.name === ""
    ) {
      toast.error("All fields are required");
      return;
    }
    try {
      const response = await api.post(
        "http://localhost:3001/send-email",
        contactField
      );
      if (response.status === 200) {
        toast.success("Message sent successfully", {
          toastId: "success",
        });
        return { success: true };
      } else {
        toast.error("Failed to send message", {
          toastId: "error",
        });
        return { success: false };
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("An error occurred. Please try again later.", {
        toastId: "error",
      });
      return { success: false };
    }
  };
  return (
    <div className="min-h-[100dvh] bg-primary/30">
      <Header />
      <div className="container mx-auto w-full flex flex-col items-center justify-center pt-6 pb-36">
        <div className="flex justify-center flex-col w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let&apos;s <span className="text-accent">Connect.</span>
          </motion.h2>
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            onSubmit={handleSubmit}
          >
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                placeholder="name"
                className="input  focus:bg-transparent"
                onChange={(e) => handleFieldChange(e)}
                value={contactField.name}
                name="name"
              />
              <input
                name="email"
                type="text"
                placeholder="email"
                className="input  focus:bg-transparent"
                onChange={(e) => handleFieldChange(e)}
                value={contactField.email}
              />
            </div>
            <input
              name="subject"
              type="text"
              placeholder="subject"
              className="input focus:bg-transparent capitalize"
              onChange={(e) => handleFieldChange(e)}
              value={contactField.subject}
            />
            <textarea
              name="message"
              placeholder="message"
              className="textarea  focus:bg-transparent"
              onChange={(e) => handleFieldChange(e)}
              value={contactField.message}
            />
            <button
              type="submit"
              className="btn rounded-full border border-white/500 max-w-[150px] md:max-w-[170px]
              md:px-8 transition-all duration-300 flex items-center justify-center
              overflow-hidden hover:border-accent group"
            >
              <span
                className="group-hover:-translate-y-[120px] group-hover:opacity-0
                transition-all duration-500"
              >
                Let&apos;s talk
              </span>
              <BsArrowRight
                className="-translate-y-[120%] opacity-0 group-hover:flex
                group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute
                text-[22px]"
              />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
