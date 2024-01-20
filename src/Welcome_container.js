import React from "react";
import "./Welcome_container.css";
export function Welcome_box(props) {
    return (
        <>
           <div class="container-fluid my-4 mb-5">
  <div class="row flex-md-row flex-column g-3">
    <div class={`col-md-6 welcome ${props.mode === 'dark' ? 'text-light' : 'text-dark'}`}
 >
        <h2>{props.heading}</h2>
        <p>
        <strong>Career Catalyst E-Library:</strong> Your free resource hub for JEE and NEET prep. We break financial barriers, providing quality materials for all. Beyond an e-library, we guide careers, offering support to less privileged students. Join us in redefining e-learning and empowering minds for a brighter future.
        Empowering minds is our mission. We're not just providing materials; we're fostering a community where education is a catalyst for positive change. Join us in redefining the learning landscape. At Career Catalyst, it's more than preparation; it's a transformative experience toward a brighter and equitable educational future.Together, let's redefine the educational landscape and pave the way for a brighter and more equitable future.
        </p>
        
    </div>
    <div class="col-md-6">
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/assets/e-lib-2.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption  d-md-block">
        <h5><strong>Dive into the World of Wisdom: Each Book is a Journey Waiting to Unfold.</strong></h5>
        
      </div>
    </div>
    <div class="carousel-item">
      <img src="/assets/e-lib-1.webp" class="d-block w-100" alt="..."/>
      <div class="carousel-caption  d-md-block">
        <h5><strong>Open a Book, Open Your Mind: Where Learning Knows No Bounds.</strong></h5>
       
      </div>
    </div>
    <div class="carousel-item">
      <img src="/assets/e-lib-3.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption  d-md-block">
        <h5><strong>Words Illuminate the Path of Learning: Navigate Your Journey with Books.</strong></h5>
        
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  </div>
</div>

        </>
    );
}