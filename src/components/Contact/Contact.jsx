import React, { useContext, useRef} from "react";
import "./Contact.css";
import { themeContext } from "../../Context";
import down from "../../img/down1.png";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{color: darkMode?'white': ''}}>Get in Touch</span>
          <span>Contact me @</span>
          
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form}>
          <input type="text" name="user_name" className="user"  placeholder="Ravula Harish Kumar" disabled={true}/>
          <input type="email" name="user_email" className="user" placeholder="harishkumarulht@gmail.com" disabled={true}/>
          <input name="contact" className="user" placeholder="Contact: +918309814752" disabled={true}/>
          <img src={down} alt=""/>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
      
    </div>
  );
};

export default Contact;
