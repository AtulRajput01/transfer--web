import React from "react";

export const About = () => {
  return (
    <>
    {/* <header id="header">
      <div className="intro">
        <div className="over">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
              </div>
            </div>
          </div>
        </div>
      </div>
    </header> */}
     <header id="aboutHeader">
      <div className="aboutbackground">
            <div className="row">
          
          </div>
      </div>
    </header>

    <div className="helpContainer" style={{marginTop:"7rem", marginBottom:"6rem"}}>
        <div className="help-section">
          <h1>About Us</h1>
          <p>Find an answer to anything you need in our knowledge base</p>
        </div>
      </div>

      <div id="about">
        <div className="container">
       
          <div className="row">
            <div className="col-xs-12 col-md-6">
            
              <img src="img/about.jpg" className="img-responsive" alt="" />
            </div>
            <div className="">
              <div className="about-text">
              <h3>EFE Travels</h3>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </p>
                <h3>Why Us?</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </p>
                <div className="list-style">
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul></ul>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-xs-12"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="team" style={{paddingBottom:"0px"}}>
        <div className="container">
      
          <div className="row">
           
            
          <div className="card-container" style={{gap:"10px",backgroundSize:"cover"}} >
            <div className="card" style={{height:"28.5rem",width:"22rem"}}>
              <img src="/img/car/car1.jpg" alt="Image 1" />
              <p > Range Rover extended range plug-in electric hybrid provides new levels of performance.</p>
            </div>
            <div className="card"style={{height:"28.5rem",width:"22rem"}}>
              <img src="/img/car/car2.jpg" alt="Image 2" />
              <p>The Mercedes-Benz G-Class is a high-end luxury SUV known for its premium quality and high price. </p>
            </div>
            <div className="card"style={{height:"28.5rem",width:"22rem"}}>
              <img src="/img/car/car3.jpg" alt="Image 3" />
              <p>Since its launch, the all-new 2023 Outlander Plug-in Hybrid has been garnering awards and accolades for its exquisite interior and ...</p>
            </div>
            <div className="card"style={{height:"28.5rem",width:"22rem"}}>
              <img src="/img/about4.jpg" alt="Image 4" />
              <p>We believe movement inspires ideas. Discover how Kia moves towards a more inspiring and sustainable future</p>
            </div>
            <div className="card"style={{height:"28.5rem",width:"22rem"}}>
              <img src="/img/car/car4.jpg" alt="Image 5" />
              <p>Explore the most desirable luxury SUVs, with our Range Rover, Discovery, 
                and Defender models. </p>
            </div>
            <div className="card"style={{height:"28.5rem",width:"22rem"}}>
              <img src="/img/about00.jpg" alt="Image 6" />
              <p>We believe movement inspires ideas. Discover how moves towards a more inspiring and sustainable future</p>
            </div>
            <div className="card"style={{height:"28.5rem",width:"22rem"}}>
              <img src="/img/about8.jpg" alt="Image 7" />
              <p>We believe movement inspires ideas. Discover how Kia moves towards a more inspiring and sustainable future</p>
            </div>
            <div className="card"style={{height:"28.5rem",width:"22rem"}}>
              <img src="/img/about5.jpg"  alt="Image 8" />
              <p>We believe movement inspires ideas. Discover how Kia moves towards a more inspiring and sustainable future</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};
