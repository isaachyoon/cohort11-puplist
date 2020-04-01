import React from 'react';
import './Pup.css';

class Pup extends React.Component {
  render() {
    return (
      <div className="pup">
        <img src={this.props.pupInfo.imageUrl} alt='dog face'/>
        <strong>{this.props.pupInfo.name}</strong>
        <button onClick={() => this.props.incrementLikes(
            this.props.pupInfo.id
          )}>{this.props.pupInfo.likes} Likes</button>
        <p>age: {this.props.pupInfo.age}</p>
        <p>{this.props.pupInfo.description}</p>
      </div>
    )
  }
}

Pup.defaultProps = {
  pupInfo: {
    name: 'TBD',
    age: '3',
    description: 'some description',
    imageUrl: "https://source.unsplash.com/mx0DEnfYxic/300x300"
  }
}

export default Pup;