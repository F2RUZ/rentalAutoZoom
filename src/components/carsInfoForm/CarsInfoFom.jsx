import React, { useState } from "react";
import axios from "axios";
import "./cars-infoform.scss";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// To activate the toast notifications
// toast.configure();

const CarsInfoForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (name && phone && details) {
      const token = `7276780290:AAFZ5uwwEw3HwQn86eHxCV126WTpGdZ5pvo`; // Telegram bot token
      const chat_id = -1002176782841; // Chat ID
      const url = `https://api.telegram.org/bot${token}/sendMessage`;

      axios
        .post(url, {
          chat_id: chat_id,
          text: `Name: ${name}\nPhone: ${phone}\nDetails: ${details}`,
        })
        .then(() => {
          toast.success("Message sent successfully!", {
            position: "top-center",
            autoClose: 1500,
          });
        })
        .catch((error) => {
          toast.error(`Error sending message: ${error.message}`, {
            position: "top-center",
            autoClose: 2000,
          });
        })
        .finally(() => {
          setLoading(false);
          setName("");
          setPhone("");
          setDetails("");
        });
    } else {
      toast.warn("Please fill in all fields!", {
        position: "top-center",
      });
    }
  };

  return (
    <div className="cars-infoForm">
      <form className="cars-form" onSubmit={handleSubmit}>
        <input
          className="cars-form-input"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="cars-form-input"
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          className="cars-form-input"
          type="text"
          placeholder="Details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
        <input
          className="cars-form-button"
          type="submit"
          value={loading ? "Sending..." : "Send"}
          disabled={loading}
        />
      </form>
    </div>
  );
};

export default CarsInfoForm;
