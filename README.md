# New Front Door recruitment test

Thanks for taking the time to do our front-end / full-stack coding test. The challenge has two parts:

1) a [task](#task) to create a basic sermon finder front-end, using our [back-end API](#api) fixture data

2) some [follow-up questions](./FOLLOW-UP.md)

----

Feel free to spend as much or as little time as you'd like, as long as the following have been met:

* Your implementation works as described in the [task](#task), retrieving results from [the API](#api).

* Your solution looks like the provided [design](#design), though this is less important for this test.

* Optionally, you may add tests to this project, as long as they pass.

----
## Task

- Use our test fixture data to show a page that will show a list of sermons and allow searching of those sermons by title, sermon series or preacher. 

- We've provided a basic API client in Node.js - see the API section below. You can build this out, copy from it, or roll your own.

- Use the returned data to display a page of results that matches the given design.

- You will need to deal appropriately with the following scenarios:
  - Ensure that dates are rendered appropriately:
    - They should be rendered as Day of week, Date, Year (ie. Friday, 14 June, 2024)
  - Sermons should play in the list.  We've included react-audio-play as a package to assist you, but you can use a different library if you wish
  - Searching should only occur with 3 characters in the search field, and should be **throttled** to prevent excessive requests to the API.
  - Searching should be on Sermon Series, Title or Preacher.  You should consider the most logical way (from a user's perspective) to implement this searching.

-- 

## Design

We've provided a basic [design](./designs/recruitment-test-design.png). Don't worry about tackling larger or smaller screens, but **please make sure your solution looks right in portrait orientation**.

The vertical dots (three dots) in the mockup aren't part of the mockup, they are simple ellipses to show that more branches and agents would be shown.

The design shows a look and feel defined by [Material UI](https://mui.com/material-ui/getting-started/). Feel free to continue using Material UI, or switch to your preferred component framework.

**NB:** You don't have to use Material UI's components -- picking colours from the image and/or rolling your own css to save time is absolutely fine.

## Client implementation

We'd like you to use [React](https://facebook.github.io/react/). On top of that, use whatever front-end libraries you feel comfortable with.

We've set you up with a build based on Facebook's [create-react-app](https://create-react-app.dev/).

For full details on Material UI's system, including components and styles that you can use, check [here](https://mui.com/material-ui/all-components/) and [here](https://mui.com/material-ui/customization/theming/).

## API

We're not hitting a real API in this test, but are using some [fixture data](./server/src/fixture-sermon-data) to demonstrate the kind of data you might get from an API, we've also provided a basic - but incomplete - Node.js server to make things easier for you.

The [`server.js`](./server/src/server.js) file starts an [Express](https://expressjs.com/) server with a couple of routes. To run the server separately, run `npm run server` from the base directory after running `npm install`.

**NB:** If you'd prefer not to use Node.js, that's fine. Feel free to copy from it, or roll your own.

**NB:** You should ensure the [http://localhost:4000/api/sermon/search](http://localhost:4000/api/sermon/search) route accepts parameters from your front end, and returns results to the front end in an appropriate format.

The API contains sermon data of from one our clients [Uni Fellowship of Christian](www.ufcutas.org):

## Running the project

## Prerequisites/Environment Setup
- Install docker
- Install [volta](https://volta.sh) to help manage node and npm dependencies
- **Note:** You can do this test without installing volta, but you will need to make sure node versions are correct.  Node is support at 20.14.0 and npm is supported at 10.8.1.  Trying to run with more recent versions of Node will likely not work.  Docker will automatically run with those versions.
- Install node/npm
- Run `npm install` at the root directory of the project

The project is configured to run in [Docker](https://docs.docker.com/get-started/) using [Docker Compose](https://docs.docker.com/compose/gettingstarted/) to connect the client and server containers.

- `docker-compose up --build`

**Note:** If you are using an ARM64 Mac (M1,M2,M3), you may have a problem with running docker (to do with node-sass), and you will need to either use a different computer to complete the test, or use the below method to run the project (npm run client and npm run server).  In your submission, please state that this is the case.

Feel free to develop the project as you want (in or out of Docker), but please ensure that the project works as expected inside Docker when you're ready to submit.

To run the client and server separately, use:
 * `npm run client` to run the client, which will be available on http://localhost:3000/
 * `npm run server` to run the server, which will be available on http://localhost:4000/

**Use either the docker container method or run the client and server separately**

Any problems getting started, feel free to contact me at [christian@newfrontdoor.org](mailto:christian@newfrontdoor.org).

## Submission Guidelines

* Please submit your program by sending a zip file to your New Front Door contact [christian@newfrontdoor.org](mailto:christian@newfrontdoor.org) or uploading the zip file to a place like Google Drive or similar and sending a link (this will help avoid spam filters).

* The zip file should be named {yourname}.zip, and should itself contain the nfd-recruitment-test project folder with your submission.

* The zip file should contain the [FOLLOW-UP.md](./FOLLOW-UP.md) file with answers to the follow-up questions.

* The zip file should **not** include any `node_modules` folders.

* Please let your New Front Door contact know when you've uploaded your solution.

----

Inspiration for the test format taken with ❤️ from [Healthcare Software's](https://healthcaresoftware.com.au/) recruitment test, which was inspired by [JustEat's recruitment test](https://github.com/justeat/JustEat.RecruitmentTest) and [Skyscanner's full stack recruitment test](https://github.com/skyscanner/full-stack-recruitment-test).
