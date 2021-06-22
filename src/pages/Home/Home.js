import React from 'react';
import './Home.css';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Gorilla from './images/gorilla.png';
import Braun from './images/Braun 1.png';
import Claushaler from './images/claushaler 1.png';
import Pocketbook from './images/poketbook 1.png';
import Salton from './images/Salton 1.png';
import Schedule from './images/schedule.png';
import Cost1 from './images/cost1.png';
import Cost2 from './images/cost2.png';
import Cost3 from './images/cost3.png';
import Cost4 from './images/cost4.png';
import Cost5 from './images/cost5.png';
import Cost6 from './images/cost6.png';
import Foundation from './images/foundation.png'

function Home(){
    return(
        <>
        <Header color="#F5F5F5"/>
        <div className="opening-container" style={{backgroundColor: '#F5F5F5'}}>
          <div className="row setting " >
            <div className="col-lg-6 banner-left-col" data-aos="fade-right" data-aos-delay="100" data-aos-duration="800">
              <h1>Marketing That Sustains</h1>
              <p>We help e-commerce businesses produce breathtaking ROI via paid advertising so that they can drastically scale up.</p>
              <br />
              <button className="join-button">Join Now</button>
            </div>
            <div className="col-lg-6 banner-img-col">
              <img src={Gorilla} alt="" />
            </div>
          </div>
        </div>
        <div className="message-container" data-aos="fade-up" data-aos-delay="0" data-aos-duration="800">
          <div className="row setting">
            <div className="col-md-4 message-indi" >
            <div className="centering-div">
              <div className="circle">
              </div>
              <h3>STOP WASTING MONEY ON INEFFECTIVE ADS</h3>
            </div>
            </div>
            <div className="col-md-4 message-indi">
            <div className="centering-div">
              <div className="circle">
              </div>
              <h3>MAKE YOUR <br/> AD BUDGET COUNT</h3>
            </div>
            </div>
            <div className="col-md-4 message-indi">
            <div className="centering-div">
              <div className="circle">
              </div>
              <h3>SPEAK TO OUR <br/> TEAM TODAY</h3>
            </div>
            </div>
          </div>
        </div>
        <br />
        <div className="company-logos">
          <div className="logo-row">
            <img src={Braun} alt="" style={{display: 'inline-block'}} data-aos="fade-right" data-aos-delay="0" data-aos-duration="800" />
            <img src={Salton} alt="" style={{display: 'inline-block'}} data-aos="fade-right" data-aos-delay="0" data-aos-duration="800"/>
            <img src={Claushaler} alt="" style={{display: 'inline-block'}} data-aos="fade-left" data-aos-delay="0" data-aos-duration="800" />
            <img src={Pocketbook} alt="" style={{display: 'inline-block'}} data-aos="fade-left" data-aos-delay="0" data-aos-duration="800" />
          </div>
        </div>
        <div className="cost-effect-container">
          <h1>Cost of Not Using Effective Facebook &amp; Instagram Ad Campaigns</h1>
         
          <div className="row setting" style={{textAlign: 'center'}}>
            <div className="col-lg-4 cost-indi" data-aos="fade-right" data-aos-delay="0" data-aos-duration="800">
              <div className="circle-blue" > <img src={Cost1} style={{marginTop:"20%",height:"60%"}} /></div>
              <br />
              <h5>LOSING (ABANDONED CART) CUSTOMERS</h5>
              <br />
              <p>On average for every 100 people that add something to their cart only 23 ends up buying, which means that 77% of potential business is lost when not being effectively retargeted</p>
            </div>  
            <div className="col-lg-4 cost-indi" data-aos="fade-up" data-aos-delay="0" data-aos-duration="800">
            <div className="circle-blue" > <img src={Cost2} style={{marginTop:"20%",height:"60%"}} /></div>
              <br />
              <h5>WASTING YOUR <br /> AD SPEND</h5>
              <br />
              <p>If your not testing audience, creatives and copy properly I guarantee your leaving money on the table. 9/10 companies I look at are missing out.</p>
            </div>  
            <div className="col-lg-4 cost-indi" data-aos="fade-left" data-aos-delay="0" data-aos-duration="800">
            <div className="circle-blue" > <img src={Cost3} style={{marginTop:"20%",height:"60%"}} /></div>
              <br />
              <h5>NOT GETTING THE <br /> RESULTS YOU DESERVE</h5>
              <br />
              <p>You put in so much work to create a great product with an amazing service, but without the perfect ads to match it, you won't get the results you deserve.</p>
            </div>  
          </div>
          <button className="join-button" style={{marginTop: '80px'}}>Join Now</button>
        </div>
        <div className="why-container">
          <h1>Why Use Facebook & Instagram Ads?</h1>
          <p>You can achieve predictable growth that is unimaginable on any other platform.</p>
          <div className="row why-row">
            <div className="col-lg-6">
              <img src alt="" />
            </div>
            <div className="col-lg-6 text-col" data-aos="fade-left" data-aos-delay="0" data-aos-duration="800">
              <h4>If you can name a better e-commerce advertising platform we will change our business model</h4>
              <p>In the past marketing has always been quite a gamble, not knowing what to expect, having to invest a lot of money beforehand, and not being able to track the results. At Big Push Marketing, our mission is to be the most result-driven marketing agency for e-commerce brands. </p>
              <p>"There is no medium out there like Facebook Ads. It allows you to find/match your perfect audience with the most effective ad for a ridiculously low budget with the ability to rapidly scale"</p>
            </div>
          </div>
          <div className="row why-row">
            <div className="col-lg-6 text-col" data-aos="fade-right" data-aos-delay="0" data-aos-duration="800">
              <h4>The predictable and profitable money machine that never stops</h4>
              <p>Any business that doesn't have a system where they can confidently spend $1 and get $2, $3, $5, $7, $10 in return, is on a surefire route to NOT hit $1M - $10M. At Big Push Marketing we create a customer acquisition machine where $1 goes in and $4, $5, $10, $15 comes out.</p>
              <p>Equipped with this level of certainty, adding $100k-$1M to your bottom line is a simple by-product of the machine. </p>
            </div>
            <div className="col-lg-6">
              <img src alt="" />
            </div>
          </div>
        </div>
        <div className="gradient-container">
          <h1>Join The List Of Successful Ecomm Founders</h1>
          <p>You'll generate a tangible, profitable, and measurable return on ad spend.</p>
          <br /><br />
          <button className="join-button">Contact</button>
          <div className="row join-row">
            <div className="col-lg-6 join-col" data-aos="fade-right" data-aos-delay="0" data-aos-duration="800">
              <h1>$1.2M</h1>
              <h6>TOTAL ADSPEND</h6>
            </div>
            <div className="col-lg-6 join-col" data-aos="fade-left" data-aos-delay="0" data-aos-duration="800">
              <h1>5.17x</h1>
              <h6>AVERAGE RETURN <br /> ON ADSPEND</h6>
            </div>
          </div>
        </div>
        <div className="cost-effect-container" style={{marginTop:"120px"}}>
          <h1>How Do you Get Started?</h1>
         
          <div className="row setting" style={{textAlign: 'center'}}>
            <div className="col-lg-4 cost-indi" data-aos="fade-right" data-aos-delay="50" data-aos-duration="1200">
            <div className="circle-blue" > <img src={Cost4} style={{marginTop:"20%",height:"60%"}} /></div>
              <br />
              <h5>SCHEDULE A FREE <br /> CONSULTATION</h5>
              <br />
              <p>Schedule a call so we can uncover the leaks within your current marketing efforts and identify the needed steps to propel your business to the next level</p>
            </div>  
            <div className="col-lg-4 cost-indi" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1200">
            <div className="circle-blue" > <img src={Cost5} style={{marginTop:"20%",height:"60%"}} /></div>
              <br />
              <h5>60 MIN AUTOMATED <br /> ON-BOARDING</h5>
              <br />
              <p>If we conclude that we can make this a tremendously profitable partnership we send you our fully automated 60 minute on-boarding process</p>
            </div>  
            <div className="col-lg-4 cost-indi" data-aos="fade-left" data-aos-delay="50" data-aos-duration="1200">
            <div className="circle-blue" > <img src={Cost6} style={{marginTop:"20%",height:"60%"}} /></div>
              <br />
              <h5>GET THE RESULTS YOUR <br /> BUSINESS DESERVES</h5>
              <br />
              <p>Receive a weekly report and watch your business get the results it deserves.</p>
            </div>  
          </div>
          <button className="join-button" style={{marginTop: '80px'}}>Join Now</button>
        </div>
        <div className="step-process-container">
          <div className="row ">
            <div className="col-lg-6 step-col">
              <h1>Our 3 Step Process</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nibh non tincidunt ante amet. Dictumst tempus in quis purus a, parturient sed. Nunc et aliquam sagittis, convallis.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nibh non tincidunt ante amet.</p>
              <br />
              <button className="talk-button">Let's Talk</button>    
            </div> 
            <div className="col-lg-6 step-col-one">
              <br /><br />
              <div className="circle-blue" style={{margin:"0", textAlign:"center"}} > <img src={Foundation} style={{marginTop:"20%",height:"60%"}} /></div>
              <br />
              <h5>Foundational C, A, R</h5>
              <p>Before we spend $1 on ads, we undergo an 
                operation called Foundational Copywriting, Analysis, and Research (C, A, R). This enables us to gain a deep-rooted understanding of your ideal customer, industry, competitors, and true metrics. In addition, during this phase, we analyze your sales processes to identify any holes that may be prevalent and we look to instantly fill those in. Thus, increasing your sales process conversion rate (high return on ad spend). </p>
            
            
            </div>  
          </div>
        </div>
        <div className="team-container">
          <h1>Meet The Team</h1>
          <p>Founded by Nick and Lauren. We have assembled a team of specialists for every aspect that leads to the success of social media advertising.
            Together we have over 20+ years of experience in the space.
            With a majestic copywriter and an expert media buyer we make for a small yet fiercely passionate team that works closely with all our clients. </p>
          <div className="row">
            <div className="col-lg-6"> 
              <img src alt="" style={{height: '340px', width: 'auto'}} />
              <h2>Lauren van Es</h2>
              <h3>Co-Founder</h3>
            </div>
            <div className="col-lg-6">
              <img src alt="" style={{height: '340px', width: 'auto'}} />
              <h2>Nick Hansen</h2>
              <h3>Co-Founder</h3>
            </div>
          </div>
        </div>
        <div className="schedule-container">
          <h1>Schedule A Free Consultation Today</h1>
     
          <div className="row">
          <div className="col-lg-6 hide">
              <img src={Schedule} alt=""/>
            </div>
            <div className="col-lg-6 left-schedule-col">
              <h2>Who This is For</h2>
              <ul>
                <li data-aos="fade-right" data-aos-delay="0" data-aos-duration="800">Business owners who feel as though they have hit a glass ceiling and want to smash through it.
                </li>
                <br />
                <li data-aos="fade-right" data-aos-delay="0" data-aos-duration="800">Businesses who want a predictable and profitable money machine that runs 24/7.
                </li>
                <br />
                <li data-aos="fade-right" data-aos-delay="0" data-aos-duration="800">Businesses that are tired of working with agencies that promise the world and deliver nothing.</li><br />
                <li data-aos="fade-right" data-aos-delay="0" data-aos-duration="800">Businesses that want severe scale through paid traffic and unmatched sales processes.</li><br />
                <li data-aos="fade-right" data-aos-delay="0" data-aos-duration="800">Businesses who want to make sure that they are getting everything out of their marketing budget by ensuring their current advertising system and sales funnels are operating at the highest level.
                </li><br />
                <li data-aos="fade-right" data-aos-delay="0" data-aos-duration="800">Businesses looking to understand their increased revenue potential with Facebook/Instagram ads &amp; conversion rate optimisation.</li>
              </ul>
            </div>
            <div className="col-lg-6 show">
              <img src={Schedule} alt=""  />
            </div>
          </div>
        </div>
        <div className="inquiry-container">
          <h1>Have A General Inquiry?</h1>
          <p>Would you like to speak to our team? <br /> Contact us: <br/> lauren@bpmarketingagency.com or nick@bpmarketingagency.com</p>
          <br />
          <button className="join-button">Let's Talk</button>
        </div>
        <Footer />
        </>
    )
}

export default Home;