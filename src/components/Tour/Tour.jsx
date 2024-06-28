import React from 'react'
import "./tour.css"
import video from "./img/video1.mp4"

function Tour() {
  return (
    <div>
   
        <div className="banner-section">
      
      </div>

      <div className="helpContainer">
        <div className="help-section">
          <h1>Tour and Travel</h1>
          <p>Find an answer to anything you need in our knowledge base</p>
        </div>
      </div>

      <div className="tour-container">
        <div className="tour-details" >
          <div className="tour-box" style={{ marginTop: "20px" }}>
            <h3 style={{ color: "black", fontSize: "2.5rem" }}>Can I book a transfer to the airport?</h3>
            <p>Yes, you can book a transfer to the airport or any other destination by choosing them in destination point field.

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis delectus in expedita esse ullam odio maiores ratione dolores similique sed consequatur illo eveniet praesentium ad ut commodi, quibusdam iste?</p>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla maxime perferendis possimus eius et error velit laboriosam. Quaerat, molestiae ipsa? Ea corporis libero, mollitia nulla consequatur delectus ducimus architecto animi?
              Ut delectus at iste omnis, animi repellat, debitis rerum quas recusandae, mollitia velit tempora itaque. Sed consequatur unde ipsa illo in, tempora harum temporibus quasi. Culpa commodi dolorum eius aut.</p>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quam, totam nobis facilis laboriosam perspiciatis fuga ipsa. Corporis deleniti impedit non corrupti cupiditate eum beatae ab iste. Quibusdam, laboriosam voluptatem!
              Odit illo, labore esse facilis, architecto corrupti ipsam minima consectetur qui quia alias unde! Laudantium, deleniti expedita. Nesciunt, rem perferendis, quo officia expedita magni sint eligendi quidem dicta provident iusto!
              At id tempore assumenda. Placeat neque consectetur corrupti exercitationem autem obcaecati in dolor itaque dolorum nam facilis cumque corporis odio velit alias necessitatibus, sunt molestiae, inventore rerum, praesentium pariatur quam.</p>
            </p>
          </div>

        </div>

      </div>


      
      <div className="video-container">
      <video className="responsive-video" controls>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>


      <div className="tour-bottom">
        <div className="bottomContainer">
          <div className="team-image1">
            <img className="bottomImages" src="/img/faqImage/faq1.jpg" />
          </div>
          <div className="team-image2">
            <img className="bottomImages" src="/img/tour4.jpg" />
          </div>
          <div className="team-image3">
            <img className="bottomImages" src="/img/tour5.jpg" />
          </div>
        </div>
        <div className="bottomContainer">
          <div className="team-image4">
            <img className="bottomImages" src="/img/tour1.jpg" />
          </div>
          <div className="team-image5">
            <img className="bottomImages" src="/img/tour2.jpg" />
          </div>
          <div className="team-image6">
            <img className="bottomImages" src="/img/tour3.jpg" />
          </div>
        </div>
      </div>


    </div>
  )
}

export default Tour
