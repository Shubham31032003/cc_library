import React from "react";
import "./Gallery.css"

export function Gallery(props) {
    return (
        <>
         <div className={`container text-center mt-5 gallery_text ${props.mode === 'dark' ? 'text-light' : 'text-dark'}`}>
        <h1>Catalyst Journey Gallery</h1>
        <p>Discover the Catalyst Journey Gallery, a vibrant tapestry of inspiration and innovation. Each exhibit unveils unique stories of catalysts, from transformative breakthroughs to personal growth narratives. Immerse yourself in this dynamic collection that celebrates resilience, creativity, and the pursuit of excellence.</p>
      </div>

      <div className="album">
        <div className="responsive-container-block bg">
          <div className="responsive-container-block img-cont">
            <img className="img" src="/assets/gal_4.jpeg" alt="Image 1" />
            <img className="img" src="/assets/gal_2.jpeg" alt="Image 2" />
            <img className="img img-last" src="/assets/gal_3.jpeg" alt="Image 3" />
            
          </div>
          <div className="responsive-container-block img-cont">
            <img className="img " src="/assets/gal_10.jpeg" alt="Image 4" />
            <img className="img " src="/assets/gal_5.jpeg" alt="Image 5" />
            <img className="img img-last" src="/assets/gal_7.png" alt="Image 6" />
          </div>
          <div className="responsive-container-block img-cont">
            <img className="img" src="/assets/gal_9.png" alt="Image 7" />
            <img className="img" src="/assets/gal_8.jpeg" alt="Image 8" />
            <img className="img img-last" src="/assets/gal_6.jpeg" alt="Image 9" />
            
          </div>
        </div>
      </div>       </>
    );
}