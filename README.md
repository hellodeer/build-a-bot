## About this project.

This build-a-bot project is the result of the Pluralsight course [Vue.js Fundamentals](https://app.pluralsight.com/library/courses/vuejs-fundamentals/) by [Jim Cooper](https://app.pluralsight.com/profile/author/jim-cooper).

The production build of this course can be used with Jim's [build-a-bot-server](https://github.com/jmcooper/build-a-bot-server) project (an express web server project) that he provides in the course.

### To make the build-a-bot run under the build-a-bot-server.

* Create a production build
Standing at the root of the build-a-bot project run the command: `npm run build`
This will create a dist folder, containing the production build, under your project.

* Copy that dist folder to the root of the buld-a-bot-server project.

#### Make these changes to the build-a-bot-server project

* Install npm package connect-history-api-fallback
`npm install --save connect-history-api-fallback`

_This needs to be done for deep linking to work (so the user may be sent to specific page within the app via the url) due to the build-a-bot app running under HTML5 history mode._

* Modify index.js

You need to add three lines of code
This one at row 3:
`const history = require("connect-history-api-fallback");`

This one at row 7:
`app.use(history());`

and just above the last line `app.listen(8081, () => console.log("Server listening on port 8081!"));`

you add the following: 
`app.use("/", express.static("dist", { index: "index.html" }));`

* Start the server: `npm start`

Hopefully you will be able to try out the app in your web browser on address: http://localhost:8081/
