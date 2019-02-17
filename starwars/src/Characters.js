import React, { Component } from 'react';
import CharInfo from './CharInfo';

class Characters extends Component {
  render() {
    return this.props.chars.map( char => (
        <CharInfo key={char.created} char={char} />
    ));
  }
}

export default Characters;
