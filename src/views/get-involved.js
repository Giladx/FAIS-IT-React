import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './get-involved.css'

const GetInvolved = (props) => {
  return (
    <div className="get-involved-container1">
      <Helmet>
        <title>Get-Involved - FAIS IT</title>
        <meta
          name="description"
          content="Our mission is to educate and empower teenagers, by teenagers, to recognize, speak up and change anti-Semitic curriculum in their schools, community and online.  \n"
        />
        <meta property="og:title" content="Get-Involved - FAIS IT" />
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
          href="https://togthr-template-ahbaic-gilads-projects-6e9fe709.vercel.app/get-involved"
        />
      </Helmet>
      <section className="get-involved-thq-hero-elm">
        <Header
          text={
            <Fragment>
              <span className="get-involved-text10">About</span>
            </Fragment>
          }
          login={
            <Fragment>
              <span className="get-involved-text11">Get Involved</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="get-involved-text12">Resources</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="get-involved-text13">Get Involved</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="get-involved-text14">Need Help</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="get-involved-text15">Donate</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="get-involved-text16">Contact</span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="get-involved-text17">FAIS IT</span>
            </Fragment>
          }
          text8={
            <Fragment>
              <span className="get-involved-text18">News</span>
            </Fragment>
          }
          text61={
            <Fragment>
              <span className="get-involved-text19">FAIS IT</span>
            </Fragment>
          }
          register={
            <Fragment>
              <span className="get-involved-text20">Donate Now</span>
            </Fragment>
          }
        ></Header>
        <video
          src="https://videos.pexels.com/video-files/8088612/8088612-hd_2048_1080_25fps.mp4"
          loop
          muted
          poster="https://images.pexels.com/videos/8088612/pictures/preview-0.jpeg"
          preload="auto"
          autoPlay
          playsInline
          className="get-involved-video"
        ></video>
        <div className="get-involved-thq-hero-content-elm">
          <div className="get-involved-thq-header-container-elm">
            <div className="get-involved-thq-header-elm">
              <h1 className="get-involved-thq-heading-elm">
                <span>Get Involved</span>
                <br></br>
              </h1>
            </div>
            <p className="get-involved-thq-caption-elm">
              Our mission is to educate and empower teenagers, by teenagers, to
              recognize, speak up and change anti-Semitic curriculum in their
              schools, community and online.  
            </p>
          </div>
          <Link to="/contact" className="get-involved-navlink button">
            <span>Get Involved</span>
          </Link>
        </div>
      </section>
      <div className="get-involved-thq-body-elm">
        <div className="get-involved-container2">
          <div className="get-involved-container3">
            <Script
              html={`<script type="text/javascript" src="https://form.jotform.com/jsform/250776130124045"></script>`}
            ></Script>
          </div>
        </div>
        <span className="get-involved-text24">
          <span className="get-involved-text25">Volunteer Opportunities:</span>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="get-involved-text27">
            Join us in the fight against antisemitism! We are looking for
            passionate teens to help with advocacy, education, and event
            planning. Whether you want to lead a workshop, organize an event, or
            spread awareness on social media, there’s a place for you at
            FAIS-IT.
          </span>
          <br></br>
          <br></br>
          <span className="get-involved-text30">Advocacy Toolkit:</span>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="get-involved-text32">
            Our Advocacy Toolkit provides step-by-step guidance on how to
            effectively address antisemitism in your school. Learn how to gather
            evidence, approach school officials, and propose changes to the
            curriculum.
          </span>
        </span>
      </div>
      <Footer
        text={
          <Fragment>
            <span className="get-involved-text33">
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
            <span className="get-involved-text34">About</span>
          </Fragment>
        }
        text3={
          <Fragment>
            <span className="get-involved-text35">Contact</span>
          </Fragment>
        }
        text4={
          <Fragment>
            <span className="get-involved-text36">Get Involved</span>
          </Fragment>
        }
        text6={
          <Fragment>
            <span className="get-involved-text37">News</span>
          </Fragment>
        }
        text7={
          <Fragment>
            <span className="get-involved-text38">Articles</span>
          </Fragment>
        }
        text8={
          <Fragment>
            <span className="get-involved-text39">Blog</span>
          </Fragment>
        }
        text9={
          <Fragment>
            <span className="get-involved-text40">Privacy</span>
          </Fragment>
        }
        header={
          <Fragment>
            <span className="get-involved-text41">Organization</span>
          </Fragment>
        }
        text10={
          <Fragment>
            <span className="get-involved-text42">Terms</span>
          </Fragment>
        }
        text11={
          <Fragment>
            <span className="get-involved-text43">Legal</span>
          </Fragment>
        }
        text12={
          <Fragment>
            <span className="get-involved-text44">Press</span>
          </Fragment>
        }
        text13={
          <Fragment>
            <span className="get-involved-text45">LinkedIn</span>
          </Fragment>
        }
        text14={
          <Fragment>
            <span className="get-involved-text46">Twitter</span>
          </Fragment>
        }
        text15={
          <Fragment>
            <span className="get-involved-text47">Instagram</span>
          </Fragment>
        }
        text16={
          <Fragment>
            <span className="get-involved-text48">Facebook</span>
          </Fragment>
        }
        text17={
          <Fragment>
            <span className="get-involved-text49">TikTok</span>
          </Fragment>
        }
        text31={
          <Fragment>
            <span className="get-involved-text50">Donate</span>
          </Fragment>
        }
        text41={
          <Fragment>
            <span className="get-involved-text51">Need Help</span>
          </Fragment>
        }
        text61={
          <Fragment>
            <span className="get-involved-text52">FAIS IT</span>
          </Fragment>
        }
        header1={
          <Fragment>
            <span className="get-involved-text53">Extern</span>
          </Fragment>
        }
        header2={
          <Fragment>
            <span className="get-involved-text54">Social</span>
          </Fragment>
        }
        rootClassName="footerroot-class-name3"
      ></Footer>
    </div>
  )
}

export default GetInvolved
