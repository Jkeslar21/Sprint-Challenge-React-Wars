import React, { Component } from 'react';

class CharInfo extends Component {
  render() {
    return (
        <div className='charCard'>
          <div className='charText'>
            <strong>Name:</strong> {this.props.char.name}<br />
            <strong>Hair Color:</strong> {this.props.char.hair_color}<br />
            <strong>Eye Color:</strong> {this.props.char.eye_color}<br />
            <strong>Gender:</strong> {this.props.char.gender}<br />
          </div>
        </div>
    );
  }
}

export default CharInfo;
