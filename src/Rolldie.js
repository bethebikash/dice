import React, { Component } from 'react'
import Die from './Die'
import './Rolldie.css'

class Rolldie extends Component {
  static defaultProps = {
    sides: ['One', 'Two', 'Three', 'Four', 'Five', 'Six'],
  }
  constructor(props) {
    super(props)
    this.state = {
      die1: 'One',
      die2: 'One',
      rolling: false,
    }
    this.roll = this.roll.bind(this)
  }

  roll() {
    const newDie1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
    const newDie2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
    this.setState({
      die1: newDie1,
      die2: newDie2,
      rolling: true,
    })

    setTimeout(() => {
      this.setState({
        rolling: false,
      })
    }, 1000)
  }

  render() {
    return (
      <div className="Rolldice">
        <div className="Rolldice-wraper">
          <Die face={this.state.die1} rolling={this.state.rolling} />
          <Die face={this.state.die2} rolling={this.state.rolling} />
        </div>
        <button onClick={this.roll} disabled={this.state.rolling}>
          {this.state.rolling ? 'Rolling..' : 'Role Dice!'}
        </button>
      </div>
    )
  }
}

export default Rolldie
