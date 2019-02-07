import React from "react"
import Webcam from "react-webcam"

class ProcessImage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      overlaidImage: null,
      resultsHidden: true,
      imgsrc: null
    }
  }

  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = () => {
    document.getElementById("pictureButton").disabled=true;
    this.setState({
      imgsrc: this.getOverlay(this.webcam.getScreenshot()),
      resultsHidden: false
    })
  }

  render() {
    const videoConstraints = {
      facingMode: "user"
    };

    return (
      <div>
        <Webcam
          audio={false}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
        />
        <br/>
        <br/>
        <p><button id='pictureButton' className='Button' onClick={this.capture}>TAKE PICTURE</button></p>
        {!this.state.resultsHidden && <img src={this.state.imgsrc} />}
      </div>
    );
  }
  getOverlay = (original) => {

    var base64result = original.split(',')[1];

    // Set up URI
    const url = process.env.REACT_APP_OVERLAY_URL

    // Call FaaS here
    try {
      const nodefetch = require('node-fetch')
        nodefetch(url, {
          timeout: 10000,
          method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          imageData: base64result,
          imageType: 'jpg',
          greeting: process.env.REACT_APP_OVERLAY_MESSAGE,
          dateFormatString: 'MMMM d, yyyy',
          language: 'en',
          location: 'US'
        }),
      })
        .then(response => response.json())
        .then((responseJson) => {
          this.setState({
            imgsrc: "data:image/jpeg;base64," + responseJson.imageData
          })
          document.getElementById("pictureButton").disabled=false;
        })
      }
    catch (error) {
        return(error)
    }
  }
}

export default ProcessImage;