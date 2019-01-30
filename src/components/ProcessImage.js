import React from "react";
import Webcam from "react-webcam";

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
    this.setState({
      imgsrc: this.getOverlay(this.webcam.getScreenshot()),
      resultsHidden: false
    })
  }

  render() {
    const videoConstraints = {
      width: 720,
      height: 1280,
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
        <p><button onClick={this.capture}>Take Picture</button></p>
        {!this.state.resultsHidden && <img src={this.state.imgsrc} />}
      </div>
    );
  }
  getOverlay = (original) => {
    // Call FaaS here

    var base64result = original.split(',')[1];

    // Set up URI
    const url = 'http://localhost:8080/overlayImage'

    fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        imageData: base64result,
        imageType: 'jpg',
        greeting: 'Hello from Coderland!',
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
      })
  }
}

export default ProcessImage;