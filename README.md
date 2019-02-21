# Coderland Photo Store

This is a React.js application that is part of an interactive Knative and serverless tutorial called the [Compile Driver](https://developers.redhat.com/coderland/serverless/), a ride at an imaginary theme park called Coderland. This application uses your computer camera to allow you to take a snapshot. The snapshot is then sent to a service that overlays the photo, and the result is sent back to this application and displayed.

To run this demo, you'll need to point it to a service that accepts a JPEG picture as a base64 string in a JSON document and returns a base64 string (for the updated image) in a JSON document.

image-overlay is the service that is used with this application. It is run as a Knative service in OpenShift.

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

:notebook: [Knative Tutorial Docs](https://redhat-developer-demos.github.io/knative-tutorial/knative-tutorial/dev/index.html)

:gift: [Knative Tutorial repo](https://bit.ly/knative-tutorial)

### Part 1: Introduction to Serverless with Knative

:page_facing_up: [ARTICLE: Part 1: Introduction to Serverless with Knative](https://developers.redhat.com/coderland/serverless/serverless-knative-intro/)

:clapper: [VIDEO: Part 1: Introduction to Serverless with Knative](https://youtu.be/R8PGrhfVWTc)

:gift: [REPO: Image overlay](https://github.com/redhat-developer-demos/image-overlay)

### Part 2: Building a Serverless Service

:page_facing_up:[ARTICLE: Part 2: Building a Serverless Service](https://developers.redhat.com/coderland/serverless/building-a-serverless-service/)

:clapper: [VIDEO: Part 2: Building a Serverless Service](https://youtu.be/M_Xse7vjkvE)

:gift: [REPO: Photo store](https://github.com/redhat-developer-demos/coderland-photo-store)

### Part 3: Deploying a Serverless Service to Knative

:page_facing_up:[ARTICLE: Part 3: Deploying a Serverless Service to Knative](https://developers.redhat.com/coderland/serverless/deploying-serverless-knative/)

:clapper: [VIDEO: Part 3: Deploying a Serverless Service to Knative](https://youtu.be/AR4fqwFLn9I)

:gift: [REPO: Knative proxy](https://github.com/redhat-developer-demos/knative-proxy)

***

Coderland :roller_coaster::rocket::ferris_wheel: is a place for learning. Developer Training and Red Hat Software: [Red Hat Developer](https://developers.redhat.com).
