import "bootstrap/dist/css/bootstrap.css";
import {Link} from "react-router-dom";
import {FaArrowCircleUp} from 'react-icons/fa';
import React, {useState} from 'react';

import "../fileCss/footer.scss";
const Footer = () => {

 const [showScroll, setShowScroll] = useState(false)

 const checkScrollTop = () => {
   if (!showScroll && window.pageYOffset > 400){
     setShowScroll(true)
   } else if (showScroll && window.pageYOffset <= 400){
     setShowScroll(false)
   }
 };

 const scrollTop = () =>{
  window.scrollTo({top: 0, behavior: 'smooth'});
};

window.addEventListener('scroll', checkScrollTop)



 return ( 
  <>
  <footer className="footer p-5">
        <div className="row">
          <div className="col-sm-12 about col-lg-4 p-5">
            <h5 className="text-white">About me</h5>
            <p className="text-white my-3">
              Hello, I am Kazakoff Shohrux, I am 18 years old, my specialty is
              Frontend developer and I have been in this field for 6 month.
            </p>
          </div>
          <div className="col-sm-12 col-lg-4 p-5">
            <h5 className="text-white">Follow me</h5>
            <p className="my-3 icons">
            <Link to="/https://www.instagram.com/shoxrux_77775/" >
              <i className="fab fa-instagram"></i>
              </Link>
              <Link to="/https://t.me/abdirahimovich" >
              <i className="fab fa-telegram-plane mx-2"></i>
              </Link>
              <Link to="/https://youtu.be/fX87iHCDyr4" >
              <i className="fab fa-youtube" target="_blank"></i>
              </Link>
              <Link to="/https://github.com/QozoqovShohrux">
              <i className="fab fa-github mx-2"></i>
              </Link>
            </p>
          </div>
          <div className="col-sm-12 col-lg-4 p-5">
            <h5 className="text-white">Location</h5>
            <ul className="list-group list-unstyled">
              <li className="list-item">
                <a href="#home" className="list-link ">Home</a>
              </li>
              <li className="list-item my-2">
                <a href="#about" className="list-link ">About</a>
              </li>
              <li className="list-item">
                <a href="#works" className="list-link ">Works</a>
              </li>
              <li className="list-item my-2">
                <a href="#contact" className="list-link ">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <hr style={{backgroundColor: "gray"}} />
        <div className="row text-light">
          <div className="col-sm-12 col-lg-6 mx-auto pt-4">
            <p className="text-center">
              Copyright &copy;
              <script>
                document.write(new Date().getFullYear());
              </script>
              - All right reserved | Web Site made by
              <span className="author text-info">codeKazakoff</span>
            </p>
          </div>
        </div>
      </footer>
      <FaArrowCircleUp className="scrollTop" onClick={scrollTop} style={{height: 40, display: showScroll ? 'flex' : 'none'}}/>
  </>
  );
}
 
export default Footer;