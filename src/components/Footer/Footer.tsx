import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="row justify-content-between">
            <div className="col-6 mt-3 col-lg-3 mt-lg-0">
              <p className="footer-title">Support</p>
              <ul className="footer-nav__list">
                <li className="footer-nav__item">Help Center</li>
                <li className="footer-nav__item">Safety Information</li>
                <li className="footer-nav__item">Cancellation options</li>
                <li className="footer-nav__item">Our COVID-19 Response</li>
                <li className="footer-nav__item">
                  Supporting people with disabilities
                </li>
                <li className="footer-nav__item">
                  Report a neighborhoood concern
                </li>
              </ul>
            </div>
            <div className="col-6 mt-3 col-lg-3 mt-lg-0">
              <p className="footer-title">Community</p>
              <ul className="footer-nav__list">
                <li className="footer-nav__item">
                  Airbnb.org: disaster relief housing
                </li>
                <li className="footer-nav__item">Support: Afghan refugees</li>
                <li className="footer-nav__item">
                  Celebrating diversity & belonging
                </li>
                <li className="footer-nav__item">Combating discrimination</li>
              </ul>
            </div>
            <div className="col-6 mt-3 col-lg-3 mt-lg-0">
              <p className="footer-title">Hosting</p>
              <ul className="footer-nav__list">
                <li className="footer-nav__item">Try hosting</li>
                <li className="footer-nav__item">
                  AirCover: protection for Hosts
                </li>
                <li className="footer-nav__item">Explore hosting resources</li>
                <li className="footer-nav__item">Visit our community forum</li>
                <li className="footer-nav__item">How to host responsibly</li>
              </ul>
            </div>
            <div className="col-6 mt-3 col-lg-3 mt-lg-0">
              <p className="footer-title">About</p>
              <ul className="footer-nav__list">
                <li className="footer-nav__item">Newsroom</li>
                <li className="footer-nav__item">Learn about new features</li>
                <li className="footer-nav__item">Letter from our founders</li>
                <li className="footer-nav__item">Careers</li>
                <li className="footer-nav__item">Investors</li>
                <li className="footer-nav__item">Airbnb Luxe</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer__bottom d-flex justify-content-between">
          <div className="footer__bottom-left d-flex">
            <span className="copyright">© 2022 Airbnb, Inc.</span>
            <ul className="mx-3 list-inline" style={{ listStyle: "button" }}>
              <li className="list-inline-item">Privary</li>
              <li className="list-inline-item">Terms</li>
              <li className="list-inline-item">Sitemap</li>
            </ul>
          </div>
          <div className="footer__bottom-right d-flex">
            <div className="language">
              <i className="fa fa-globe"></i>
              <span className="mx-2">
                <u>English (US)</u>
              </span>
            </div>
            <div className="currency mx-2">
              <i className="fa fa-dollar-sign"></i>
              <span className="mx-2">
                <u>USD</u>
              </span>
            </div>
            <div className="socials">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter mx-3"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
