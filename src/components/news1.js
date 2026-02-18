import React from 'react'

import PropTypes from 'prop-types'

import './news1.css'

const News1 = (props) => {
  return (
    <section className={`news1-thq-news-elm ${props.rootClassName} `}>
      <div className="news1-thq-previous-elm banner-smaller banner"></div>
      <div className="banner news1-thq-current-elm">
        <div className="news1-thq-controls-elm swiper-pagination">
          <span
            role="button"
            tabindex="0"
            aria-label="Go to slide 1"
            className="swiper-pagination-bullet"
          ></span>
          <span
            role="button"
            tabindex="0"
            aria-label="Go to slide 2"
            className="swiper-pagination-bullet-active swiper-pagination-bullet"
          ></span>
          <span
            role="button"
            tabindex="0"
            aria-label="Go to slide 3"
            className="swiper-pagination-bullet"
          ></span>
          <span
            role="button"
            tabindex="0"
            aria-label="Go to slide 4"
            className="swiper-pagination-bullet"
          ></span>
          <span
            role="button"
            tabindex="0"
            aria-label="Go to slide 5"
            className="swiper-pagination-bullet"
          ></span>
        </div>
      </div>
      <div className="news1-thq-next-elm banner-smaller banner"></div>
    </section>
  )
}

News1.defaultProps = {
  rootClassName: '',
}

News1.propTypes = {
  rootClassName: PropTypes.string,
}

export default News1
