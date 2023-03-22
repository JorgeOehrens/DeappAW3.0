import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logodark from "../../assets/images/logo/logo_dark.png";
import logofooter from "../../assets/images/logo/logo2.png";
const Footer = () => {
  const accountList = [
    {
      title: "Mercado",
      link: "/authors-01",
    },
    {
      title: "Devs",
      link: "/wallet-connect",
    },
    {
      title: "Author Profile",
      link: "/edit-profile",
    },
    {
      title: "Tutoriales",
      link: "/create-item",
    },
  ];
  const resourcesList = [
    {
      title: "Comunidad",
      link: "/help-center",
    },
    {
      title: "Tutoriales",
      link: "/live-auctions",
    },
    {
      title: "Wallets",
      link: "/item-details-01",
    },
    {
      title: "Preguntas",
      link: "/activity-01",
    },
  ];
  const companyList = [
    {
      title: "Pasos a Seguir",
      link: "/explore-01",
    },
    {
      title: "Contacto",
      link: "/contact-01",
    },
    {
      title: "Preguntas",
      link: "/blog",
    },
    {
      title: "Partners",
      link: "/faq",
    },
  ];
  const socialList = [
    {
      icon: "fab fa-twitter",
      link: "#",
    },
    {
      icon: "fab fa-facebook",
      link: "#",
    },
    {
      icon: "fab fa-telegram-plane",
      link: "#",
    },
    {
      icon: "fab fa-youtube",
      link: "#",
    },
    {
      icon: "icon-fl-tik-tok-2",
      link: "#",
    },
    {
      icon: "icon-fl-vt",
      link: "#",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div>
      <footer id="footer" className="footer-light-style clearfix bg-style">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-lg-3 col-md-12 col-12">
              <div className="widget widget-logo">
                <div className="logo-footer" id="logo-footer"></div>
                <p className="sub-widget-logo">
                  Buscamos financiamiento a través de la blockchain para que
                  nuestros inversores sus rentabilidades
                </p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-5 col-5">
              <div className="widget widget-menu style-1">
                <h5 className="title-widget">Web Assets 3.0</h5>
                <ul>
                  {accountList.map((item, index) => (
                    <li key={index}>
                      <Link to={item.link}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-7 col-7">
              <div className="widget widget-menu style-2">
                <h5 className="title-widget">Información</h5>
                <ul>
                  {resourcesList.map((item, index) => (
                    <li key={index}>
                      <Link to={item.link}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-5 col-5">
              <div className="widget widget-menu fl-st-3">
                <h5 className="title-widget">Tokeniza tu Proyecto</h5>
                <ul>
                  {companyList.map((item, index) => (
                    <li key={index}>
                      <Link to={item.link}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-7 col-12">
              <div className="widget widget-subcribe">
                <h5 className="title-widget">Suscribete</h5>
                <div className="form-subcribe">
                  <form
                    id="subscribe-form"
                    action="#"
                    method="GET"
                    acceptCharset="utf-8"
                    className="form-submit"
                  >
                    <input
                      name="email"
                      className="email"
                      type="email"
                      placeholder="usuario@yourgmail.com"
                      required
                    />
                    <button id="submit" name="submit" type="submit">
                      <i className="icon-fl-send"></i>
                    </button>
                  </form>
                </div>
                <div className="widget-social style-1 mg-t32">
                  <ul>
                    {socialList.map((item, index) => (
                      <li key={index}>
                        <Link to={item.link}>
                          <i className={item.icon}></i>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {isVisible && <Link onClick={scrollToTop} to="#" id="scroll-top"></Link>}

      <div
        className="modal fade popup"
        id="popup_bid"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <div className="modal-body space-y-20 pd-40">
              <h3>Place a Bid</h3>
              <p className="text-center">
                You must bid at least{" "}
                <span className="price color-popup">4.89 ETH</span>
              </p>
              <input
                type="text"
                className="form-control"
                placeholder="00.00 ETH"
              />
              <p>
                Enter quantity. <span className="color-popup">5 available</span>
              </p>
              <input type="number" className="form-control" placeholder="1" />
              <div className="hr"></div>
              <div className="d-flex justify-content-between">
                <p> You must bid at least:</p>
                <p className="text-right price color-popup"> 4.89 ETH </p>
              </div>
              <div className="d-flex justify-content-between">
                <p> Service free:</p>
                <p className="text-right price color-popup"> 0,89 ETH </p>
              </div>
              <div className="d-flex justify-content-between">
                <p> Total bid amount:</p>
                <p className="text-right price color-popup"> 4 ETH </p>
              </div>
              <Link
                to="#"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#popup_bid_success"
                data-dismiss="modal"
                aria-label="Close"
              >
                {" "}
                Place a bid
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;