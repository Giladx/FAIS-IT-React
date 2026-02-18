import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './resources.css'

const Resources = (props) => {
  return (
    <div className="resources-container1">
      <Helmet>
        <title>Resources - FAIS IT</title>
        <meta
          name="description"
          content="Our mission is to educate and empower teenagers, by teenagers, to recognize, speak up and change anti-Semitic curriculum in their schools, community and online.  \n"
        />
        <meta property="og:title" content="Resources - FAIS IT" />
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
          href="https://togthr-template-ahbaic-gilads-projects-6e9fe709.vercel.app/resources"
        />
      </Helmet>
      <section className="resources-thq-hero-elm">
        <Header
          text={
            <Fragment>
              <span className="resources-text100">About</span>
            </Fragment>
          }
          login={
            <Fragment>
              <span className="resources-text101">Get Involved</span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="resources-text102">Resources</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="resources-text103">Get Involved</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="resources-text104">Need Help</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="resources-text105">Donate</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="resources-text106">Contact</span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="resources-text107">FAIS IT</span>
            </Fragment>
          }
          text8={
            <Fragment>
              <span className="resources-text108">News</span>
            </Fragment>
          }
          text61={
            <Fragment>
              <span className="resources-text109">FAIS IT</span>
            </Fragment>
          }
          register={
            <Fragment>
              <span className="resources-text110">Donate Now</span>
            </Fragment>
          }
        ></Header>
        <video
          src="https://videos.pexels.com/video-files/6214666/6214666-hd_2048_1080_25fps.mp4"
          loop
          muted
          poster="https://images.pexels.com/videos/6214666/pictures/preview-0.jpg"
          preload="auto"
          autoPlay
          playsInline
          className="resources-video"
        ></video>
        <div className="resources-thq-hero-content-elm">
          <div className="resources-thq-header-container-elm">
            <div className="resources-thq-header-elm">
              <h1 className="resources-thq-heading-elm">Resources</h1>
            </div>
            <p className="resources-thq-caption-elm">
              Our mission is to educate and empower teenagers, by teenagers, to
              recognize, speak up and change anti-Semitic curriculum in their
              schools, community and online.  
            </p>
          </div>
          <Link to="/contact" className="resources-navlink button">
            <span>Get Involved</span>
          </Link>
        </div>
      </section>
      <div className="resources-thq-body-elm">
        <span className="resources-text112">
          <span className="resources-text113">Educational Materials:</span>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="resources-text115">
            Explore our collection of resources designed to help you recognize
            and address antisemitism in your school. From guides on identifying
            biased curriculum to toolkits for effective advocacy, we provide the
            knowledge you need to make a difference.
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
          <span className="resources-text119">Downloadable Guides:</span>
          <br></br>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="resources-text122">
            Recognizing Antisemitism in Curriculum
          </span>
          <br className="resources-text123"></br>
          <span className="resources-text124">
            How to Approach School Officials
          </span>
          <br className="resources-text125"></br>
          <span className="resources-text126">Creating a Support Network</span>
          <br></br>
          <br></br>
          <span className="resources-text129">Curriculum Review Tools:</span>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="resources-text131">
            Use our curriculum review tools to assess the materials being taught
            in your school. Share your findings with parents and community
            organizations to initiate meaningful discussions about educational
            content.
          </span>
        </span>
        <div className="resources-container2">
          <span className="resources-text132">Hadassah</span>
          <span className="resources-text133">
            Israel and Zionist education
          </span>
          <a
            href="https://my.hadassah.org/myhadassah/resources/zionist-israel-education.html?t"
            target="_blank"
            rel="noreferrer noopener"
            className="resources-link10"
          >
            LINK
          </a>
          <span className="resources-text134">From the River Explainer</span>
          <span className="resources-text135">ADL</span>
          <a
            href="https://my.hadassah.org/myhadassah/resource-files/zionist-education/additional-programs/from- the-river-explainer.pdf"
            target="_blank"
            rel="noreferrer noopener"
            className="resources-link11"
          >
            LINK
          </a>
          <span className="resources-text136">Israel in the Curriculum</span>
          <a
            href="https://www.adl.org/resources/tools-and-strategies/israel-curriculum"
            target="_blank"
            rel="noreferrer noopener"
            className="resources-link12"
          >
            LINK
          </a>
          <span className="resources-text137">
            Report an antisemitic, biased, or discriminatory incident
          </span>
          <a
            href="https://www.adl.org/report-incident"
            target="_blank"
            rel="noreferrer noopener"
            className="resources-link13"
          >
            LINK
          </a>
          <span className="resources-text138">
            <span>
              Helpline: free legal advice for MA,
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>NY parents whose K-12 children experience</span>
            <br></br>
            <span>antisemitism on school</span>
            <br></br>
          </span>
          <a
            href="https://www.adl.org/resources/press-release/adl-brandeis-center-standwithus-launch-antisemitism-helpline-ma-and-ny-k-12"
            target="_blank"
            rel="noreferrer noopener"
            className="resources-link14"
          >
            LINK
          </a>
          <span className="resources-text145">Stand With Us</span>
          <span className="resources-text146">
            Israel’s Story &amp; Zionism
          </span>
          <a
            href="https://www.standwithus.com/israels-story-and-zionism"
            target="_blank"
            rel="noreferrer noopener"
            className="resources-link15"
          >
            LINK
          </a>
          <span className="resources-text147">
            <span>Combating Antisemitism in High Schools</span>
            <br></br>
          </span>
          <a
            href="https://www.standwithus.com/hs-education-activism"
            target="_blank"
            rel="noreferrer noopener"
            className="resources-link16"
          >
            LINK
          </a>
          <span className="resources-text150">
            <span>Resources to address</span>
            <br></br>
            <span> the Hamas-Israel war in the classroom</span>
            <br></br>
          </span>
          <a
            href="https://www.flipsnack.com/59DEA577C6F/israel-resources/full-view.html"
            target="_blank"
            rel="noreferrer noopener"
            className="resources-link17"
          >
            LINK
          </a>
          <span className="resources-text155">
            <span>AJC – American Jewish Committee</span>
            <br></br>
          </span>
          <span className="resources-text158">
            <span>Toolkit for Parents of Jewish Middle</span>
            <br></br>
            <span> and High School Students</span>
            <br></br>
          </span>
          <a
            href="https://www.ajc.org/ConfrontingAntisemitismToolkitParents"
            target="_blank"
            rel="noreferrer noopener"
            className="resources-link18"
          >
            LINK
          </a>
          <span className="resources-text163">
            <span>AJC Educational Programs for Middle</span>
            <br></br>
            <span> and High School Spaces</span>
          </span>
          <a
            href="https://AJC Educational Programs for Middle and High School Spaces"
            target="_blank"
            rel="noreferrer noopener"
            className="resources-link19"
          >
            LINK
          </a>
          <span className="resources-text167">Antisemitism</span>
          <a
            href="https://www.ajc.org/issues/antisemitism"
            target="_blank"
            rel="noreferrer noopener"
            className="resources-link20"
          >
            LINK
          </a>
          <span className="resources-text168">
            <span>ICS (Institute for Curriculum Services)</span>
            <br></br>
          </span>
          <span className="resources-text171">Israel-Hamas War resources</span>
          <a
            href="https://icsresources.org/israel-hamas-war-resources/"
            target="_blank"
            rel="noreferrer noopener"
            className="resources-link21"
          >
            LINK
          </a>
          <span className="resources-text172">
            <span>
              Learning for Justice
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>(formerly Teach Tolerance)</span>
            <br></br>
          </span>
          <span className="resources-text177">Resisting hate in education</span>
          <a
            href="https://www.learningforjustice.org/the-learning- center/resisting-hate-in-education"
            target="_blank"
            rel="noreferrer noopener"
            className="resources-link22"
          >
            LINK
          </a>
          <span className="resources-text178">
            <span>Resources for educators and families</span>
            <br></br>
            <span> to discuss the events in Israel and Gaza with</span>
            <br></br>
            <span>Students</span>
            <br></br>
          </span>
          <a
            href="https://www.learningforjustice.org/the-learning- center/resisting-hate-in-education"
            target="_blank"
            rel="noreferrer noopener"
            className="resources-link23"
          >
            LINK
          </a>
        </div>
      </div>
      <Footer
        text={
          <Fragment>
            <span className="resources-text185">
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
            <span className="resources-text186">About</span>
          </Fragment>
        }
        text3={
          <Fragment>
            <span className="resources-text187">Contact</span>
          </Fragment>
        }
        text4={
          <Fragment>
            <span className="resources-text188">Get Involved</span>
          </Fragment>
        }
        text6={
          <Fragment>
            <span className="resources-text189">News</span>
          </Fragment>
        }
        text7={
          <Fragment>
            <span className="resources-text190">Articles</span>
          </Fragment>
        }
        text8={
          <Fragment>
            <span className="resources-text191">Blog</span>
          </Fragment>
        }
        text9={
          <Fragment>
            <span className="resources-text192">Privacy</span>
          </Fragment>
        }
        header={
          <Fragment>
            <span className="resources-text193">Organization</span>
          </Fragment>
        }
        text10={
          <Fragment>
            <span className="resources-text194">Terms</span>
          </Fragment>
        }
        text11={
          <Fragment>
            <span className="resources-text195">Legal</span>
          </Fragment>
        }
        text12={
          <Fragment>
            <span className="resources-text196">Press</span>
          </Fragment>
        }
        text13={
          <Fragment>
            <span className="resources-text197">LinkedIn</span>
          </Fragment>
        }
        text14={
          <Fragment>
            <span className="resources-text198">Twitter</span>
          </Fragment>
        }
        text15={
          <Fragment>
            <span className="resources-text199">Instagram</span>
          </Fragment>
        }
        text16={
          <Fragment>
            <span className="resources-text200">Facebook</span>
          </Fragment>
        }
        text17={
          <Fragment>
            <span className="resources-text201">TikTok</span>
          </Fragment>
        }
        text31={
          <Fragment>
            <span className="resources-text202">Donate</span>
          </Fragment>
        }
        text41={
          <Fragment>
            <span className="resources-text203">Need Help</span>
          </Fragment>
        }
        text61={
          <Fragment>
            <span className="resources-text204">FAIS IT</span>
          </Fragment>
        }
        header1={
          <Fragment>
            <span className="resources-text205">Extern</span>
          </Fragment>
        }
        header2={
          <Fragment>
            <span className="resources-text206">Social</span>
          </Fragment>
        }
        rootClassName="footerroot-class-name4"
      ></Footer>
    </div>
  )
}

export default Resources
