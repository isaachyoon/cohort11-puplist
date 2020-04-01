import React from 'react';
import './PupList.css';
import Pup from '../Pup/Pup';

function PupList(props) {
  
  const pupList = props.pupData.map(pup => 
    <Pup 
      incrementLikes={props.incrementLikes}
      pupInfo={pup}
      key={pup.id}
    />
  );

  return (
    <div>
      <h3>Pup List</h3>
      <div className="container">
        {pupList}
      </div>
    </div>
  )
}



export default PupList;