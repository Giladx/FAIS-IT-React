import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './donate.css'

const Donate = (props) => {
  return (
    <div className="donate-container">
      <Helmet>
        <title>Donate - FAIS IT</title>
        <meta
          name="description"
          content="Our mission is to educate and empower teenagers, by teenagers, to recognize, speak up and change anti-Semitic curriculum in their schools, community and online.  \n"
        />
        <meta property="og:title" content="Donate - FAIS IT" />
        <meta
          property="og:description"
          content="Our mission is to educate and empower teenagers, by teenagers, to recognize, speak up and change anti-Semitic curriculum in their schools, community and online.  \n"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/8044f0cb-2f2e-424b-b592-50f4b4990f60/e4cab4ba-abdc-4395-87c7-fb65f74fdd7c?org_if_sml=1&amp;force_format=original"
        />
        <meta name="robots" content="noindex" />
        <link
          rel="canonical"
          href="https://togthr-template-ahbaic-gilads-projects-6e9fe709.vercel.app/donate"
        />
      </Helmet>
      <section className="donate-thq-hero-elm">
        <Header
          text={
            <Fragment>
              <span className="donate-text10">About</span>
            </Fragment>
          }
          login={
            <Fragment>
              <span className="donate-text11">Get Involved</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="donate-text12">Resources</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="donate-text13">Get Involved</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="donate-text14">Need Help</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="donate-text15">Donate</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="donate-text16">Contact</span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="donate-text17">FAIS IT</span>
            </Fragment>
          }
          text8={
            <Fragment>
              <span className="donate-text18">News</span>
            </Fragment>
          }
          text61={
            <Fragment>
              <span className="donate-text19">FAIS IT</span>
            </Fragment>
          }
          register={
            <Fragment>
              <span className="donate-text20">Donate Now</span>
            </Fragment>
          }
        ></Header>
        <video
          src="https://videos.pexels.com/video-files/5039702/5039702-hd_720_1366_25fps.mp4"
          loop
          muted
          poster="https://images.pexels.com/videos/5039702/pictures/preview-0.jpeg"
          preload="auto"
          autoPlay
          playsInline
          className="donate-video"
        ></video>
        <div className="donate-thq-hero-content-elm">
          <div className="donate-thq-header-container-elm">
            <div className="donate-thq-header-elm">
              <h1 className="donate-thq-heading-elm">Donate</h1>
            </div>
            <p className="donate-thq-caption-elm">
              Our mission is to educate and empower teenagers, by teenagers, to
              recognize, speak up and change anti-Semitic curriculum in their
              schools, community and online.  
            </p>
          </div>
          <a
            href="https://www.gofundme.com/f/faisit?attribution_id=sl:21ddbc80-3b4b-4c54-beb1-34b8a49d32f2&amp;lang=en_US&amp;utm_campaign=man_sharesheet_dash&amp;utm_medium=customer&amp;utm_source=copy_link"
            target="_blank"
            rel="noreferrer noopener"
            className="donate-link1 button"
          >
            <span className="donate-text21">Donate Now</span>
          </a>
        </div>
      </section>
      <div className="donate-thq-body-elm">
        <span className="donate-text22">
          <span className="donate-text23">Case Studies:</span>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="donate-text25">
            Read inspiring stories of students who have successfully confronted
            antisemitism in their schools. These case studies highlight the
            power of youth advocacy and the impact of informed action.
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
          <span className="donate-text29">
            David&apos;s Journey: From Student to Advocate
          </span>
          <br className="donate-text30"></br>
          <br className="donate-text31"></br>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="donate-text33">
            After discovering antisemitic content in his school’s curriculum,
            David took action. His efforts led to the retraction of biased
            materials and increased awareness among students and parents. Learn
            how he did it and how you can too!
          </span>
          <br></br>
        </span>
        <a
          href="https://www.gofundme.com/f/faisit?attribution_id=sl:21ddbc80-3b4b-4c54-beb1-34b8a49d32f2&amp;lang=en_US&amp;utm_campaign=man_sharesheet_dash&amp;utm_medium=customer&amp;utm_source=copy_link"
          target="_blank"
          rel="noreferrer noopener"
          className="donate-link2 button"
        >
          DONATE NOW
        </a>
      </div>
      <Footer
        text={
          <Fragment>
            <span className="donate-text35">
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
            <span className="donate-text36">About</span>
          </Fragment>
        }
        text3={
          <Fragment>
            <span className="donate-text37">Contact</span>
          </Fragment>
        }
        text4={
          <Fragment>
            <span className="donate-text38">Get Involved</span>
          </Fragment>
        }
        text6={
          <Fragment>
            <span className="donate-text39">News</span>
          </Fragment>
        }
        text7={
          <Fragment>
            <span className="donate-text40">Articles</span>
          </Fragment>
        }
        text8={
          <Fragment>
            <span className="donate-text41">Blog</span>
          </Fragment>
        }
        text9={
          <Fragment>
            <span className="donate-text42">Privacy</span>
          </Fragment>
        }
        header={
          <Fragment>
            <span className="donate-text43">Organization</span>
          </Fragment>
        }
        text10={
          <Fragment>
            <span className="donate-text44">Terms</span>
          </Fragment>
        }
        text11={
          <Fragment>
            <span className="donate-text45">Legal</span>
          </Fragment>
        }
        text12={
          <Fragment>
            <span className="donate-text46">Press</span>
          </Fragment>
        }
        text13={
          <Fragment>
            <span className="donate-text47">LinkedIn</span>
          </Fragment>
        }
        text14={
          <Fragment>
            <span className="donate-text48">Twitter</span>
          </Fragment>
        }
        text15={
          <Fragment>
            <span className="donate-text49">Instagram</span>
          </Fragment>
        }
        text16={
          <Fragment>
            <span className="donate-text50">Facebook</span>
          </Fragment>
        }
        text17={
          <Fragment>
            <span className="donate-text51">TikTok</span>
          </Fragment>
        }
        text31={
          <Fragment>
            <span className="donate-text52">Donate</span>
          </Fragment>
        }
        text41={
          <Fragment>
            <span className="donate-text53">Need Help</span>
          </Fragment>
        }
        text61={
          <Fragment>
            <span className="donate-text54">FAIS IT</span>
          </Fragment>
        }
        header1={
          <Fragment>
            <span className="donate-text55">Extern</span>
          </Fragment>
        }
        header2={
          <Fragment>
            <span className="donate-text56">Social</span>
          </Fragment>
        }
        rootClassName="footerroot-class-name5"
      ></Footer>
    </div>
  )
}

export default Donate
