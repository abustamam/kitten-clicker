import React, { Component } from 'react'
import kitten01 from './../assets/kitten01.jpg'
import kitten02 from './../assets/kitten02.jpg'
import kitten03 from './../assets/kitten03.png'
import kitten04 from './../assets/kitten04.png'
import kitten05 from './../assets/kitten05.jpg'
import kitten06 from './../assets/kitten06.jpg'
import kitten07 from './../assets/kitten07.jpg'
import kitten08 from './../assets/kitten08.jpg'
import kitten09 from './../assets/kitten09.jpg'
import kitten10 from './../assets/kitten10.png'
import kitten11 from './../assets/kitten06.jpg'


class KittenImage extends Component {
  render() {
    const { onClick } = this.props
    return <img src={kitten01} onClick={onClick} className="kitten-image" alt="Kitten" />
  }
}

export default KittenImage