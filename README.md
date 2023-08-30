
#### Simple App "Nodejs"

This app starts a server and listens on port 3000 for connections. The app responds with “You Did it!” for requests to the root URL (/) or route. For every other path, it will respond with a 404 Not Found.

The example above is actually a working server: Go ahead and click on the URL shown. You’ll get a response, with real-time logs on the page, and any changes you make will be reflected in real time. This is powered by RunKit, which provides an interactive JavaScript playground connected to a complete Node environment that runs in your web browser. Below are instructions for running the same app on your local machine.


####App.js code

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

######Running Locally
First create a directory named myapp, change to it and run npm init. Then install express as a dependency, 
In the myapp directory, create a file named app.js and copy in the code from the example above “node js code.

######Installation
Assuming you’ve already installed Node.js, create a directory to hold your application, and make that your working directory.

-  mkdir myapp
-  cd myapp

Use the for more information on how package.json works, see Specifics of npm’s package.json handling.
- npm init

This command prompts you for a number of things, such as the name and version of your application. 

For now, you can simply hit RETURN to accept the defaults for most of them, with the following exception:
entry point: (index.js)
Enter app.js, or whatever you want the name of the main file to be. 
If you want it to be index.js, hit RETURN to accept the suggested default file name.

######Now install Express in the myapp directory and save it in the dependencies list. For example:

- npm install express

To install Express temporarily and not add it to the dependencies list:
- npm install express --no-save


Run the app with the following command:
##### node app.js
Then, load http://localhost:3000/ in a browser to see the output.
