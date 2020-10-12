import {
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'
import './Die.css'

class Die extends Component {
  render() {
    let face
    if (this.props.face == 'One') {
      face = faDiceOne
    } else if (this.props.face == 'Two') {
      face = faDiceTwo
    } else if (this.props.face == 'Three') {
      face = faDiceThree
    } else if (this.props.face == 'Four') {
      face = faDiceFour
    } else if (this.props.face == 'Five') {
      face = faDiceFive
    } else {
      face = faDiceSix
    }
    return <FontAwesomeIcon className={`Die ${this.props.rolling ? 'Die-roll' : ''}`} icon={face} />
  }
}

export default Die
