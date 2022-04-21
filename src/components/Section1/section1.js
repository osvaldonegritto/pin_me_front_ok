import React from "react";
import logocabecera from "../../img-pin/top-logo.svg";

function Section1() {
    return(
    <div>
        <header id="hero">
            <nav className="nav">
            <div className="nav-logo">
              <img src={logocabecera} alt="Logo 25 Watts" className="nav-img"/>
            {/* /* remplazo el llamado de la imagen de la linea 12 para llamarlo en react */ }
            {/* <img src="img-pin/top-logo.svg" alt="Logo 25 Watts" className="nav-img"/></a>               */}
            </div>
            <button className="nav-toggle"> 
               <i className="fas fa-bars"></i>
            </button>
            <ul className="nav-menu nav-menu-visible">
                <li className="nav-link-active"><a href="#home" className="nav-link">Home</a></li>
                <li><a href="#about" className="nav-link">About</a></li>
                <li><a href="#products" className="nav-link">Products</a></li>
                <li><a href="#services" className="nav-link">Services</a></li>
                <li><a href="#contact" className="nav-link">Contact</a></li>                 
            </ul>
          </nav>
          <div className="carousel-sec1">
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                  <div className="carousel-caption d-none d-md-block">
                    <h1>Sed ut perspiciatis <span>unde omnis iste natus</span></h1>
                    <p>Sed ut perspiciatis unde omnis iste natus error <span>sit voluptatem accusantium doloremque.</span></p>
                    <button className="btn"><a href="#">Read more</a></button>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">

                  <div className="carousel-caption d-none d-md-block">
                    <h1>Lorem Ipsun dolor <span>sit volup doloremque</span></h1>
                    <p>Ratione officiis temporibus obcaecati sunt, rem lorem ipsum dolor sit.</p> 
                    <button className="btn"><a href="#">Read more</a></button>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="carousel-caption d-none d-md-block">
                    <h1>Voluptates iure amet <span>sapiente voluptates</span></h1>
                    <p>Dignissimos molestiae delectus<span>Quae consequuntur blanditiis.</span></p>
                    <button className="btn"><a href="#main">Read more</a></button>
                  </div>
                </div>
              </div>
            </div>
          </div>

    </header>

    </div> )
}

    
    export default Section1; 