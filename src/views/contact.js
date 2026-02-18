import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container1">
      <Helmet>
        <title>Contact - FAIS IT</title>
        <meta
          name="description"
          content="Our mission is to educate and empower teenagers, by teenagers, to recognize, speak up and change anti-Semitic curriculum in their schools, community and online.  \n"
        />
        <meta property="og:title" content="Contact - FAIS IT" />
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
          href="https://togthr-template-ahbaic-gilads-projects-6e9fe709.vercel.app/contact"
        />
      </Helmet>
      <section className="contact-thq-hero-elm">
        <Header
          text={
            <Fragment>
              <span className="contact-text10">About</span>
            </Fragment>
          }
          login={
            <Fragment>
              <span className="contact-text11">Get Involved</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="contact-text12">Resources</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="contact-text13">Get Involved</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="contact-text14">Need Help</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="contact-text15">Donate</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="contact-text16">Contact</span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="contact-text17">FAIS IT</span>
            </Fragment>
          }
          text8={
            <Fragment>
              <span className="contact-text18">News</span>
            </Fragment>
          }
          text61={
            <Fragment>
              <span className="contact-text19">FAIS IT</span>
            </Fragment>
          }
          register={
            <Fragment>
              <span className="contact-text20">Donate Now</span>
            </Fragment>
          }
        ></Header>
        <video
          src="https://videos.pexels.com/video-files/9050073/9050073-hd_2048_1080_25fps.mp4"
          loop
          muted
          poster="https://images.pexels.com/videos/9050073/pictures/preview-0.jpeg"
          preload="auto"
          autoPlay
          playsInline
          className="contact-video"
        ></video>
        <div className="contact-thq-hero-content-elm">
          <div className="contact-container2">
            <div className="contact-thq-header-container-elm">
              <div className="contact-thq-header-elm">
                <h1 className="contact-thq-heading-elm">
                  <span>Contact</span>
                  <br></br>
                </h1>
              </div>
              <p className="contact-thq-caption-elm">
                Our mission is to educate and empower teenagers, by teenagers,
                to recognize, speak up and change anti-Semitic curriculum in
                their schools, community and online.  
              </p>
            </div>
            <Link to="/contact" className="contact-navlink button">
              <span>Get Involved</span>
            </Link>
          </div>
          <div className="contact-container3">
            <div className="contact-container4">
              <Script
                html={`<script type="text/javascript" src="https://form.jotform.com/jsform/250776130124045"></script>`}
              ></Script>
            </div>
          </div>
        </div>
      </section>
      <div className="contact-thq-body-elm"></div>
      <Footer
        text={
          <Fragment>
            <span className="contact-text24">
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
            <span className="contact-text25">About</span>
          </Fragment>
        }
        text3={
          <Fragment>
            <span className="contact-text26">Contact</span>
          </Fragment>
        }
        text4={
          <Fragment>
            <span className="contact-text27">Get Involved</span>
          </Fragment>
        }
        text6={
          <Fragment>
            <span className="contact-text28">News</span>
          </Fragment>
        }
        text7={
          <Fragment>
            <span className="contact-text29">Articles</span>
          </Fragment>
        }
        text8={
          <Fragment>
            <span className="contact-text30">Blog</span>
          </Fragment>
        }
        text9={
          <Fragment>
            <span className="contact-text31">Privacy</span>
          </Fragment>
        }
        header={
          <Fragment>
            <span className="contact-text32">Organization</span>
          </Fragment>
        }
        text10={
          <Fragment>
            <span className="contact-text33">Terms</span>
          </Fragment>
        }
        text11={
          <Fragment>
            <span className="contact-text34">Legal</span>
          </Fragment>
        }
        text12={
          <Fragment>
            <span className="contact-text35">Press</span>
          </Fragment>
        }
        text13={
          <Fragment>
            <span className="contact-text36">LinkedIn</span>
          </Fragment>
        }
        text14={
          <Fragment>
            <span className="contact-text37">Twitter</span>
          </Fragment>
        }
        text15={
          <Fragment>
            <span className="contact-text38">Instagram</span>
          </Fragment>
        }
        text16={
          <Fragment>
            <span className="contact-text39">Facebook</span>
          </Fragment>
        }
        text17={
          <Fragment>
            <span className="contact-text40">TikTok</span>
          </Fragment>
        }
        text31={
          <Fragment>
            <span className="contact-text41">Donate</span>
          </Fragment>
        }
        text41={
          <Fragment>
            <span className="contact-text42">Need Help</span>
          </Fragment>
        }
        text61={
          <Fragment>
            <span className="contact-text43">FAIS IT</span>
          </Fragment>
        }
        header1={
          <Fragment>
            <span className="contact-text44">Extern</span>
          </Fragment>
        }
        header2={
          <Fragment>
            <span className="contact-text45">Social</span>
          </Fragment>
        }
        rootClassName="footerroot-class-name1"
      ></Footer>
    </div>
  )
}

export default Contact
