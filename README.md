# coderland-photo-store

This is a React.js application that is part of the CoderLand project. This application uses your computer camera to allow you to take a snapshot. The snapshot is then sent to a service that overlays the photo, and the result is sent back to this application and displayed.

To run this demo, you'll need to point it to a service that accepts a JPEG picture as a base64 string in a JSON document and returns a base64 string (for the updated image) in a JSON document.

coderland-overlay-image is the service that is used with this application. It is run as an OpenWhisk Web Action in OpenShift.

## ENVIRONMENT VARIABLES  
* You must set the REACT_APP_OVERLAY_URL environment variable to point to the service that does the image overlay.  
* You must set the REACT_APP_OVERLAY_MESSAGE environment variable. This is the message that appears on the photo, e.g. "Hello from Coderland!"

There are options for running this program:

1. Run it from the command line
    * `npm install`
    * `REACT_APP_OVERLAY_URL=http://myservice-myproject.mydomain.com REACT_APP_OVERLAY_MESSAGE='Hello from Coderland!' npm start`
2. Run it in a Linux container
    * `docker build -t coderland .`
    * `docker run -p 3000:3000 -e REACT_APP_OVERLAY_URL http://myservice-myprojecct.mydomain.com -e REACT_APP_OVERLAY_MESSAGE 'Hello from Coderland!' coderland`
    * Open browser to `localhost:3000`
3. Run it in OpenShift

