import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Check from '../components/check'
import Line from '../components/line'
import IconContainer from '../components/icon-container'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>FAIS IT</title>
        <meta
          name="description"
          content="Our mission is to educate and empower teenagers, by teenagers, to recognize, speak up and change anti-Semitic curriculum in their schools, community and online.  \n"
        />
        <meta property="og:title" content="FAIS IT" />
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
          href="https://togthr-template-ahbaic-gilads-projects-6e9fe709.vercel.app/"
        />
      </Helmet>
      <section className="home-thq-hero-elm">
        <Header
          text={
            <Fragment>
              <span className="home-text10">About</span>
            </Fragment>
          }
          login={
            <Fragment>
              <span className="home-text11">Get Involved</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="home-text12">Resources</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="home-text13">Get Involved</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="home-text14">Need Help</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="home-text15">Donate</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="home-text16">Contact</span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="home-text17">FAIS IT</span>
            </Fragment>
          }
          text8={
            <Fragment>
              <span className="home-text18">News</span>
            </Fragment>
          }
          text61={
            <Fragment>
              <span className="home-text19">FAIS IT</span>
            </Fragment>
          }
          register={
            <Fragment>
              <span className="home-text20">Donate Now</span>
            </Fragment>
          }
        ></Header>
        <video
          src="https://videos.pexels.com/video-files/4841989/4841989-hd_1366_720_25fps.mp4"
          loop
          muted
          poster="https://images.pexels.com/videos/4841989/pictures/preview-0.jpg"
          preload="auto"
          autoPlay
          playsInline
          className="home-video"
        ></video>
        <div className="home-thq-hero-content-elm">
          <div className="home-thq-header-container-elm1">
            <div className="home-thq-header-elm10"></div>
            <h1 className="home-thq-heading-elm10">
              Empowering Teens to Combat Antisemitism
            </h1>
            <p className="home-thq-caption-elm10">
              Our mission is to educate and empower teenagers, by teenagers, to
              recognize, speak up and change anti-Semitic curriculum in their
              schools, community and online.  
            </p>
          </div>
          <Link to="/contact" className="home-navlink button">
            <span>
              <span>Get Involved</span>
              <br></br>
            </span>
          </Link>
        </div>
      </section>
      <section className="home-thq-note-elm">
        <h2 className="home-thq-caption-elm11">
          <span>
            The FAIS Method to combat Antisemitism/Anti-Israel in the curricula
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
        </h2>
      </section>
      <section className="home-thq-statistics-elm">
        <div className="home-thq-content-elm10">
          <div className="home-thq-stat-elm1">
            <h3 className="home-thq-header-elm11">F</h3>
            <span className="home-thq-caption-elm12">
              Find- Help teenagers actively look and find
              anti-Semitic/anti-Israel curriculum.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </div>
          <div className="home-thq-stat-elm2">
            <h3 className="home-thq-header-elm12">A</h3>
            <span className="home-thq-caption-elm13">
              Assess- Encourage teenagers to share their curriculum with their
              parents and organizations while they are assessing the situation
              and fueling themselves with knowledge.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </div>
          <div className="home-thq-stat-elm3">
            <h3 className="home-thq-header-elm13">I</h3>
            <span className="home-thq-caption-elm14">
              Initiate- Provide tools to initiate a plan for change. Who is the
              person that is authorized to make a change? How and when to
              approach them? What is the best strategy?
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </div>
          <div className="home-thq-stat-elm4">
            <h3 className="home-thq-header-elm14">S</h3>
            <span className="home-thq-caption-elm15">
              Solution- Empower teenagers to speak up, take action and provide
              solutions to the authorized person to change the curriculum.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </div>
        </div>
      </section>
      <section className="home-thq-slider-elm1">
        <div className="home-thq-header-elm15">
          <h2 className="home-thq-heading-elm11">We Believe</h2>
        </div>
        <div className="home-thq-selector-elm">
          <p className="home-thq-caption-elm16">
            That often the biggest change in schools can be made when students
            take action. We want to help them recognize antiemetic/anti-Israel
            material, plan to confront it and empower them to speak up.
          </p>
        </div>
      </section>
      <section className="home-thq-get-started-elm">
        <div className="home-thq-header-container-elm2">
          <div className="home-thq-header-elm16">
            <h2 className="home-thq-heading-elm12">
              Students can be the first defense in anti-Semitic/anti-Israel
              curriculum.
            </h2>
            <p className="home-thq-caption-elm17">
              As parents to teenagers do not know what their children are being
              taught. It is the students who are confronted with the curriculum
              but often they do not have the tools to recognize, understand and
              take action against the anti-Semitic/anti-Israel curriculum. 
            </p>
          </div>
          <div className="home-thq-button-elm1">
            <Link to="/contact" className="home-thq-button-elm2 button">
              <span>Get Involved</span>
            </Link>
          </div>
        </div>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1538581746996-f1d586de2905?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0MDU5Mjk0OHw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=800"
          className="home-image1"
        />
      </section>
      <section className="home-thq-slides-elm">
        <div className="home-thq-slider-elm2 slider blaze-slider">
          <div className="home-thq-slider-container-elm blaze-container">
            <div className="home-thq-slider-track-container-elm blaze-track-container">
              <div className="home-thq-slider-track-elm blaze-track">
                <div data-role="current-banner" className="banner">
                  <img
                    alt="image"
                    src="/slider-ecosystems-400h.png"
                    className="home-image2"
                  />
                  <div className="home-thq-content-elm11">
                    <div className="home-thq-header-elm17">
                      <h3 className="home-thq-heading-elm13">Metaverse</h3>
                      <p className="home-thq-caption-elm18">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                    </div>
                    <div className="home-thq-more-elm1">
                      <span className="home-thq-caption-elm19">Read More</span>
                      <svg viewBox="0 0 1024 1024" className="home-icon10">
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div data-role="current-banner" className="banner">
                  <img
                    alt="image"
                    src="/slider-ecosystems-400h.png"
                    className="home-image3"
                  />
                  <div className="home-thq-content-elm12">
                    <div className="home-thq-header-elm18">
                      <h3 className="home-thq-heading-elm14">Ecosystems</h3>
                      <p className="home-thq-caption-elm20">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                    </div>
                    <div className="home-thq-more-elm2">
                      <span className="home-thq-caption-elm21">Read More</span>
                      <svg viewBox="0 0 1024 1024" className="home-icon12">
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div data-role="current-banner" className="banner">
                  <img
                    alt="image"
                    src="/slider-ecosystems-400h.png"
                    className="home-image4"
                  />
                  <div className="home-thq-content-elm13">
                    <div className="home-thq-header-elm19">
                      <h3 className="home-thq-heading-elm15">Development</h3>
                      <p className="home-thq-caption-elm22">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                    </div>
                    <div className="home-thq-more-elm3">
                      <span className="home-thq-caption-elm23">Read More</span>
                      <svg viewBox="0 0 1024 1024" className="home-icon14">
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div data-role="current-banner" className="banner">
                  <img
                    alt="image"
                    src="/slider-ecosystems-400h.png"
                    className="home-image5"
                  />
                  <div className="home-thq-content-elm14">
                    <div className="home-thq-header-elm20">
                      <h3 className="home-thq-heading-elm16">Integration</h3>
                      <p className="home-thq-caption-elm24">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                    </div>
                    <div className="home-thq-more-elm4">
                      <span className="home-thq-caption-elm25">Read More</span>
                      <svg viewBox="0 0 1024 1024" className="home-icon16">
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-thq-controls-elm1">
              <button
                data-role="previous-banner-button"
                className="home-thq-previous-elm1 blaze-prev button"
              >
                <svg viewBox="0 0 1024 1024" className="home-icon18">
                  <path d="M542.165 780.501l-225.835-225.835h494.336c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-494.336l225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-298.667 298.667c-4.096 4.096-7.168 8.789-9.259 13.824-2.176 5.205-3.243 10.795-3.243 16.341 0 10.923 4.181 21.845 12.501 30.165l298.667 298.667c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
                </svg>
              </button>
              <button
                data-role="next-banner-button"
                className="home-thq-next-elm1 blaze-next button"
              >
                <svg viewBox="0 0 1024 1024" className="home-icon20">
                  <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="home-container3">
            <Script
              html={`<script defer>
(function() {
  // Get the element with the class "blaze-slider"
  const el = document.querySelector('.blaze-slider');

  // Check if the element exists before initializing the slider
  if (el) {
    new BlazeSlider(el, {
      all: {
        slidesToShow: 3,
        slideGap: '80px',
        loop: true,
        enableAutoplay: true,
      },
    });
  }
})();
</script>`}
            ></Script>
          </div>
        </div>
      </section>
      <section className="home-thq-objectives-elm">
        <div className="home-thq-content-elm15">
          <span className="home-text27">Objectives</span>
          <div className="home-thq-objectives-list-elm">
            <div className="objective">
              <h3 className="home-text28">Growth</h3>
              <p className="home-text29">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="objective home-thq-objective-elm2">
              <h3 className="home-text30">Develop</h3>
              <p className="home-text31">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="objective home-thq-objective-elm3">
              <h3 className="home-text32">Optimize</h3>
              <p className="home-text33">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="home-thq-growth-elm">
        <div className="home-thq-content-elm16">
          <div className="home-thq-header-elm21">
            <div className="home-thq-header-elm22">
              <h2 className="home-thq-heading-elm17">
                <span>
                  Multiverse optimized for
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text35">growth.</span>
                <br></br>
              </h2>
            </div>
            <p className="home-thq-caption-elm26">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <p className="home-thq-caption-elm27">
              Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="home-thq-testimonial-elm1">
            <div className="home-thq-content-elm17">
              <span className="home-text37">Testimonial</span>
              <p className="home-text38">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.”
              </p>
            </div>
            <div className="home-thq-information-elm1">
              <div className="home-thq-author-elm1">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1552234994-66ba234fd567?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fHBvdHJhaXR8ZW58MHx8fHwxNjcxMDU2MzMz&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-thq-icon-elm1"
                />
                <span className="home-thq-name-elm1">Andrew Gonzales</span>
              </div>
              <img
                alt="image"
                src="/logoipsum.svg"
                className="home-thq-from-elm1"
              />
            </div>
          </div>
        </div>
        <div className="home-thq-images-elm1">
          <div className="home-thq-square-elm1"></div>
          <img alt="image" src="/growth-1400w.png" className="home-image6" />
        </div>
      </section>
      <section className="home-thq-experience-elm">
        <div className="home-thq-images-elm2">
          <div className="home-thq-square-elm2"></div>
          <img
            alt="image"
            src="/experience-1400w.png"
            className="home-image7"
          />
        </div>
        <div className="home-thq-content-elm18">
          <div className="home-thq-header-elm23">
            <div className="home-thq-header-container-elm3">
              <div className="home-thq-header-elm24">
                <h2 className="home-thq-heading-elm18">
                  <span>A worlds class </span>
                  <span className="home-text40">experience</span>
                </h2>
              </div>
              <p className="home-thq-caption-elm28">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                eiusmod.
              </p>
            </div>
            <div className="home-thq-checkmarks-elm">
              <div className="home-thq-check-elm1">
                <div className="home-thq-mark-elm1">
                  <svg viewBox="0 0 1024 1024" className="home-icon22">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-text41">
                  Duis aute irure dolor in reprehenderit
                </span>
              </div>
              <div className="home-thq-check-elm2">
                <div className="home-thq-mark-elm2">
                  <svg viewBox="0 0 1024 1024" className="home-icon24">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-text42">Lorem ipsum dolor sit amet</span>
              </div>
              <div className="home-thq-check-elm3">
                <div className="home-thq-mark-elm3">
                  <svg viewBox="0 0 1024 1024" className="home-icon26">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-text43">
                  Voluptate velit esse cillum dolore eu fugiat nulla
                </span>
              </div>
              <div className="home-thq-check-elm4">
                <div className="home-thq-mark-elm4">
                  <svg viewBox="0 0 1024 1024" className="home-icon28">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-text44">
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                </span>
              </div>
            </div>
          </div>
          <div className="home-thq-testimonial-elm2">
            <div className="home-thq-content-elm19">
              <span className="home-text45">Testimonial</span>
              <p className="home-text46">
                “Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.”
              </p>
            </div>
            <div className="home-thq-information-elm2">
              <div className="home-thq-author-elm2">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1618151313441-bc79b11e5090?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxwb3RyYWl0fGVufDB8fHx8MTY3MTA1NjMzMw&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-thq-icon-elm2"
                />
                <span className="home-thq-name-elm2">Cory Smith</span>
              </div>
              <img
                alt="image"
                src="/logoipsum-2.svg"
                className="home-thq-from-elm2"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="home-thq-create-elm">
        <div className="home-thq-content-elm20">
          <div className="home-thq-header-elm25">
            <h2 className="home-thq-heading-elm19">
              <span>
                Create your own
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text48">environment</span>
              <span> now!</span>
              <br></br>
            </h2>
          </div>
          <button className="home-button1 button">
            <span>Get Involved</span>
          </button>
        </div>
      </section>
      <section className="home-thq-comparision-elm">
        <div className="home-thq-header-container-elm4">
          <div className="home-thq-header-elm26">
            <h2 className="home-thq-heading-elm20">
              <span>Environment c</span>
              <span className="home-text53">omparision</span>
              <br></br>
            </h2>
          </div>
          <p className="home-thq-caption-elm29">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod.
          </p>
        </div>
        <div className="home-thq-table-elm">
          <div className="home-thq-row-elm10">
            <div className="home-thq-headers-elm1">
              <span className="home-text55">Placeholder</span>
            </div>
            <div className="home-thq-plans-elm1">
              <div className="home-thq-row-elm11">
                <span className="home-text56">TOGHTR</span>
                <span className="home-text57">AGENCY</span>
                <span className="home-text58">FRELLANCE</span>
              </div>
            </div>
          </div>
          <div className="home-thq-row-elm12">
            <div className="home-thq-headers-elm2">
              <span className="home-text59">
                Duis aute irure dolor in reprehenderit
              </span>
            </div>
            <div className="home-thq-plans-elm2">
              <div className="home-thq-row-elm13">
                <div className="value">
                  <Check></Check>
                </div>
                <div className="value">
                  <Check></Check>
                </div>
                <div className="value">
                  <Check></Check>
                </div>
              </div>
            </div>
          </div>
          <div className="home-thq-row-elm14">
            <div className="home-thq-headers-elm3">
              <span className="home-text60">Lorem ipsum dolor sit amet</span>
            </div>
            <div className="home-thq-plans-elm3">
              <div className="home-thq-row-elm15">
                <div className="value">
                  <Check></Check>
                </div>
                <div className="value">
                  <Check></Check>
                </div>
                <div className="value">
                  <Line></Line>
                </div>
              </div>
            </div>
          </div>
          <div className="home-thq-row-elm16">
            <div className="home-thq-headers-elm4">
              <span className="home-text61">
                Duis aute irure dolor in reprehenderit
              </span>
            </div>
            <div className="home-thq-plans-elm4">
              <div className="home-thq-row-elm17">
                <div className="value">
                  <span className="home-text62">Custom</span>
                </div>
                <div className="value">
                  <Line></Line>
                </div>
                <div className="value">
                  <Line></Line>
                </div>
              </div>
            </div>
          </div>
          <div className="home-thq-row-elm18">
            <div className="home-thq-headers-elm5">
              <span className="home-text63">
                Duis aute irure dolor in reprehenderit
              </span>
            </div>
            <div className="home-thq-plans-elm5">
              <div className="home-thq-row-elm19">
                <div className="value">
                  <span className="home-text64">Unlimited</span>
                </div>
                <div className="value">
                  <span className="home-text65">Limited</span>
                </div>
                <div className="value">
                  <Line></Line>
                </div>
              </div>
            </div>
          </div>
          <div className="home-thq-row-elm20">
            <div className="home-thq-headers-elm6">
              <span className="home-text66">Lorem ipsum dolor sit amet</span>
            </div>
            <div className="home-thq-plans-elm6">
              <div className="home-thq-row-elm21">
                <div className="value">
                  <Check></Check>
                </div>
                <div className="value">
                  <Line></Line>
                </div>
                <div className="value">
                  <span className="home-text67">Limited</span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-thq-row-elm22">
            <div className="home-thq-headers-elm7">
              <span className="home-text68">Lorem ipsum dolor sit amet</span>
            </div>
            <div className="home-thq-plans-elm7">
              <div className="home-thq-row-elm23">
                <div className="value">
                  <Check></Check>
                </div>
                <div className="value">
                  <Check></Check>
                </div>
                <div className="value">
                  <Check></Check>
                </div>
              </div>
            </div>
          </div>
          <div className="home-thq-row-elm24">
            <div className="home-thq-headers-elm8">
              <span className="home-text69">Lorem ipsum dolor sit amet</span>
            </div>
            <div className="home-thq-plans-elm8">
              <div className="home-thq-row-elm25">
                <div className="value">
                  <Check></Check>
                </div>
                <div className="value">
                  <span className="home-text70">Limited</span>
                </div>
                <div className="value">
                  <Line></Line>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-thq-data-elm">
        <div className="home-thq-header-container-elm5">
          <div className="home-thq-header-elm27">
            <div className="home-thq-row-elm26">
              <h2 className="home-thq-heading-elm21">
                <span>
                  Understand your data to manage all in one
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text72">platform</span>
                <br></br>
              </h2>
            </div>
          </div>
          <p className="home-thq-caption-elm30">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </p>
        </div>
        <div className="home-thq-content-elm21">
          <div className="home-thq-image-elm">
            <img alt="image" src="/data-1400w.png" className="home-image8" />
          </div>
          <div className="home-thq-accordion-elm">
            <div data-role="accordion-container" className="accordion">
              <div>
                <h3 className="home-thq-header-elm28">Management</h3>
                <p data-role="accordion-content" className="accordion-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <IconContainer rootClassName="icon-containerroot-class-name"></IconContainer>
            </div>
            <div data-role="accordion-container" className="accordion">
              <div>
                <h3 className="home-thq-header-elm29">Integrations</h3>
                <p data-role="accordion-content" className="accordion-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <IconContainer rootClassName="icon-containerroot-class-name1"></IconContainer>
            </div>
            <div data-role="accordion-container" className="accordion">
              <div>
                <h3 className="home-thq-header-elm30">Customer Solutions</h3>
                <p data-role="accordion-content" className="accordion-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <IconContainer rootClassName="icon-containerroot-class-name2"></IconContainer>
            </div>
            <div data-role="accordion-container" className="accordion">
              <div>
                <h3 className="home-thq-header-elm31">Recruiting</h3>
                <p data-role="accordion-content" className="accordion-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <IconContainer rootClassName="icon-containerroot-class-name3"></IconContainer>
            </div>
            <div>
              <div className="home-container5">
                <Script
                  html={`<script>
 (function() {
  /*
    Accordion - Code Embed
  */
  const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
  const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
  const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]'); // All accordion closed icons
  const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]'); // All accordion open icons

  accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; // Hides all accordion contents
  });

  accordionIconsClosed.forEach((icon) => {
    icon.style.display = "flex";
  });

  accordionIconsOpen.forEach((icon) => {
    icon.style.display = "none";
  });

  accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
          if (accordionContents[index].style.display === "flex") {
              // If the accordion is already open, close it
              accordionContents[index].style.display = "none";
              accordionIconsClosed[index].style.display = "flex";
              accordionIconsOpen[index].style.display = "none";
          } else {
              // If the accordion is closed, open it
              accordionContents.forEach((accordionContent) => {
                  accordionContent.style.display = "none"; // Hides all accordion contents
              });

              accordionIconsClosed.forEach((accordionIcon) => {
                  accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
              });

              accordionIconsOpen.forEach((accordionIcon) => {
                accordionIcon.style.display = "none";
              });
              
              accordionContents[index].style.display = "flex"; // Shows accordion content
              accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
              accordionIconsOpen[index].style.display = "flex";
          }
      });
  });
})();
</script>
`}
                ></Script>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-thq-customer-elm">
        <div className="home-thq-header-elm32">
          <h2 className="home-thq-heading-elm22">
            <span>
              Customer validation is an essential phase of the
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text75">product development process</span>
            <br></br>
          </h2>
        </div>
        <div className="home-thq-quotes-elm">
          <div className="home-thq-quote-elm1">
            <p className="home-thq-quote-elm2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className="home-thq-author-elm3">
              <span className="home-thq-name-elm3">Joanna Smith</span>
              <span className="home-thq-location-elm1">Briville</span>
            </div>
          </div>
          <div className="home-thq-quote-elm3">
            <p className="home-thq-quote-elm4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className="home-thq-author-elm4">
              <span className="home-thq-name-elm4">Joanna Smith</span>
              <span className="home-thq-location-elm2">Briville</span>
            </div>
          </div>
          <div className="home-thq-quote-elm5">
            <p className="home-thq-quote-elm6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className="home-thq-author-elm5">
              <span className="home-thq-name-elm5">Joanna Smith</span>
              <span className="home-thq-location-elm3">Briville</span>
            </div>
          </div>
          <div className="home-thq-quote-elm7">
            <p className="home-thq-quote-elm8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className="home-thq-author-elm6">
              <span className="home-thq-name-elm6">Joanna Smith</span>
              <span className="home-thq-location-elm4">Briville</span>
            </div>
          </div>
        </div>
        <div className="home-thq-controls-elm2">
          <button className="home-thq-previous-elm2 button">
            <svg viewBox="0 0 1024 1024" className="home-icon30">
              <path d="M542.165 780.501l-225.835-225.835h494.336c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-494.336l225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-298.667 298.667c-4.096 4.096-7.168 8.789-9.259 13.824-2.176 5.205-3.243 10.795-3.243 16.341 0 10.923 4.181 21.845 12.501 30.165l298.667 298.667c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
            </svg>
          </button>
          <button className="home-thq-next-elm2 button">
            <svg viewBox="0 0 1024 1024" className="home-icon32">
              <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
            </svg>
          </button>
          <button className="button home-button2">
            <span>
              <span>View all cases</span>
              <br></br>
            </span>
          </button>
        </div>
      </section>
      <section className="home-thq-faq-elm">
        <div className="home-thq-header-elm33">
          <h2 className="home-thq-heading-elm23">
            <span>Frequently asked </span>
            <span className="home-text81">questions</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </h2>
        </div>
        <div className="home-thq-content-elm30">
          <div className="home-thq-column-elm1">
            <div className="home-thq-element-elm14">
              <h3 className="home-thq-header-elm34">
                Lorem ipsum dolor sit ametetur elit?
              </h3>
              <p className="home-thq-content-elm31">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="home-thq-element-elm15">
              <h3 className="home-thq-header-elm35">
                Excepteur sint occaecat cupidatat non sunt in culpa qui officia
                deserunt mollit anim id est laborum?
              </h3>
              <p className="home-thq-content-elm32">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>
            <div className="home-thq-element-elm16">
              <h3 className="home-thq-header-elm36">
                Tempor incididunt ut labore et dolore magna aliquat enim ad
                minim?
              </h3>
              <p className="home-thq-content-elm33">
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="home-thq-column-elm2">
            <div className="home-thq-element-elm17">
              <h3 className="home-thq-header-elm37">
                Tempor incididunt ut labore et dolore magna aliquat enim ad
                minim?
              </h3>
              <p className="home-thq-content-elm34">
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="home-thq-element-elm18">
              <h3 className="home-thq-header-elm38">
                Lorem ipsum dolor sit ametetur elit?
              </h3>
              <p className="home-thq-content-elm35">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="home-thq-element-elm19">
              <h3 className="home-thq-header-elm39">
                Incididunt ut labore et dolore?
              </h3>
              <p className="home-thq-content-elm36">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer
        text={
          <Fragment>
            <span className="home-text83">
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
            <span className="home-text84">About</span>
          </Fragment>
        }
        text3={
          <Fragment>
            <span className="home-text85">Contact</span>
          </Fragment>
        }
        text4={
          <Fragment>
            <span className="home-text86">Get Involved</span>
          </Fragment>
        }
        text6={
          <Fragment>
            <span className="home-text87">News</span>
          </Fragment>
        }
        text7={
          <Fragment>
            <span className="home-text88">Articles</span>
          </Fragment>
        }
        text8={
          <Fragment>
            <span className="home-text89">Blog</span>
          </Fragment>
        }
        text9={
          <Fragment>
            <span className="home-text90">Privacy</span>
          </Fragment>
        }
        header={
          <Fragment>
            <span className="home-text91">Organization</span>
          </Fragment>
        }
        text10={
          <Fragment>
            <span className="home-text92">Terms</span>
          </Fragment>
        }
        text11={
          <Fragment>
            <span className="home-text93">Legal</span>
          </Fragment>
        }
        text12={
          <Fragment>
            <span className="home-text94">Press</span>
          </Fragment>
        }
        text13={
          <Fragment>
            <span className="home-text95">LinkedIn</span>
          </Fragment>
        }
        text14={
          <Fragment>
            <span className="home-text96">Twitter</span>
          </Fragment>
        }
        text15={
          <Fragment>
            <span className="home-text97">Instagram</span>
          </Fragment>
        }
        text16={
          <Fragment>
            <span className="home-text98">Facebook</span>
          </Fragment>
        }
        text17={
          <Fragment>
            <span className="home-text99">TikTok</span>
          </Fragment>
        }
        text31={
          <Fragment>
            <span className="home-text100">Donate</span>
          </Fragment>
        }
        text41={
          <Fragment>
            <span className="home-text101">Need Help</span>
          </Fragment>
        }
        text61={
          <Fragment>
            <span className="home-text102">FAIS IT</span>
          </Fragment>
        }
        header1={
          <Fragment>
            <span className="home-text103">Extern</span>
          </Fragment>
        }
        header2={
          <Fragment>
            <span className="home-text104">Social</span>
          </Fragment>
        }
      ></Footer>
      <div>
        <div className="home-container7">
          <Script
            html={`<script>
(function() {
  document.addEventListener("DOMContentLoaded", function() {
    // get the element with the "scroll-top" data-role
    const scrollTopBtn = document.querySelector('[data-role="scroll-top"]');

    // Check if the button exists before adding the event listener
    if (scrollTopBtn) {
      // when the element is clicked
      scrollTopBtn.addEventListener("click", function() {
        // smoothly scroll to the top of the page
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      });
    }
  });
})();
</script>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Home
