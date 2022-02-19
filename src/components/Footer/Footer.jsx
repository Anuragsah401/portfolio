import React from "react";

import HeadTitle from "../HeadTitle/HeadTitle";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GoogleMap from "./GoogleMap/GoogleMap";
import emailjs from '@emailjs/browser';



const Footer = () => {
  const form = React.useRef();

  const [subject, setSubject] = React.useState('')
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [message, setMessage] = React.useState('')

  const [subjectError, setSubjectError] = React.useState('')
  const [nameError, setNameError] = React.useState('')
  const [emailError, setEmailError] = React.useState('')
  const [messageError, setMessageError] = React.useState('')

  const [disabled, setDisabled] = React.useState(false)
  const [sendStatus, setSendStatus] = React.useState('Send Me')

  // const handleChange = (e) => {
  //   console.log(e.target.value.length);
  //   setSubject(e.target.value)
  //   if (e.target.value.length > 0 || null) {
  //     setSendStatus('Send Me')
  //     setDisabled(false)
  //   } else {
  //     setDisabled(true)
  //   }
  // }

  const validation = () => {
    // console.log(subject)
    if (
      ((subject.length === 0))
      && ((name.length === 0))
      && ((email.length === 0))
      && (message.length < 1)
    ) {

      setSubjectError("This Field is Empty!")
      setNameError("set your name first!")
      setEmailError("This Field is Empty!")
      setMessageError("Please Drop some messages")

    } else if (subject.includes('@')) {
      setNameError("Please Enter Valid Name")
    }

    else if (name.includes('@')) {
      setNameError("Please Enter Valid Name")
    }
    else if (!email.includes('@')) {
      setEmailError("Please Enter Valid Email")
    }
    else {
      return true
    }
  }

  const sendMail = (e) => {
    e.preventDefault();
    if (validation()) {
      // setSendStatus('Sending...')
      // emailjs.sendForm('service_z3k5bl8', 'template_sie362r', form.current, `user_${process.env.REACT_APP_EMAILJS_API}`)
      //   .then((result) => {
      //     setSendStatus('Done')
      //     setDisabled(true)
      //   }, (error) => {
      //     setSendStatus('Send Me')
      //   });
      console.log('Hello')
      e.target.reset()
    } else {
      console.log('Please validate')
    }
    // console.log(nameError)
    // console.log(emailError)
    // console.log(messageError)
  }

  // console.log(message.length)
  // console.log(subjectError)


  return (
    <div id="footer" className="pt-[8rem] pb-[2.5rem] bg-[#072227ce]">
      <div className="max-w-[1200px] m-auto">
        <div className="mb-[3.5rem]">
          <HeadTitle title="Contact" subTitle="Get in Touch With Me" center="center" titleColor='#AEFEFF' subColor='#eee' />
        </div>
        <div className="flex">
          <div className="flex-1">
            <form action="" className="flex flex-col gap-[1.5rem]" ref={form} onSubmit={sendMail}>
              <input
                className="py-[0.5rem] px-[1rem] border-b-2 border-[#dad8d8] bg-transparent outline-none caret-white text-white"
                type="text"
                placeholder="Subject"
                name="user_subject"
                onChange={(e) => setSubject(e.target.value.trim())}
              />
              {subjectError ? <p className='text-[red]'>{subjectError}</p> : null}
              <input
                className="py-[0.5rem] px-[1rem] border-b-2 border-[#dad8d8] bg-transparent outline-none caret-white text-white capitalize"
                type="username"
                placeholder="Your name"
                name="user_name"
                onChange={(e) => setName(e.target.value.trim())}
              />
              {nameError ? <p className='text-[red]'>{nameError}</p> : null}
              <input
                className="py-[0.5rem] px-[1rem] border-b-2 border-[#dad8d8] bg-transparent outline-none caret-white text-white"
                type="email"
                placeholder="Your Email Here"
                name="user_email"
                onChange={(e) => setEmail(e.target.value.trim())}
              />
              {emailError ? <p className='text-[red]'>{emailError}</p> : null}
              <textarea
                className="py-[0.5rem] px-[1rem] border-b-2 border-[#dad8d8] bg-transparent outline-none caret-white text-white"
                type="textarea"
                placeholder="Drop Message"
                rows="4"
                cols="50"
                name="user_message"
                onChange={(e) => setMessage(e.target.value.trim())}
              />
              {messageError ? <p className='text-[red]'>{messageError}</p> : null}
              <div className="mt-[1rem] text-center">
                <button id='btn' disabled={disabled}
                  className={`${disabled ? 'bg-[#93b4b4]' : 'bg-[#4FBDBA]'} 
                            w-[22%]   
                            py-[0.7rem] 
                            px-[auto] 
                            text-[#000] 
                            font-[600] 
                            rounded-[5px] 
                            text-[18px] text-center ${disabled ? null : 'hover:text-[red]'} ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
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
                <p className="inline ml-[1rem] text-[18px] text-[#eee]">Dhumbarahi-01, Kathmandu, Nepal</p>
              </li>
            </ul>
            <div className="w-[90%] h-[250px] mt-[1.5rem]">
              <GoogleMap />
            </div>
          </div>
        </div>

        <div className='mt-[2rem] text-right text-[#eee] font-[500] text-[1.1rem]'>
          <p>All Rights Reserved By Anurag.dev 2022.</p>
          <div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
