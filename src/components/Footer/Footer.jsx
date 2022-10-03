import React from "react";

import HeadTitle from "../UI-Elements/HeadTitle/HeadTitle";

import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import GoogleMap from "./GoogleMap/GoogleMap";

import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const form = React.useRef();

  const [subject, setSubject] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const [subjectError, setSubjectError] = React.useState("");
  const [nameError, setNameError] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [messageError, setMessageError] = React.useState("");

  const [sendStatus, setSendStatus] = React.useState("Send Me");

  const validation = () => {
    let isValid = true;

    if (subject.includes("@") || subject.length === 0) {
      setSubjectError(subject.length === 0 ? "This field is Empty!" : "Please Enter valid Subject");
      isValid = false;
    } else {
      setSubjectError("");
    }

    if (name.includes("@") || name.length === 0) {
      setNameError(name.length === 0 ? "This field is Empty!" : "Please Enter valid name");
      isValid = false;
    } else {
      setNameError("");
    }

    if (!email.includes("@") || email.length === 0) {
      setEmailError(email.length === 0 ? "This field is Empty!" : "Please Enter valid email");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (message.length === 0) {
      setMessageError("Please Drop some messages!");
      isValid = false;
    } else {
      setMessageError("");
    }
    return isValid;
  };

  const sendMail = (e) => {
    e.preventDefault();
    if (validation()) {
      setSendStatus("Sending...");
      emailjs
        .sendForm(
          "service_z3k5bl8",
          "template_sie362r",
          form.current,
          `user_${process.env.REACT_APP_EMAILJS_API}`
        )
        .then(
          (result) => {
            setSendStatus("Send Me");
            setSubject("");
            setName("");
            setEmail("");
            setMessage("");

            toast.success("Your Message has been sent!");
            e.target.reset();
          },
          (error) => {
            setSendStatus("Send Me");
            toast.error("Your Message was not sent!");
          }
        );
    }
  };

  return (
    <div id="footer" className="pt-[8rem] pb-[2.5rem] bg-[#072227ce] relative">
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <div className="max-w-[1200px] m-auto">
        <div className="mb-[3.5rem]">
          <HeadTitle
            title="Contact"
            subTitle="Get in Touch With Me"
            center="center"
            titleColor="#AEFEFF"
            subColor="#eee"
          />
        </div>
        <div className="flex">
          <div className="flex-1">
            <form
              action=""
              className="flex flex-col gap-[1.5rem]"
              ref={form}
              onSubmit={(e) => sendMail(e)}
            >
              <div className="transition ease delay-50">
                <input
                  className={`w-[100%] py-[0.5rem] px-[1rem] border-b-2 ${
                    subjectError ? "border-[#ff5959]" : "border-[#dad8d8]"
                  } bg-transparent outline-none caret-white text-white transition ease delay-[0.5]`}
                  type="text"
                  placeholder="Subject"
                  name="user_subject"
                  onFocus={() => setSubjectError("")}
                  onChange={(e) => setSubject(e.target.value.trim())}
                />
                {subjectError ? (
                  <p className="text-[#ff5959] mt-[0.5rem] translate-x-2">{subjectError}</p>
                ) : null}
              </div>

              <div>
                <input
                  className={`w-[100%] py-[0.5rem] px-[1rem] border-b-2 ${
                    nameError ? "border-[#ff5959]" : "border-[#dad8d8]"
                  } bg-transparent outline-none caret-white text-white capitalize transition ease delay-10`}
                  type="username"
                  placeholder="Your name"
                  name="user_name"
                  onFocus={() => setNameError("")}
                  onChange={(e) => setName(e.target.value.trim())}
                />
                {nameError ? (
                  <p className="text-[#ff5959] transition ease delay-10 mt-[0.5rem]">{nameError}</p>
                ) : null}
              </div>

              <div>
                <input
                  className={`w-[100%] py-[0.5rem] px-[1rem] border-b-2 ${
                    emailError ? "border-[#ff5959]" : "border-[#dad8d8]"
                  } bg-transparent outline-none caret-white text-white transition ease delay-10`}
                  type="email"
                  placeholder="Your Email Here"
                  name="user_email"
                  onFocus={() => setEmailError("")}
                  onChange={(e) => setEmail(e.target.value.trim())}
                />
                {emailError ? (
                  <p className="text-[#ff5959] transition ease delay-10 mt-[0.5rem]">
                    {emailError}
                  </p>
                ) : null}
              </div>

              <div>
                <textarea
                  className={`w-[100%] py-[0.5rem] px-[1rem] border-b-2 ${
                    messageError ? "border-[#ff5959]" : "border-[#dad8d8]"
                  } bg-transparent outline-none caret-white text-white transition ease delay-10`}
                  type="textarea"
                  placeholder="Drop Message"
                  rows="4"
                  cols="50"
                  name="user_message"
                  onFocus={() => setMessageError("")}
                  onChange={(e) => setMessage(e.target.value.trim())}
                />
                {messageError ? (
                  <p className="text-[#ff5959] transition ease-in-out delay-10 mt-[0.5rem]">
                    {messageError}
                  </p>
                ) : null}
              </div>

              <div className="mt-[1rem] text-center">
                <button
                  id="btn"
                  className={`bg-[#4FBDBA]
                            w-[22%]   
                            py-[0.7rem] 
                            px-[auto] 
                            text-[#000] 
                            font-[600] 
                            rounded-[5px] 
                            text-[18px] text-center hover:bg-[#000000] hover:text-[#eee] transition-all ease-in-out delay-50`}
                >
                  {sendStatus}
                </button>
              </div>
            </form>
          </div>

          <div className="flex-1 pl-[2rem]">
            <ul className="flex flex-col gap-[1rem]">
              <li>
                <FontAwesomeIcon icon={faEnvelope} className="text-[1.3rem]" color="#eee" />
                <p className="inline ml-[1rem] text-[18px] text-[#eee]">anuragsah401@gmail.com</p>
              </li>
              <li>
                <FontAwesomeIcon icon={faWhatsapp} className="text-[1.3rem]" color="#eee" />
                <p className="inline ml-[1rem] text-[18px] text-[#eee]">+977 9813950227</p>
              </li>
              <li>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[1.3rem]" color="#eee" />
                <p className="inline ml-[1rem] text-[18px] text-[#eee]">
                  Dhumbarahi-01, Kathmandu, Nepal
                </p>
              </li>
            </ul>
            <div className="w-[90%] h-[250px] mt-[1.5rem]">
              <GoogleMap />
            </div>
          </div>
        </div>

        <div className="mt-[2rem] text-right text-[#eee] font-[500] text-[1.1rem]">
          <p>All Rights Reserved By Anurag.dev 2022.</p>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
