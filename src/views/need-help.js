import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './need-help.css'

const NeedHelp = (props) => {
  return (
    <div className="need-help-container1">
      <Helmet>
        <title>Need-Help - FAIS IT</title>
        <meta
          name="description"
          content="Our mission is to educate and empower teenagers, by teenagers, to recognize, speak up and change anti-Semitic curriculum in their schools, community and online.  \n"
        />
        <meta property="og:title" content="Need-Help - FAIS IT" />
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
          href="https://togthr-template-ahbaic-gilads-projects-6e9fe709.vercel.app/need-help"
        />
      </Helmet>
      <section className="need-help-thq-hero-elm">
        <Header
          text={
            <Fragment>
              <span className="need-help-text10">About</span>
            </Fragment>
          }
          login={
            <Fragment>
              <span className="need-help-text11">Get Involved</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="need-help-text12">Resources</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="need-help-text13">Get Involved</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="need-help-text14">Need Help</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="need-help-text15">Donate</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="need-help-text16">Contact</span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="need-help-text17">FAIS IT</span>
            </Fragment>
          }
          text8={
            <Fragment>
              <span className="need-help-text18">News</span>
            </Fragment>
          }
          text61={
            <Fragment>
              <span className="need-help-text19">FAIS IT</span>
            </Fragment>
          }
          register={
            <Fragment>
              <span className="need-help-text20">Donate Now</span>
            </Fragment>
          }
        ></Header>
        <video
          src="https://videos.pexels.com/video-files/5267492/5267492-hd_1280_720_30fps.mp4"
          loop
          muted
          poster="https://images.pexels.com/videos/4043985/pictures/preview-0.jpg"
          preload="auto"
          autoPlay
          playsInline
          className="need-help-video"
        ></video>
        <div className="need-help-thq-hero-content-elm">
          <div className="need-help-thq-header-container-elm">
            <div className="need-help-thq-header-elm">
              <h1 className="need-help-thq-heading-elm">
                <span>Need Help</span>
                <br></br>
              </h1>
            </div>
            <p className="need-help-thq-caption-elm">
              Our mission is to educate and empower teenagers, by teenagers, to
              recognize, speak up and change anti-Semitic curriculum in their
              schools, community and online.  
            </p>
          </div>
          <Link to="/contact" className="need-help-navlink button">
            <span>
              <span>Get Involved</span>
              <br></br>
            </span>
          </Link>
        </div>
      </section>
      <div className="need-help-thq-body-elm">
        <div className="need-help-container2">
          <div className="need-help-container3">
            <Script
              html={`<script type="text/javascript" src="https://form.jotform.com/jsform/250776130124045"></script>`}
            ></Script>
          </div>
        </div>
        <span className="need-help-text26">
          <span className="need-help-text27">Upcoming Events:</span>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="need-help-text29">
            Stay engaged and informed by participating in our upcoming events!
            From webinars to community gatherings, there are many opportunities
            to learn and connect with others who share your passion for
            combating antisemitism.
          </span>
          <br></br>
          <br></br>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="need-help-text33">Event Title:</span>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="need-help-text35">
            Webinar: Understanding Antisemitism in Education
          </span>
          <br className="need-help-text36"></br>
          <span className="need-help-text37">
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="need-help-text38">
            Date:
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="need-help-text39">[Insert Date]</span>
          <br className="need-help-text40"></br>
          <span className="need-help-text41">
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="need-help-text42">Description:</span>
          <span className="need-help-text43">
             Join us for an informative session where we discuss the impact of
            antisemitism in school curricula and how students can take action.
          </span>
          <br></br>
          <br></br>
          <span className="need-help-text46">Past Events:</span>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="need-help-text48">
            Check out the highlights from our previous events, where students
            and community members came together to share experiences, learn, and
            advocate for change.
          </span>
        </span>
      </div>
      <Footer
        text={
          <Fragment>
            <span className="need-help-text49">
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
            <span className="need-help-text50">About</span>
          </Fragment>
        }
        text3={
          <Fragment>
            <span className="need-help-text51">Contact</span>
          </Fragment>
        }
        text4={
          <Fragment>
            <span className="need-help-text52">Get Involved</span>
          </Fragment>
        }
        text6={
          <Fragment>
            <span className="need-help-text53">News</span>
          </Fragment>
        }
        text7={
          <Fragment>
            <span className="need-help-text54">Articles</span>
          </Fragment>
        }
        text8={
          <Fragment>
            <span className="need-help-text55">Blog</span>
          </Fragment>
        }
        text9={
          <Fragment>
            <span className="need-help-text56">Privacy</span>
          </Fragment>
        }
        header={
          <Fragment>
            <span className="need-help-text57">Organization</span>
          </Fragment>
        }
        text10={
          <Fragment>
            <span className="need-help-text58">Terms</span>
          </Fragment>
        }
        text11={
          <Fragment>
            <span className="need-help-text59">Legal</span>
          </Fragment>
        }
        text12={
          <Fragment>
            <span className="need-help-text60">Press</span>
          </Fragment>
        }
        text13={
          <Fragment>
            <span className="need-help-text61">LinkedIn</span>
          </Fragment>
        }
        text14={
          <Fragment>
            <span className="need-help-text62">Twitter</span>
          </Fragment>
        }
        text15={
          <Fragment>
            <span className="need-help-text63">Instagram</span>
          </Fragment>
        }
        text16={
          <Fragment>
            <span className="need-help-text64">Facebook</span>
          </Fragment>
        }
        text17={
          <Fragment>
            <span className="need-help-text65">TikTok</span>
          </Fragment>
        }
        text31={
          <Fragment>
            <span className="need-help-text66">Donate</span>
          </Fragment>
        }
        text41={
          <Fragment>
            <span className="need-help-text67">Need Help</span>
          </Fragment>
        }
        text61={
          <Fragment>
            <span className="need-help-text68">FAIS IT</span>
          </Fragment>
        }
        header1={
          <Fragment>
            <span className="need-help-text69">Extern</span>
          </Fragment>
        }
        header2={
          <Fragment>
            <span className="need-help-text70">Social</span>
          </Fragment>
        }
        rootClassName="footerroot-class-name6"
      ></Footer>
      <div className="need-help-container4">
        <div className="need-help-container5">
          <Script
            html={`<script type="text/javascript" src="https://form.jotform.com/jsform/250776130124045"></script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default NeedHelp
