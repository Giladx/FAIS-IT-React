import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './news.css'

const News = (props) => {
  return (
    <div className="news-container1">
      <Helmet>
        <title>News - FAIS IT</title>
        <meta
          name="description"
          content="Our mission is to educate and empower teenagers, by teenagers, to recognize, speak up and change anti-Semitic curriculum in their schools, community and online.  \n"
        />
        <meta property="og:title" content="News - FAIS IT" />
        <meta
          property="og:description"
          content="Our mission is to educate and empower teenagers, by teenagers, to recognize, speak up and change anti-Semitic curriculum in their schools, community and online.  \n"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/8044f0cb-2f2e-424b-b592-50f4b4990f60/e4cab4ba-abdc-4395-87c7-fb65f74fdd7c?org_if_sml=1&amp;force_format=original"
        />
        <link
          rel="canonical"
          href="https://togthr-template-ahbaic-gilads-projects-6e9fe709.vercel.app/news"
        />
      </Helmet>
      <section className="news-thq-hero-elm">
        <Header
          text={
            <Fragment>
              <span className="news-text10">About</span>
            </Fragment>
          }
          login={
            <Fragment>
              <span className="news-text11">Get Involved</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="news-text12">Resources</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="news-text13">Get Involved</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="news-text14">Need Help</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="news-text15">Donate</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="news-text16">Contact</span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="news-text17">FAIS IT</span>
            </Fragment>
          }
          text8={
            <Fragment>
              <span className="news-text18">News</span>
            </Fragment>
          }
          text61={
            <Fragment>
              <span className="news-text19">FAIS IT</span>
            </Fragment>
          }
          register={
            <Fragment>
              <span className="news-text20">Donate Now</span>
            </Fragment>
          }
        ></Header>
        <video
          src="https://videos.pexels.com/video-files/9564066/9564066-hd_2048_1080_25fps.mp4"
          loop
          muted
          poster="https://images.pexels.com/videos/8088612/pictures/preview-0.jpeg"
          preload="auto"
          autoPlay
          playsInline
          className="news-video"
        ></video>
        <div className="news-thq-hero-content-elm">
          <div className="news-thq-header-container-elm">
            <div className="news-thq-header-elm">
              <h1 className="news-thq-heading-elm">
                <span>In The News</span>
                <br></br>
              </h1>
            </div>
            <p className="news-thq-caption-elm">
              Our mission is to educate and empower teenagers, by teenagers, to
              recognize, speak up and change anti-Semitic curriculum in their
              schools, community and online.  
            </p>
          </div>
          <Link to="/contact" className="news-navlink button">
            <span>Get Involved</span>
          </Link>
        </div>
      </section>
      <div className="news-thq-body-elm">
        <div className="news-container2">
          <a
            href="https://www.msn.com/en-us/news/world/massachusetts-parents-say-public-school-teachers-unionsowing-anti-israel-bias/ar-BB1kKJsa"
            target="_blank"
            rel="noreferrer noopener"
            className="news-link1"
          >
            <span>
              Massachusetts parents say public school teachers union sowing
              anti-Israel bias
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
          </a>
          <a
            href="https://jewishjournal.org/2024/05/30/marblehead-high-student-peacefully-resolves-contested-curriculum-on-israel/"
            target="_blank"
            rel="noreferrer noopener"
            className="news-link2"
          >
            <span>
              Marblehead High student peacefully resolves contested curriculum
              on Israel - Jewish Journal
            </span>
            <br></br>
          </a>
          <a
            href="https://www.masc.org/public-policy-updates-march-2024-board-of-elementary-and-secondary-education/"
            target="_blank"
            rel="noreferrer noopener"
            className="news-link3"
          >
            <span>
              Public Policy Updates: March 2024 Board of Elementary and
              Secondary Education - masc.org
            </span>
            <br></br>
          </a>
          <a
            href="https://www.jns.org/summit-focuses-on-rising-jew-hatred-in-k-12-schools/"
            target="_blank"
            rel="noreferrer noopener"
            className="news-link4"
          >
            <span>
              Summit focuses on rising Jew-hatred in K-12 schools - JNS.org
            </span>
            <br></br>
          </a>
          <a
            href="https://www.lappinfoundation.org/wp-content/uploads/2024/04/Speakers.pdf"
            target="_blank"
            rel="noreferrer noopener"
            className="news-link5"
          >
            <span>Speakers.pdf</span>
            <br></br>
          </a>
          <a
            href="https://www.youtube.com/watch?v=ggdIt5ZnjvM"
            target="_blank"
            rel="noreferrer noopener"
            className="news-link6"
          >
            <span>SC Meets-Thursdays at 7-RECURRING</span>
            <br></br>
          </a>
          <a
            href="https://www.dropbox.com/scl/fi/2hz7w7y48h4j4ratun30s/US-National-Strategy-to-Counter-Antisemitism-in-K-12-Schools.mp4?rlkey=kczy0nhx4tnz5hznf618jl7u9&amp;e=2&amp;dl=0"
            target="_blank"
            rel="noreferrer noopener"
            className="news-link7"
          >
            <span>
              US National Strategy to Counter Antisemitism in K-12 Schools.mp4
            </span>
            <br></br>
          </a>
        </div>
        <div className="news-container3">
          <img
            alt="image"
            src="/9853e976-0f12-4e8f-9a9b-5191fd8bdc31%20(1)%20(2)-1500w.jpg"
            className="news-image1"
          />
          <img
            alt="image"
            src="/img_6708%20(2)-1500w.jpg"
            className="news-image2"
          />
          <img
            alt="image"
            src="/img_4488%20(3)-1500w.jpg"
            className="news-image3"
          />
          <img
            alt="image"
            src="/b4e3c8a7-3773-4825-9da3-3c49db25b915%20(2)%20(2)-1500w.jpg"
            className="news-image4"
          />
        </div>
      </div>
      <Footer
        text={
          <Fragment>
            <span className="news-text38">
              © 2025 FAIS IT
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        text2={
          <Fragment>
            <span className="news-text39">About</span>
          </Fragment>
        }
        text3={
          <Fragment>
            <span className="news-text40">Contact</span>
          </Fragment>
        }
        text4={
          <Fragment>
            <span className="news-text41">Get Involved</span>
          </Fragment>
        }
        text6={
          <Fragment>
            <span className="news-text42">News</span>
          </Fragment>
        }
        text7={
          <Fragment>
            <span className="news-text43">Articles</span>
          </Fragment>
        }
        text8={
          <Fragment>
            <span className="news-text44">Blog</span>
          </Fragment>
        }
        text9={
          <Fragment>
            <span className="news-text45">Privacy</span>
          </Fragment>
        }
        header={
          <Fragment>
            <span className="news-text46">Organization</span>
          </Fragment>
        }
        text10={
          <Fragment>
            <span className="news-text47">Terms</span>
          </Fragment>
        }
        text11={
          <Fragment>
            <span className="news-text48">Legal</span>
          </Fragment>
        }
        text12={
          <Fragment>
            <span className="news-text49">Press</span>
          </Fragment>
        }
        text13={
          <Fragment>
            <span className="news-text50">LinkedIn</span>
          </Fragment>
        }
        text14={
          <Fragment>
            <span className="news-text51">Twitter</span>
          </Fragment>
        }
        text15={
          <Fragment>
            <span className="news-text52">Instagram</span>
          </Fragment>
        }
        text16={
          <Fragment>
            <span className="news-text53">Facebook</span>
          </Fragment>
        }
        text17={
          <Fragment>
            <span className="news-text54">TikTok</span>
          </Fragment>
        }
        text31={
          <Fragment>
            <span className="news-text55">Donate</span>
          </Fragment>
        }
        text41={
          <Fragment>
            <span className="news-text56">Need Help</span>
          </Fragment>
        }
        text61={
          <Fragment>
            <span className="news-text57">FAIS IT</span>
          </Fragment>
        }
        header1={
          <Fragment>
            <span className="news-text58">Extern</span>
          </Fragment>
        }
        header2={
          <Fragment>
            <span className="news-text59">Social</span>
          </Fragment>
        }
        rootClassName="footerroot-class-name7"
      ></Footer>
    </div>
  )
}

export default News
