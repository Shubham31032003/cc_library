import React from "react";
import "./message_from_founder.css"

export function MessageFromFounder(props) {
    return (
        <>
              <div className="container-fluid my-4 mb-5">
      <div className="row flex-md-row flex-column g-3">
        <div className={`col-md-6 message_from_founder ${props.mode === 'dark' ? 'text-light' : 'text-dark'}`}>
            <h1>Message From Founder</h1>
          <p>Hello, I'm Shubham Purwar, the proud founder of Career Catalyst, and I'm incredibly excited to share some fantastic news with you all. The launch of the Career Catalyst Library, a project that holds a special place in my heart.The Career Catalyst Library is my way of giving back a little to my mentor and instructor <strong>"Mr. Suneel Nayak Sir"</strong> ,community and supporting the educational aspirations of our youth. It's an initiative that offers free access to a wealth of educational content, ensuring that <strong>Financial constraints never stand in the way of knowledge and growth.</strong></p>
        </div>
        <div className="col-md-6">
          <div className="embed-responsive embed-responsive-16by9" style={{ maxHeight: '500px', maxWidth: '100%' }}>
            <iframe
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/qmERTJrYjPc?si=ncR6yOXP01Jy5Ke-"
              allowFullScreen
              style={{ width: '100%', height: '320px', minWidth: '300px', minHeight: '200px' }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
        </>
    );
}
