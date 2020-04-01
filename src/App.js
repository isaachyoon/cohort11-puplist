import React from 'react';
import './App.css';
import PupList from './PupList/PupList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pupData: [
        {
          name: "Steve",
          imageUrl: "https://source.unsplash.com/mx0DEnfYxic/300x300",
          age: 5,
          description: "Lorem ipsum dolor sit amet",
          id: 1,
          likes: 0
        },
        {
          name: "Chip",
          imageUrl: "https://source.unsplash.com/v3-zcCWMjgM/300x300",
          age: 3,
          description: "consectetur adipiscing elit",
          id: 2,
          likes: 0
        },
        {
          name: "Banjo",
          imageUrl: "https://source.unsplash.com/JU5ewSjt8Yw/300x300",
          age: 2,
          description: "Sed do eiusmod tempor incididunt ut ",
          id: 3,
          likes: 0
        },  
        {
          name: "Flip",
          imageUrl: "https://source.unsplash.com/NKN25UfGfkQ/300x300",
          age: 6,
          description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco",
          id: 4,
          likes: 0
        }
      ]
    }
  }

  incrementLikes = (id) => {

    // this.setState({
    //   likes: this.state.likes + 1
    // })
    console.log('this pup has id of ', id);
  }
  
  render() {
    return (
      <div className="App">
        <PupList 
          pupData={this.state.pupData}
          incrementLikes={this.incrementLikes}
        />
      </div>
    );
  }
}

export default App;
