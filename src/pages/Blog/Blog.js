import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BlogSample1 from "./blog1.png";

function Blog() {
  return (
    <>
      <Header color="#F5F5F5" />
      <div style={{ backgroundColor: "#F5F5F5" }}>
        <div
          className="blog-title-container"
          style={{ backgroundColor: "#F5F5F5", textAlign: "center" }}
        >
          <h1 style={{ color: "#02345C" }}>Our Blog</h1>
        </div>
        <br />
        <br />
        <div
          className="row blog-title-container-row"
          style={{ overflowX: "scroll" }}
        >
          <div className="col-2">
            <p>ALL</p>
          </div>
          <div className="col-2">
            <p>MARKETING</p>
          </div>
          <div className="col-2">
            <p style={{ width: "max-content" }}>SOCIAL MEDIA MARKETING</p>
          </div>
          <div className="col-2">
            <p style={{ marginLeft: "40px" }}>PRODUCTIVITY</p>
          </div>
          <div className="col-2">
            <p>BUSINESS</p>
          </div>
          <div className="col-2">
            <p style={{ width: "max-content" }}>MARKETING TRENDS</p>
          </div>
        </div>

        <div className="recent-container" style={{ overflowX: "scroll" }}>
          <h3 style={{ display: "inline-block" }}>Recent</h3>{" "}
          <span style={{ marginLeft: "20px", color: "#4d4d4d" }}>View All</span>
          <br />
          <br />
          <div className="row" style={{ width: "1200px", overflowX: "scroll" }}>
            <div className="col">
              <div className="blog-card">
                <img src={BlogSample1} alt="" width="270px" />
                <h6 style={{ color: "#05cc79" }}>MARKETING</h6>
                <p>
                  How to use Google Calender: 21 features that’ll make you more
                  productive
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "#4d4d4d",
                    letterSpacing: "0.14em",
                  }}
                >
                  5 MAY 2021
                </p>
              </div>
            </div>
            <div className="col">
              <div className="blog-card">
                <img src={BlogSample1} alt="" width="270px" />
                <h6 style={{ color: "#05cc79" }}>MARKETING</h6>
                <p>
                  How to use Google Calender: 21 features that’ll make you more
                  productive
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "#4d4d4d",
                    letterSpacing: "0.14em",
                  }}
                >
                  5 MAY 2021
                </p>
              </div>
            </div>
            <div className="col">
              <div className="blog-card">
                <img src={BlogSample1} alt="" width="270px" />
                <h6 style={{ color: "#05cc79" }}>MARKETING</h6>
                <p>
                  How to use Google Calender: 21 features that’ll make you more
                  productive
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "#4d4d4d",
                    letterSpacing: "0.14em",
                  }}
                >
                  5 MAY 2021
                </p>
              </div>
            </div>
            <div className="col">
              <div className="blog-card">
                <img src={BlogSample1} alt="" width="270px" />
                <h6 style={{ color: "#05cc79" }}>MARKETING</h6>
                <p>
                  How to use Google Calender: 21 features that’ll make you more
                  productive
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "#4d4d4d",
                    letterSpacing: "0.14em",
                  }}
                >
                  5 MAY 2021
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Blog;
