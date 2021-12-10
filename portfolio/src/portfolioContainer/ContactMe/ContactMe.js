/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import Typical from "react-typical";
import imgBack from "../../assets/Home/contactme.jpg";
import loading from "../../assets/Home/load2.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
// import ScrollService from "../../utilities/ScrollService";
// import Animations from "../../utilities/Animation";
import "./ContactMe.css";
import { toast } from "react-toastify";
import axios from "axios";

function ContactMe(props) {
  //   let fadeInScreenHandler = (screen) => {
  //     if (screen.fadeInScreen !== props.id) return;
  //     Animations.animations.fadeInScreen(props.id);
  //   };
  //   const fadeInSubscription =
  //     ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  console.log(name);

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let data = {
        name,
        email,
        message,
      };
      console.log(data);
      setBool(true);
      const res = await axios.post(`/contact`, data);
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
        setBool(false);
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setBool(false);

        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main-container " id={props.id || ""}>
      <ScreenHeading subHeading={"lets Keep In Touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <Typical
              loop={Infinity}
              steps={["Get In Touch 📧", 1000, "Have a Good Day😉", 1000]}
            />
          </h2>

          <a
            href="https://www.facebook.com/saiguru.prakash"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-facebook-square"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/guru-prakash/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-linkedin"></i>
          </a>
          <a
            href="https://twitter.com/saiguruprakash"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-twitter"></i>
          </a>
        </div>
        <div className="back-form">
          <div className="img-back">
            
            <h4>Using NodeMailer </h4>
            <img src={imgBack} alt="image not found" />
          </div>
          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input type="text" onChange={handleName} value={name} />

            <label htmlFor="email">Email</label>
            <input type="email" onChange={handleEmail} value={email} />

            <label htmlFor="message">Message</label>
            <textarea type="text" onChange={handleMessage} value={message} />

            <div className="send-btn">
              <button type="submit">
                send
                <i className="fa fa-paper-plane" style={{padding:"5px", marginLeft:"10px"}} />
                {bool ? (
                  <b className="load">
                    <img src={loading} alt="image not responding" />
                  </b>
                ) : (
                  ""
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
