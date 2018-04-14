 import React from 'react';


class Fill extends React.Component {
  showSettings (event) {
    event.preventDefault();
    
  }

  render () {
    return (
        <div id="fillDiv">
        <p><b>'You must understand that there is more than one path to the top of the mountain.'  <u>Miyamoto Musashi</u></b></p>
        </div>
    );
  }
}

export default Fill;