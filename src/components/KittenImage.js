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
import kitten11 from './../assets/kitten11.jpg'

const getKittenImage = kittenLevel => {
  if (kittenLevel < 1) {
    return kitten01
  }
  if (kittenLevel < 2) {
    return kitten02
  }
  if (kittenLevel < 3) {
    return kitten03
  }
  if (kittenLevel < 4) {
    return kitten04
  }
  if (kittenLevel < 5) {
    return kitten05
  }
  if (kittenLevel < 6) {
    return kitten06
  }
  if (kittenLevel < 7) {
    return kitten07
  }
  if (kittenLevel < 8) {
    return kitten08
  }
  if (kittenLevel < 9) {
    return kitten09
  }
  if (kittenLevel < 10) {
    return kitten10
  }
  return kitten11
}

class KittenImage extends Component {
  render() {
    const { onClick, kittenLevel } = this.props
    return <img src={getKittenImage(kittenLevel)} onClick={onClick} className="kitten-image" alt="Kitten" />
  }
}

export default KittenImage