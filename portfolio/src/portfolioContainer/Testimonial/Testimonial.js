import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import cash from "../../assets/Home/pettycashcover.jpg";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import contact from "../../assets/Home/contact-saving.jpg";
import chat from "../../assets/Home/chatapp.jpg";
import ecommerce from "../../assets/Home/updated-ecommerce.jpg";
import "./Testimonial.css";

export default function Testimonial(props) {
  const options = {
    loop: true,
    margin: 10,
    nav: true,
    autoplay: false,
    autoplayHoverPause: true,
    smartSpeed: 5000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1080: {
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
                    <img
                      className="img"
                      src={cash}
                      alt="no internet connection"
                    ></img>
                    <p style={{ marginTop: "20px" }}>
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

                  <a
                    style={{ color: "yellow" }}
                    className="btn btn-outline-success"
                    href="https://pettycash-management.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                  <br />
                  <a
                    style={{ marginTop: "15px", color: "yellow" }}
                    className="btn"
                    href="https://github.com/guru2711/PettyCash"
                    target="_blank"
                    rel="noreferrer"
                  >
                    FrontEnd source code
                  </a>
                  <br />
                  <a
                    style={{ marginTop: "10px", color: "yellow" }}
                    className="btn"
                    href="https://github.com/guru2711/pettycash-backend"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Backend Source code
                  </a>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <img
                      className="img"
                      src={contact}
                      alt="no internet connection"
                    ></img>
                    <p style={{ marginTop: "20px" }}>
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
                  <a
                    style={{ color: "yellow" }}
                    className="btn btn-outline-success"
                    href="https://contact-savings.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                  <br />
                  <a
                    style={{ marginTop: "10px", color: "yellow" }}
                    className="btn"
                    href="https://github.com/guru2711/contact-saving-front"
                    target="_blank"
                    rel="noreferrer"
                  >
                    FrontEnd source code
                  </a>
                  <br />
                  <a
                    style={{ marginTop: "10px", color: "yellow" }}
                    className="btn"
                    href="https://github.com/guru2711/contact-saving-backend"
                    target="_blank"
                    rel="noreferrer"
                  >
                    BackEnd source code
                  </a>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <img
                      className="img"
                      src={chat}
                      alt="no internet connection"
                    ></img>

                    <p style={{ marginTop: "15px" }}>
                      <i className="fa fa-quote-left" />
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
                      <li>(Socket.io)</li>
                      <li>Node JS</li>
                      <li>Express JS</li>
                      <li>jwt authentication</li>
                      <li>Protected Route</li>
                      <li>Password Encryption</li>
                      <li> MongoDB / Mongoose</li>
                    </ul>
                  </div>
                  <a
                    style={{ color: "yellow" }}
                    className="btn btn-outline-success"
                    href="https://socketiochatapp.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                  <br />
                  <a
                    style={{ marginTop: "10px", color: "yellow" }}
                    className="btn "
                    href="https://github.com/guru2711/socketio-chatapp"
                    target="_blank"
                    rel="noreferrer"
                  >
                    FrontEnd source code
                  </a>
                  <br />
                  <a
                    style={{ marginTop: "10px", color: "yellow" }}
                    className="btn "
                    href="https://github.com/guru2711/socketio-backend"
                    target="_blank"
                    rel="noreferrer"
                  >
                    BackEnd source code
                  </a>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <img
                      className="img"
                      src={ecommerce}
                      alt="no internet connection"
                    ></img>

                    <p>
                      <i className="fa fa-quote-left" />
                      E-commerce (electronic commerce) is the buying and selling
                      of goods and services, or the transmitting of funds or
                      data, over an electronic network
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
                    <h5>E-commerce</h5>
                    <ul>
                      <li> React JS</li>
                      <li>React hooks</li>
                      <li> React-Bootstrap UI library</li>
                      <li> MongoDB databasei</li>
                      <li>Payment gateway</li>
                      <li>Admin area to manage customers, products & orders</li>
                      <li> Integrating the PayPal API</li>
                      <li>JWT authentication (JSON web tokens)</li>
                    </ul>
                  </div>
                  <a
                    style={{ color: "yellow" }}
                    className="btn btn-outline-success"
                    href="http://guru-ecommerce.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                  <br />
                  <a
                    style={{ marginTop: "10px", color: "yellow" }}
                    className="btn btn-outline-success"
                    href="https://github.com/guru2711/updated-ecommerce"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
        <p style={{ color: "yellow" }}>👉🏻*Click and drag sideways</p>
      </section>
      {/* <div className="footer-image">
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
        <a
          className="4"
          href="http://guru-ecommerce.herokuapp.com/"
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
            <bold>E-commerce</bold>
          </button>
        </a>
        <br />
        <br />
        &nbsp
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="footer-images">
        <a
          className="1"
          href="https://github.com/guru2711/PettyCash"
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
            github
          </button>
        </a>
        &nbsp
        <a
          className="1"
          href="https://github.com/guru2711/contact-saving-front"
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
            github
          </button>
        </a>
        &nbsp
        <a
          className="1"
          href="https://github.com/guru2711/socketio-chatapp"
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
            github
          </button>
        </a>
        &nbsp
        <a
          className="1"
          href="https://github.com/guru2711/updated-ecommerce"
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
            github
          </button>
        </a>
      </div> */}
    </div>
  );
}
