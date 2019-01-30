# coderland-photo-store

This is a React.js application that is part of the CoderLand project. This application uses your computer camera to allow you to take a snapshot. The snapshot is then sent to a service that overlays the photo, and the result is sent back to this application and displayed.

To run this demo, you'll need to point it to a service that accepts a JPEG picture as a base64 string in a JSON document and returns a base64 string (for the updated image) in a JSON document.

coderland-overlay-image is the service that is used with this application. It is run as an OpenWhisk Web Action in OpenShift.

There are options for running this program:

1. Run it from the command line
    * npm install
    * npm starr
2. Run it in a Linux container
    * docker build -t coderland .
    * docker run -p 3000:3000 coderland
3. Run it in OpenShift

