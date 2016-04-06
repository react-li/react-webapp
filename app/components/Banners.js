import React, { Component, PropTypes } from 'react'
import Slider from 'react-slick'

export default class Banners extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    // data [Array]
    const data = this.props.data
    // settings [Object]
    const settings = {
      dots: true,
      // dotsClass: 'dotsClass',
      arrows: false,
      // adaptiveHeight: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000
    }
    // class [Object]
    const bannersStyle = {
      width: '100%',
      height: 'auto'
    }
    return (
      <div>
        <Slider {...settings}>
          {
            data.map((item,index)=>{
              return (
                <div key={index}>
                  <img style={bannersStyle}
                       src={item.src} />
                </div>
              )
            })
          }
        </Slider>
      </div>
    )
  }
}

Banners.propTypes = {
  data: PropTypes.array.isRequired
}