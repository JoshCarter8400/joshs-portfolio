import React from "react";
import profilePic from "../../assets/img/correct-profile.jpg";

function About() {
  return (
    <main id="main">
      <section id="about" className="about">
        <div className="container">
          <div className="section-title">
            <h2>About</h2>
            <p>
              Full Stack Web Developer and Personal Trainer with a background in
              sales and customer service. I am skilled on both the front-end and
              back-end of development but I definitely enjoy the back-end
              technologies much more. I have strong problem-solving skills and
              communicate well within a team as I am open-minded to all ideas
              and solutions. I’m constantly seeking ways to improve myself and
              thinking of how to be helpful to those around me. You will get a
              person with an eagerness to learn and willingness to try new
              things. I will always give you an honest effort to put forth the
              best quality product possible.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
              <img src={profilePic} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
