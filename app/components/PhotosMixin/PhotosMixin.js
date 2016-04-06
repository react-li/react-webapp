import React, { Component, PropTypes } from 'react'

class PhotosMixin extends Component {
  constructor(props) {
    super(props)
  }
  renderItem(props) {
    // props
    const {boxSize} = this.props

    // arr limit length
    const limiTo = this.props.limiTo || 9

    // limit end
    const photos = this.props.photos.length > limiTo
                 ? this.props.photos.slice(0, limiTo)
                 : this.props.photos

    // tr td
    const _length = photos.length <= limiTo
                  ? Math.ceil(Math.sqrt(photos.length))
                  : 3

    // item width
    const itemSize = boxSize/_length

    // first child margin top
    const mTop = 
    (photos.length % _length === 0 || photos.length < _length * (_length - 1)) && photos.length != _length * _length
               ? itemSize/2
               : 0

    const boxStyle = {
      width: itemSize,
      height: itemSize,
      display: 'inline-block',
    }
    const imgStyle = {
      width: `${itemSize - 5}px`,
      height: `${itemSize - 5}px`,
      borderRadius: '10%',
      marginTop: `${5/2}px`
    }
    return (
      props.map((item,index)=>{
        if (index <= limiTo - 1) {
          const style = index === 0
                      ? {...imgStyle,marginTop: `${mTop}px`}
                      : imgStyle
          return (
            <div key={index}
                 style={boxStyle}>
              <img src={item.imgUrl}
                   style={style} />
            </div>
          )
        }
      })
    )
  }
  render() {
    const {photos,boxSize} = this.props
    const style = {
      position: 'relative',
      width: boxSize,
      height: boxSize,
      textAlign: 'center',
      background: '#E5E5E5',
      overflow: 'hidden'
    }
    return (
      <div style={style}>
        {this.renderItem(photos)}
      </div>
    )
  }
}

PhotosMixin.propTypes = {
  photos: PropTypes.array.isRequired,
  boxSize: PropTypes.number.isRequired,
  limiTo: PropTypes.number
}

module.exports = PhotosMixin