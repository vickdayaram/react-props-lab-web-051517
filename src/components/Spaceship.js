// Code The Spaceship Component Here

import React from 'react';

class Spaceship extends React.Component {

  render(){
    return (
      <div>
        <h1> Name </h1>
        <h4>{this.props.name}</h4>
        <h1> Speed </h1>
        <h4>{this.props.speed}</h4>
        <h1> Rockets? </h1>
        <h4>{this.props.hasRockets}</h4>
        <h1> Colors </h1>
        <ul>{this.props.colors.map((color) => React.createElement('li', {}, color))}</ul>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}

export default Spaceship;
