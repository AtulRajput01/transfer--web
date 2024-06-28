import React from 'react'
import './footer.css'
const Footer = () => {
  return (  
    <footer className="footer">
        <div className="container">
            <div className="footer-content">
                <div className="footer-section about">
                    <h2>About Us</h2>
                    <p>Your one-stop destination for beautiful flowers.<br/>
                    We offer a wide range of fresh flowers for all <br/>
                    occasions.</p>
                    <div className="contact">
                        <span><i className="fas fa-phone"></i> 123-456-7890</span>
                        <span><i className="fas fa-envelope"></i> info@example.com</span>
                    </div>
                </div>
                <div className="footer-section links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Address</a></li>
                    </ul>
                </div>
                <div className="footer-section follow">
                    <h2>Follow Us</h2>
                    <div className="social-links">
                        <a href="https://www.facebook.com/efetravelswitzerland/"><i className="fab fa-facebook"></i>facebook</a><br/>
                        <br/>
                        <a href="https://www.instagram.com/efe_travel.comswitzerland/"><i className="fab fa-twitter"></i>Instagram</a><br/>
                        <br/>
                        <a href="https://www.youtube.com/@efetravel"><i class="fa-brands fa-youtube"></i>Youtube</a><br/>
                        <br/>
                        <a href="#"><i className="fab fa-instagram"></i>Thread</a><br/>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            &copy; 2024 EFE. All rights reserved.
        </div>
    </footer>
    
  )
}

export default Footer


