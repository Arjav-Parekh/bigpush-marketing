import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Business from './images/business.png';
import Schedule from './images/schedule.png'


function About(){
    return(
        <>
        <Header color="#ACF29D" />

        <div className="title-container" style={{textAlign: 'center'}}> 
          <h1>Sustainability Is In Our Nature</h1>
          <p>We are a paid advertising agency that is mostly performance-based and we solely work with companies that are conscious of the environmental impact they have and are continuously trying to minimize their negative impact and/or make more of a positive impact on our environment.</p>
          <br />
          <button className="join-button">Join Now</button>
        </div>
        <div className="business-container" style={{textAlign: 'center'}}>
          <h1>We Are Business Success Experts! </h1>
          <p>Welcome to Big Push Marketing Business Solutions. We’re the all-in-one business partner that you’ve been looking for!</p>
          <img src={Business} alt="" />
          <br />
          <div className="row" >
            <div className="col-lg-6">
              <h3>WHAT SETS US APART</h3>
              <br />
              <p>Our experienced team of business strategists is dedicated to transforming your goals, ideas, and dreams into focused business strategies. We then translate these strategies into actionable and integrated solutions. Everything we do is aimed at achieving tangible results and so we make sure that happens.</p>
            </div>
            <div className="col-lg-6">
              <h3>HOW WE WORK</h3>
              <br />
              <p>We don’t just offer off-the-rack, conventional solutions. We have a unique approach to how we execute our solutions. We examine your problem, issue, or situation through our experienced business lens and identify opportunities for change and growth.</p>
            </div>
          </div>
        </div>
        <div className="values-container">
          <h1>Our Values</h1>
          <div className="row" >
            <div className="col-lg-6 cost-indi val-ind" style={{marginTop:"0"}}>
              <div className="circle-blue" />
              <br />
              <h5>INTEGRITY</h5>
              <p>We say what we mean and we mean what we say. We keep our word and honour our commitments.</p>
            </div> 
            <div className="col-lg-6 cost-indi val-ind">
              <div className="circle-blue" />
              <br />
              <h5>VALUE CREATION</h5>
              <p>We strive to create value through all our solutions. Value creation is the essence of everything we do.</p>
            </div> 
            <div className="col-lg-6 cost-indi value-cols val-ind">
              <div className="circle-blue" />
              <br />
              <h5>CUSTOMER FOCUS</h5>
              <p>Our solutions aren’t about us, they’re about you. We tailor-make our strategies to suit your needs.</p>
            </div> 
            <div className="col-lg-6 cost-indi value-cols val-ind">
              <div className="circle-blue" />
              <br />
              <h5>TRANSPARENCY</h5>
              <p>Transparency is key</p>
            </div> 
          </div>
        </div>
        <div className="schedule-container" style={{backgroundColor: 'white'}}>
          <h1 className="schedule-h1">Interested To Get Started?</h1>
          <div className="row">
            <div className="col-lg-6 left-schedule-col" style={{marginTop: 'auto', marginBottom: 'auto'}}>
              <h2>Let's Talk</h2>
              <p>Reach out to learn more, and get the conversation started.</p>
            </div>
            <div className="col-lg-6">
              <img src={Schedule} alt=""  />
            </div>
          </div>
        </div>
        <Footer />
        </>
    );
}

export default About;