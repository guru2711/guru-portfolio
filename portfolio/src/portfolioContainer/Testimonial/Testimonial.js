import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";

import "./Testimonial.css";

export default function Testimonial(props) {
  const options = {
    loop: true,
    margin: 0,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    smartSpeed: 5000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <ScreenHeading
        title={"Projects"}
        subHeading={"FullStack Projects with advanced Topics and APIs"}
      />
      <section className="testimonial-section " id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="testimonial-carousel"
              {...options}
            >
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Petty cash is a nominal amount of money readily accessible
                      for paying expenses too small to merit writing a check or
                      using a credit card. ... A petty cash fund can be used for
                      office supplies, cards for customers, flowers, paying for
                      a catered lunch for employees, or reimbursing employees
                      for expenses.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>

                  <div className="client-info">
                    {/* <img src={lady} alt="no internet connection"></img> */}
                    <h5>Cash Mangement</h5>
                    <ul>
                      <li>jwt authentication</li>
                      <li>Protected Route</li>
                      <li>Context Api</li>
                      <li>Database</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Contact Saving web app is where user can save their own
                      contacts whether it is personal or professional each user
                      have their own contacts and they can edit and delete
                      contacts as their wish
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    {/* <img src={mike} alt="no internet connection"></img> */}
                    <h5>Contact - Saving</h5>
                    <ul>
                      <li>Express JS</li>
                      <li>jwt authentication</li>
                      <li>Protected Route</li>
                      <li>Password Encryption</li>
                      <li>React Hooks</li>
                      <li>Context Api</li>
                      <li> MongoDB / Mongoose</li>
                      <li>Access Control</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Chat App is real Time data transfer using Socket.io,
                      Socket.IO is a JavaScript library for realtime web
                      applications. It enables realtime, bi-directional
                      communication between web clients and servers. It has two
                      parts: a client-side library that runs in the browser, and
                      a server-side library for Node. js.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    {/* <img src={lady} alt="no internet connection"></img> */}
                    <h5>Chat App</h5>
                    <ul>
                      <li>Real Time data Transfer using (Socket.io)</li>
                      <li>Node JS</li>
                      <li>Express JS</li>
                      <li>jwt authentication</li>
                      <li>Protected Route</li>
                      <li>Password Encryption</li>
                      <li> MongoDB / Mongoose</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      This guy is incredibly awesome, I hired him and when He
                      delivered, I honestly fell in love with the project. He is
                      indeed a great guy,
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <h5>Portfolio</h5>
                    <ul>
                      <li>React Js</li>
                      <li>Bootstrap</li>
                      <li>Node JS</li>
                      <li>Express JS</li>
                      <li>NodeMailer</li>
                    </ul>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <a
          className="1"
          href="https://pettycash-management.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <button
            className="btn highlighted-btn"
            style={{
              backgroundColor: "yellow",
              color: "black",
              fontSize: "15px",
            }}
          >
            Cash Management
          </button>
        </a>
        &nbsp
        <a
          className="2"
          href="https://contact-savings.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <button
            className="btn highlighted-btn"
            style={{
              backgroundColor: "yellow",
              color: "black",
              fontSize: "15px",
            }}
          >
            Contact Saving
          </button>
        </a>
        &nbsp
        <a
          className="3"
          href="https://socketiochatapp.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <button
            className="btn highlighted-btn"
            style={{
              backgroundColor: "yellow",
              color: "black",
              fontSize: "15px",
            }}
          >
            Chat App
          </button>
        </a>
        &nbsp
        <br />
        <a
          className="4"
          href="https://guruprakash.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <button
            className="btn highlighted-btn"
            style={{
              backgroundColor: "yellow",
              color: "black",
              fontSize: "15px",
            }}
          >
            <bold>Portfolio</bold>
          </button>
        </a>
      </div>
    </div>
  );
}
