import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
import Header from "../../components/Header";
import { useState } from "react";
import { api } from "../../lib/api/request";
import { toast } from "react-toastify";
import Socials, { links } from "../../components/Socials";
import Link from "next/link";

const Contact = () => {
  const [contactField, setContactField] = useState({
    subject: "",
    email: "",
    message: "",
    name: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleFieldChange = (e) => {
    const { name, value } = e.target;

    setContactField((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();

    if (
      contactField.email === "" ||
      contactField.message === "" ||
      contactField.subject === "" ||
      contactField.name === ""
    ) {
      toast.error("All fields are required");
      setIsLoading(false);
      return;
    }
    toast.warning("This might take a while. Please Wait...");
    try {
      const response = await api.post(
        "https://portfolio-email-sender-q5m2.onrender.com/send-email",
        contactField
      );
      if (response.status === 200) {
        toast.success("Message sent successfully", {
          toastId: "success",
        });
        setIsLoading(false);
        return { success: true };
      } else {
        toast.error("Failed to send message", {
          toastId: "error",
        });
        setIsLoading(false);
        return { success: false };
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("An error occurred. Please try again later.", {
        toastId: "error",
      });
      setIsLoading(false);
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
                placeholder="Name"
                className="input focus:bg-transparent"
                onChange={(e) => handleFieldChange(e)}
                value={contactField.name}
                name="name"
              />
              <input
                name="email"
                type="text"
                placeholder="Email"
                className="input  focus:bg-transparent"
                onChange={(e) => handleFieldChange(e)}
                value={contactField.email}
              />
            </div>
            <input
              name="subject"
              type="text"
              placeholder="Subject"
              className="input focus:bg-transparent capitalize"
              onChange={(e) => handleFieldChange(e)}
              value={contactField.subject}
            />
            <textarea
              name="message"
              placeholder="Message"
              className="textarea  focus:bg-transparent"
              onChange={(e) => handleFieldChange(e)}
              value={contactField.message}
            />
            <button
              type="submit"
              className={`btn rounded-full border border-white/40  max-w-[150px] md:max-w-[170px]
              md:px-8 transition-all duration-300 flex items-center justify-center
              overflow-hidden hover:border-accent group ${
                isLoading && "opacity-30"
              }`}
              disabled={isLoading}
            >
              {!isLoading && (
                <span>
                  <span
                    className="group-hover:-translate-y-[120px] group-hover:opacity-0
                transition-all duration-500"
                  >
                    {"Let's talk"}
                  </span>
                  <BsArrowRight
                    className="-translate-y-[120%] opacity-0 group-hover:flex
                group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute
                text-[22px]"
                  />
                </span>
              )}

              {isLoading && <span>Loading..</span>}
            </button>
          </motion.form>
          <div className="border-t border-white/10 mt-10 pt-10 lg:hidden">
            <p className="uppercase mb-4">Social Handles</p>
            <div className="flex items-center gap-x-8 text-2xl py-1 text-white/90">
              {links.map((item, index) => (
                <Link
                  key={index}
                  href={item.route}
                  className="hover:text-accent transition-all duration-300 cursor-pointer"
                  target="_blank"
                >
                  {item.svg}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
