import React from "react";
import imagencontacto from "../../img-pin/contact-image.png"
function Section5(props) {
    return(
    <div id="contact">
        <form  action="" method="POST" id="form">
              <div className="form">
                  <h2 className="contact-title">Get in touch <span>We are hiring!</span></h2>
                  <div className="campo">
                      <input onChange={props.handleChangeGeneral} value={props.contactData.name} type="text" name="name" id="name" required/><span className="bar"></span>
                      <label htmlFor="name">Name</label>
                  </div>
                <div className="campo">
                      <input onChange={props.handleChangeGeneral} value={props.contactData.email} type="email" name="email" id="email" required/><span className="bar"></span>
                      <label htmlFor="email">Email</label>
                </div>
                  <div className="campo">
                      <input onChange={props.handleChangeGeneral} value={props.contactData.phone} type="text" name="phone" id="phone" required/><span className="bar"></span>
                      <label htmlFor="phone">Phone</label>
                  </div>
                <div className="campo">
                      <textarea onChange={props.handleChangeGeneral} value={props.contactData.message} name="message" id="message" cols="20" rows="4" required/><span className="bar"></span>
                      <label htmlFor="message">Message</label>
                </div>
                  <button disabled={props.disable} onClick={props.handleSend} type="submit" className="btn-submt">Send</button>
              </div>
        </form>
          <div className="contact-img">
            <img src={imagencontacto} alt="" className="img-sec5"/>
          {/* <img src="./img-pin/contact-image.png" alt="" className="img-sec5"/> */}
          </div>    
    </div>)
    
}
export default Section5;