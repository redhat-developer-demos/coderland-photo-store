# Coderland Photo Store

This is a React.js application that is part of an interactive Knative and serverless tutorial called the [Compile Driver](https://developers.redhat.com/compile-driver/), a ride at an imaginary theme park called Coderland. This application uses your computer camera to allow you to take a snapshot. The snapshot is then sent to a service that overlays the photo, and the result is sent back to this application and displayed.

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

## IMPORTANT LINKS

:notebook: [Knative Tutorial](https://redhat-developer-demos.github.io/knative-tutorial/knative-tutorial/dev/index.html)

:gift: [GitHub repo - Image overlay](https://github.com/redhat-developer-demos/image-overlay)

:gift: [GitHub repo - Photo store](https://github.com/redhat-developer-demos/coderland-photo-store)

:gift: [GitHub repo - Knative proxy](https://github.com/redhat-developer-demos/knative-proxy)

:package: [Docker image](https://cloud.docker.com/repository/docker/dougtidwell/imageoverlay)

:clapper: [VIDEO: Serverless Computing Tutorial - Introduction (Part 1)](https://youtu.be/R8PGrhfVWTc)

:clapper: [VIDEO: Serverless Computing Tutorial - The Service (Part 2)](https://youtu.be/M_Xse7vjkvE)

:clapper: [VIDEO: Serverless Computing Tutorial - Deploying to Knative (Part 3)](https://youtu.be/AR4fqwFLn9I)


***

Coderland :roller_coaster::rocket::ferris_wheel: is a place for learning, brought to you by the [Red Hat Developer](https://developers.redhat.com) program.
