import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Sample1 from './images/videosample1.png';
import Sample2 from './images/videosample2.png';
import RightArrow from './images/rightarrow.png';


function CaseStudy(){
    return(
        <>
        <Header color="rgba(48, 191, 217, 0.32)" />
        <div className="title-container" style={{textAlign: 'center', background: 'rgba(48, 191, 217, 0.32)'}} data-aos="fade-up" data-aos-delay="50" data-aos-duration="1200"> 
          <h1 className="case-study-title"> Predictable, Efficient &amp; Profitable</h1>
          <p>How we can Predictably, Efficiently and of course Profitably scale our e-commerce clients into multiple 6 &amp; 7 figures giants.</p>
          <br /> <br />
          <img src={Sample1} alt=""  />
        </div>
        <div className="video-continue-container">
          <p data-aos="fade-right" data-aos-delay="50" data-aos-duration="1200">98.6% of e-commerce brand that successfully implements the frameworks <br /> explained in this video will add an extra 10k-100k to their MRR</p>
          <br />
          <button className="join-button" style={{fontWeight: 600}} data-aos="fade-left" data-aos-delay="50" data-aos-duration="1200">Let's Talk</button>
        </div>
        <div className="why-container" style={{backgroundColor: '#fff',marginTop:"20px"}}>
          <h1 data-aos="fade-up" data-aos-delay="50" data-aos-duration="1200">Fiercely Ramping Isn't Brain Surgery</h1>
          <p data-aos="fade-up" data-aos-delay="50" data-aos-duration="1200">And it can be achieved, profitably, in 3 months or less.</p>
          <div className="row why-row">
            <div className="col-lg-6" data-aos="fade-right" data-aos-delay="50" data-aos-duration="1200">
              <img src alt="" />
            </div> 
            <div className="col-lg-6 text-col" data-aos="fade-left" data-aos-delay="50" data-aos-duration="1200">
              <h4>We Only Earn Money When You Do!</h4>
              <p>Big Push Marketing's mission is to become earths most results driven Ecomm and Info Product marketing agency and to erase the 'I've been burnt in the past' conversation that all founders have. So we've almost completely removed the risk entirely for our clients. We ask a minimal service fee to make sure we are both committed.</p>
              <p>The rest is 100% performance based, that means your succes is our succes.</p>
            </div>
          </div>
          <div className="row why-row">
            <div className="col-lg-6 text-col" data-aos="fade-right" data-aos-delay="50" data-aos-duration="1200">
              <h4>Become Your Industry Giants</h4>
              <p>We turn our clients into industry leaders and industry Giants. When you can confidently generate a CPA (cost per acquisition)/CPP (cost per purchase) for a price that makes sense to your specific margins and you couple that with a scaling strategy that converts, you too can become your industry Giants. </p>
            </div>
            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="50" data-aos-duration="1200">
              <img src alt="" />
            </div>
          </div>
        </div>
        <div className="flow-chart-video-container" style={{textAlign: 'center'}}>
          <h1>$200k MRR Bulletproof Scaling Flow Chart</h1>
          <br /><br />
          <img src={Sample2} alt=""  />
          <br /><br /><br /><br />
          <p>Not sure where to begin? Contact us and we'll help you</p>
          <br />
          <button className="join-button" style={{fontWeight: 600}}>Let's Talk</button>
        </div>
        <div className="who-container">
          <h1 data-aos="fade-up" data-aos-delay="50" data-aos-duration="1200">Who Is This For?</h1>
          <br /><br />
          <ul style={{listStyleImage: `url(${RightArrow})` }}> 
            <li data-aos="fade-left" data-aos-delay="50" data-aos-duration="1200">Founders who feel as though they are plateauing and can't break through the inflection point.</li>
            <li data-aos="fade-left" data-aos-delay="50" data-aos-duration="1200">Founders who aren't experiencing a healthy MoM increase year round (or feel as though they could have a higher MoM growth rate). </li>
            <li data-aos="fade-left" data-aos-delay="50" data-aos-duration="1200">Founders that are tired of working with agencies that promise the world and deliver nothing.</li>
            <li data-aos="fade-left" data-aos-delay="50" data-aos-duration="1200">Founders that want to actually get to 1M-5M ARR through unmatched sales funnels and high level paid traffic.</li>
            <li data-aos="fade-left" data-aos-delay="50" data-aos-duration="1200">Founders who are deeply seeking to become the industry leader and flatten competition.</li>
          </ul>
        </div>
        <Footer />
        </>
    );
}

export default CaseStudy;