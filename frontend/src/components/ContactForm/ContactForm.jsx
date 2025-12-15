import { useForm } from "react-hook-form";
import label from "../../assets/contactlabel.svg";
import name from "../../assets/Namelabel.svg";
import email from "../../assets/emaillabel.svg";
import subject from "../../assets/Messagelabel.svg";
import "./ContactForm.css";
import axios from "axios";
import { useState } from "react";

export default function Contact() {
  const [submitStatus, setSubmitStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await axios.post(
        "https://www.manikumarchintala.com",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setSubmitStatus("Success! Your message has been sent.");
        reset(); // Clear form fields after submission
      } else {
        setSubmitStatus("Error! Something went wrong.");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("Error! Something went wrong.");
    } finally {
      setIsSubmitting(false); // End submitting
    }
  };

  return (
    <div className="contactform">
      <div className="formlabelholder">
        <img src={label} alt="Contact Form Label" />
        <br />
        <p>Have any suggestions?</p>
        <p>Just say Hi.</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="formflex">
        <div className="inputss">
          <div className="inputval">
            <img src={name} alt="Name Label" />
            <input
              type="text"
              aria-label="name"
              name="name"
              {...register("name", { required: "required" })}
            />
            {errors.name && <p>{errors.name.message}</p>}
          </div>
          <div className="inputval">
            <img src={email} alt="Email Label" />
            <input
              className="middle"
              type="email"
              aria-label="email"
              name="email"
              {...register("email", {
                required: "required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email",
                },
              })}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div className="inputval">
            <img src={subject} alt="Subject Label" />
            <input
              type="text"
              aria-label="subject"
              name="subject"
              {...register("subject", { required: "required" })}
            />
            {errors.subject && <p>{errors.subject.message}</p>}
          </div>
        </div>
        <div className="buttonflex">
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sent" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}
