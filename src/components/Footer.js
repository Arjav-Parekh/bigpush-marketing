import React from 'react';

function Footer(){
    return(
        <>
        <div className="footer">
          <div className="row">   
            <div className="col-lg-6">
              <img src alt="" />
            </div>
            <div className="col-lg-2">
              <p>About</p>
            </div>
            <div className="col-lg-2">
              <p>Case Studies</p>
              <p>Resources</p>
            </div>
            <div className="col-lg-2 contact-privacy" >
              <p>Contact</p>
              <p>Privacy</p>
            </div>
          </div>
          <br />
          <hr />
          <br />
          <div className="row">
            <div className="col-lg-6 show">
              <p>© 2021 Big Push Marketing</p>
            </div>
            <div className="col-lg-6">
              <div className="social-links" >
                <i className="fab fa-facebook-f fa-x " style={{display: 'inline-block'}} />
                <i className="fab fa-instagram fa-x indi-social" style={{display: 'inline-block'}} />
                <i className="fab fa-linkedin-in fa-x indi-social" style={{display: 'inline-block'}} />
              </div>
            </div>
            <br/> <br/>
            <div className="col-lg-6 hide2">
              <p>© 2021 Big Push Marketing</p>
            </div>
          </div>
        </div>
        </>
    );
}

export default Footer