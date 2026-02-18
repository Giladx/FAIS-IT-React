import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './about.css'

const About = (props) => {
  return (
    <div className="about-container1">
      <Helmet>
        <title>About - FAIS IT</title>
        <meta
          name="description"
          content="Our mission is to educate and empower teenagers, by teenagers, to recognize, speak up and change anti-Semitic curriculum in their schools, community and online.  \n"
        />
        <meta property="og:title" content="About - FAIS IT" />
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
          href="https://togthr-template-ahbaic-gilads-projects-6e9fe709.vercel.app/about"
        />
      </Helmet>
      <section className="about-thq-hero-elm">
        <Header
          text={
            <Fragment>
              <span className="about-text10">About</span>
            </Fragment>
          }
          login={
            <Fragment>
              <span className="about-text11">Get Involved</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="about-text12">Resources</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="about-text13">Get Involved</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="about-text14">Need Help</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="about-text15">Donate</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="about-text16">Contact</span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="about-text17">FAIS IT</span>
            </Fragment>
          }
          text8={
            <Fragment>
              <span className="about-text18">News</span>
            </Fragment>
          }
          text61={
            <Fragment>
              <span className="about-text19">FAIS IT</span>
            </Fragment>
          }
          register={
            <Fragment>
              <span className="about-text20">Donate Now</span>
            </Fragment>
          }
        ></Header>
        <video
          src="https://videos.pexels.com/video-files/4687388/4687388-hd_1280_720_24fps.mp4"
          loop
          muted
          poster="https://images.pexels.com/videos/4687388/pictures/preview-0.jpg"
          preload="auto"
          autoPlay
          playsInline
          className="about-video"
        ></video>
        <div className="about-thq-hero-content-elm">
          <div className="about-thq-header-container-elm">
            <div className="about-thq-header-elm">
              <h1 className="about-thq-heading-elm">
                <span>About</span>
                <br></br>
              </h1>
            </div>
            <p className="about-thq-caption-elm">
              Our mission is to educate and empower teenagers, by teenagers, to
              recognize, speak up and change anti-Semitic curriculum in their
              schools, community and online.  
            </p>
          </div>
          <Link to="/contact" className="about-navlink button">
            <span>Get Involved</span>
          </Link>
        </div>
      </section>
      <div className="about-thq-body-elm">
        <div className="about-container2">
          <img
            alt="image"
            src="/david%20magen%20(3)-400w.jpeg"
            className="about-image"
          />
        </div>
        <div className="about-container3">
          <span className="about-text24">
            <span className="about-text25">Our Story:</span>
            <span className="about-text26">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="about-text27">
              FAIS-IT was founded in 2023 by David, a high school freshman who
              encountered antisemitic curriculum in his school. After
              confronting the issue and advocating for change, David realized
              the need for a platform that empowers other students to do the
              same. With the support of parents, educators, and community
              organizations, FAIS-IT was born.
            </span>
          </span>
          <span className="about-text28">
            <span className="about-text29">David Magen</span>
            <span>
              {' '}
              is 14 years old and actively advocates against antisemitism. He
              was able to change the inaccurate and antisemitic curriculum in
              his school, spoke in front of the Massachusetts Board of
              Elementary and Secondary Education, and appeared on TV stations,
              newspapers and speaking engagements. He is an excellent student at
              Marblehead High School, an outstanding soccer player and the only
              freshman on the varsity soccer team, a highly ranked chess player,
              a musician, a fisherman, and danced in the Boston Ballet
              Nutcracker. David’s mission is to empower other teenagers to
              recognize, speak up, and change antisemitic curriculum in their
              schools.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </div>
      </div>
      <Footer
        text={
          <Fragment>
            <span className="about-text31">
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
            <span className="about-text32">About</span>
          </Fragment>
        }
        text3={
          <Fragment>
            <span className="about-text33">Contact</span>
          </Fragment>
        }
        text4={
          <Fragment>
            <span className="about-text34">Get Involved</span>
          </Fragment>
        }
        text6={
          <Fragment>
            <span className="about-text35">News</span>
          </Fragment>
        }
        text7={
          <Fragment>
            <span className="about-text36">Articles</span>
          </Fragment>
        }
        text8={
          <Fragment>
            <span className="about-text37">Blog</span>
          </Fragment>
        }
        text9={
          <Fragment>
            <span className="about-text38">Privacy</span>
          </Fragment>
        }
        header={
          <Fragment>
            <span className="about-text39">Organization</span>
          </Fragment>
        }
        text10={
          <Fragment>
            <span className="about-text40">Terms</span>
          </Fragment>
        }
        text11={
          <Fragment>
            <span className="about-text41">Legal</span>
          </Fragment>
        }
        text12={
          <Fragment>
            <span className="about-text42">Press</span>
          </Fragment>
        }
        text13={
          <Fragment>
            <span className="about-text43">LinkedIn</span>
          </Fragment>
        }
        text14={
          <Fragment>
            <span className="about-text44">Twitter</span>
          </Fragment>
        }
        text15={
          <Fragment>
            <span className="about-text45">Instagram</span>
          </Fragment>
        }
        text16={
          <Fragment>
            <span className="about-text46">Facebook</span>
          </Fragment>
        }
        text17={
          <Fragment>
            <span className="about-text47">TikTok</span>
          </Fragment>
        }
        text31={
          <Fragment>
            <span className="about-text48">Donate</span>
          </Fragment>
        }
        text41={
          <Fragment>
            <span className="about-text49">Need Help</span>
          </Fragment>
        }
        text61={
          <Fragment>
            <span className="about-text50">FAIS IT</span>
          </Fragment>
        }
        header1={
          <Fragment>
            <span className="about-text51">Extern</span>
          </Fragment>
        }
        header2={
          <Fragment>
            <span className="about-text52">Social</span>
          </Fragment>
        }
        rootClassName="footerroot-class-name"
      ></Footer>
    </div>
  )
}

export default About
