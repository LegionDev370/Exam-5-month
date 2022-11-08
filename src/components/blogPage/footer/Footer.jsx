import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import FooterLogo from "../../assets/footer-logo.svg";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-flex">
          <div className="footer-logo-brand">
            <Link to = "/">
            <img src={FooterLogo} alt="footer-logo" />
            </Link>
          </div>
          <ul className="footer-nav-list">
            <li className="footer-nav-list-item">
              <p className="footer-nav-list-item-title">FIGHT WITH ME ON:</p>
              <a className="footer-nav-list-item-link" href="https://daryo.uz">Twitter</a>
              <a className="footer-nav-list-item-link" href="https://daryo.uz">Instagram</a>
              <a className="footer-nav-list-item-link" href="https://daryo.uz">Telegram</a>
              <a className="footer-nav-list-item-link" href="https://daryo.uz">YouTube</a>
              <a className="footer-nav-list-item-link" href="https://daryo.uz">Figma</a>
            </li>
            <li className="footer-nav-list-item">
              <p className="footer-nav-list-item-title">WHAT I HAVE DONE:</p>
              <a className="footer-nav-list-item-link" href="https://daryo.uz">Xalq Kutubxonasi</a>
              <a className="footer-nav-list-item-link" href="https://daryo.uz">Websitee</a>
              <a className="footer-nav-list-item-link" href="https://daryo.uz">Website</a>
              <a className="footer-nav-list-item-link" href="https://daryo.uz">Play Market</a>
              <a className="footer-nav-list-item-link" href="https://daryo.uz">App Store</a>
            </li>
            <li className="footer-nav-list-item">
              <p className="footer-nav-list-item-title">Contact</p>
              <a className="footer-nav-list-item-link" href="https://daryo.uz">Blog</a>
              <a className="footer-nav-list-item-link" href="https://daryo.uz">Dribbble</a>
              <a className="footer-nav-list-item-link" href="https://daryo.uz">Behance</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
