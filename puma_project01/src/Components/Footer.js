import React from "react";
import './footer.css'

const footer = {
    backgroundColor: "rgb(12, 12, 12)",
    display: 'flex',
    justifyContent: 'space-around',
    color: '#ffffff',
    padding: '20px 0',
}

const Footer = () => {
  return (
    <div style={footer}>
          <div>
          <h1>Support</h1>
          <p>Contact</p>
          <p>Promation & Sale</p>
          <p>Track Order</p>
          <p>Terms & Condition</p>
          <p>Privacy</p>
          </div>
          <div>
          <h1>FAQ</h1>
          <p>Contact</p>
          <p>Promation & Sale</p>
          <p>Track Order</p>
          <p>Terms & Condition</p>
          <p>Privacy</p>
          </div>
          <div>
          <h1>About</h1>
          <p>Contact</p>
          <p>Promation & Sale</p>
          <p>Track Order</p>
          <p>Terms & Condition</p>
          <p>Privacy</p>
         </div>

    </div>
  );
};

export default Footer;
